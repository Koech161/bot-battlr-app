import React from 'react'
//  import  PropTypes  from 'prop-types'
import { useBot } from '../BotContextProvider'
import './Bot.css'


const  BotArmy = () => {
  const {army, handleRelease, handleDischarge} =useBot()

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
// BotArmy.propTypes = {
//   army: propTypes.arrayOf(
//     propTypes.shape({
//       id: propTypes.number.isRequired,
//       name: propTypes.string.isRequired,
//       avatar_url: propTypes.string.isRequired,
//       bot_class:propTypes.string.isRequired,
//       health: propTypes.number.isRequired,
//       damage: propTypes.number.isRequired,
//       armor: propTypes.number.isRequired,
//     })
//   ).isRequired,
//   handleRelease: propTypes.func.isRequired,
//   handleDischarge: propTypes.func.isRequired,
// }
export default  BotArmy
