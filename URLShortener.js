// Ejecutar: npm install axios --save
const axios = require('axios').default;

let headers = {headers:
     { 'content-type': 'application/x-www-form-urlencoded'}
};

let data= {
     'client':'AQUI_SU_CLIENT',
     'key':'AQUI_SU_KEY',
     'name':'AQUI_NOMBRE_DE_URL',
     'url-long':'AQUI_URL_LARGA',
     'alias':'OPCIONAL_AQUI_ALIAS',
     'is-premium':'OPCIONAL_AQUI_TRUE_OR_FALSE_DEFAULT_FALSE',
     'group-name':'OPCIONAL_AQUI_NOMBRE_DE_GRUPO',
     'expiration-time-statistics':'OPCIONAL_AQUI_TIEMPO_ALMACENAMIENTO-ESTADITICAS',
}
axios.post('https://www.onurix.com/api/v1/url/short',data,headers)
          .then(resp=>{
               console.log(resp.data);
          }).catch(error=>{
               console.log(error);
          });