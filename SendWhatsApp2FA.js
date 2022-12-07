// Ejecutar: npm install request --save
var requests = require("request");

var options = { 
     method: 'POST',
     url: 'https://www.onurix.com/api/v1/2fa/send-whatsapp',
     headers: { 'content-type': 'application/x-www-form-urlencoded'},
     formData: {
          key:'AQUI_SU_KEY',
          client:'AQUI_SU_CLIENT',
          phone:'AQUI_EL_NUMERO_DE_CELULAR',
          'app-name':'AQUI_NOMBRE_APP',
          'country-code':'CO'
     }
};

var test = requests(options, function (error, response, body) {
     if (error) throw new Error(error);
          console.log(body);
});