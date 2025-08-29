# Ejemplos de Cliente API de Onurix en Node.js

[![Node.js](https://img.shields.io/badge/Node.js-14+-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat)](https://opensource.org/licenses/MIT)

![Onurix Logo](https://cdn.onurix.com/web/assets/img/logo50.png)

Este repositorio contiene ejemplos de código en Node.js para interactuar con la **API de Onurix**. Está diseñado para ayudarte a integrar fácilmente los servicios de Onurix (SMS, Llamadas, WhatsApp, etc.) en tus aplicaciones Node.js.

## 📋 Tabla de Contenido

- [Ejemplos de Cliente API de Onurix en Node.js](#ejemplos-de-cliente-api-de-onurix-en-node.js)
  - [📋 Tabla de Contenido](#-tabla-de-contenido)
  - [⚙️ Prerrequisitos](#️-prerrequisitos)
  - [📂 Estructura del Repositorio](#-estructura-del-repositorio)
    - [Calls](#calls)
    - [General](#general)
    - [Groups_and_Contacts](#groups_and_contacts)
    - [SMS](#sms)
    - [URL](#url)
    - [WhatsApp](#whatsapp)
  - [📖 Uso](#-uso)
  - [⚙️ Configuración de Parámetros](#️-configuración-de-parámetros)
    - [Credenciales de Autenticación (Obligatorias) `POST o GET`](#credenciales-de-autenticación-obligatorias-post-o-get)
    - [Parámetros Comunes](#parámetros-comunes)
    - [Parámetros Específicos](#parámetros-específicos)
    - [Ejemplo de parámetros para `SMS/SendSMS.js`](#ejemplo-de-parámetros-para-smssendsmsjs)
  - [📚 Documentación Completa de la API](#-documentación-completa-de-la-api)
  - [📄 Licencia](#-licencia)
  - [📞 Soporte](#-soporte)

## ⚙️ Prerrequisitos

Antes de empezar, asegúrate de tener instalado lo siguiente:
- **Node.js 14 o superior**

## 📂 Estructura del Repositorio

Los ejemplos de código están organizados en carpetas que corresponden a las diferentes categorías de la API de Onurix. Las peticiones a la API se realizan comúnmente mediante `HTTP POST` o `GET`. Para los envíos de WhatsApp, es necesario enviar los datos en formato `JSON`.

A continuación, se detalla cada endpoint de ejemplo y el método HTTP que utiliza:

### Calls
| Archivo           | Método | Descripción                                                             |
| :---------------- | :----- | :---------------------------------------------------------------------- |
| `SendCall.js`    | `POST` | Genera una llamada con un mensaje de voz.                               |
| `SendCALL2FA.js` | `POST` | Genera y entrega un código de verificación 2FA a través de una llamada. |

### General
| Archivo                   | Método | Descripción                                                   |
| :------------------------ | :----- | :------------------------------------------------------------ |
| `Balance.js`             | `GET`  | Consulta el saldo de créditos de la cuenta.                   |
| `Security.js`            | `POST` | Bloquea un número de teléfono para no recibir comunicaciones. |
| `VerificationCode2FA.js` | `POST` | Realiza la verificación de un código 2FA.                     |
| `VerificationMessage.js` | `GET`  | Verifica el estado de un envío de SMS o llamada.              |

### Groups_and_Contacts
| Archivo                          | Método | Descripción                              |
| :------------------------------- | :----- | :--------------------------------------- |
| `AssociateContactToGroup.js`    | `POST` | Asocia un contacto a un grupo.           |
| `ContactCreate.js`              | `POST` | Crea un nuevo contacto.                  |
| `ContactDelete.js`              | `POST` | Elimina un contacto.                     |
| `ContactGroupList.js`           | `GET`  | Lista los contactos de un grupo.         |
| `ContactUpdate.js`              | `POST` | Actualiza la información de un contacto. |
| `DisassociateContactToGroup.js` | `POST` | Desasocia un contacto de un grupo.       |
| `GroupCreate.js`                | `POST` | Crea un nuevo grupo de contactos.        |
| `GroupDelete.js`                | `POST` | Elimina un grupo de contactos.           |
| `GroupList.js`                  | `GET`  | Lista todos los grupos de la cuenta.     |
| `GroupUpdate.js`                | `POST` | Actualiza el nombre de un grupo.         |

### SMS
| Archivo          | Método | Descripción                                                        |
| :--------------- | :----- | :----------------------------------------------------------------- |
| `SendSMS.js`    | `POST` | Envía un mensaje de texto (SMS).                                   |
| `SendSMS2FA.js` | `POST` | Envía un mensaje de texto (SMS) con un código de verificación 2FA. |

### URL
| Archivo            | Método | Descripción                                |
| :----------------- | :----- | :----------------------------------------- |
| `Statistics.js`   | `GET`  | Obtiene las estadísticas de una URL corta. |
| `URLShortener.js` | `POST` | Crea una URL corta.                        |

### WhatsApp
| Archivo                   | Método        | Descripción                                                     |
| :------------------------ | :------------ | :-------------------------------------------------------------- |
| `SendWhatsApp2FA.js`     | `POST (JSON)` | Envía un mensaje de WhatsApp con un código de verificación 2FA. |
| `WhatsAppGeneralSend.js` | `POST (JSON)` | Envía un mensaje de WhatsApp usando una plantilla.              |
| `SendWhatsAppWithoutTemplate.js` | `POST (JSON)` | Envía un mensaje de WhatsApp sin usar una plantilla. |

## 📖 Uso

1.  **Clona el repositorio e instala las dependencias:**
    ```bash
    git clone https://github.com/onurixlatam/onurix-nodejs.git
    cd onurix-nodejs
    npm install # Or yarn install, if you use Yarn
    ```

2.  **Navega al archivo** del endpoint que deseas utilizar (ej. `SMS/SendSMS.js`).

3.  **Edita el archivo** y reemplaza los valores de los placeholders como se explica en la sección de [Configuración de Parámetros](#️-configuración-de-parámetros).

4.  **Ejecuta el script** desde tu terminal:
    ```bash
    node SMS/SendSMS.js
    ```

5.  **Verifica la respuesta** que se imprimirá en la consola.

## ⚙️ Configuración de Parámetros

Para usar los ejemplos, necesitas reemplazar los valores de los placeholders (`AQUI_...`) con tus datos reales. A continuación, se detallan los parámetros que encontrarás en los scripts:

### Credenciales de Autenticación (Obligatorias) `POST o GET`

| Parámetro | Descripción                                                               |
| :-------- | :------------------------------------------------------------------------ |
| `client`  | Tu ID de Cliente. Lo encuentras en tu panel de Onurix en `Seguridad API`. |
| `key`     | Tu Llave de API. La encuentras en tu panel de Onurix en `Seguridad API`.  |

### Parámetros Comunes

| Parámetro  | Descripción                                                                 | Ejemplo                                      |
| :--------- | :-------------------------------------------------------------------------- | :------------------------------------------- |
| `phone`    | Número de teléfono de destino. Para múltiples números, sepáralos por comas. | `573001234567` o `573001234567,573001234568` |
| `name`     | Nombre para un contacto o grupo.                                            | `Mi Grupo`                                   |
| `lastname` | Apellido para un contacto.                                                  | `Pérez`                                      |
| `email`    | Correo electrónico de un contacto.                                          | `ejemplo@email.com`                          |
| `id`       | ID de un recurso (mensaje, contacto, grupo).                                | `12345`                                      |
| `group-id` | ID de un grupo.                                                             | `6789`                                       |
| `groups`   | IDs de grupos separados por comas.                                          | `1,2,3`                                      |
| `app-name` | Nombre de la aplicación 2FA creada en Onurix.                               | `MiApp`                                      |

### Parámetros Específicos

| Servicio     | Parámetro    | Descripción                                                                 |
| :----------- | :----------- | :-------------------------------------------------------------------------- |
| **SMS**      | `sms`        | Contenido del mensaje de texto a enviar.                                    |
| **Llamadas** | `message`    | Mensaje que se reproducirá en la llamada.                                   |
| **Llamadas** | `voice`      | Voz a usar en la llamada (ej. `Mariana`, `Penelope`).                       |
| **Llamadas** | `audio-code` | ID de un audio previamente cargado en la plataforma.                        |
| **URL**      | `url-long`   | La URL original que deseas acortar.                                         |
| **URL**      | `alias`      | (Opcional) Alias personalizado para la URL corta.                           |
| **WhatsApp** | `from_phone_meta_id` | ID del número de teléfono de origen en la plataforma de Meta.       |
| **WhatsApp** | `templateId` | ID de la plantilla de WhatsApp aprobada por Meta.                           |
| **WhatsApp** | `message`    | Un objeto JSON con el tipo y valor del mensaje a enviar.                   |
| **WhatsApp** | `data`       | Un objeto JavaScript que se convertirá a JSON con los valores para la plantilla. |

### Ejemplo de parámetros para `SMS/SendSMS.js`

```javascript
// Define el objeto del cuerpo de la solicitud.
const request_body = {
     "client": "12345",
     "key": "*********************",
     "phone": "573001234567",
     "sms": "Este es un mensaje de prueba enviado desde Onurix.com",
     "groups": "1,2,3"
};
```

**Ejemplo de `data` para WhatsApp:**

```javascript
const data = {
    "phones": "573001234567",
    "body": {
        "1": {"type": "text", "value": "John Doe"},
        "2": {"type": "text", "value": "ORD-12345"}
    }
};
```

## 📚 Documentación Completa de la API

Para obtener una descripción detallada de todos los endpoints, parámetros y respuestas de la API, por favor consulta nuestra documentación oficial en [https://docs.onurix.com/](https://docs.onurix.com/).

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 📞 Soporte

Para soporte y preguntas, no dudes en contactarnos:
- **Email**: soporte@onurix.com
- **Website**: [https://onurix.com](https://onurix.com)