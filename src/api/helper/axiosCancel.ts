import axios, { AxiosRequestConfig, Canceler } from 'axios';
import qs from 'qs';
import { isFunction } from '@u/is';

let pendingMap = new Map<string, Canceler>();

export const getPendingUrl = (config: AxiosRequestConfig) =>
	[
		config.method,
		config.url,
		qs.stringify(config.params),
		qs.stringify(config.data)
	].join('&');

class AxiosCanceler {
	addPending(config: AxiosRequestConfig) {
		this.removePending(config);
		const url = getPendingUrl(config);
		config.cancelToken =
			config.cancelToken ||
			new axios.CancelToken((cancel) => {
				if (!pendingMap.has(url)) {
					// 如果 pending 中不存在当前请求，则添加进去
					pendingMap.set(url, cancel);
				}
			});
	}

	removePending(config: AxiosRequestConfig) {
		const url = getPendingUrl(config);

		if (pendingMap.has(url)) {
			// 如果在 pending 中存在当前请求标识，需要取消当前请求，并且移除
			const cancel = pendingMap.get(url);
			cancel && isFunction(cancel) && cancel();
			pendingMap.delete(url);
		}
	}

	/**
	 * @description: 清空所有pending
	 */
	removeAllPending() {
		pendingMap.forEach((cancel) => {
			cancel && isFunction(cancel) && cancel();
		});
		pendingMap.clear();
	}

	/**
	 * @description: 重置
	 */
	reset(): void {
		pendingMap = new Map<string, Canceler>();
	}
}

export const axiosCanceler = new AxiosCanceler();
