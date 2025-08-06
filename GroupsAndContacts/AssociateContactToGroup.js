// Ejecutar: npm install axios --save
const axios = require('axios').default;
let headers={
     headers:{
          'content-type': 'application/x-www-form-urlencoded',
     }
}
let data = {
    'client':'AQUI_SU_CLIENT',
    'key':'AQUI_SU_KEY',
    'group-id':'AQUI_ID_DE_GRUPO',
    'id':'AQUI_ID_DE_CONTACTO',
};
axios.post('https://www.onurix.com/api/v1/contacts/group/add',data,headers)
          .then(resp=>{
               console.log(resp.data);
          }).catch(error=>{
               console.log(error);
          });