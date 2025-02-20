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

            <div className="content space-y-2">
                <h1> product name  </h1>
                <p> size : xs , xl , xxl , xxxl </p>
                
                <div className="w-full h-4 flex justify-center items-center space-x-1 ">
                    <p className=" flex"> color : </p>
                    <div className="w-3 h-3 bg-white mt-1 "></div>
                    <div className="w-3 h-3 bg-black mt-1 "></div>
                    <div className="w-3 h-3 bg-red-600 mt-1 "></div>
                    <div className="w-3 h-3 bg-green-400 mt-1 "></div>
                </div>
            </div>
        </div>
    )
}