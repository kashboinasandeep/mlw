import { Link } from "react-router-dom";
const Dashboard = ()=>{
    return(
        <>
        <div className="dashboard_owner">
        <div className="dashboard_links">
        <Link to= "/mobiles" style={{marginRight:"100px"}} className="dashboard_link1">Mobiles</Link><br /><br />
        <Link to= "/laptops" style={{marginRight:"100px"}}className="dashboard_link1">Laptops</Link><br /><br />
        <Link to= "/watches" style={{marginRight:"100px"}}className="dashboard_link1">Watches</Link><br /><br />
        </div>
        </div>
        </>
    )
}
export default Dashboard;
