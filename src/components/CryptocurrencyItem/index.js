// Write your JS code here
import './index.css'
const CryptocurrencyItem = props => {
  const {lists} = props
  const {currencyLogo, curencyName, usdValue, euroValue} = lists
  return (
    <li className="lolly">
      <div className="polly">
        <img src={currencyLogo} />
        <p>{curencyName}</p>
      </div>
      <div className="polly">
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
