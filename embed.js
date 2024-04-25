// public/embed.js
import { createApp } from 'vue';
import MyEmbeddedWidget from './components/MyEmbeddedWidget.vue';

const app = createApp(MyEmbeddedWidget);
app.mount('#my-embedded-widget');