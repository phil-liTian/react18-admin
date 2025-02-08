import { ThemeConfigProp } from '@/redux/interface';

const useTheme = async (themeConfig: ThemeConfigProp) => {
	const { isDark, weakOrGray } = themeConfig;

	const initTheme = () => {
		const body = document.documentElement as HTMLElement;

		if ( !weakOrGray ) body.setAttribute('style', '');
		if ( weakOrGray === 'weak' ) body.setAttribute('style', 'filter: invert(80%)');
		if ( weakOrGray === 'gray' ) body.setAttribute('style', 'filter: grayscale(100%)');

		try {
			if ( isDark ) {
				body?.classList.add('dark')
			} else {
				body?.classList.remove('dark')
			}
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
