import './App.css'
import Header from './components/UI/header/Header'
import Search from './components/UI/search/Search'

function App() {

  return (
    <div className="App">
      <Header />
      <h1 style={{ textAlign: "center", margin: "20px" }}>Index Checker</h1>
      <Search
        placeholder="Enter web page url" />
    </div>
  )
}

export default App