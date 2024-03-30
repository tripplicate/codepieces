import { createApp } from 'vue';

import App from './App.vue';

import '~/design/system/styles/index.css';

import type { Extension } from './extensions';

const app = createApp(App);

const extensions = Object.values(import.meta.glob<{ default: Extension, }>('./extensions/*/index.ts', {
  eager: true,
}));

extensions.forEach((extension) => {
  extension.default.install(app);
});

app.mount('#root');
