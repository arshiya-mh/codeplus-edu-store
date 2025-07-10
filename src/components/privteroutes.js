import { Navigate } from "react-router-dom"

function Privteroutes({ children }) {
    const islogin = (username) => {
        if (username == "admin") return true;
        return false;
    }

return (
    <>
        {islogin("admin") ? children : <Navigate to='/' />}
    </>
)
}
export default Privteroutes