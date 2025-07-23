import type { Recipe } from "../types/types"

const afficheData = (data:Recipe)=>{
        return(
            <div key={data.id}>
                <h2>{data.title}</h2>
                <img src={data.image} alt={data.title} />
            </div>
        )
}
export default afficheData