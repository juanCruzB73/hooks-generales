export const Character = ({data})=>{
    return(
        <blockquote className="blockquote text-start">
            <p className="mb-1">{data.name}</p>
            <img src={data.image} alt=""/>
        </blockquote> 
    )
}