
import {Chart as ChartJS, BarElement, CategoryScale, Legend, LinearScale, Title, Tooltip, ArcElement } from "chart.js";
import _ from "lodash";
import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import TopviewedProducts from "../Data/TopviewProducts";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Chart = () => {
  const [viewed,setViewed]=useState( {datasets:[]})
  useEffect(()=>{
    TopviewedProducts.getTopViewedProducts((product)=>{
   const grouped=_(product).groupBy('product_name').value()
   let labelArray=Object.keys(grouped)
    const Count=Object.keys(grouped).map(key => grouped[key].length)
    const Data=Count.filter(c=>c>=10)
   setViewed({
    labels:labelArray,
    datasets:[{ 
    label: 'Product Views',
    backgroundColor: ['greenyellow','lightblue','yellow','red','lightgreen','pink'],
    borderColor: 'orange',
    borderWidth: 2,
    data: Data
  }]
   })

    })
  },[])
  return (
    <div> 
       <Container className="mt-5 text-center">
                    <Row>
                      <Col/>
                        <Col>
                            <Card>
                            <Card.Title><b>Top Viewed products</b></Card.Title>
                                <Bar
                                    data={viewed}
                                    options={{
                                      title:{
                                        display:true,
                                        text:'Top Viewed Products',
                                        fontSize:20
                                      },
                                      legend:{
                                        display:true,
                                        position:'left'
                                      }
                                    }}
                                />
                            </Card>
                        </Col>
                        <Col/>
                    </Row>
                </Container>
    </div>
  )
}

export default Chart