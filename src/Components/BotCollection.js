import React, { useEffect, useState } from 'react'
import BotCard from './BotCard'
import './Bot.css'
const BotCollection = ({onEnlist}) => {
    const [bots, setBots]=useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
  
    useEffect(()=>{
      const fetchBots = async () =>{
        try {
          const res = await fetch('http://localhost:3000/bots')
          if(!res.ok){
            setError('Error Fetching Bots')
          }
          const data = await res.json()
          //console.log(data)
          setBots(data)
        } catch (error) {
          
        }finally {
          setIsLoading(false)
        }
      }
      fetchBots()
    },[])
    if(isLoading){
        return <p>Loading...</p>
    }
    if(error){
        return <p>Error: {error}</p>
    }
  return (
    
    <div className='collection'>
        <h1>Bot Battlr</h1>
    <div className='bot-collection'>
    {bots.map(bot=>(
        <BotCard key={bot.id} bot={bot} onEnlist={onEnlist}/>
      ))}
    </div>
     
    </div>
  )
}

export default BotCollection
