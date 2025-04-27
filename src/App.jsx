import './App.css'
import Home from './Home'
import Login from './Login'
import { Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Form } from 'react-router-dom'
import RootLayout from './RootLayout'
import AboutLayout from './AboutLayout';
import Info from './Info';
import CForm from './Form';
import NotFound from './NotFound'
import UserLayout from './UserLayout'
import Users from './Users'
import { userLoader, userSingleLoader } from './userloader'
import User from './User'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='dashboard' element={<UserLayout />}>
        <Route index element={<Users />} loader={userLoader} />
        <Route path=':id' element={<User />} loader={userSingleLoader} />
      </Route>
      <Route path="about" element={<AboutLayout />}>
        <Route path="info" element={<Info />} />
        <Route path="form" element={<CForm />} />
      </Route>
      <Route path='login' element={<Login />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  ));
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App