// Ejecutar: npm install axios --save
const axios = require('axios').default;

let headers = {headers:
     { 'Content-Type': 'application/json'}
};
//   data = JSON.stringify({
//      "phone": "+573201234567",
//      "body": [
//        "Parametro1",
//        "Parametro2"
//      ]
//    })
 let data= JSON.stringify('AQUI_EL_JSON_CON_LOS_VALORES_PARA_LA_PLANTILLA')

axios.post('https://www.onurix.com/api/v1/whatsapp/send?key=AQUI_SU_KEY&client=AQUI_SU_CLIENT&template-id=AQUI_EL_ID_DE_LA_PLANTILLA&phone-sender-id=AQUI_EL_ID_DEL_NUMERO_DE_TELEFONO_REMITENTE',data,headers)
          .then(resp=>{
               console.log(resp.data);
          }).catch(error=>{
               console.log(error);
          });