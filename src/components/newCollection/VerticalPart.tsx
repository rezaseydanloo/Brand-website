import "./NewCollection-Css/VerticalPart.css"


export default function VerticalPart({imgPath}:{imgPath:string}){

    return(
        <div className="card">

            <div className="image-box">
                <img src={imgPath} alt="new collection sample"  />
            </div>
            
            <div className="content">
                <h1> ford mustang 1969</h1>
                <p>description jdncdn</p>
                <p>description jdncdn</p>
                <p>description jdncdndh db dhb</p>
                <p>description jdncdndhbdhbc</p>
                <p>description jdncdn dcbb</p>
                <p>description jdncdn</p>
            </div>

        </div>
    )
}