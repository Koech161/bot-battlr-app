import React from 'react'
import './Bot.css'
import { Link } from 'react-router-dom'
const BotCard = ({bot, onEnlist}) => {
  return (
    <div className='bot-card'>
      <img src={bot.avatar_url} alt={bot.name}/>
      <h2>{bot.name}</h2>
      <p>class:{bot.bot_class}</p>
      <p>Health:{bot.health}</p>
      <p>Damage:{bot.damage}</p>
      <p>Armor:{bot.armor}</p>
      <Link to={`/bots/${bot.id}`}>View Details</Link>
      <button onClick={() => onEnlist(bot)}>Enlist</button>
    </div>
  )
}

export default BotCard
