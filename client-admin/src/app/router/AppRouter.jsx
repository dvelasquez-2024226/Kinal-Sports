import { Routes, Route } from 'react-router-dom'
import { AuthPage } from '../../features/auth/pages/AuthPage'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthPage/>}/>
    </Routes>
  )
}
