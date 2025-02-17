import "./NewCollection-Css/Product.css"

export default function Product({path} : {path:string}){

    return (
        <div className="sm:row-span-1 sm:col-span-1  
                        lg:row-span-1 lg:col-span-1 
                        xl:row-span-1 xl:col-span-1
                         card">

            
        
            <div className="image-box">
                <img src={path} alt="" />
            </div>

            <div className="content">
                <h2> title </h2>
                <p> describtion </p>
            </div>
        </div>
    )
}