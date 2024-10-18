import React, { Component } from 'react'
//import { ProductConsumer } from '../Context';
import { Table ,Button} from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return (
      <div className='container'>
            <h3> CRUD </h3>
           
                {(value)=>{
                    return(
                        <Table size='sm' variant="dark" striped border hover >
                            <tbody>
                                <tr>
                                    <th>Title</th>
                                    <th>Information</th>
                                    <th>Price</th>
                                    <th>Company</th>
                                    <th>Action</th>
                                </tr>
                                <tr>
                                    <input type='text' value={value.title} onChange={(e)=>{value.updateValue()}} />
                                </tr>
                                {value.Alldata.map(product=>{
                                    return(
                                        <tr>
                                            <td>{product.title}</td>
                                            <td>{product.info}</td>
                                            <td>{product.proce}</td>
                                            <td>{product.company}</td>
                                            <td><Button size='sm' variant='primary' onClick={()=>{value.onEdit(product.id)}} >Edit</Button></td>
                                            |<Button size='sm' variant='primary' onClick={()=>{value.onDelete(product.id)}} >Delete</Button>
                                        </tr>
                                    )
                                })}
                            </tbody>
                     </Table>
                    )
                }}
      </div>
    )
  }
}
