import React from 'react'
import BotCollection from './Components/BotCollection'
import BotDetails from './Components/BotDetails'
import NotFound from './Components/NotFound'

const routes=
     [
    {
        path:'/',
        element: <BotCollection />
    },
    {
        path:'/bots',
        element: <BotCollection />
    },
   {
    path:'/bots/:id',
    element: <BotDetails />
   },
   {
    path: '*',
    element: <NotFound />
   }

]

export default routes
