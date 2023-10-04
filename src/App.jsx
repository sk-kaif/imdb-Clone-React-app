import './App.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import Header from './components/header/Header'
import Home from './pages/home/Home'
import MoviesList from './components/movieList/MoviesList'
import SingleMovie from './pages/singleMovie/SingleMovie'


const App = () => {
  return (
    <div className='App'>
    <Router>
    <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='movie/:id' element={<SingleMovie />}></Route>
        <Route path='movies/:type' element={<MoviesList />}></Route>
        <Route path='/*' element={<h1>Error</h1>}></Route>
      </Routes>
    </Router>


    </div>
  )
}

export default App
// 5db4cb5a49c5e63d8d8e4f2bc92eb44a