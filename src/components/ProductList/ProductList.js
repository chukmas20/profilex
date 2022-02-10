import Product from "../product/Product";
import "./productlist.css";
import {products} from "../../data";


const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
               <h1 className="pl-title">Some Completed Projects</h1>
               <p className="pl-desc">
                   You may click on any of the images below to view a completed project in your browser
               </p>
            </div>
            <div className="pl-list">
                {products.map((item)=>(
                    <Product key={item.id} img={item.img} link={item.link}/>              
                ))}
            </div>
        </div>
    )
}

export default ProductList
