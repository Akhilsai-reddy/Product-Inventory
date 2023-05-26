import axios from "axios"

class ProductApi{
static getAllProducts(cb){
    return new Promise(async(resolve, reject) => {
        try {
            const Response= await axios.get('http://localhost:3001/Products')
            resolve(Response.data)
            cb(Response.data)
        } catch (error) {
            reject(error)
            console.log(error.message)
        }
    })
}
static addProduct(product){
    return new Promise(async(resolve, reject) => {
        try {
            const Response= await axios.post('http://localhost:3001/Products',product)
            resolve(Response.data)
        } catch (error) {
            reject(error)
            console.log(error.message)
        }
    })
}
static getProductById(_id,cb){
    
    return new Promise(async(resolve, reject) => {
        try {
            const res= await axios.get(`http://localhost:3001/Products/${_id}`)
             resolve(res.data)
             cb(res.data)
           } catch (error) {
            reject(error)
           }
    })
}

static updateDataById(id,data){
    return new Promise(async(resolve, reject) => {
        try {
            const res= await axios.put(`http://localhost:3001/Products/${id}`,data)
            resolve(res.data)
            
           } catch (error) {
            reject(error)
           }
    })
}
static getSearchedData(search,cb){
    return new Promise(async(resolve, reject) => {
        try {
            const res= await axios.get(`http://localhost:3001/Products?q=${search}`)
            resolve(res.data)
            cb(res.data)
           } catch (error) {
            reject(error)
           }
    })
}

static deleteProductById(id){
   return new Promise(async(resolve, reject) => {
       try {
        const res= await axios.delete(`http://localhost:3001/Products/${id}`)
        resolve(res.data)
       } catch (error) {
        reject(error)
       }
    })
}

static deleteProductsByIds(Ids){
    Ids.forEach(id => this.deleteProductById(id,()=>{}));
}
}

export default ProductApi