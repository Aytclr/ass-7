import data from "../helper/data"
import Pictures from "../components/Pictures"

const Homepage =()=>{
    
    return(
        <div className="home-container">
            <h1>Image Gallery</h1>
            <div className="container">
                { // js alan olduğu için süslü parantez içinde yazılır.
                    data.map((item)=>{
                        const {photographer,src}=item
                        return <Pictures pht={photographer} src={src.large} />
                    })
                }
            </div>
        </div>
    )
}

export default Homepage;