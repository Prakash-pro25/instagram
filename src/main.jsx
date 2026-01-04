
import { createRoot } from 'react-dom/client'
import './index.css';
import Home from './home'
import Profile from './proflies'
import View from './view'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'men', element: <Profile /> }
    ]
  },
  { path: '/view/:id/:tot', element: <View /> }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
