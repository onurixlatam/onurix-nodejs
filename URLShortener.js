// Ejecutar: npm install request --save
var requests = require("request");

var options = { 
     method: 'POST',
     url: 'https://www.onurix.com/api/v1/url/short',
     headers: { 'content-type': 'application/x-www-form-urlencoded'},
     formData: {
          key:'AQUI_SU_KEY',
          client:'AQUI_SU_CLIENT',
          name:'AQUI_NOMBE_DE_URL',
          'url-long':'AQUI_URL_LARGA'
     }
};

var test = requests(options, function (error, response, body) {
     if (error) throw new Error(error);
          console.log(body);
});