import React from 'react'; 

const LoginBox = () => {

    const createUser = (e) =>{
        e.preventDefault();
        alert("funker"); 
    }

    return (
        <div className="Form-box">
            <form onSubmit={createUser}> 
            <label htmlFor ="email"> Epost </label>
            <input type="email" id="email" placeholder="epost"/>
            <label htmlFor="password"> Passord </label>
            <input type="password" id="password" placeholder="passord"/>
            <label htmlFor="confirmPassword">Bekreft passord</label>
            <input type="password" id="confirmPassword" placeholder="bekreftPassord"/>
            <input type="submit" value="Registrer" />    
        
            </form>     

            
                  
        </div>
    )
    }



export default LoginBox;