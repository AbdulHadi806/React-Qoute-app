import './App.css';
import React,{useEffect,useState} from 'react';

function App() {
  const [quotes, setQuotes] = useState()
  const api = "https://type.fit/api/quotes"
  useEffect(()=> {
    const dataHandler = async(api) => {
      try {
        const res = await fetch(api)
        const data = await res.json()
        const len = data.length
        const randomData = data[Math.floor(Math.random() * len)]
        setTimeout(()=> {
          setQuotes(randomData);
        },7800)
      } catch(error){
        console.log(error)
      }
    }
    dataHandler(api)
  })
  return (
    <div className="App">
      <div className='container'>
      <div className='main-row'>
        <h1 className='author'>{ quotes && quotes.author}</h1>
        <p>{quotes && quotes.text}</p>
      </div>
      </div>
    </div>
  );
}

export default App;
