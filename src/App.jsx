
import './App.css';
import Header from './Components/Header';
import Menu from './Components/Menu';
import Center from './Components/Center';
import { useState, useEffect } from 'react'
import axios from 'axios';


function App() {


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


  // console.log(appState);

  return (
    <>
    <div className='container'>
      <Menu openModal={openModal} setOpenModal={setOpenModal}/>
      <Center appState={appState}/>
      <Header openModal={openModal} setOpenModal={setOpenModal}/>
    </div>
    </>
  );
}

export default App;