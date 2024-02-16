export const checkValidData=(email,password)=>{
    const isemailvalid=/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
    const ispasswordvalid=/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);
    if(!isemailvalid) return "Email ID is not valid"
    if(!ispasswordvalid) return "Password is not valid"
    return null;
};