import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import zhCnTrans from './modules/zh.ts';
import enUsTrans from './modules/en.ts';

i18n.use(initReactI18next).init({
	resources: {
		en: {
			translation: enUsTrans
		},
		zh: {
			translation: zhCnTrans
		}
	},
	fallbackLng: 'en',
	debug: false
});
