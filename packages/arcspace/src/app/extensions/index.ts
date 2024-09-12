import type { App } from 'vue';

export type ExtensionContext = {
  app: App,
};

export type Extension = {
  install: (ctx: ExtensionContext) => void,
};

export const defineExtension = (ext: Extension) => ext;
