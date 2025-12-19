// Run: npm install axios --save
const axios = require('axios').default;

const url = 'https://www.onurix.com/api/v1/whatsapp/send_without_template?key=AQUI_SU_SECRET_KEY&client=AQUI_SU_CLIENT_ID&phone-sender-id=AQUI_EL_ID_DEL_NUMERO_DE_TELEFONO_REMITENTE';

const data = {
    "from_phone_meta_id": "AQUI_EL_META_ID_DEL_TELEFONO",
    "phone": "AQUI_EL_TELEFONO_DESTINO",
    "message": {
        "type" : "text",
        "value": "AQUI_EL_MENSAJE"
    }
};

const headers = {
    'Content-Type': 'application/json'
};

axios.post(url, data, { headers })
    .then(resp => {
        console.log(resp.data);
    })
    .catch(error => {
        console.log(error);
    });