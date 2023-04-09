import { createApp } from "vue";
import App from "./App.vue";
import UIcomponents from "./components/UI/index";
import router from "./components/router/router";
import store from "./components/store";

import directives from "./components/directives";

const app = createApp(App);

UIcomponents.forEach((component) => {
    app.component(component.name, component);
});

directives.forEach((dir) => {
    app.directive(dir.name, dir);
});

app.use(router).use(store).mount("#app");
