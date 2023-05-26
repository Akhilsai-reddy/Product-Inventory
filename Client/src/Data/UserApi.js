import axios from "axios";
import { nanoid } from "nanoid";

let currentId=nanoid()
class UserApi{

    static saveUser(user){
        user.id=currentId+1
        return new Promise(async(resolve, reject) => {
            try {
              const res= await axios.post('http://localhost:3001/users',user)  
              resolve(res)
            } catch (error) {
                reject(error)
                console.log(error.message)
            }
        })
    }

    static getUser(userId,password,cb){
      
        new Promise(async(resolve, reject) => {
            try {
                const user=await axios.get(`http://localhost:3001/users?email=${userId}&password=${password}`)
                resolve(user)
                cb(user.data[0])
            } catch (error) {
                reject(error) 
                console.log(error.message)
            }
        })
        // axios.get(`http://localhost:3001/users?email=${userId}&password=${password}`)
        // .then(response => cb(response.data[0]))
		// .catch(error => { throw error })
        // axios.post(`http://localhost:3001/users/login`,{email,Password})
        // .then(response => cb(response.data))
		// .catch(error => { throw error })
   
    }
}

export default UserApi