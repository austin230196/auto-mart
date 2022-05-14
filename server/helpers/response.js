module.exports = (res, headers, success, status_code, message, data=null, empty=false) => {
    res.writeHead(status_code, headers);
    if(empty){
        res.end();
    }else{
        res.end(JSON.stringify({
            message,
            success,
            data
        }))
    }
    return;
}