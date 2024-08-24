import "../style/style.css"
const Pictures =({pht,src})=>{
    return(
        <div className="photo-wrapper">
            <div className="image-container"><img className="image" src={src} alt="" />
        </div>
        <div className="info">{pht}</div>
    </div>

    )
}

export default Pictures;