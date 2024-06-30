
import { Appbar } from "../components/Appbar.jsx"
import { Balance } from "../components/Balance.jsx"
import { Users } from "../components/Users.jsx"
import ProtectedRoute from "../components/ProtectedRoute.jsx"


export const Dashboard = () => {
    return <div>
        <ProtectedRoute>
            <Appbar />
            <div className="m-8">
                <Balance />
                <Users />
            </div>
        </ProtectedRoute>
        
    </div>
}