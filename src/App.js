import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header, Home, About } from './components';

function App() {
  return (
    <>
    <Header />

    <Routes>
      <Route path={`/`} element={<Home/>} />
      <Route path={`/about`} element={<About/>} />
    </Routes>
    </>
  );
}

export default App;
