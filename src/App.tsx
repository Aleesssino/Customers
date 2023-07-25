import SideBar from "./Components/SideBar"
import Table from "./Components/Table";
import TopBar from "./Components/TopBar"
import "./Styles/_home.scss"
import SearchIcon from '@mui/icons-material/Search';

function App() {
  
  return (
    <div className="home">
    
      <TopBar/>
      <SideBar/>

      <div className="homeContainer">
          <div className="headline">Customer Overview</div>

          <div className="wrapper">
            <div className="searchBar">

              <SearchIcon className="searchIcon"/>
              <input type="text" placeholder="Customer or ID"/>
              
            </div>
            <button className="addCustomerButton">+</button>
          </div>
          <Table/>
      </div>
    </div>     
  )
}

export default App
