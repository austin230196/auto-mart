module.exports = req => {
    const {url, method} = req;
    console.log({
        url,
        method,
        ip_address1: req.connection.remoteAddress,
        ip_address2: req.connection.localAddress
    })
    return;
}