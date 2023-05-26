import { ErrorMessage, Field, Formik,Form, useFormikContext } from 'formik'
import * as yup from 'yup'
import React from 'react'
import { Prompt } from 'react-router-dom'


export const PromptIfDirty = () => {
  const formik = useFormikContext();
  return (
    <Prompt
      when={formik.dirty && formik.submitCount === 0}
      message="Are you sure you want to leave? You have with unsaved changes."
    />
  );
};

const EditForm = (props) => {

  const prevData={
    id:props.id,
    product_name:props.name,
    quantity: props.quantity,
    price: props.price,
    description:props.description
  }
  return(
   
    <Formik
    initialValues={prevData}
    enableReinitialize={true}

      validationSchema={
      yup.object().shape({
        product_name:yup.string().required(),
        quantity:yup.number().required(),
        price:yup.number().required(),
        description:yup.string().required()
      })
    }
    onSubmit={
        (values)=>{
          props.onSubmit(values)
          
        }
    }
    >
        <Form>
        <PromptIfDirty/>
          <div className="form-group">
           <label htmlFor="product_name"><b>Product_Name</b>  </label><br/>
           <Field type='text' name='product_name'  />
           <span style={{color:'red'}}><ErrorMessage name="product_name"/></span>
           </div>
           <div className="form-group">
           <label htmlFor="description"><b>Description</b></label><br/> 
           <Field as='textarea' name='description'  />
           <span style={{color:'red'}}><ErrorMessage name="description"/></span>
           </div> 
           <div className="form-group">
           <label htmlFor="quantity"><b>Quantity</b></label><br/>
           <Field type='number' name='quantity'  min='1'/>
           <span style={{color:'red'}}><ErrorMessage name="quantity"/></span>
           </div>
           <div className="form-group">
           <label htmlFor="price"><b>Price</b></label><br/>
           <Field type='number' name='price'  placeholder='Enter Price' min='100'/>
           <span style={{color:'red'}}><ErrorMessage name="price"/></span>
           </div>
           <div>
           <button className="btn btn-success btn-sm" type='submit'>UPDATE</button>
           </div>
        </Form>
       
    </Formik>
)
  }

export default EditForm