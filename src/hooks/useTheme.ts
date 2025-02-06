import { ThemeConfigProp } from '@/redux/interface';

const useTheme = async (themeConfig: ThemeConfigProp) => {
	const { isDark } = themeConfig;
	let styleTheme;

	if (isDark) {
		styleTheme = await import('@/styles/theme/theme-dark.less');
	} else {
		styleTheme = await import('@/styles/theme/theme-default.less');
	}

	// const darkTheme = await import('@/styles/theme/theme-dark.less');
	const initTheme = () => {
		let head = document.getElementsByTagName('head')[0];
		let styleDom = document.createElement('style');

		try {
			const getStyle = document.getElementsByTagName('style');
			if (getStyle.length) {
				for (let i = 0; i < getStyle.length; i++) {
					if (getStyle[i]?.getAttribute('data-type') === 'dark') {
						getStyle[i].remove();
					}
				}
			}

			// styleDom.dataset.type = 'dark';
			if (isDark) {
				// styleTheme = darkTheme;
			} else {
				// styleTheme = defaultTheme;
			}
			// styleDom.innerHTML = Object.values(styleTheme).join(';');
			// head.appendChild(styleDom);
		} catch (error) {
			console.log(error);
		}
	};

	initTheme();

	return {
		initTheme
	};
};

export default useTheme;
