import { Routes, Route, Navigate } from 'react-router-dom';
import { Default } from './layouts/Default';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { PasswordReset } from './pages/PasswordReset';
import { NewPassword } from './pages/NewPassword';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route path='/' element={<Navigate to='/login'/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/recover-password' element={<PasswordReset />} />
        <Route path='/new-password' element={<NewPassword />} />
      </Route>
    </Routes>
  )
}