import * as lng from './lng'

const moduleMap = {
  'zh-HK': 'hk',
  'zh': 'zh',
  'en': 'en'
}
const getLanguageMap = (languageCode) => {
  const moduleName = moduleMap[languageCode]
  return lng[moduleName]
}

let _language = 'zh'

const setLocale = (lng) => {
  _language = lng
}

const getLocale = (text) => {
  const languageMap = getLanguageMap(_language)
  // 默认返回text
  return languageMap[text] || text
}

export {
  setLocale,
  getLocale
}
