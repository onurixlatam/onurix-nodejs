// Ejecutar: npm install axios --save
const axios = require('axios').default;
let headers={
     headers:{
          'accept': 'application/json',
     }
}

axios.get('https://www.onurix.com/api/v1/my-ip',headers)
          .then(resp=>{
               console.log(resp.data);
          }).catch(error=>{
               console.log(error);
          });
