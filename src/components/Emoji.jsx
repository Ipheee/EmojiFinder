import { useEffect, useState } from 'react';
import axios from 'axios';
import {FaSearch} from 'react-icons/fa';
import './Emoji.css';

export const Emoji = () => {
  const [emojis, setEmojis] = useState('');
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);
  


  useEffect(() => {
    const fetchData = async (value) =>{
      try{
                      
        const response = await axios.get('https://emoji-api.com/emojis',{
          params: {
            access_key: 'b4678fd1781cfcd57f01ffafca680c0378c4b7bd',
            search: value,
          },      
                  
        });
  
        // console.log(response.data);
        setEmojis(response.data);
  
        // if (response.data.length === 1) {
        //   setEmojis('single');
        // } else {
        //   setEmojis('');
        // }
        
        // if (handleCopy (results.character == 1))
        // alert ('copied');
  
          
      } catch (error){
        console.error("Unable to get data:", error.message);    
      }  
    };
  
    fetchData()
  },[])

  console.log(input)
    const handleCopy = (character) => {
      navigator.clipboard.writeText(character);
      alert ('copied');
      
    };

    // if (handleCopy (results.character == 1))
    //     alert ('copied');

    const handleSearch = (e) => {
      e.preventDefault()
      const searchedEmojis = emojis.filter((emoji) => emoji.slug.includes(input))
      setResults(searchedEmojis)
    }
    
    // console.log(results)

  return (
    <div>
        <form>
            <input className='emoji'
            placeholder="Search emoji..." id="emoji" 
            value={input}
            onChange={(e) => setInput(e.target.value)}/>
          <button onClick={handleSearch}><FaSearch id='searchIcon'/></button>
          
            
            
        </form>
        
        <div className='emojiSection'>
        {emojis.length > 0 &&
          results.map((result, index) => (
              <span className={'icon ' + result} key={index}onClick={() => handleCopy(result.character)} title={result.slug}>{result.character}</span>

              
            
          ))}
        </div>
        </div>
  );
};
