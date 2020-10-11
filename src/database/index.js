require('dotenv').config();
const mongoose = require('mongoose');

// URI = mongodb://yourName:secret@127.0.0.1:27017/finance
const mongoClient = mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser:true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(() => {
        console.log('API conectada ao mongo')
    }).catch(err => {
        console.log(`DB error: ${err}`);
        process.exit(-1);
    });

mongoose.Error.messages.general.required = "O atributo '${PATH}' é obrigatório"
mongoose.Error.messages.Number.min = "O valor '${VALUE}' informado é menor que o limite mínimo de '${MIN}'."
mongoose.Error.messages.Number.max = "O valor '${VALUE}' informado é maior que o limite máximo de '${MAX}'."
mongoose.Error.messages.String.enum = "O valor '${VALUE}' não é válido para o atributo '${PATH}'."

module.exports = mongoClient;
