import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css';
import Category from './pages/Category';
import Header from './components/Header';
import Thanks from './pages/Thanks';
import Videos from './pages/Videos';
import Welcome from './pages/Welcome';
import Start from './pages/Start';
import NotFound from './pages/NotFound';

function App() {

  const [currentPage, setCurrentPage] = useState('Start')
  const [category, selectedCategory] = useState('')

  const pageHandler = (page) => {
    // console.log(page)
    setCurrentPage(page)
  }

  const selectedCategoryHandler = (category) => {
    console.log('categoria:', category)
    selectedCategory(category)
    setCurrentPage('Videos')
  }

  const videoVotedHandler = (vote) => {
    console.log('video voted:', vote)
    setCurrentPage('Thanks')
  }

  const backPageHandler = (page) => {

  }

  console.log('Enviroment:', process.env.NODE_ENV)

  return (
    <div className={`App page_video ${currentPage}`}>
      <Header onPage={pageHandler} />
      <main className="section_content">

        <Routes>
          <Route index element={<Start onPage={pageHandler} />} />
          <Route path="/participa" element={<Welcome onPage={pageHandler} />} />
          <Route path="/categorias" element={<Category onSelectedCategory={selectedCategoryHandler} onPage={pageHandler} />} />
          <Route path="/categorias/:categoryId" element={<Videos onVideoVote={videoVotedHandler} onPage={pageHandler} selectedCategory={category} />} />
          <Route path="*" element={<NotFound/>}/>
            
        </Routes>



        {/* <div className="container mx-auto px-4">
          <div className="flex flex-col justify-center items-center">
            {currentPage === 'Start' && <Start onPage={pageHandler} />}
            {currentPage === 'Welcome' && <Welcome onPage={pageHandler} />}
            {currentPage === 'Category' && <Category onSelectedCategory={selectedCategoryHandler} onPage={pageHandler} />}
            {currentPage === 'Videos' && <Videos onVideoVote={videoVotedHandler} onPage={pageHandler} selectedCategory={category}/>}
            {currentPage === 'Thanks' && <Thanks onPage={pageHandler}/>}
            
          </div>
        </div> */}
      </main>

    </div>
  );
}

export default App;
