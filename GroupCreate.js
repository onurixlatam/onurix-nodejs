// Ejecutar: npm install axios --save
const axios = require('axios').default;
let headers={
     headers:{
          'content-type': 'application/x-www-form-urlencoded',
     }
}
let data = {
    'client':'AQUI_SU_3CLIENT',
    'key':'AQUI_SU_KEY',
    'name':'AQUI_EL_NOMBRE_DE_GRUPO',
};
axios.post('https://www.onurix.com/api/v1/group/create',data,headers)
          .then(resp=>{
               console.log(resp.data);
          }).catch(error=>{
               console.log(error);
          });