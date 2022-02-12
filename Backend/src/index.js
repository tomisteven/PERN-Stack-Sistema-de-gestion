const express = require('express');
const {_port} = require('./CONFIG')
const morgan = require('morgan');
const cors = require('cors');


//rutas de la api
const TaskRoute = require('./routes/Task.routes');
const ProviderRoute = require('./routes/Providers.routes'); 
const TurnRoute = require('./routes/Turns.routes');
const OrderRoute = require('./routes/Order.routes');



const app = express();

app.use(morgan('dev'));

app.use(express.json());

app.use(cors());




//routes
app.use('/api/tasks', TaskRoute);

app.use('/api/providers', ProviderRoute); 
app.use('/api/turns', TurnRoute);
app.use('/api/orders', OrderRoute);


//middleware
//el err es el error que se genera en el try cuando algo sale mal
/* app.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message
    });
}) */



app.listen(_port, () => {
    console.log("********************************");
    console.log('Serivor en el puerto ' + _port);
    console.log("********************************");
})

