import axios from 'axios';
const URL = "http://localhost:8000"

export const authenticateSignUp = async(data) =>{
   try{ 
       return await axios.post(`${URL}/signup`, data);
   }catch(error){
      console.log("Error while calling Signup Api", error.message);
   }
}

export const authenticateLogin = async(data) =>{
   try{ 
       return await axios.post(`${URL}/login`, data);
   }catch(error){
      console.log("Error while calling login Api", error.message);
      return error.response;
   }
}

 