import React from 'react'
import BotCollection from './Components/BotCollection'
import BotDetails from './Components/BotDetails'
import NotFound from './Components/NotFound'
import ErrorPage from './Components/ErrorPage'
import BotArmy from './Components/BotArmy'

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
    path:'/army',
    element: <BotArmy />
   },
   {
    path: '*',
    element: <NotFound />
   },
   {
    path:'/error',
    errorElement: <ErrorPage />
   }
]

export default routes
