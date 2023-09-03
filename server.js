require('dotenv').config();
const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.use(express.json());

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');




//

const CSS_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";
const cors = require('cors')
app.use(cors());

//

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'User API',
            server: ['https://youtube-spa-api.vercel.app/'],
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
    // apis: ["./routes/*.js"]
    apis: ["routes/*.js"]
};
const swaggerDocs = swaggerJsDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs, { customCssUrl: CSS_URL }));


const routes = require('./routes/index.js');
app.use('/api', routes);

app.listen(process.env.PORT || 3000, () => console.log('Server is started...'));


module.exports = app;