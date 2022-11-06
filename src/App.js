
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';
import reactGfm from 'remark-gfm';
import DefaultText from './defText';
import logo from './GitHub-Mark-Light-64px.png';

function App() {
  
  const [text, setText] = useState(DefaultText)
  return (

  <div className="container">
    <header className='header'>
      <h1> It`s react-markdown-previewer</h1>
        <a href="https://github.com/erizo47" target="_blank" rel="noopener noreferrer">
          <img src={logo}  alt="Link to GitHub page"></img>
        </a>
    </header>
    <main>
      <div className="editor">
        <form>
          <textarea
          value={text}
          className='text'
          onChange={e => setText(e.target.value)}
          ></textarea>
        </form>
      </div>
      <div className="previewer">
        <div className='markdown-body'>
          <ReactMarkdown children={text} remarkPlugins={reactGfm}></ReactMarkdown>
        </div>      
      </div>
    </main>    
   </div>




  );
}

export default App;
