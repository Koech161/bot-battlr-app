import React from 'react'
import BotCollection from './Components/BotCollection'
import BotDetails from './Components/BotDetails'
import NotFound from './Components/NotFound'
import ErrorPage from './Components/ErrorPage'
import BotArmy from './Components/BotArmy'

const routes =
    [
        {
            path: '/',
            element: <BotCollection />
        },
        {
            path: '/bots',
            element: <BotCollection />,
            errorElement: <ErrorPage />
        },
        {
            path: '/bots/:id',
            element: <BotDetails />,
            errorElement: <ErrorPage />
        },
        {
            path: '/army',
            element: <BotArmy />,
            errorElement: <ErrorPage />
        },
        {
            path: '*',
            element: <NotFound />,
            errorElement: <ErrorPage />
        },

    ]

export default routes
