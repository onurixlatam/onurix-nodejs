// Ejecutar: npm install axios --save
const axios = require('axios').default;
let headers={
     headers:{
          'content-type': 'application/x-www-form-urlencoded',
     }
}
let data ={
     'client':'AQUI_SU_ID',
     'key':'AQUI_SU_KEY',
     'phone':'AQUI_EL_NUMERO_DE_CELULAR',
     'name':'AQUI_NOMBRE_CONTACTO',
     'channel':'AQUI_CHANNEL_A_BLOQUEAR'// CANALES DISPONIBLES "SMS","CALL","WA"
}

axios.post('https://www.onurix.com/api/v1/block-phone',data,headers)
          .then(resp=>{
               console.log(resp.data);
          }).catch(error=>{
               console.log(error);
          });