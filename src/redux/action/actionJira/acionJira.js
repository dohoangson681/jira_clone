import axios from "axios";
import { userSer } from "../../../service";
import { TOKEN_JIRA, USER_LOGIN } from "../../../ulti/setting";
import { history } from "../../../App";
export const actionLogin = (isRemember , values) => {
    return dispatcher => {
        let promise = userSer.UserSignIn(values) ;  
        promise.then(res => {
        console.log('res' , res) ; 
        let accessToken = res.data.content.accessToken ; 
        let privateInfo = res.data.content ; 
    // console.log('accessToken' , accessToken) ; 
    // console.log('privateInfo' , privateInfo) ;
    if(isRemember) {
        console.log('set local') ;
        localStorage.setItem(TOKEN_JIRA , JSON.stringify(accessToken) ) ;
        localStorage.setItem(USER_LOGIN , JSON.stringify(privateInfo) ) ;
        let action = {
          type : 'SET_USER_LOGIN' , 
          data : privateInfo
        }
        dispatcher(action)
        history.push('/home') ;  
        // return <Redirect to='/home' /> 
    }else {
        console.log('ko set local') ; 
        // <Redirect to='/' />
        history.push('/home') ; 
        
    }
   }).catch(err => {
    console.log(err) ; 
   })
    }
}