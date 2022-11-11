import React, { useEffect, useState } from "react";
import { withFormik } from "formik";
import * as Yup from 'yup' ; 
import "./index.css";
import { FaAtlassian, FaUserAlt, FaLock } from "react-icons/fa";
import { NavLink, Redirect } from "react-router-dom";
import { userSer } from "../../service";
import { TOKEN_JIRA, USER_LOGIN } from "../../ulti/setting";
import { connect } from "react-redux";
import { actionLogin } from "../../redux/action/actionJira/acionJira";
function LoginPage(props) {
  const [isRemember , setRemember] = useState(false) ; 
  console.log('isRemmber' , isRemember ) ; 
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    props;
    // console.log(props.isRemember) ; 
    // console.log('re-render') ; 
    useEffect(()=>{
      // console.log('did update') ; 
      props.dispatch({
        type : "REMEMBER_USER" , 
        status : isRemember

      })
    } , [isRemember])
  return (
    <div className="user-login">
      <div className="form-login">
        <form className="row" onSubmit={handleSubmit} action="">
          <div className="form-header col-12">
            <NavLink to="/home" className="form-logo">
              <FaAtlassian />
            </NavLink>
            <div className="form-title">LOGIN</div>
          </div>
          <div className="form-body col-12">
            <div className="username">
              <input 
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              name="email"
              id="username" 
              type="text" 
              placeholder="Email" />
               
              <div className="form-logo-input">
                <FaUserAlt />
              </div>
              {/* <div>{errors.blur}</div> */}
            </div>
            <div className="password">
              <input 
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              name="password"
              id="password" 
              type="password" 
              placeholder="Password" />
              <div className="form-logo-input">
                <FaLock />
              </div>
            </div>
            <div className="remember-me">
              <div>
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  // defaultValue="Bike"
                  onClick={async ()=>{
                    console.log(isRemember) ; 
                    console.log(!isRemember) ; 
                     setRemember(!isRemember) ; 
                    // props.dispatch({
                    //   type : "REMEMBER_USER" , 
                    //   status : isRemember

                    // })
                  }}
                />
                <label htmlFor="remember">Remember me</label>
              </div>
            </div>
          </div>
          <div className="form-footer col-12">
            <div className="form-button">
              <button type="submit" className="btn-login-form-input">
                Login
              </button>
            </div>
            {/* <a href="#">Forgot Password</a> */}
          </div>
        </form>
      </div>
    </div>
  );
}

// const MyForm = props => {
//   const {
//     values,
//     touched,
//     errors,
//     handleChange,
//     handleBlur,
//     handleSubmit,
//   } = props;
//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         onChange={handleChange}
//         onBlur={handleBlur}
//         value={values.name}
//         name="name"
//       />
//       {errors.name && touched.name && <div id="feedback">{errors.name}</div>}
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

const MyEnhancedForm = withFormik({
  mapPropsToValues: () => ({email : '' , password : '' }),

  // Custom sync validation
  // validate: (values) => {
  //   const errors = {};

  //   if (!values.name) {
  //     errors.name = "Required";
  //   }

  //   return errors;
  // },

  handleSubmit: (values , props) => {
    console.log('is remember' , props.props.isRemember) ; 
  //  console.log(values) ;
  //  let promise = userSer.UserSignIn(values) ;  
  //  promise.then(res => {
  //   console.log('res' , res) ; 
  //   let accessToken = res.data.content.accessToken ; 
  //   let privateInfo = res.data.content ; 
  //   // console.log('accessToken' , accessToken) ; 
  //   // console.log('privateInfo' , privateInfo) ;
  //   if(props.props.isRemember) {
  //       console.log('set local') ;
  //       localStorage.setItem(TOKEN_JIRA , JSON.stringify(accessToken) ) ;
  //       localStorage.setItem(USER_LOGIN , JSON.stringify(privateInfo) ) ;
  //       let action = {
  //         type : 'SET_USER_LOGIN' , 
  //         data : privateInfo
  //       }
  //       props.props.dispatch(action)
  //       props.props.history.push('/home') ;  
  //       // return <Redirect to='/home' /> 
  //   }else {
  //       console.log('ko set local') ; 
  //       // <Redirect to='/' />
  //       // props.props.history.push('/home') ; 
  //       return <Redirect to='/home' /> 
  //   }
  //  }).catch(err => {
  //   console.log(err) ; 
  //  })
  let action = actionLogin(props.props.isRemember , values) ; 
  props.props.dispatch(action) ; 
  },
  validationSchema: Yup.object({
    email: Yup.string()
      .required('*Required'),
    password: Yup.string()
      .required('Required'),
  }) , 
  displayName: "BasicForm",
})(LoginPage);
const mapStateToProps = (RootReducer) => {
  return {
    isRemember : RootReducer.JiraReducer.userRemberLogin 
  }
}
export default connect(mapStateToProps)(MyEnhancedForm) ;
/**
 *   "email": "dhs@gmail.com",
  "passWord": "123456",
  "name": "Do Hoang Son",
  "phoneNumber": "123456789"
 */