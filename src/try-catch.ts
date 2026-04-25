try {
    
} catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
        
    }
    console.log("error",error);
    
    
}

const data:unknown = "Choco and Shakes"
const Strdata:string = data as string 

//never 
type Role = "Admin"|"User"|"SuperAdmin"
function accessBasedOnRoles(role:Role) {
    if (role ==="Admin") {
        console.log("redirecting to admin dashboard");
        return
    }
    if (role ==="User") {
        console.log("redirecting to user dashboard");
        return
    }
    role; //never became superadmin to handle edgecases and if we forgot to mention...

//sometimes we need infinite loop to run as request comes we serve , ex. web-servers

    function neverReturn():never{
        while(true){}
    }
}