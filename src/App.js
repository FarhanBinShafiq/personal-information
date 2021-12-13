import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Persons from './components/Persons/Persons';
import Footer from './components/Footer/Footer';

function App() {
  return (
   <div>
     <Header></Header>
     <Persons></Persons>
     <Footer></Footer>
   </div>
  );
}

export default App;
