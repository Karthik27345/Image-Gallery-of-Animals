const Image = (props)=>{

    return(<>
    <div className="image-card">

<img src={props.img} alt={props.name}></img>

   <i class="fa-solid fa-heart heart"></i>

<h3>{props.name}</h3>

<p>{props.des}</p>
    
    
    
    
    </div></>)

}

export default Image