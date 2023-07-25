// Ejecutar: npm install axios --save
const axios = require('axios').default;

let headers = {headers:
     { 'content-type': 'application/x-www-form-urlencoded'}
};

let data ={
     'client':'AQUI_SU_CLIENT',
     'key':'AQUI_SU_KEY',
     'name-url':'AQUI_NOMBRE_DE_URL',
     'since':'Fecha inicial YYYY-MM-DD',
     'until':'Fecha final YYYY-MM-DD'
}

axios.post('https://www.onurix.com/api/v1/url/short-statistic',data,headers)
          .then(resp=>{
               console.log(resp.data);
          }).catch(error=>{
               console.log(error);
          });