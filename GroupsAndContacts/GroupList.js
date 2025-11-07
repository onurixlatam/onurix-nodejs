// Ejecutar: npm install axios --save
const axios = require('axios').defaults;
let headers={
     headers:{
          'content-type': 'application/x-www-form-urlencoded',
     }
}
axios.get('https://www.onurix.com/api/v1/group/list?key=AQUI_SU_KEY&client=AQUI_SU_ID&page=AQUI_NUMERO_PAGINA',headers)
          .then(resp=>{
               console.log(resp.data);
          }).catch(error=>{
               console.log(error);
          });