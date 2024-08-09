import React, { useState } from 'react'

const  BotArmy = () => {
   const [army, setArmy] = useState([])
   
   const eEnlist = (bot) => {
    if(!army.find(b => b.id === bot.id)){
      setArmy([...army, bot])
    }
   }

const handleRelease = (bot) =>{
  setArmy(army.filter(b => b.id !== bot.id))
}

   const handleDischarge = async (bot)=> {
    try {
      await fetch(`http://localhost:3000/bots/${bot.id}`,{
        method:'DELETE'
      })
      setArmy(army.filter(b =>b.id !==bot.id))
    } catch (error) {
      console.error('Failed to delete bot:',error);
      
    }
    
   }
  return (
    <div>
        <h1>Bot Army</h1>
        <div className='bot-army'>
      {army.map(bot=>(
         <div key={bot.id} className='bot-card'>
         <img src={bot.avatar_url} alt={`Avatar of ${bot.name}`} />
         <h2>{bot.name}</h2>
         <p>Class: {bot.bot_class}</p>
         <p>Health: {bot.health}</p>
         <p>Damage: {bot.damage}</p>
         <p>Armor: {bot.armor}</p>
         <button onClick={() => handleRelease(bot)}>Release</button>
         <button onClick={() => handleDischarge(bot)}>X</button>
       </div>
      ))}
        </div>
      
    </div>
  )
}

export default  BotArmy
