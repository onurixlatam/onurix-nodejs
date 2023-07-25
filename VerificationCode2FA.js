// Ejecutar: npm install axios --save
const axios = require('axios').default;

let headers = {headers:
     { 'content-type': 'application/x-www-form-urlencoded'}
};

let data = {
     'key':'AQUI_SU_KEY',
     'client':'AQUI_SU_CLIENT',
     'phone':'AQUI_EL_NUMERO_DE_CELULAR',
     'app-name':'AQUI_NOMBRE_APP',
     'code':'AQUI_CODIGO',
};

axios.post('https://www.onurix.com/api/v1/2fa/verification-code',data,headers)
          .then(resp=>{
               console.log(resp.data);
          }).catch(error=>{
               console.log(error);
          });