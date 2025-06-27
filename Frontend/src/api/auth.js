import axios from './axios.js'
 const register = async(userData)=>
{
    console.log("coming respomse",userData)
    const response = await axios.post('/register',userData)
    console.log(response)
    return response.data
}
export default register

