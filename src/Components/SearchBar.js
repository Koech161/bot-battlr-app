import React, { useState } from 'react'
import BotCard from './BotCard';
import './Bot.css'
const SearchBar = ({bots}) => {
console.log("in searchbar:", bots);
const [searchBot, setSearchBot] =useState([])
const handleSearch =(e) =>{
    if(e.target.value === ''){
        setSearchBot([])
        return false
    }
    setSearchBot(bots.filter(bot =>bot.name.toLowerCase().includes(e.target.value)))
}
  return (
    <div>
      <input 
      type='search'
      placeholder='search bot by name...'
      onChange={handleSearch}
      
    />
    {searchBot && (
        <div className='search-bot'>
            {searchBot.map(bot=>(
                <BotCard key={bot.id} bot={bot} />
            ))}
            </div>
        
    )}
    </div>
  )
}

export default SearchBar
