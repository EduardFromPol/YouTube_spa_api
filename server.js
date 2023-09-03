require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.use(express.json());

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'User API',
            server: ['https://cheerful-top-coat-lion.cyclic.app'],
            version: '1.0.0'
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    name: 'Authorization',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                }
            }
        }
    },
    apis: ["./routes/*.js"]
};
const swaggerDocs = swaggerJsDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


const routes = require('./routes/index.js');
app.use('/api', routes);

app.listen(process.env.PORT || 3000, () => console.log('Server is started...'));


module.exports = app;