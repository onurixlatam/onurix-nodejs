// Ejecutar: npm install axios --save
const axios = require('axios').default;
let headers={
     headers:{
          'content-type': 'application/x-www-form-urlencoded',
     }
}
let data ={
     'client':3,
     'key':'a3f3f9ea627d496c57e2cd354bb55280354b5be26491dcc974e18',
}

axios.get('https://www.onurix.com/api/v1/balance?key=AQUI_SU_KEY&client=AQUI_SU_ID',headers)
          .then(resp=>{
               console.log(resp.data);
          }).catch(error=>{
               console.log(error);
          });