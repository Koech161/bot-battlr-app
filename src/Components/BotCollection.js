import React, { useEffect, useState } from 'react'
import BotCard from './BotCard'
import './Bot.css'
import { useBot } from '../BotContextProvider'
import BotArmy from './BotArmy'
const BotCollection = () => {
  const {handleEnlist} = useBot()
    const [bots, setBots]=useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [filteredBots, setFilteredBots]= useState([])
    const [selectedFilters, setSelectedFilters]= useState([])
  
  

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
          setFilteredBots(data)
        } catch (error) {
          
        }finally {
          setIsLoading(false)
        }
      }
      fetchBots()
    },[])
     
    useEffect(()=>{
      if(selectedFilters.length === 0){
        setFilteredBots(bots)
      }else {
        const newFilteredBots = bots.filter(bot => selectedFilters.includes(bot.bot_class))
        setFilteredBots(newFilteredBots)
      }
    }, [selectedFilters, bots]) 

    const handleFilterChange = (e) =>{
      const value = e.target.value
      setSelectedFilters(prevFilters => 
        prevFilters.includes(value)
        ? prevFilters.filter(filter => filter !== value) :
        [...prevFilters, value]
      )
    }

    if(isLoading){
        return <p>Loading...</p>
    }
    if(error){
        return <p>Error: {error}</p>
    }
    const uniqueClasses = [...new Set(bots.map(bot =>bot.bot_class))]
  return (
    
    <div className='collection'>
        <h1>Bot Battlr</h1>
    <div className='filters'>
      |<h2>Filter by Class:</h2>
      {uniqueClasses.map(botclass => (
        <label key={botclass}>
        <input 
        type='checkbox'
        value={botclass}
        checked={selectedFilters.includes(botclass)}
        onChange={handleFilterChange}/>
        {botclass}
        </label>
      ))}
    </div>
        <BotArmy />
        <h1>Available Bots</h1>
        
    <div className='bot-collection'>
    {filteredBots.map(bot=>(
        <BotCard key={bot.id} bot={bot} handleEnlist={handleEnlist}/>
      ))}
    </div>
     
    </div>
  )
}

export default BotCollection
