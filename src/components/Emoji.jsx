import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const Emoji = () => {
    const [emojis, setEmojis] = useState([])
    const [value, setValue] = useState(null)
    const [searchResult, setSearchResult] = useState([])


    useEffect(() => {
        const fetchEmoji = async () =>{
            try{
                    
                        const response = await axios.get('https://emoji-api.com/emojis?access_key=b4678fd1781cfcd57f01ffafca680c0378c4b7bd')
                        setEmojis(response.data)
                    
                }
        
                catch (error){
                    console.error("Unable to get data:", error.message)
        
                }
            
        }

        fetchEmoji()
    })

    const handleChange =() =>{
        e.preventDefault()
        // const result = emojis.find((emoji => emoji))
        // const searchTerm = (event) => {
        //     const filteredEmoji = object.keys(emoji).filter((emoji) =>
        //     )
        // }

    }
    
    
  return (
    <main>
        <form className="formInput" onChange={handleChange}>
            <input type ="text" placeholder="Search emoji..." id="emojiText"onChange={(e) => setValue(e.target.value)}/>
            <button>Search</button>

        </form>
        {
            emojis.map((emoji, index) =>(
                <span key={index}> {emoji.character}</span>
            ))

        }
        
        </main>
  )
}
