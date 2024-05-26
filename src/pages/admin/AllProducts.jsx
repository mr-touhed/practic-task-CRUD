import { useEffect, useState } from "react";
import Product from "../../components/home/Products/Product";
import useFetchProducts from "../../hooks/useFetchProducts";
import { checkConfirm } from "../../utils/utils";


const AllProducts = () => {
    const [allproducts,loading,error] = useFetchProducts();
    const [products,setProducts] = useState([])
    const handelDelete = (id) =>{
        const  removeProduct = async() =>{
          try {
            const response = await fetch(`http://localhost:3000/shoes/${id}`,{
              method:"DELETE"
            })
            const data = await response.json()
            if(data){
                const exist_Product = products.filter(product => product.id !== id);
                setProducts(exist_Product)
            }
          } catch (error) {
            console.log(error);
          }
        }
        checkConfirm(removeProduct,{text:"You went to Delete This Product?"})
}

useEffect(()=>{
    setProducts(allproducts)
},[allproducts])
    let content;
    if(loading){
        content = <>
        <span className="loading loading-ball loading-xs"></span>
        <span className="loading loading-ball loading-sm"></span>
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-lg"></span>
        </>
    }else if(error) {
        content = error
    }else{
        content = products.map(product =>  <Product admin={true} key={product.id} product={product} handelDelete={handelDelete}/>)
    }
    return (
        <div className='my-16'>
                <h2 className='text-4xl font-thin text-center mb-9'>List Of  Products</h2>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-4 items-center justify-center'>
                {content}
        </div>
        </div>
    );
    
};

export default AllProducts;

