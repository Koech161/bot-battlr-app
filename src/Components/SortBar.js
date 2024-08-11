import React, { useState } from 'react'
import BotCard from './BotCard';
import './Bot.css'
import { useBot } from '../BotContextProvider';

const SortBar = ({bots}) => {
    const {handleEnlist} =useBot
    const [isSorted, setIsSorted]=useState(false)
    const desecinding =[...bots].sort((a, b)=> b.health - a.health)
    console.log(desecinding);
    const toggleSort = () =>{
        setIsSorted(prev => !prev)
    }
  return (
    <div>
    <h2>Sorted</h2>
    <button onClick={toggleSort}>
    {isSorted ? 'sortByHealth' : 'notSort'}
    </button>
    {isSorted && (
        <div className='sorted'>
            {desecinding.map(bot =>(
                <BotCard key={bot.id} bot={bot} handleEnlist={handleEnlist} />
            ))}
        </div> 

    )}
    
    
    </div>
  )
}

export default SortBar
