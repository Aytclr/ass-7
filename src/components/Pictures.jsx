import data from "../helper/data.js"






const Pictures = (props) =>{
    // console.log(data);
    return(
        <div>
            {
                data.map((item,i)=>{
                   
                    return(
                        <div className="container">
                            <div className="picture" key={i} >
                            
                                <div className="imageContainer">
                                    <img src={item.src["large"]} alt="img" />
                                    
                                </div><h1 className="info">{item.photographer}</h1>
                                
                            </div>

                        </div> 
                    )
                })
            }
        </div>
    )
}



export default Pictures;