import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Home, Planets, NotFound } from './pages'
import { Navbar } from './layout'
import config from './config'

const { routes } = config

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Navbar />}>

        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.PLANETS} element={<Planets />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </>
  )
)

const App = () => {
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App

/*
<Home />
<Planets />
<NotFound />
*/