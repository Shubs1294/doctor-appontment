import React, { useState, useEffect } from 'react';
import Switch from "react-switch";
import './RegistrationForm.css'

const RegistrationForm = () => {
    const [checked, setchecked] = useState(false);
    const handleChange = () => {
        setchecked(!checked)
    }
    return (
        <>
            <main>
                <div className='container-fluid'>
                    <form>

                        <div className='row '>
                            <div className='col-12 col-md-6 border '>
                                <h6>Details</h6>
                                <select className="form-select" aria-label="Default select example">
                                <option >Select Doctor Name</option>
                                <option value="2">Sandeep</option>
                                <option value="3">Shubham</option>
                              </select>
                              <br />
                              <select className="form-select " aria-label="Default select example">
                              <option>Select appointment Channel</option>
                              <option>Online</option>
                              <option>Call</option>
                            </select>
                              
                             
                            
                                <br />
                                <input type='text' className='form-control' placeholder='Appointment title' />

                            </div>

                            <div className='col-12 col-md-6 border '>
                                <h6>Appintment details</h6>
                                <div className='d-flex justify-content-around mt-2'>
                                    <span>Enter name</span>
                                    <span>Enter name</span>

                                </div>

                                <div className='d-flex justify-content-around mt-2'>
                                    <label>Walk-In-Appointment</label>
                                    <Switch onChange={handleChange} checked={checked} />
                                </div>


                                <div className='d-flex justify-content-around mt-2 mb-2'>

                                      <select className="form-select" aria-label="Default select example">
                                        <option selected>Time</option>
                                        <option>12-02</option>
                                        <option>02-04</option>
                                        <option>04-06</option>
                                    </select>

                                    <input type="text" value="02/16/13" data-date-format="mm/dd/yy" id="dp2"/>
                                </div>
                            
                                <select className="form-select" aria-label="Default select example">
                                <option>
                                Select Appointment Type
                                </option>
                                <option>
                                Online
                                </option>
                                <option>
                                Offline
                                </option>
                                </select>
                                
                            

                            </div>

                        </div>

                        <div className='row'>
                        <div className='col-12 diseaseContainer mt-2'>
                        <h6 className='mt-4'>Vital Information</h6>
                        <ul className='d-flex justify-content-between mt-4'>
                        <li>BP </li>
                        <li>Temp </li>
                        <li>Height </li>
                        <li>Weight </li>
                        <li>SPO2 </li>
                        <li>Pulse Rate </li>
                        </ul> 
                        </div>
                        <div className='reasonContainer d-flex m-2 '>
<input type='text' placeholder='Reason' className='form-control ' />
<select className="form-select" aria-label="Default select example">
<option>
Note For doctor
</option>
<option>
ABC
</option>
<option>
XYZ
</option>
</select>
                        </div>

                        <div className='btnContainer d-flex justify-content-center mt-4'>
                        <button className='btn btn-primary mx-4'>RESET</button>
                        <button className='btn btn-primary'>SUBMIT</button>
                        </div>

                        </div>



                    </form>
                </div>

            </main>
        </>

    )
}

export default RegistrationForm;