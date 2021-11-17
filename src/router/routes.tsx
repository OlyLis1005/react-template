import {lazy, ReactElement, Suspense} from 'react'
import {PathRouteProps} from "react-router"

export const Loadable = (factory: () => any): ReactElement => {
    const LazyComponent = lazy(factory)
    return <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent/>
    </Suspense>
}

const Home = Loadable(() => import('../modules/home'))
const About = Loadable(() => import('../modules/about'))
const AutoLogin = Loadable(() => import('../modules/auto-login'))

interface IRoute extends PathRouteProps {
    name: string;
    exact?: boolean;
}

const routes: IRoute[] = [
    {
        path: '/',
        name: '主页',
        element: Home,
        exact: true,
    },
    {
        path: '/about',
        name: '关于',
        element: About
    },
    {
        path: '/autoLogin',
        name: '自动登录',
        element: AutoLogin
    },
]

export default routes