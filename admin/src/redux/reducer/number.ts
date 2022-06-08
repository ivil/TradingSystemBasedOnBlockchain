// 处理action的reducer
const reducer = (state = 0, action: { type: any }) => {
    switch (action.type) {
        case 'ADD':
            return state + 1
        case 'SUB':
            return state - 1
        default:
            return state
    }
}

export default reducer

