// declare global 在 TS 3.4 以后就被废弃掉了（因为引入了 globalThis 这个 ES2020 新的 API）。

declare interface Window {
    [key: string]: any
}

window.ethereum = window.ethereum || {}
