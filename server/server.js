import express from 'express'
import cors from 'cors';
import { PORT, BASEURL, ENVIRONMENT } from './constants/constants.js';
import morgan from 'morgan'; 
import users from './API/routes/users.js';
import polls from './API/routes/polls.js';




const app = express(); 



const corsAllow = {
    origin: 'http://localhost:3001', 
    methods: ['GET', 'PUT', 'POST', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
    preflightContinue: false,

}

app.use(cors(corsAllow))

if(ENVIRONMENT === 'development'){
    app.use(morgan('dev'));
}

app.use(express.json()); 
app.use(`${BASEURL}/users`,cors() ,users); 
app.use(`${BASEURL}/polls`,cors() ,polls);

//API route = BASEURL + endpoint. 
// here the baseurl = localhost:5001/api/v1
// endpoints are the names of the API's

//testing



// error message for non-existing endpoints.
app.all(`*`, (req, res, next) => {
    res.status(404).json({
        success: false, 
        msg: `${req.originalUrl} route not found`

    })
    next();
})

app.listen(PORT, () =>{
    console.log(`Server running in ${ENVIRONMENT} environment . Listening on port: ${PORT}`);
});