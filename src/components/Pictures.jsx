import data from "../../data.js"




const Card = () =>{
    console.log(data);
    return(
        <div>
            {
                data.map((item,i)=>{
                   
                    return(
                        <div key={i}>

                          <h1 className="cardStyleTile" >{item.photographer}</h1>  
                          <img src={item.large} alt="" className="cardStyles.images" />

                        </div>
                    )
                })
            }
        </div>
    )
}



export default Card;