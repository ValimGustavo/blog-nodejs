const express = require('express');
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose')
const admin = require('./routers/admin')
const app = express();

//configuracao da engine de visualizao que sera usada na aplicacao
app.engine('handlebars', handlebars({defaultLayout:'main'}));
app.set('view engine','handlebars')

//configuracao para poder mexer com body da requisicao
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//importando rotas
app.use('/admin', admin);

//tornado publico o usod de recursos da pasta public
app.use(express.static(path.join(__dirname, "public")))

//Middlewares 
    // app.use((req, res, next) => {

    
    // })


//mongoose
mongoose.connect('mongodb://localhost/blog',{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("banco conectado"))
    .catch((error) => console.log(error))

const PORT = 8989;
app.listen(PORT, ()=> console.log(`Servidor iniciado: ${PORT}`))