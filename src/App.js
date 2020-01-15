import React, {useState, useEffect} from 'react';
import './App.css';
import Routes from './routes';
import {BrowserRouter, Redirect} from 'react-router-dom';
//styled componentes que possuim as 3 'caras' do nosso emoji, neste caso pegando apenas o componente indiferente
import {Smile} from './styles/Styles';

function App() {

  const [click, setClick] = useState(0);
  const [redirect, setRedirect] = useState(null);

  useEffect(()=>{
    switch(click){
      case 1: setRedirect('/sad'); break;
      case 2: setRedirect('/happy'); break;
      case 3: setRedirect('/');setClick(0); break;
      default: setRedirect(null);break;
    }
    console.log(click);

  },[click]);

  return (
        <BrowserRouter>
            <span><h1>Clique no Emoji</h1></span>
            <Smile onClick={() => { setClick(click + 1) }}>

              {redirect ? <Redirect to={redirect} />: null}

              <Routes />
            </Smile>
        </BrowserRouter>
  );
}

export default App;
