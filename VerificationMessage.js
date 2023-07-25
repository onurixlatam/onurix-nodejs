// Ejecutar: npm install axios --save
const axios = require('axios').default;

let headers = {headers:
     { 'content-type': 'application/x-www-form-urlencoded'}
};

axios.get('https://www.onurix.com/api/v1/messages-state?key=AQUI_SU_KEY&client=AQUI_SU_CLIENT&id=AQUI_SU_MENSAJE_ID',headers)
          .then(resp=>{
               console.log(resp.data);
          }).catch(error=>{
               console.log(error);
          });