import './index.css'

const History = props => {
  const {historyDetails, deleteUser} = props

  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails
  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <li className="lists">
      <p className="time"> {timeAccessed}</p>
      <div className="innerCont">
        <div className="inner2">
          <img className="logo" alt="domain logo" src={logoUrl} />
          <div className="headpara">
            <p className="head"> {title}</p>
            <p className="para">{domainUrl}</p>
          </div>
        </div>
        <button
          className="but"
          onClick={onDelete}
          data-testid="delete"
          type="button"
        >
          <img
            className="delete"
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          />
        </button>
      </div>
    </li>
  )
}
export default History
