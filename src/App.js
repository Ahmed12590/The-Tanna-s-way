import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header,Footer, Home, About, Contact } from './components';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path={`/`} element={<Home/>} />
      <Route path={`/about`} element={<About/>} />
      <Route path={`/contact`} element={<Contact/>} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
