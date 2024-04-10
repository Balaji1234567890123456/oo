// Write your JS code here
import './index.css'
import CryptocurrencyItem from '../CryptocurrencyItem'
const CryptocurrenciesList = props => {
  const {currencyList} = props
  return (
    <div className="king">
      <h1>Cryptocurrency Tracker</h1>
      <img src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png" />
      <div className="roy">
        <div className="kol">
          <h1>coin</h1>
          <h1>Type</h1>
        </div>
        <div className="kol">
          <h1>USD</h1>
          <h1>EURO</h1>
        </div>
        <ul className="pol">
          {currencyList.map(eachItem => (
            <CryptocurrencyItem lists={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default CryptocurrenciesList
