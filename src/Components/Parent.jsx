import Mobiles from "./Mobiles";
import Watches from "./Watches";
import Laptops from "./Laptops";
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Login from "./Login";
import Dashboard from "./Dashboard";
import Queries from "./Queries";
import Error from "./Error";
import Forgotpwd from "./Forgotpwd";
const Parent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/error" element={<Error />} />
                <Route path="/queries" element={<Queries />} />
                <Route path="/mobiles" element={<Mobiles />} />
                <Route path="/laptops" element={<Laptops />} />
                <Route path="/watches" element={<Watches />} />
                <Route path="/forgot_password" element={<Forgotpwd />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Parent;
