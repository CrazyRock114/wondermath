/**
 * WonderMath Internationalization (i18n) Controller
 * Handles active language state, persistence, event dispatching, and string resolution.
 */

import { LOCALES } from "./locales.js";

class I18nManager {
  constructor() {
    this.supportedLanguages = ["en", "de", "fr", "it", "ja", "ko", "zh-Hans", "zh-Hant"];
    this.currentLang = this.detectLanguage();
    this.listeners = [];
  }

  detectLanguage() {
    // 1. Check localStorage
    const saved = localStorage.getItem("wondermath_lang");
    if (saved && this.supportedLanguages.includes(saved)) {
      return saved;
    }

    // 2. Check browser language
    const navLang = (navigator.language || navigator.userLanguage || "en").toLowerCase();
    if (navLang.startsWith("de")) return "de";
    if (navLang.startsWith("fr")) return "fr";
    if (navLang.startsWith("it")) return "it";
    if (navLang.startsWith("ja")) return "ja";
    if (navLang.startsWith("ko")) return "ko";
    if (navLang.includes("tw") || navLang.includes("hk") || navLang.includes("hant")) return "zh-Hant";
    if (navLang.startsWith("zh")) return "zh-Hans";

    return "en";
  }

  getLanguage() {
    return this.currentLang;
  }

  setLanguage(lang) {
    if (!this.supportedLanguages.includes(lang)) return;
    this.currentLang = lang;
    localStorage.setItem("wondermath_lang", lang);
    document.documentElement.lang = lang;

    this.applyDOMTranslations();
    this.notifyListeners(lang);
  }

  t(key, fallback = "") {
    const dict = LOCALES[this.currentLang] || LOCALES.en;
    if (dict && dict[key]) {
      return dict[key];
    }
    const enDict = LOCALES.en;
    return enDict[key] || fallback || key;
  }

  onLanguageChange(callback) {
    this.listeners.push(callback);
  }

  notifyListeners(lang) {
    this.listeners.forEach(cb => {
      try {
        cb(lang);
      } catch (e) {
        console.error("Error in language change listener:", e);
      }
    });
  }

  applyDOMTranslations() {
    document.querySelectorAll("[data-i18n]").forEach(elem => {
      const key = elem.getAttribute("data-i18n");
      const translation = this.t(key);
      if (translation) {
        elem.textContent = translation;
      }
    });

    document.querySelectorAll("[data-i18n-html]").forEach(elem => {
      const key = elem.getAttribute("data-i18n-html");
      const translation = this.t(key);
      if (translation) {
        elem.innerHTML = translation;
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(elem => {
      const key = elem.getAttribute("data-i18n-placeholder");
      const translation = this.t(key);
      if (translation) {
        elem.setAttribute("placeholder", translation);
      }
    });
  }
}

export const i18n = new I18nManager();
