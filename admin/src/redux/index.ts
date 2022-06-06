// 管理不断变化的 state 非常困难。如果一个 model 的变化会引起另一个 model 变化，
// 那么当 view 变化时，就可能引起对应 model 以及另一个 model 的变化，
// 依次地，可能会引起另一个 view 的变化。直至你搞不清楚到底发生了什么。
// state 在什么时候，由于什么原因，如何变化已然不受控制。 当系统变得错综复杂的时候，想重现问题或者添加新功能就会变得举步维艰。
// 这里需要强调一下：Redux 和 React 之间没有关系。Redux 支持 React、Angular、Ember、jQuery 甚至纯 JavaScript。


import { createStore } from 'redux'
import reducer from './reducer/number'

// 通过createStore函数创建store，传入参数中第一个是reducer，第二个是初始的state值（可省略）
const store = createStore(reducer,0)
export default store

