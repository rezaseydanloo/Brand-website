import "./NewCollection-Css/HorizontalPart.css" 

export default function HorizontalPart({ imgPath }: { imgPath: string }){

    return(

        <div className="card">
            <div className="content">
                <h1> ford mustang 1969 </h1>
                <p>description </p>  
            </div>
            
            <div className="image-box">
                <img src="" alt="new collection sample" />
            </div>
            

        </div>

    )
}