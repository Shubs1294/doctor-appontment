import React from 'react';
import './Appointment.css';
import { DataGrid } from '@mui/x-data-grid';

const Appointment = () => {
  const columns = [
    { field: 'FullName', headerName: 'FullName', width: 150 },
    {
      field: 'Contact',
      headerName: 'Contact',
      width: 150,
    },
  ];

  // with npm

  // with npm


  const rows = [
    { FullName: 'abc', Contact: '448454684684684' },
    { FullName: 'abc', Contact: '448454684684684' },
    { FullName: 'abc', Contact: '448454684684684' },
    { FullName: 'abc', Contact: '448454684684684' },
    { FullName: 'abc', Contact: '448454684684684' },
    { FullName: 'abc', Contact: '448454684684684' },
    { FullName: 'abc', Contact: '448454684684684' },
    { FullName: 'abc', Contact: '448454684684684' },


  ];
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-12'>
          <form className="d-flex justify-content-between" role="search">
            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-primary">VIEW PROFILE</button>
          </form>

        </div>
        <div className='col-12'>
       
  {/* <DataGrid 
  rows={rows}
   columns={columns}
   pageSize={5}
   rowsPerPageOptions={[5]}
   checkboxSelection
   disableSelectionOnClick
   experimentalFeatures={{ newEditingApi: true }}
   />
  */}
  
        </div>
        <div className='row'>
          <div className='col-6'>
            <div className='info  '>
              <img
                src='https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg?w=2000'
                alt='profileImage'
                width={100}
                heigh={200}
              />
              <span>Shubham JAdhav</span>
              </div>
            </div>
            <div className='details col-6'>
              <div className='d-flex mt-4'>
                <span className='ml-4'>Location:</span>
                <span>   NA</span>
              </div>
              <div className='d-flex mt-1'>
                <span className='ml-4'>contact:</span>
                <span>   565464444</span>
              </div>
              <div className='d-flex mt-1'>
                <span className='ml-4'>mail:</span>
                <span>   NA</span>
              </div>

            </div>
        </div>
      </div>


    </div>
  )
}

export default Appointment
