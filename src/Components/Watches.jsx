
import "./Style.css";
import { Link } from "react-router-dom";
const Watches = () => {
  return(
    <>
      <div className="watches_owner">
      <Link to={"/Dashboard"} className="link_dashboard">Dashboard</Link><br />
      <Link to={"/"} className="login_all">LogOut</Link>
      <Link to={"/laptops"} className="previous">Previous</Link>
      <h2 className="watches_header">Watches Store</h2>
     
      <div className="watches_container">

        <div className="wimage_one">
        <img src="https://jfsexcelr.s3.ap-south-1.amazonaws.com/watch2.jpeg"   alt="error" className="watches_image" />
        <h5>Brand:TimeWear</h5>
        <h5>Cost:1500000</h5>
        <button className="watches_cart">CART</button>
        <button className="watches_buy">BUY</button>
        </div>

        <div className="wimage_one">
        <img src="https://jfsexcelr.s3.ap-south-1.amazonaws.com/watch2.jpeg"  className="watches_image" alt="error" />
        <h5>Brand:TimeWear</h5>
        <h5>Cost:1500000</h5>
        <button className="watches_cart">CART</button>
        <button className="watches_buy">BUY</button>
        </div>


        <div className="wimage_one">
        <img src="https://jfsexcelr.s3.ap-south-1.amazonaws.com/watch2.jpeg" className="watches_image"  alt="error" />
        <h5>Brand:TimeWear</h5>
        <h5>Cost:1500000</h5>
        <button className="watches_cart">CART</button>
        <button className="watches_buy">BUY</button>
        </div>


        <div className="wimage_one">
        <img src="https://jfsexcelr.s3.ap-south-1.amazonaws.com/watch2.jpeg" className="watches_image"  alt="error" />
        <h5>Brand:TimeWear</h5>
        <h5>Cost:1500000</h5>
        <button className="watches_cart">CART</button>
        <button className="watches_buy">BUY</button>
        </div>




       
        <div className="wimage_two">
        <img src="https://jfsexcelr.s3.ap-south-1.amazonaws.com/watch4.jpeg"  className="watches_image" alt="error" />
        <h5>Brand:FastTrack</h5>
        <h5>Cost:150000</h5>
        <button className="watches_cart">CART</button>
        <button className="watches_buy">BUY</button>
        </div>

        <div className="wimage_two">
        <img src="https://jfsexcelr.s3.ap-south-1.amazonaws.com/watch4.jpeg" className="watches_image"  alt="error" />
        <h5>Brand:FastTrack</h5>
        <h5>Cost:150000</h5>
        <button className="watches_cart">CART</button>
        <button className="watches_buy">BUY</button>
        </div>


        <div className="wimage_two">
        <img src="https://jfsexcelr.s3.ap-south-1.amazonaws.com/watch4.jpeg" className="watches_image"  alt="error" />
        <h5>Brand:FastTrack</h5>
        <h5>Cost:150000</h5>
        <button className="watches_cart">CART</button>
        <button className="watches_buy">BUY</button>
        </div>


        <div className="wimage_two">
        <img src="https://jfsexcelr.s3.ap-south-1.amazonaws.com/watch4.jpeg" className="watches_image"  alt="error" />
        <h5>Brand:FastTrack</h5>
        <h5>Cost:150000</h5>
        <button className="watches_cart">CART</button>
        <button className="watches_buy">BUY</button>
        </div>

        <div className="wimage_two">
        <img src="https://jfsexcelr.s3.ap-south-1.amazonaws.com/watch4.jpeg" className="watches_image"  alt="error" />
        <h5>Brand:FastTrack</h5>
        <h5>Cost:150000</h5>
        <button className="watches_cart">CART</button>
        <button className="watches_buy">BUY</button>
        </div>

   
      </div>
      </div>


    </>
  )
}

export default Watches;

