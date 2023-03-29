import { createRouter, createWebHistory } from "vue-router";
import QuizesView from "../views/QuizesView.vue"
import AboutView from "../views/AboutView.vue"
import NotFoundView from "../views/404View.vue"
import CardView from "../views/CardView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "quizes",
            component: QuizesView
        },
        {
            path: "/quizes/:id",
            name: "quiz",
            component: CardView
        },
        {
            path: "/home",
            redirect: "/"
        },
        {
            path: "/about",
            name: "about",
            component: AboutView
        },
        {
            path: "/:catchall(.*)*",
            name: "not found",
            component: NotFoundView
        }
    ]
})
export default router