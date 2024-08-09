import React from 'react'
import BotCollection from './Components/BotCollection'

import BotDetails from './Components/BotDetails'
import BotArmy from './Components/BotArmy'

const routes = [
    {
        path:'/',
        element: <BotCollection onEnlist={(bot)=>{/*handle enlist*/}} />
    },
    {
        path:'/bots',
        element: <BotCollection onEnlist={(bot)=>{/*handle enlist*/}} />
    },
   {
    path:'/army',
    element: <BotArmy />
   },
   {
    path:'/bots/:id',
    element: <BotDetails />
   }

]

export default routes
