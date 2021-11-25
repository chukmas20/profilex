import "./product.css";



const Product = ({img, link}) => {
    return (
        <div className="p">
             <div className="p-browser">
                 <div className="p-circle"></div>
                 <div className="p-circle"></div>
                 <div className="p-circle"></div>
             </div>
             <a href={link} rel="noreferrer" target="_blank">
                  <img src={img}   alt="site" className="p-img"  />
             </a>
        </div>
    )
}

export default Product
