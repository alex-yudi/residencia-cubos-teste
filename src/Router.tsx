import { Routes, Route } from 'react-router-dom';
import { Default } from './layouts/Default';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { PasswordReset } from './pages/PasswordReset';
import { NewPassword } from './pages/NewPassword';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/recover-pass' element={<PasswordReset />} />
        <Route path='/new-password' element={<NewPassword />} />
      </Route>
    </Routes>
  )
}