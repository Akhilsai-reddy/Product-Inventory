import axios from "axios"
class TopviewedProducts{
  
  static getTopViewedProducts(cb){
    axios.get('http://localhost:3001/Topviewed')
		.then(response => cb(response.data))
        .catch(error => { throw error })
  }

  static addViewProduct(Product){
    return new Promise(async(resolve, reject) => {
      try {
          const res=await axios.post(`http://localhost:3001/Topviewed`,Product)
          resolve(res.data)
      } catch (error) {
          reject(error)   
      }
    })
    
  }

}

export default TopviewedProducts