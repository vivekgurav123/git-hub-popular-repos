// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {eachRepo} = props
  const {avatarUrl, forksCount, issuesCount, starsCount, name} = eachRepo
  return (
    <li className="repo-items">
      <img src={avatarUrl} alt={name} />
      <h1>{name}</h1>
      <p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="star"
        />{' '}
        {starsCount} stars
      </p>
      <p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="star"
        />{' '}
        {forksCount} forks
      </p>
      <p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png "
          alt="open issues"
          className="star"
        />{' '}
        {issuesCount} open issues
      </p>
    </li>
  )
}

export default RepositoryItem
