import { defineExtension } from '..'

import { router } from './router'

export default defineExtension({
  install(ctx) {
    ctx.app.use(router)
  },
})
