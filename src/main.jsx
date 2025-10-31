import { StrictMode,  } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import root from './Root/root.jsx'
import Users from './components/users.jsx'
import UserDetails from './components/UserDetails.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    Component: root,
    children: [
      {
        path: 'mobile',
        element: <h1>here is your mobile</h1>
      },
      {
        path: 'laptop',
        element: <h1>here is your laptop</h1>
      },
      {
        path: 'user',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users').then(res=> res.json()),
        element: 
          <Users></Users>,
      },
      {
        path: '/users/:userId',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
        ,
        element: <UserDetails></UserDetails>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
