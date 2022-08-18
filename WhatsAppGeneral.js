// Ejecutar: npm install request --save
var requests = require("request");

var options = { 
     method: 'POST',
     url: 'https://www.onurix.com/api/v1/whatsapp/send',
     headers: { 'content-type': 'application/x-www-form-urlencoded'},
     formData: {
        key:'AQUI_SU_KEY',
        client:'AQUI_SU_CLIENT',
        template:'AQUI_EL_NOMBRE_DE_LA_PLANTILLA',
        content:'AQUI_EL_JSON_CON_LOS_VALORES_PARA_LA_PLANTILLA'
     }
};

var test = requests(options, function (error, response, body) {
     if (error) throw new Error(error);
          console.log(body);
});