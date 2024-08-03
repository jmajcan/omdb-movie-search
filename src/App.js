import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { MovieDetail } from './components/Movies/MovieDetail';
import './App.css';

function App() {
  return (
    <div className='App bg-white'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/movie/:imdbID" element={<MovieDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
