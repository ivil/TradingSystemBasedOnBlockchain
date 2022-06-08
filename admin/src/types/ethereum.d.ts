/**
 * 声明window，告诉TS它有这个属性，帮助TS来判断我们传入的参数类型对不对
 */
 declare global {
    interface Window { [key: string]: any; }
}
window.ethereum = window.ethereum || {};