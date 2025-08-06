// Ejecutar: npm install axios --save
const axios = require('axios').default;
let headers={
     headers:{
          'content-type': 'application/x-www-form-urlencoded',
     }
}
let data ={
     'client':'AQUI_SU_CLIENT',
     'key':'AQUI_SU_KEY',
     'phone':'AQUI_EL_NUMERO_DE_CELULAR',//PARA ENVIAR MULTIPLES TELEFONOS TENDRAN QUE SER SEPARADOS POOR COMAS ","
     'message':'AQUI_EL_MENSAJE_A_ENVIAR',//EN CASO DE ENVIAR PARAMETRO AUDIO-CODE NO PASAR PARAMETROS MESSAGE Y VOICE
     'voice':'AQUI_TIPO_DE_VOZ',
     'retries':'AQUI_NUMERO_DE_INTENTOS',//OPCIONAL POR DEFECTO 1
     'leave-voicemail':'false',
     //'audio-code':'AQUI_ID_AUDIO',
     'groups': 'AQUI_ID_GRUPOS'//PARA ENVIAR MULTIPLES TELEFONOS TENDRAN QUE SER SEPARADOS POOR COMAS ","
}

axios.post('https://www.onurix.com/api/v1/call/send',data,headers)
          .then(resp=>{
               console.log(resp.data);
          }).catch(error=>{
               console.log(error);
          });