// Ejecutar: npm install request --save
var requests = require("request");

var options = { 
     method: 'POST',
     url: 'https://www.onurix.com/api/v1/url/short-statistic',
     headers: { 'content-type': 'application/x-www-form-urlencoded'},
     formData: {
          key:'AQUI_SU_KEY',
          client:'AQUI_SU_CLIENT',
          'name-url':'AQUI_NOMBE_DE_URL',
          since:'Fecha inicial YYYY-MM-DD',
          until:'Fecha final YYYY-MM-DD'
     }
};

var test = requests(options, function (error, response, body) {
     if (error) throw new Error(error);
          console.log(body);
});
