// Ejecutar: npm install axios --save
const axios = require('axios').default;
let headers={
     headers:{
          'content-type': 'application/x-www-form-urlencoded',
     }
}
let data = {
    'client':'3',
    'key':'a3f3f9ea627d496c57e2cd354bb55280354b5be26491dcc974e18',
    'id':'11',
    'name':'test test',
    'lastname':'desde nodejs',
    'phone': '3209345417',
    'email':'laps1308+21@gmail.com'
};
axios.post('http://localhost:7474/api/v1/contacts/update',data,headers)
          .then(resp=>{
               console.log(resp.data);
          }).catch(error=>{
               console.log(error);
          });