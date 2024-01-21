function iThrowErr() {
        
        try{
            if(false){
                //Some Code
                //Ideal situation me hm yahan ka code execute krte & "try" se hi "return" kr jate
                //But muje error handling demonstrate krni hai!
                console.log("BOMB nhi fta!");
                
                return;
            }
            else{
                throw new Error("BOMB ftt gya!!");
            }
        }
        catch(err){
            console.log('Error Was : ', err);
            return;            
        }
        finally{
            console.log(`Ya to BOMB fta ya nhi fta ¯\_(ツ)_/¯!`) //Will be executed even after "return" is encountered!
        }
}

iThrowErr();



