import "../styles/components/Card.scss";
const Card = ({ logo, title }) => {
  return (
    <div className="card">
      <div className="logo">{logo}</div>
      <div className="card-title">
        <h4>{title}</h4>
      </div>
    </div>
  )
}

export default Card