import { Link } from "react-router-dom";
import { AiFillEdit,AiFillCloseCircle,AiFillEye   } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
const Product = ({product,admin,handelDelete}) => {


    // eslint-disable-next-line react/prop-types
    const {brand,description,id,image_url,price,title}= product;

    

    return (
        <div className="card card-compact w-72 bg-base-100 shadow-xl">
  <figure><img src={image_url} alt={title} /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
   
    <p>{description?.slice(0,100)}...</p>
    <p className=" uppercase font-semibold">{brand}</p>
    <div className="card-actions justify-end">
        <p className="font-semibold text-2xl text-white">{price}$</p>
        
       {admin ?  <div className="flex w-full justify-center gap-6 btn">
                <Link to={`/dashboard/product/edit/${id}`}><AiFillEdit className="w-6 h-6 text-yellow-300"/></Link>
               <Link to={`/product/${id}`}><AiFillEye className="w-6 h-6"/></Link> 
                <AiFillCloseCircle onClick={()=>handelDelete(id)} className="w-6 h-6 text-red-500"/>
        </div> : <Link className="btn btn-ghost uppercase text-yellow-400" to={`/product/${id}`}>Details</Link>}
            
    </div>
  </div>
</div>
    );
};

export default Product;