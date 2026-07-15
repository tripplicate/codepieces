import type { App } from 'vue'

export interface ExtensionContext {
  app: App
}

export interface Extension {
  install: (ctx: ExtensionContext) => void
}

export const defineExtension = (ext: Extension) => ext
