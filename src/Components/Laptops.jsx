
import "./Style.css";
import { Link } from "react-router-dom";
const Laptops = () => {
  return(
    <>
      <div className="laptop_owner">
      <Link to={"/Dashboard"} className="link_dashboard">Dashboard</Link><br />
      <Link to={"/"} className="login_all">LogOut</Link>
      <Link to={"/watches"} className="next">next</Link><br /><br />
     
     <h2 className="laptop_header">Laptops Store </h2>
      <div className="laptop_container">

        <div className="image_one">
        <img src="https://jfsexcelr.s3.ap-south-1.amazonaws.com/laptop2.jpeg"   alt="error" />
        <h5>Brand:HP</h5>
        <h5>Cost:1500000</h5>
        <button className="laptop_cart">CART</button>
        <button className="laptop_buy">BUY</button>
        </div>

        <div className="image_one">
        <img src="https://jfsexcelr.s3.ap-south-1.amazonaws.com/laptop2.jpeg"   alt="error" />
        <h5>Brand:HP</h5>
        <h5>Cost:1500000</h5>
        <button className="laptop_cart">CART</button>
        <button className="laptop_buy">BUY</button>
        </div>


        <div className="image_one">
        <img src="https://jfsexcelr.s3.ap-south-1.amazonaws.com/laptop2.jpeg"   alt="error" />
        <h5>Brand:HP</h5>
        <h5>Cost:1500000</h5>
        <button className="laptop_cart">CART</button>
        <button className="laptop_buy">BUY</button>
        </div>

        <div className="image_one">
        <img src="https://jfsexcelr.s3.ap-south-1.amazonaws.com/laptop2.jpeg"   alt="error" />
        <h5>Brand:HP</h5>
        <h5>Cost:1500000</h5>
        <button className="laptop_cart">CART</button>
        <button className="laptop_buy">BUY</button>
        </div>


        <div className="image_one">
        <img src="https://jfsexcelr.s3.ap-south-1.amazonaws.com/laptop2.jpeg"   alt="error" />
        <h5>Brand:HP</h5>
        <h5>Cost:1500000</h5>
        <button className="laptop_cart">CART</button>
        <button className="laptop_buy">BUY</button>
        </div>


       
        <div className="image_two">
        <img src="https://jfsexcelr.s3.ap-south-1.amazonaws.com/laptop4.jpeg"   alt="error" />
        <h5>Brand:Extensa</h5>
        <h5>Cost:150000</h5>
        <button className="laptop_cart">CART</button>
        <button className="laptop_buy">BUY</button>
        </div>

        <div className="image_two">
        <img src="https://jfsexcelr.s3.ap-south-1.amazonaws.com/laptop4.jpeg"   alt="error" />
        <h5>Brand:Extensa</h5>
        <h5>Cost:150000</h5>
        <button className="laptop_cart">CART</button>
        <button className="laptop_buy">BUY</button>
        </div>

        <div className="image_two">
        <img src="https://jfsexcelr.s3.ap-south-1.amazonaws.com/laptop4.jpeg"   alt="error" />
        <h5>Brand:Extensa</h5>
        <h5>Cost:150000</h5>
        <button className="laptop_cart">CART</button>
        <button className="laptop_buy">BUY</button>
        </div>

        <div className="image_two">
        <img src="https://jfsexcelr.s3.ap-south-1.amazonaws.com/laptop4.jpeg"   alt="error" />
        <h5>Brand:Extensa</h5>
        <h5>Cost:150000</h5>
        <button className="laptop_cart">CART</button>
        <button className="laptop_buy">BUY</button>
        </div>

   
      </div>
      </div>


    </>
  )
}

export default Laptops;

