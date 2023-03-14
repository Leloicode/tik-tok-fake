// import Header from "../components/Layout/HeaderOnly/Header"
import DefaultLayoutOnly from "../components/Layout/HeaderOnly"
import Following from "../pages/Following"
import Home from "../pages/Home"
import Profile from "../pages/Profile"
import Search from "../pages/Search"
import Upload from "../pages/Upload"

const publicRoutes =  [
    { path: '/', component: Home},
    { path: '/following', component: Following},
    { path: '/live', component: Following},
    { path: '/profile/:nickname', component: Profile},
    { path: '/upload', component: Upload , layout:DefaultLayoutOnly},
    { path: '/search', component: Search , layout:null},


]
const privateRoutes = [
]
export { publicRoutes, privateRoutes }