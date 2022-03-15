import HttpClient from "./HttpClient";
import * as endpoints from "./Endpoints";
import axios from "axios";

const authenticate = (loginData) => {
    return HttpClient.post(endpoints.AUTHENTICATION, loginData);
}

const saveNewUser = (newUserData) => {
    return HttpClient.post(endpoints.NEW_USER, newUserData)
}

const loadAllRestaurant = () => {
    return HttpClient.get(endpoints.LOAD_ALL_RESTRAURANT)
}







export default { authenticate,
                saveNewUser,
                loadAllRestaurant,
                test
}