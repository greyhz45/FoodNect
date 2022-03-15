//this will be common to all api requests
import * as endpoints from "./Endpoints";
import axios from "axios";

const HttpClient = 
    axios.create({
        baseURL: endpoints.BASE_URL,
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    }) 

export default HttpClient;

