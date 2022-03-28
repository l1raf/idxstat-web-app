import './styles/App.css';
import Search from './components/UI/search/Search';
import NavBar from './components/UI/navbar/NavBar';
import { Typography } from '@mui/material';

function App() {

  return (
    <div className="App">
      <NavBar />
      <div className="main">
        <Typography style={{ textAlign: "center", margin: "40px", marginTop: "60px", fontWeight: "bold" }} variant="h4">
          Index Checker
        </Typography>
        <Search />
      </div>
    </div>
  );
}

export default App;