import { Routes, Route } from 'react-router-dom';
import { Default } from './layouts/Default';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Route>
    </Routes>
  )
}