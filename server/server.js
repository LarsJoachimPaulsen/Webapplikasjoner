import express from 'express'

const PORT =5001;

const BASEURL='/api/v1'

const app = express(); 

app.use(express.json()); 

//API route = BASEURL + endpoint. 
// here the baseurl = localhost:5001/api/v1
// endpoints are the names of the API's

//testing
app.get(`${BASEURL}/test`, (req, res)  =>{

    res.json({msg:"virker", data: null, method: req.method});
    

}); 



// error message for non-existing endpoints.
app.all(`*`, (req, res, next) => {
    res.status(404).json({
        success: false, 
        msg: `${req.originalUrl} route not found`

    })
    next();
})

app.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`);
});