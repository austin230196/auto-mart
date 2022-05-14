const User = require("../models/User");
const {response} = require("../helpers");


const auth_controller = async (req, res, headers) => {
    try{
        const {method} = req;
        if(method === "GET"){
            get_routes(req, res, headers);
            return;
        }else if(method === "POST"){
            post_routes(req, res, headers);
            return;
        }
    }catch(err){
        response(res, headers, false, 500, err.message);
        return;
    }
}


function get_routes(req, res, headers){
    const {url} = req;
    if(url === "/api/auth/login"){
        response(res, headers, true, 200, "Login route for auto mart API");
        return;
    }else {
        response(res, headers, false, 404, "Invalid GET route for auto mart API");
        return;
    }
}



function post_routes(req, res, headers){
    const {url} = req;
    if(url === "/api/auth/login"){
        //do some login
    }else{
        response(res, headers, false, 404, "Invalid POST route for auto mart API");
        return;
    }

}





module.exports = auth_controller;