import About from "../components/about"
import Home from "../components/home"
import Login from "../components/login"
import Logout from "../components/logout"

export const publicRoutes = [
    {
        path: '/login', component: Login, isUseLayout: false 
    }
]

export const privateRoutes = [
    {
        path: '/', component: Home, isUseLayout: true,
    },
    {
        path: '/about', component: About, isUseLayout: true,
    },
    {
        path: '/logout', component: Logout, isUseLayout: false,
    },
]