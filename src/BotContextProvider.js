import React, { createContext, useCallback, useContext , useState } from 'react'

const  BotContext = createContext()

 export const BotContextProvider = ({children}) => {
    const [army, setArmy] =useState([])
  const handleEnlist = useCallback((bot) => {
       setArmy(prevArmy=>{
        if(!prevArmy.find(b=> b.id === bot.id)){
            return [...prevArmy, bot]
        }
        return prevArmy
       })
      },[])

      const handleRelease = useCallback((bot)=>{
        setArmy(prevArmy => prevArmy.filter(b => b.id !== bot.id))
      },[])

         const handleDischarge = useCallback(async (bot)=> {
               try {
                await fetch(`http://localhost:3000/bots/${bot.id}`,{
                  method:'DELETE'
               })
                setArmy(prevArmy => prevArmy.filter(b => b.id !== bot.id))
               } catch (error) {
                 console.error('Failed to delete bot:',error);
                
               }
              
           },[])
  return (
  <BotContext.Provider value={{army, handleRelease, handleEnlist, handleDischarge}}>
    {children}
  </BotContext.Provider>
  )
}
export const useBot = () => {
    return useContext(BotContext)
}


