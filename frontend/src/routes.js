import {createRouter, createWebHistory} from 'vue-router';
import ConnectUser from "./views/ConnectUser.vue";
import DashBoard from './views/DashBoard';
const routes = [
    {
        path: "/",
        name: "ConnectUser",
        component: ConnectUser
    },
    {
        path: "/DashBoard",
        name: "DashBoard",
        component: DashBoard
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;