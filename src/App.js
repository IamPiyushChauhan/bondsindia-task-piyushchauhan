import './App.css';
import DataTablePage from './Pages/DataTablePage';
import InputPage from './Pages/InputPage';
import React from 'react'
import { Provider } from 'react-redux';
import store  from './redux/store'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {

  

  return (
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<InputPage />} />
      <Route path='/data'element={<DataTablePage />} />
    </Routes>
    <div className="App">
        
      </div>
    </BrowserRouter>
      
    </Provider>
    
  );
}

export default App;
