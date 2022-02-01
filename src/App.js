import React, {useState} from 'react'
import './App.css';
import Category from './components/Category';
import Header from './components/Header';
import Thanks from './components/Thanks';
import Videos from './components/Videos';
import Welcome from './components/Welcome';
import Start from './components/Start';

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

  return (
    <div className={`App page_video ${currentPage}`}>
      <Header onPage={pageHandler}/>
      <section className="section_content">
        <div className="container mx-auto px-4">
          <div className="flex flex-col justify-center items-center">
            {currentPage === 'Start' && <Start onPage={pageHandler} />}
            {currentPage === 'Welcome' && <Welcome onPage={pageHandler} />}
            {currentPage === 'Category' && <Category onSelectedCategory={selectedCategoryHandler} onPage={pageHandler} />}
            {currentPage === 'Videos' && <Videos onVideoVote={videoVotedHandler} onPage={pageHandler} selectedCategory={category}/>}
            {currentPage === 'Thanks' && <Thanks onPage={pageHandler}/>}
            
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default App;
