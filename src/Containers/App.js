import React , {Component}from 'react';
import CardList from '../Components/CardList';
// import { robots } from './robots';
import SearchBox from '../Components/SearchBox'
import './App.css'
import Scroll from '../Components/Scroll';
 import ErrorBoundry from '../Components/ErrorBoundry'  //need react 16 for this to work


//function component

// const App= ()=> {
//   return (
//     <div className = 'tc'>
//       <h1> My RobotFriends</h1>
//       <SearchBox />
//       <CardList  robots = {robots}/>   //cardlist receive an attribute(props)
//     </div>
//   );
// }

// export default App;


//classs component
class App extends Component {
  constructor(){
    super();
    this.state = {
      robots: [],
      searchField: ''
    }
    console.log("component constructor")
  }

  
  //note we did not user arrow fcn here bcz if part of React
  // componentDidMount(){
   
  //   // console.log("componentDidMount")
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //   .then(response =>{
  //     return response.json()
  //   })
  //     .then(users =>{
  //       this.setState({robots:users})
  //     });
  // }

  componentDidMount(){
   
    // console.log("componentDidMount")

    //reduced form
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json()
    )
      .then(users => this.setState({robots:users}));
  }
  
  //create a fnc to get triggered whenever somthg is entered in SearchBox
  onSearchChange = (event) =>{

    //set searchField to get value entered
    this.setState({searchField: event.target.value})

    // console.log(filterRobots)
  }

  render(){

    //filter robots
    const filterRobots = this.state.robots.filter(robot =>{
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })

    console.log("component rendered")
    if(this.state.robots.length === 0){
      return <h1> Loading</h1>
    }else{

    return (
      < div className = 'tc'>
        <h1 className ='f1'>RobotFriends</h1>

        {/* pass attribute to searchbox */}
        <SearchBox   SearchChange = {this.onSearchChange}/>

        {/* <CardList  robots = {robots}/>   //cardlist receive an attribute(props) */}

        {/* robot passed as prop */}
        {/* <CardList robots = {robots}/> */}
        
        {/* now pass filterRobot instead of robots */}
        <Scroll>
          <ErrorBoundry>
              <CardList robots = {filterRobots}/>
        </ErrorBoundry>
        </Scroll>
       
      </div>
    );
  }
  
  }
   
}

export default App;

