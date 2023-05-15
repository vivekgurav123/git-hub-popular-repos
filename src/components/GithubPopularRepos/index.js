import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
class GithubPolularRepos extends Component {
  state = {
    activeLangId: languageFiltersData[0].id,
    repoList: [],
    isLoaded: false,
  }

  componentDidMount() {
    this.githubReposApiUrl()
  }

  githubReposApiUrl = async () => {
    const {activeLangId} = this.state
    const apiUrl = `https://apis.ccbp.in/popular-repos?language=${activeLangId}`

    const response = await fetch(apiUrl)
    const fetchedData = await response.json()
    // console.log(fetchedData)
    const updatedData = fetchedData.popular_repos.map(eachRepo => ({
      avatarUrl: eachRepo.avatar_url,
      forksCount: eachRepo.forks_count,
      issuesCount: eachRepo.issues_count,
      starsCount: eachRepo.stars_count,
      id: eachRepo.id,
      name: eachRepo.name,
    }))
    // console.log(updatedData)
    this.setState({
      repoList: updatedData,
      isLoaded: true,
    })
  }

  onBtnClick = activeLangId => {
    this.setState(
      {
        activeLangId,
      },
      this.githubReposApiUrl,
    )
  }

  render() {
    const {repoList, isLoaded} = this.state
    return (
      <div className="full-container">
        {isLoaded ? (
          <div className="container">
            <h1 className="heading">Popular</h1>
            <ul className="lang-list">
              {languageFiltersData.map(eachLang => (
                <LanguageFilterItem
                  eachLang={eachLang}
                  key={eachLang.id}
                  onBtnClick={this.onBtnClick}
                />
              ))}
            </ul>
            <ul className="repo-list">
              {repoList.map(eachRepo => (
                <RepositoryItem eachRepo={eachRepo} key={eachRepo.id} />
              ))}
            </ul>
          </div>
        ) : (
          <div data-testid="loader" className="load">
            <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
          </div>
        )}
      </div>
    )
  }
}

export default GithubPolularRepos
