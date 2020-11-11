import React from 'react'; 

const LoginBox = () => {

    const createUser = (e) =>{
        e.preventDefault();
        alert("funker"); 
    }

    return (
        <div className="form-box">
            <form onSubmit={createUser}> 
            <label for ="email"> Epost </label>
            <input type="email" id="email" placeholder="epost"/>
            <label for="password"> Passord </label>
            <input type="password" id="password" placeholder="passord"/>
            <label for="confirmPassword">Bekreft passord</label>
            <input type="password" id="confirmPassword" placeholder="bekreftPassord"/>
            <input type="submit" value="Registrer" />    
        
            </form>     

            
                  
        </div>
    )
    }



export default LoginBox;