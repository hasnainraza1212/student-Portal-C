import React from 'react'
import Table from 'react-bootstrap/Table'
import {Avatar} from '@mui/material';
const CustomTableAtten = ({data}) => {
  return (
    <Table bordered responsive className='table table-hover'>
    <thead>
      <tr>
        <th>ID</th>
        <th>Image</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Course</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr key={item._id}>
          <td>{++index}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
          <td>{item.course}</td>
          <td>
          <Avatar alt={item.name} src={item.imgUrl} />
          </td>
        </tr>
      ))}
    </tbody>
  </Table>

  )
}

export default CustomTableAtten
