import lion from "../assests/images/lion.jpg"
import elephant from "../assests/images/elephant.jpg"
import tiger from "../assests/images/tiger.jpg"
import panda from "../assests/images/panda.jpg"
import giraffe from "../assests/images/giraffe.jpg"
import eagle from "../assests/images/eagle.jpg"
import hyena from "../assests/images/hyena.jpg"
import wolf from "../assests/images/wolf.jpg"
import Image from "../components/image"


let cards = [
  {
    img: lion,
    name: "Lion",
    des: "The king of the jungle"
  },
  {
    img: elephant,
    name: "Elephant",
    des: "The largest land animal"
  },
  {
    img: tiger,
    name: "Tiger",
    des: "A powerful striped predator"
  },
  {
    img: panda,
    name: "Panda",
    des: "A cute bamboo-loving bear"
  },
  {
    img: eagle,
    name: "Eagle",
    des: "A sharp-eyed flying hunter"
  },
  {
    img: giraffe,
    name: "Giraffe",
    des: "The tallest land animal"
  },

  {
    img: wolf,
    name: "Wolf",
    des: "A social wild canine"
  }
  ,
  {

    img: hyena,
    name: "Hyena",
    des: "A scavenging wild carnivore"

  }
]


let card = cards.map((item)=>{
return(
    <Image img = {item.img} name={item.name} des={item.des}></Image>)
}
)

const ImageGallery = ()=>{
    return(<>
    
    <div className="main">

        <h1>A Image Gallery of Animals</h1>

        <div class="container">
            {card}
        </div>
    </div>
    </>)
}

export default ImageGallery