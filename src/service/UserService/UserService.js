import { http } from "../../template/config";
import { URL_JIRA } from "../../ulti/setting";
export default class UserService  {
    UserSignIn (userAcc)  {
        return http.post(`/api/Users/signin` , userAcc) 
        // console.log("userAcc" , userAcc) ; 
    }
}