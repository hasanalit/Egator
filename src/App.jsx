
import './App.css';
import Header from './Components/Header';
import Menu from './Components/Menu';
import Center from './Pages/Center';
import Xodimlard from './Pages/Xodimlarda';
import Studentattendence from './Pages/Sautudent-attendnce';
import PersonList from './Pages/Person-list';
import StudentList from './Pages/Student-list'
import Sozlamalar from './Pages/Sozlamalar';
import PersonAdd from './Pages/Persona-dd';
import Studentadd from './Pages/Student-add';
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';


function App() {

  const [theme, setTheme] = useState(window.localStorage.getItem('theme') || 'light');


  if(theme){
    window.localStorage.setItem('theme', theme)
  }

  const [openModal, setOpenModal] = useState(true)

  const [appState, setAppState] = useState([]);

  useEffect(() => {
    const article = {   token: "5IDUMmatematika",
    argument: "2022-04-03"};
    const headers = {
        'Content-type': 'application/json'
    };
    axios.post('https://82.148.6.89:5024/api/admin/getlastactions', article, { headers })
        .then(response => setAppState(response.data));
  }, [setAppState]);


  console.log(appState);

  return (
    <>
    <div className={`container ${theme}`}>

      <Menu openModal={openModal} setOpenModal={setOpenModal}/>
      <Routes>
        <Route path='/' element={<Center appState={appState} theme={theme} setTheme={setTheme} />}/>
        <Route path='/studentList/:username' element={<StudentList appState={appState} theme={theme} setTheme={setTheme} />}/>
        <Route path='/xodimlard' element={<Xodimlard />}/>
        <Route path='/studentattendence' element={<Studentattendence />}/>
        <Route path='/personList' element={<PersonList />}/>
        <Route path='/studentList' element={<StudentList />}/>
        <Route path='/sozlamalar' element={<Sozlamalar theme={theme} setTheme={setTheme} />}/>
        <Route path='/personAdd' element={<PersonAdd />}/>
        <Route path='/studentadd' element={<Studentadd />}/>
      </Routes>
      <Header openModal={openModal} setOpenModal={setOpenModal}/>
    </div>
    </>
  );
}

export default App;