// Write your code here
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
import {Component} from 'react'
import CryptocurrenciesList from '../CryptocurrenciesList'
class CryptocurrencyTracker extends Component {
  state = {details: [], isLoading: true}
  componentDidMount() {
    this.getDetails()
  }
  getDetails = async () => {
    const u = await fetch('https://apis.ccbp.in/crypto-currency-converter')
    const i = await u.map(eachItem => ({
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
    }))
    this.setState({details: i, isLoading: false})
  }
  render() {
    const {details, isLoading} = this.state
    return (
      <div className="balu">
        {isLoading ? (
          <div>
            <Loader type="TailSpin" width={50} color="#ffffff" height={50} />
          </div>
        ) : (
          <div>
            <CryptocurrenciesList currencyList={details} />
          </div>
        )}
      </div>
    )
  }
}
export default CryptocurrencyTracker
