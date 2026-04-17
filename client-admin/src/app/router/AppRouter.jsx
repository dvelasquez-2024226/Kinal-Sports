import { Routes, Route } from 'react-router-dom'
import { AuthPage } from '../../features/auth/pages/AuthPage'
import { ProtecterRoute } from './ProtecterRoute.jsx'
import { DashboardPage } from '../layouts/DashboardPage.jsx'
import { RoleGuard } from './RoleGuard.jsx'
import { Fields } from '../../features/fields/components/Fields.jsx'
import { Reservations } from '../../features/reservations/components/Reservations.jsx'
import { Users } from '../../features/users/components/Users.jsx'
import { Tournaments } from '../../features/tournaments/components/Tournaments.jsx'
import { Teams } from '../../features/teams/components/Teams.jsx'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<AuthPage/>}/>
        <Route
          path="/dashboard"
          element={
            <ProtecterRoute>
              <RoleGuard allowedRoles={["ADMIN_ROLE"]}>
                <DashboardPage />
              </RoleGuard>
            </ProtecterRoute>
          }
        >
          <Route path="fields" element={<Fields/>} />
          <Route path="reservations" element={<Reservations/>} />
          <Route path="users" element={<Users/>} />
          <Route path="tournaments" element={<Tournaments/>} />
          <Route path="teams" element={<Teams/>} />
        </Route>
    </Routes>
  )
}
 
