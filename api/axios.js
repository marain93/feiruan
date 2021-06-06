import axios from "axios";

const instance = axios.create({
  baseURL: 'http://154.8.157.198/',
  // headers: {
  //   'Content-Type': 'multipart/form-data',
  // }
});

function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
          // var cookie = jQuery.trim(cookies[i]);
          var cookie = cookies[i].replace(/\s*/g,"");
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}
var csrftoken = getCookie('csrftoken');
function csrfSafeMethod(method) {
  return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

instance.interceptors.request.use((config) => {
  // config.headers['Content-Type'] = 'multipart/form-data';
  if(!csrfSafeMethod(config.method) && !config.xsrfCookieName) {
    // xhr.setRequestHeader("X-CSRFToken", csrftoken);
    config.headers['X-CSRFToken'] = csrftoken;
  }
  return config;
})

export default instance;