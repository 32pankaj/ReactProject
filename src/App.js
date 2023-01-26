import styles from './App.css';
import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import Example from './components/Example';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
function App() {
  return (
    <div>
      <Router>
          <div className='container'>
            <HeaderComponent/>
            <div className="container" >
              <Routes>
                <Route exact path ='/' element={<ListEmployeeComponent/>}></Route>
                <Route path ="/employees" element={<ListEmployeeComponent/>}></Route>
                <Route  path ='/add-employee' element={<CreateEmployeeComponent/>}></Route>
                <Route  path ='/update-employee/:id' element={<UpdateEmployeeComponent/>}></Route>
                
              </Routes>
            </div>
            <  FooterComponent/>
            
        </div>
      </Router>
    </div>
  );
}

export default App;
