import { Route, Routes } from 'react-router-dom';
import Homepage from './views/Homepage';
import BeerItem from './views/BeerItem';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path='/' element = {<Homepage/>} />
        <Route path='/details/:id' element = {<BeerItem/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
