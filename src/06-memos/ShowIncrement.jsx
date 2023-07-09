export const ShowIncrement = ({increment})=>{
    console.log("lol")
    return(
        <>
        <button className="btn btn-primary" onClick={()=>{increment()}}>
        +1
        </button>
        </>
        
    )
}