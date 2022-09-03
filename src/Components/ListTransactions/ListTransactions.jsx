import React from 'react'
import Table from 'react-bootstrap/Table';
import {Row,Col,Container} from 'react-bootstrap'
import TopNavbar from '../Utility/TopNavbar';
import { ButtonAction } from './ButtonAction';

function ListTransactions() {
  return (
    <Container fluid style={{ backgroundColor:'#2f2f2f', height:'100vh'}}>
    <Row>
        <TopNavbar/>
    </Row>
    
    <Row className='mt-5'>
    <Col className='d-flex justify-content-center' style={{ margin:'auto',padding:'auto' }}>
    <Table striped bordered hover variant="dark" style={{ width:'85%' }}>
          <thead className='text-danger fw-bold'>
            <tr>
              <th>No</th>
              <th>Users</th>
              <th>Bukti Transfer</th>
              <th>Remaining Active</th>
              <th>Status Users</th>
              <th>Status Payment</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Ujang</td>
              <td>bca.jpg</td>
              <td>26/Hari</td>
              <td className='text-success'>Active</td>
              <td className='text-success fw-bold'>Approve</td>
              <td>
                  <ButtonAction/>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Ujang</td>
              <td>bca.jpg</td>
              <td>26/Hari</td>
              <td className='text-success'>Active</td>
              <td className='text-danger fw-bold'>Cancel</td>
              {/* <td><ButtonAction/></td> */}
              <td><ButtonAction/></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Ujang</td>
              <td>bca.jpg</td>
              <td>26/Hari</td>
              <td className='text-danger'>Not Active</td>
              <td className='text-warning fw-bold'>Pending</td>
              {/* <td><ButtonAction/></td> */}
              <td><ButtonAction/></td>
            </tr>
          </tbody>
        </Table>
    </Col>
    </Row>
    </Container>
  )
}

export default ListTransactions