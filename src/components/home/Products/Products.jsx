

import useFetchProducts from '../../../hooks/useFetchProducts';
import Product from './Product';


const Products = () => {
    const [allproducts,loading,error] = useFetchProducts();
    

    
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
        content = allproducts.map(product =>  <Product key={product.id} product={product} />)
    }
    return (
        <div className='my-16'>
                <h2 className='text-4xl font-thin text-center mb-9'>Our Latest Products</h2>
        <div className='grid grid-cols-4 gap-4 items-center justify-center'>
                {content}
        </div>
        </div>
    );
};

export default Products;