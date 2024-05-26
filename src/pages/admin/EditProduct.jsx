import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { checkConfirm } from "../../utils/utils";

const EditProduct = () => {
    const data = useLoaderData();

    const [product,setProduct] = useState(data)
    
    const handelChange = (e) =>{
        setProduct(state => {
            const newItem = {...state};
            newItem[e.target.name] = e.target.value;
            return newItem;
        })
    }

    const handleEdit =  (e) =>{
        e.preventDefault()
        checkConfirm(async ()=>{
            try {
                const response = await fetch(`http://localhost:3000/shoes/${product.id}`,{
                    method:"PATCH",
                    headers:{
                        "content-type":"application/json"
                    },
                    body:JSON.stringify(product)
                });
                const data = await response.json()
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        },{text:'You want to Update this product?'})
        
    }
    return (
        <form onSubmit={handleEdit} className="grid grid-cols-1 gap-4 w-[400px] mx-auto">
                <label className="form-control w-full">
                <span className="label-text">Title</span>
                    <input onChange={(e)=>handelChange(e)} type="text" name="title" value={product.title} className="input input-bordered w-full " />
                </label>
                <label className="form-control">
                <span className="label-text">Brand Name</span>
                <input onChange={(e)=>handelChange(e)} type="text" name="brand" value={product.brand} className="input input-bordered w-full " />
                </label>
                <label className="form-control">
                <span className="label-text">Product Price</span>
                <input onChange={(e)=>handelChange(e)} type="text" name="price" value={product.price} className="input input-bordered w-full " />
                </label>
                <label className="form-control">
                <span className="label-text">Product description</span>
                <textarea onChange={(e)=>handelChange(e)} name="description" className="textarea textarea-ghost w-full  h-48 input-bordered" value={product.description}></textarea>
                </label>
                <label className="form-control">
                <span className="label-text">Product Image Path</span>
                <input onChange={(e)=>handelChange(e)} type="url" name="image_url" value={product.image_url} className="input input-bordered w-full " />
                </label>
                <input className="btn btn-success w-full" type="submit" value="SAVE" />
            
            
            
        </form>
    );
};

export default EditProduct;