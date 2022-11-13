import logo from './logo.svg';
import './App.css';
import RegistrationForm from './Component/RegistrationForm';
import Appointment from './Component/Appointment';

function App() {
  return (
    <>
    <div className='container-fluid'>
    <div className='row'>
    <div className='col-2'>
    



    </div>
    <div col-10>
    <div className='row'>
    <div className='col-5'>
    
    <Appointment />
    
    
    </div>
    <div className='col-7 p-3'>
    
    <RegistrationForm />
    </div>
    </div>
    
    </div>





    </div>
    
    </div>
    </>
  );
}

export default App;
