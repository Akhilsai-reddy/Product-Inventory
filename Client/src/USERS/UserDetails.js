import React, { useContext } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { userContext } from '../Components/USERCONTEXT/UserContext'

const UserDetails = () => {

    const {user}=useContext(userContext)
  return (
   <Container className='text-right mt-5'>
    <Row>
        <Col/>
    <Card style={{width:'20rem', height:'20rem'}} border='success'>
     
        <Card.Body>
            <Card.Text><b className='text-center'>{user.FirstName+user.LastName}</b></Card.Text>
            <hr/>
           <span> <b>Email Id:&emsp;</b>{user.email} </span><br/><br/>
           <span> <b>Phone Num:&emsp;</b>{user.PhoneNumber} </span><br/><br/>
           <span> <b>Password:&emsp;</b>{user.Password} </span><br/><br/>
           <span> <b>Location:&emsp;</b>{user.Location} </span><br/><br/>
           <Link className='text-center' to='/products'>Back to Products?</Link>
        </Card.Body>
    
    </Card>
    <Col/>
    </Row>
   </Container>
  )
}

export default UserDetails