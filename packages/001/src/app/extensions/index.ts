import type { App } from 'vue';

export type Extension = {
  install: (ctx: App) => void,
};

export const defineExtension = (extension: Extension) => extension;
