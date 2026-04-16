import { Routes, Route } from 'react-router-dom'
import { AuthPage } from '../../features/auth/pages/AuthPage'
import { ProtecterRoute } from './ProtecterRoute.jsx'
import { DashboardPage } from '../layouts/DashboardPage.jsx'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthPage/>}/>
      <Route 
        path="/dashboard" 
        element={
          <ProtecterRoute>
            <DashboardPage />
          </ProtecterRoute>
        }
      />
    </Routes>
  )
}
