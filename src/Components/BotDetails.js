import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Bot.css'
import { useBot } from '../BotContextProvider'
const BotDetails = () => {
  const {handleEnlist} = useBot()
    const {id} =useParams()
    const [bot, setBot]= useState(null)

    useEffect(()=>{
        fetch(`http://localhost:3000/bots/${id}`)
        .then(res=>res.json())
        .then(data=> setBot(data))
    },[id])
    if(!bot) return <p>Loading...</p>
  return (
    <div className='bot-details'>
      <img src={bot.avatar_url} alt={bot.name}/>
      <h2>Name: {bot.name}</h2>
      <p>class:{bot.bot_class}</p>
      <p>Health:{bot.health}</p>
      <p>Damage:{bot.damage}</p>
      <p>Armor:{bot.armor}</p>
      <p>Catchphrase:{bot.catchphrase}</p>
      <p>Created_at:{new Date(bot.created_at).toLocaleDateString()}</p>
      <p>Updated_at:{new Date(bot.updated_at).toLocaleDateString()}</p>
      <button onClick={()=>handleEnlist(bot)}>Enlist</button>
    </div>
  )
}

export default BotDetails
