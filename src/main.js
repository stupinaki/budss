import App from "./App.vue";
import { createApp } from "vue";
import router from "./router/routers";
import {store} from "./store";

const app = createApp(App);

app
    .use(router)
    .use(store)
    .mount('#app');
