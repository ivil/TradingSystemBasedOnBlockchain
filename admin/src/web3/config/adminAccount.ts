const adminAccount = {
    account: sessionStorage.getItem("adminAccount"),
    privateKey: sessionStorage.getItem("adminPirvateKey") || "0x"
}


export default adminAccount