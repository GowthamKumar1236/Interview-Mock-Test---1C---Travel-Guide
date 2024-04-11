import './index.css'

const TravelPackages = props => {
  const {travelPackagesDetails} = props

  const {name, imageUrl, description} = travelPackagesDetails

  return (
    <li className="items">
      <img className="image" src={imageUrl} alt={name} />
      <div className="details">
        <h1 className="name">{name}</h1>
        <p className="description">{description}</p>
      </div>
    </li>
  )
}

export default TravelPackages
