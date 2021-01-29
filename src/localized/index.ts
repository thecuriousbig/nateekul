import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Install i18next-browser-languagedetector, For detect languages from browser.
// Now only supports TH Languages.
import th from './th'

i18n.use(initReactI18next).init({
  lng: 'th',
  fallbackLng: 'th',
  resources: {
    th
  },
  ns: Object.keys(th)
})

export { useTranslation } from 'react-i18next'
export default i18n
