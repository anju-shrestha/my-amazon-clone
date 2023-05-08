import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { NavBar } from './components';
import HomePage from './components/HomePage'
import {SearchResults, CheckOut, ProductPage} from './components'
function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='/search' element={<SearchResults/>}/>
        <Route path='/product/:id' element={<ProductPage/>}/>
        <Route path='/checkout' element={<CheckOut/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
