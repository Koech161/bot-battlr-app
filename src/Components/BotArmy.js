import React from 'react'
import { useBot } from '../BotContextProvider'
import './Bot.css'


const  BotArmy = () => {
  const {army, handleRelease, handleDischarge} =useBot()

  return (
    <div>
        <h2>Bot Army</h2>
        <div className='bot-army'>
      {army.map(bot=>(
         <div key={bot.id} className='bot-card'>
         <img src={bot.avatar_url} alt={`Avatar of ${bot.name}`} />
         <h2>{bot.name}</h2>
         <p>Class: {bot.bot_class}</p>
         <p>Health: {bot.health}</p>
         <p>Damage: {bot.damage}</p>
         <p>Armor: {bot.armor}</p>
         <button className='release-btn' onClick={() => handleRelease(bot)}>Release</button>
         <br></br>
         <br></br>
         <button className='delete-btn' onClick={() => handleDischarge(bot)}>X</button>
       </div>
      ))} 
        </div>
      
    </div>
  )
}

export default  BotArmy
