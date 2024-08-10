import React, { useState } from 'react'
import BotCard from './BotCard';

const SortBar = ({bots}) => {
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
                <BotCard key={bot.id} bot={bot} />
            ))}
        </div>

    )}
    
    
    </div>
  )
}

export default SortBar
