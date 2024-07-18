import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Header,
  Footer,
  Home,
  About,
  Ebook,
  Blogs,
  Podcast,
  Store,
  Contact,
} from "./components";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/about`} element={<About />} />
        <Route path={`/ebook`} element={<Ebook />} />
        <Route path={`/blogs`} element={<Blogs />} />
        <Route path={`/podcast`} element={<Podcast />} />
        <Route path={`/store`} element={<Store />} />
        <Route path={`/contact`} element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
