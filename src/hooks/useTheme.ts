import a from '@/styles/theme/theme-default.less';
const useTheme = () => {
	const initTheme = () => {
		let head = document.getElementsByTagName('head')[0];

		let styleDom = document.createElement('style');

		// styleDom.innerHTML = defaultTheme;
		head.appendChild(styleDom);
	};

	initTheme();

	return {
		initTheme
	};
};

export default useTheme;
