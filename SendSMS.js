// Ejecutar: npm install axios --save
const axios = require('axios').default;
let headers={
     headers:{
          'content-type': 'application/x-www-form-urlencoded',
     }
}
let data={
     'client':'AQUI_SU_CLIENT',
     'key':'AQUI_SU_KEY',
     'phone':'AQUI_EL_NUMERO_DE_CELULAR',//PARA ENVIAR MULTIPLES TELEFONOS TENDRAN QUE SER SEPARADOS POOR COMAS ","
     'sms':'AQUI_EL_SMS_A_ENVIAR',
     'groups':"AQUI_ID_GRUPOS",//PARA ENVIAR MULTIPLES GRUPOS TENDRAN QUE SER SEPARADOS POOR COMAS ","
};

axios.post('https://www.onurix.com/api/v1/sms/send',data,headers)
          .then(resp=>{
               console.log(resp.data);
          }).catch(error=>{
               console.log(error);
          });