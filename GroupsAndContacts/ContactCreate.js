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
    'name':'AQUI_EL_NOMBRE_DE_CONTACTO',
    'lastname':'AQUI_EL_APELLIDO_DE_CONTACTO',
    'phone': 'AQUI_TELEFONO_DE_CONTACTO',
    'email':'AQUI_EMAIL_DE_CONTACTO'
};
axios.post('https://www.onurix.com/api/v1/contacts/create',data,headers)
          .then(resp=>{
               console.log(resp.data);
          }).catch(error=>{
               console.log(error);
          });