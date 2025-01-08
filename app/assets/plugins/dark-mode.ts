import { defineNuxtPlugin } from '#app';
import type { DirectiveBinding } from 'vue';

// Состояние для отслеживания выбора темы
interface ThemeState {
  userHasChosenTheme: boolean;
}

const state: ThemeState = {
  userHasChosenTheme: false,
};

// Установка темы
function setTheme(theme: string): void {
  document.documentElement.setAttribute('data-theme', theme);
  if (state.userHasChosenTheme) {
    localStorage.setItem('theme', theme);
  }
}

// Определение темы на основе времени суток
function getThemeByTime(): string {
  const now = new Date();
  const hours = now.getHours();
  return hours >= 14 && hours < 22 ? 'light' : 'dark';
}

// Определение темы на основе настроек браузера
function getThemeByBrowserSettings(): string {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  } else {
    return 'light';
  }
}

// Инициализация темы при загрузке
function initializeTheme(): void {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    const themeByBrowser = getThemeByBrowserSettings();
    if (themeByBrowser === 'dark') {
      setTheme('dark');
    } else {
      const themeByTime = getThemeByTime();
      setTheme(themeByTime);
    }
  }
}

// Определение директивы
const vDark = {
  mounted(el: HTMLElement, binding: DirectiveBinding): void {
    initializeTheme();

    const themeSwitch = el;
    themeSwitch.addEventListener('change', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      state.userHasChosenTheme = true;
      setTheme(newTheme);
    });
  },
};

// Экспорт Nuxt плагина
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('dark', vDark);
});
