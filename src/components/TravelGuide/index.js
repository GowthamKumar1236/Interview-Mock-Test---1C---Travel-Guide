import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TravelPackages from '../TravelPackages'
import './index.css'

class TravelGuide extends Component {
  state = {travelPackages: [], isLoading: false}

  componentDidMount() {
    this.getTravelPackages()
  }

  getTravelPackages = async () => {
    this.setState({isLoading: true})
    const travelGuidePackagesApiUrl = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }

    const response = await fetch(travelGuidePackagesApiUrl, options)
    const travelData = await response.json()

    if (response.ok) {
      const fetchedData = travelData.packages.map(each => ({
        id: each.id,
        name: each.name,
        imageUrl: each.image_url,
        description: each.description,
      }))
      this.setState({travelPackages: fetchedData, isLoading: false})
    }
  }

  renderLoading = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  render() {
    const {travelPackages, isLoading} = this.state
    return (
      <div className="bg-container">
        <div className="top-container">
          <h1 className="heading">Travel Guide</h1>
          <hr className="underline" />
        </div>
        {isLoading ? (
          this.renderLoading()
        ) : (
          <ul className="list-items-container">
            {travelPackages.map(eachPackage => (
              <TravelPackages
                key={eachPackage.id}
                travelPackagesDetails={eachPackage}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default TravelGuide
