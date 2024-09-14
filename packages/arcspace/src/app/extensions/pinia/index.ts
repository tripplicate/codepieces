import { createPinia } from 'pinia'

import { defineExtension } from '..'

export default defineExtension({
  install(ctx) {
    ctx.app.use(createPinia())
  },
})
