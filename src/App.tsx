import { Route, Routes } from 'react-router-dom';
import Homepage from './views/Homepage';
import BeerItem from './views/BeerItem';
import Contacts from './views/Contacts';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path='/' element = {<Homepage/>} />
        <Route path='/details' element = {<BeerItem/>} />
        <Route path='/contacts' element = {<Contacts/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
