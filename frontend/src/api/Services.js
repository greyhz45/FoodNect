import HttpClient from "./HttpClient";
import * as endpoints from "./Endpoints";

const authenticate = (loginData) => {
    return HttpClient.post(endpoints.AUTHENTICATION, loginData);
}

const saveNewUser = (newUserData) => {
    return HttpClient.post(endpoints.NEW_USER, newUserData)
}

const loadAllRestaurant = (param) => {
    return HttpClient.get(endpoints.LOAD_ALL_RESTRAURANT + param)
}







export default { authenticate,
                saveNewUser,
                loadAllRestaurant,
                
}