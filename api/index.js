import axios from './axios';

export default {
  login( params ) {
    // console.log(params);
    return axios.post('/Userinfo/api/login/',  params );
  },
  // api.login({
  //   params: {
  //     username: '',
  //     password: '',
  //   }
  // }).then((res) => {});
  msgLogin({ params }) {
    return axios.get('/Userinfo/verification/', { params });
  },
  // phone verification
  msgLoginp( params ) {
    return axios.post('/Userinfo/api/login_phone/',  params );
  },
  // phone
  getMsg( params ) {
    return axios.post('/Userinfo/request_verification_code/',  params );
  },
  // getMsg({ params }) {
  //   return axios.post('/Userinfo/request_verification_code/', { params });
  // },
  forgetPw() {
    return axios.get('/Userinfo/forget/password/');
  },
  resetPw() {
    return axios.get('/Userinfo/reset/password/');
  },
  // user_id password
  resetPwd( params ) {
    return axios.post('/Userinfo/api/reset/password/',  params );
  },
  reg() {
    return axios.get('/Userinfo/register/');
  },
  regP( params ) {
    return axios.post('/Userinfo/apt/register/', params);
  },
  regSuc() {
    return axios.get('/Userinfo/register_success/')
  },
  postTask(params){
    return axios.post('/footprint/api/make_duty/', params)
  }
  
} 