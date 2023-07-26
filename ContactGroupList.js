// Ejecutar: npm install axios --save
const axios = require('axios').default;
let headers={
     headers:{
          'content-type': 'application/x-www-form-urlencoded',
     }
}
axios.get('http://192.168.96.1:7474/api/v1/group/4/contacts/list?key=a3f3f9ea627d496c57e2cd354bb55280354b5be26491dcc974e18&client=3',headers)
          .then(resp=>{
               console.log(resp.data);
          }).catch(error=>{
               console.log(error);
          });