import { useLoaderData } from "react-router-dom";


const Details = () => {
    const {brand,description,image_url,price,title} = useLoaderData()
    
    return (
        <div className="flex w-full">
  <div className="grid max-w-[600px]  flex-grow card bg-base-300 rounded-box place-items-center">
    <img src={image_url} alt="" />
  </div>
  <div className="divider divider-horizontal"></div>
  <div className="card bg-base-300 rounded-box p-6">
            <div className="space-y-4">
            <h2 className="text-4xl font-thin text-center">{title}</h2>
            <p className="text-3xl font-bold">Prices -{price}$</p>
            <p>{description}</p>
            <p className="btn btn-ghost text-2xl"> Brand- <span className="uppercase">{brand}</span></p>
            </div>
            <button className="btn uppercase mt-12 btn-success">get it</button>

  </div>
</div>
    );
};

export default Details;