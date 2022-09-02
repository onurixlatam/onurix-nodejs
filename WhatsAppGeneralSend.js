// ejecutar: npm install request --save 
var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://www.onurix.com/api/v1/whatsapp/send?key=AQUI_SU_KEY&client=AQUI_SU_CLIENT&template=AQUI_EL_NOMBRE_DE_LA_PLANTILLA',
  'headers': {
    'Content-Type': 'application/json'
  },
//   body: JSON.stringify({
//      "phone": "+573201234567",
//      "body": [
//        "Parametro1",
//        "Parametro2"
//      ]
//    })
  body: JSON.stringify('AQUI_EL_JSON_CON_LOS_VALORES_PARA_LA_PLANTILLA')

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
