// Ejecutar: npm install axios --save
const axios = require('axios').default;
let headers={
     headers:{
          'content-type': 'application/x-www-form-urlencoded',
     }
}
axios.delete('https://www.onurix.com/api/v1/contacts/delete?key=AQUI_SU_KEY&client=AQUI_SU_ID&id=AQUI_ID_CONTACTO',headers)
          .then(resp=>{
               console.log(resp.data);
          }).catch(error=>{
               console.log(error);
          });