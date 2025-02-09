import "./NewCollection-Css/HorizontalPart.css" 

export default function HorizontalPart({ imgPath }: { imgPath: string }){

    return(

        <div className="card">
            <div className="image-box overflow-auto">
                <img src={imgPath} alt="new collection sample" className="object-cover aspect-[2.5/1] " />
            </div>

            <div className="content">
                <h1> ford mustang 1969 </h1>
                <div className="text-block">
                    <p>description dhchbhb d  hdbchb </p> 
                    <p>description </p> 
                    <p>description  d cdcdc dc dc dcd</p> 
                    <p>description </p> 
                    <p>description </p>  
                    <p>description </p>  
                    <p>description </p>  
                    <p>description </p>  
                    <p>description </p>  

                </div>
            </div>
        </div>

    )
}