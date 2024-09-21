import React from 'react';
import './App.css';
import AddFanix from './Pro/AddFanix';
import About from './Pro/About';
import Login from './Pro/login';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pro/Home';
import { Provider } from 'react-redux';
import store from './Pro/redux/store';
import Distances from './Pro/Distances';
import ShowModal from './Pro/ShowModal';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
        {/* <AddFanix></AddFanix> */}
        <Provider store={store}>
          <Distances></Distances>
        </Provider>
        {/* <Modal></Modal> */}
        {/*     <About></About>
        <BrowserRouter>
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/distances" element={<Distances />} />
            <Route exact path="/registrat" element={<Login />} />
            <Route exact path="/" element={<Login />} />
          </Routes >
        </BrowserRouter > */}
      
    </div>
  );
}

export default App;
