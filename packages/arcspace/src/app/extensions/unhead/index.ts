import { createHead } from '@unhead/vue'

import { defineExtension } from '..'

export default defineExtension({
  install(ctx) {
    ctx.app.use(createHead())
  },
})
