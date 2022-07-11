import CareScale from "./CareScale"
import '../styles/PlantItem.css'

function handleClick(plantName) {
  alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
}

function PlantItem( {name, cover, id, light, water}) {
      return (
              <li key={id} className='lmj-plant-item' onClick={() => handleClick }>
                      <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
                    <div>
                        <CareScale careType='water' scaleValue={water} />
                        <CareScale careType='light' scaleValue={light} />
                    </div>
              </li>
      )

}

export default PlantItem
