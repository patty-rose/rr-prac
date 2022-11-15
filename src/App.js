import { BrowserRouter, Routes, Route } from 'react-router-dom';
//BrowserRouter: connects to the browser
//Routes: parent for all our routes
//Route: for every page we setup a route path with two props: path, element (what we want to render)
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Error from './pages/Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='about' element={<About />} />
          <Route path='products' element={<Products />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;