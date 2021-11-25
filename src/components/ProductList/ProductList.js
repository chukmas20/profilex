import Product from "../product/Product";
import "./productlist.css";
import {products} from "../../data";


const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
               <h1 className="pl-title"> Get good quality</h1>
               <p className="pl-desc">
                   In publishing and graphic design,
                    Lorem ipsum is a placeholder text commonly
                    used to demonstrate the visual form of a document
                     or a typeface without relying on meaningful content.
                    Lorem ipsum may be used as a placeholder before final copy is available
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
