// Ejecutar: npm install request --save
var requests = require("request");

var options = { 
     method: 'GET',
     url: 'https://www.onurix.com/api/v1/balance?key=AQUI_SU_KEY&client=AQUI_SU_CLIENT',
     headers:{ 'content-type': 'application/x-www-form-urlencoded' },
};
var test = requests(options, function (error, response, body) {
     if (error) throw new Error(error);
          console.log(body);
});