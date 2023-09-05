import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

import './App.css';

const Home = lazy(() => import(/* webpackChunkName: "home" */ './pages/Home/Home'));
const Search = lazy(() => import(/* webpackChunkName: "Search" */ './pages/Search/Search'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>로딩</div>}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
};

export default App;
