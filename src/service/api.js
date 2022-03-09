
import  axios from "axios";
export   const URL='http://localhost:8000';


export const getNews=async()=>{
try {
    
return await axios.get(`${URL}/news`);

} catch (error) {
    console.log("error while calling api ",error.message)
}

}