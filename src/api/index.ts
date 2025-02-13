import axios, {
	AxiosError,
	AxiosInstance,
	AxiosRequestConfig,
	AxiosResponse
} from 'axios';
import { ResultData } from './interface';
import { axiosCanceler } from './helper/axiosCancel';

const config = {
	// 默认地址请求地址，可在 .env 开头文件中修改
	baseURL: import.meta.env.VITE_API_URL,
	// 设置超时时间（10s）
	timeout: 10000,
	// 跨域时候允许携带凭证
	withCredentials: true
};

class RequestHttp {
	service: AxiosInstance;
	constructor(config: AxiosRequestConfig) {
		// 实例化axios
		this.service = axios.create(config);

		this.service.interceptors.request.use(
			(config: AxiosRequestConfig) => {
				axiosCanceler.addPending(config);
				const token: string = '123';
				return {
					...config,
					headers: { ...config.headers, 'x-access-token': token }
				} as any;
			},
			(error: AxiosError) => {
				return Promise.reject(error);
			}
		);

		this.service.interceptors.response.use(
			(response: AxiosResponse) => {
				const { data } = response;
				return data;
			},
			(error: AxiosError) => {
				// console.log('error', error);
				return {};
			}
		);
	}

	get<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
		return this.service.get(url, { params, ..._object });
	}

	post<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
		return this.service.post(url, params, _object);
	}

	put<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
		return this.service.put(url, params, _object);
	}

	delete<T>(url: string, params?: any, _object = {}): Promise<ResultData<T>> {
		return this.service.delete(url, { params, ..._object });
	}
}

export default new RequestHttp(config);
