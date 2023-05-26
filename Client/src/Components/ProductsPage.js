import React, { useContext} from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { userContext } from './USERCONTEXT/UserContext'

const ProductsPage = (props) => {

  const {name,price,quantity,view,check,Id,ProductName,ProductPrice,ProductQuantity}=props
    const {user}=useContext(userContext)

    const handleCheck=(e,Id)=>{
      let checked=e.target.checked;
      props.onCheck(checked,Id)
    }
 
const handleView=(e,Id)=>{
  e.preventDefault();
  if(user){
    window.location.replace('/Products/'+Id) 
  }
  else{
    alert('please login to perform this action..')
  }
}
  return (
    <tr>
      <td/>
      {name?<td>{ProductName.toUpperCase()}</td>:null}
      {price?<td>{ProductPrice}</td>:null}
      {quantity?<td>{ProductQuantity}</td>:null}
      {view?<td><Link to={'/Products/:'+Id} className='btn text-success'  onClick={(e)=>handleView(e,Id)}><i className='bi bi-eye-fill'/></Link></td>:null}
      {check?<td><Form.Check aria-label='option1' onChange={(e)=>handleCheck(e,Id)}/></td>:null}
    </tr>
  )
}

export default ProductsPage