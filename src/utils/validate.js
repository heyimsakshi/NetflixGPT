 export const checkValidateData=(email,password,name)=>{
    const isvalidEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    const isValidName=/^[a-zA-Z]+ [a-zA-Z]+$/.test(name)
    if(!isvalidEmail) return "Email is not valid";

    if(!isPasswordValid) return "Password is not valid"
    if(isValidName) return "Name is not Valid ";

    return null
}