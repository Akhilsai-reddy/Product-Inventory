import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as yup from 'yup'
import { Card, Col, Container, Row } from 'react-bootstrap'
import UserApi from '../Data/UserApi'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { userContext } from '../Components/USERCONTEXT/UserContext'
import UserActions from '../Components/USERACTIONS/UserActions'

const LoginForm = (props) => {

  const{setUser}=useContext(userContext)
  return(

    <Container className='text-center mt-5'> 
<Row>
  <Col/>
  
  <Card style={{width:'20rem' , height:'20rem', boxShadow:'0px 12px 18px -6px rgba(0,0,0,0.7)'}} border='info'>
    <Card.Title>  <h2>Login Form</h2>
    <hr/></Card.Title>

      <Card.Body>
      <Formik
  initialValues={{
    email: '',
      Password:''
  }}
    validationSchema={
    yup.object().shape({
      email:yup.string().email().required(),
      Password:yup.string().min(6,'password must be at least 6 characters').required()
    })
  }
  onSubmit={
      values=>{
      UserApi.getUser(values.email,values.Password,user=>{
    //  if( user!==undefined && user.email===values.email&&user.Password===values.Password){
    //   UserActions.loginUser(setUser,user)
    //   alert('successfully logged In')
    //   props.history.push('/products')
    //  }
    //  else{
    //   alert('user not found')
    //  }
    if(user==='not found'){
      alert('user not found')
    }
    else if(user==='invalid password'){
      alert('invalid password')
    }
    else{
      UserActions.loginUser(setUser,user)
        alert('successfully logged In')
        props.history.push('/products')
    }
      })
      }
  }
  >
      <Form>
         <div className="form-group">
         <label htmlFor="email"><h4><i className='bi bi-envelope'/> &nbsp;</h4> </label>
         <Field type='email' name='email' placeholder='Enter email' />
         <span style={{color:'red'}}><ErrorMessage name="email"/></span>
         </div>
        <br/>
         <div className="form-group">
         <label htmlFor="Password"><h4><i className='bi bi-eye'/> &nbsp;</h4></label>
         <Field type='password' name='Password' placeholder='Enter Password'/>
         <span style={{color:'red'}}><ErrorMessage name="Password"/></span>
         </div>
         <br/>
         <button className="btn btn-success btn-sm" type='submit'>Login</button>
      </Form>
  </Formik>
  <br/>
  New user ?<Link to='/register'>Sign up here</Link>
     </Card.Body>
     </Card>
     <Col/>
     </Row>
  </Container>
  )
}

export default LoginForm