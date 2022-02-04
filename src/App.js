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
          <Route path="/categorias/:categoryId" element={<Videos onPage={pageHandler} selectedCategory={category} />} />
          <Route path="/gracias" element={<Thanks/>} />
          <Route path="*" element={<NotFound/>}/>
            
        </Routes>

      </main>

    </div>
  );
}

export default App;
