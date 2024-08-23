import data from "../helper/data.js"
import "../style/style.css"




const Pictures = () =>{
    console.log(data);
    return(
        <div>
            {
                data.map((item,i)=>{
                   
                    return(
                        <div key={i}>

                          <h1 className="cardStyleTile" >{item.photographer}</h1>  
                          <img src={item.src["large"]} alt="" className="pictures" />

                        </div>
                    )
                })
            }
        </div>
    )
}



export default Pictures;