const http = require("http"),
fs = require("fs"),
path = require("path");



const mongoose = require("mongoose");

const {monitor, response, getenv} = require("./helpers");
//bring the envs to this scope/process/thread
getenv(fs, path);


//controllers
const auth_controller = require("./controllers/auth_controller");


const server = http.createServer();
const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE, PATCH",
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Max-Age": 60 * 60 * 24
}


server.on("request", async(req, res) => {
    monitor(req);
    const {url, method} = req;
    try{
        if(method === 'OPTIONS'){
            response(res, headers, true, 204, "", null, true);
            return;
        }else{
            if(url === "/api"){
                response(res, headers, true, 200, "You just reached the root path of the auto mart API");
                return;
            }
            else if(url.startsWith("/api/auth")){
                auth_controller(req, res, headers);
                return;
            }else {
                response(res, headers, false, 404, "Invalid route reached");
                return;
            }
        }
    }catch(err){
        response(res, headers, false, 500, err.message);
        return;
    }
})


server.on("listening", async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Server has started on http://${server.address().address}:${server.address().port} on family ${server.address().family}`);
    }catch(err){
        console.log(err.message);
    }
})


server.listen(process.env.PORT, process.env.IP);