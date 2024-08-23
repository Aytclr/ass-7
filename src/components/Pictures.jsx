import data from "../helper/data.js"






const Pictures = (props) =>{
    // console.log(data);
    return(
        <div className="container">
            {
                data.map((item,i)=>{
                   
                    return(
                        
                            <div className="picture" key={i} >
                            
                                <div className="imageContainer">
                                    <img src={item.src["large"]} alt="img" />
                                    
                                </div><h1 className="info">{item.photographer}</h1>
                                
                            </div>

                        
                    )
                })
            }
        </div>
    )
}



export default Pictures;