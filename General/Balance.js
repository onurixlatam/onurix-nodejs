// Ejecutar: npm install axios --save
const axios = require('axios').default;
let headers={
     headers:{
          'content-type': 'application/x-www-form-urlencoded',
     }
}

axios.get('https://www.onurix.com/api/v1/balance?key=AQUI_SU_KEY&client=AQUI_SU_ID',headers)
          .then(resp=>{
               console.log(resp.data);
          }).catch(error=>{
               console.log(error);
          });