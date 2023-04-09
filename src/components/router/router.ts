import Home from "@/components/pages/Home.vue";
import PostPage from "@/components/pages/PostPage.vue";
import PostPageWithStore from "@/components/pages/PostPageWithStore.vue";
import PostPageComposition from "@/components/pages/PostPageComposition.vue";
import About from "@/components/pages/About.vue";
import PostIdPage from "@/components/pages/PostIdPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/post",
        component: PostPage,
    },
    {
        path: "/about",
        component: About,
    },
    {
        path: "/post/:id",
        component: PostIdPage,
    },
    {
        path: "/store",
        component: PostPageWithStore,
    },
    {
        path: "/composition",
        component: PostPageComposition,
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
});

export default router;
