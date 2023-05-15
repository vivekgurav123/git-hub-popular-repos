// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {eachLang, onBtnClick} = props
  const {id, language} = eachLang

  const onLangClick = () => {
    onBtnClick(id)
  }

  return (
    <li className="list-item">
      <button type="button" onClick={onLangClick}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
