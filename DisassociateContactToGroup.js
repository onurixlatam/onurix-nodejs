// Ejecutar: npm install axios --save
const axios = require('axios').default;
let headers={
     headers:{
          'content-type': 'application/x-www-form-urlencoded',
     }
}

axios.post('https://www.onurix.com/api/v1/contacts/group/remove?key=AQUI_SU_KEY&client=AQUI_SU_ID&group-id=AQUI_ID_GRUPO&id=AQUI_ID_CONTACTO',headers)
          .then(resp=>{
               console.log(resp.data);
          }).catch(error=>{
               console.log(error);
          });