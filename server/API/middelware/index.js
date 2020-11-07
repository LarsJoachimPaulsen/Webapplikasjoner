export const isInteger = (req, res, next) => {
    
    const { id } = req.params; 
    if(!Number.isInteger(parseInt(id))){
        return res.status(400).json({
            status: 400, 
            message: 'Id must be an integer'
        });
    }
    next();
}

export const validateFields = (req, res, next) => {

    const {title} = req.body; 
    if(!title){
        return res.status(400).json({
            status: 400, 
            message: 'Title is missing'
        });
    }

    next(); 
}

export const checkUserInput = (req, res, next) => {

    const{ username, password} = req.body; 

    if(!username){
        return res.status(400).json({
            status: 400, 
            message: 'Username is missing'
        }); 
    }
    if(!password){
        return res.status(400).json({
            status: 400, 
            message: "password is missing",
        });
    }

    next(); 
}

export const pollInputCheck = (req, res, next) => {
    const {pollname, question} = req.body; 

    if(!pollname){
        return res.status(400).json({
            status: 400,
            message: 'pollname is not given'
        })
    };
    if(!question){
        return res.status(400).json({
            status: 400, 
            error: 'a poll question is not given'
        });
    };
    next();
};