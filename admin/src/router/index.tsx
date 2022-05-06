import { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import Home from '../pages/home/home'
// console.log(Home);

// const record = asyncComponent(() => import("@/pages/record/record"));

// react-router4 不再推荐将所有路由规则放在同一个地方集中式路由，子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活

export default class Routers extends Component {

    render() {
        return (
            <BrowserRouter>
                <Routes>
                    {/* <Route path='/' component = {Home} /> */}
                </Routes>
            </BrowserRouter>
        )
    }
}