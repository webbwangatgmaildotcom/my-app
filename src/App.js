import React, {Component} from "react"
// import Footer from "./components/Footer"
// import Header from "./components/Header"
// import MainContent from "./components/MainContent"
import TodoItem from "./components/TodoItem"
// import ContactCard from "./components/ContactCard"

// import logo from './logo.svg';
// import './App.css';

import Joke from "./components/Joke"
import jokesData from "./components/jokesData"
import Conditional from "./components/Conditional"
import Form from "./components/FormContainer"

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="todo-list">
//       {/* <Header />
//       <MainContent />
//       <Footer /> */}
//       <TodoItem />
//       <TodoItem />
//       <TodoItem />
//       <TodoItem />

//     </div>
//   )
// }

// function App() {
//   return (
//     <div className="contacts">
//       <ContactCard
//         contact = {{
//           name: "Mr. W",
//           imgUrl: "http://placekitten.com/300/200",
//           phone: "(212)555-1111",
//           email: "mrw@catnap.meow",
//         }}
//       />
//       <ContactCard 
//         contact = {{
//           name: "Mr. D",
//           imgUrl: "http://placekitten.com/400/300",
//           phone: "(212)555-2222",
//           email: "mrd@catnap.meow",
//         }}
//       />
//       <ContactCard 
//         contact = {{
//           name: "Mr. F",
//           imgUrl: "http://placekitten.com/400/200",
//           phone: "(212)555-3333",
//           email: "mrf@catnap.meow",
//           }}
//       />
//       <ContactCard 
//         contact = {{
//           name: "Mr. Felix",
//           imgUrl: "http://placekitten.com/200/100",
//           phone: "(212)555-4444",
//           email: "mrfelix@catnap.meow",
//           }}
//       />
//     </div>
//   )
// }

// function App() {
//   // const nums = [1,2,3,4,5]
//   // const doubled = nums.map(function(num) {
//   //   return num * 2
//   // })
//   // console.log(doubled)

//   const jokeComponents = jokesData.map((joke) => <Joke id={joke.id} question={joke.question} punchline={joke.punchline} />)

//   return (
//     <div>
//       {jokeComponents}
//     </div>
//   )
// }

// class App extends React.Component {
//   render () {
//     const jokeComponents = jokesData.map((joke) => <Joke id={joke.id} question={joke.question} punchline={joke.punchline} />)

//     return (
//       <div>
//         {jokeComponents}
//       </div>
//     )
//   }  
// }

// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       count: 0
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }

//   handleClick() {
//     this.setState(prevState => {
//       return {
//         count : prevState.count + 1
//       }
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.handleClick}>Change!</button>
//       </div>
//     )
//   }
// }

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       isLoading: true
//     }
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({
//         isLoading: false
//       })
//     }, 1500)
//   }

//   render() {
//     return (
//       <div>
//         {this.state.isLoading ?
//           <h1>Loading ...</h1> :
//           <Conditional />
//         }
//       </div>
//     )
//   }

// }

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       isLoggedIn: false
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }

//   handleClick() {
//     this.setState (prevState => {
//       return {
//         isLoggedIn: !prevState.isLoggedIn
//       }
//     })
//   }
//   render() {
//     let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
//     let message = this.state.isLoggedIn ? "Your are Logged in" : "You are logged out"

//     return (
//       <div>
//         <button onClick={this.handleClick}>{buttonText}</button>
//         <h1>{message}</h1>
//       </div>
//     )
//   }
// }

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       loading: false,
//       character: {}
//     }
//   }

//   componentDidMount() {
//     this.setState ({
//       loading: true
//     })

//     fetch("https://swapi.dev/api/people/1")
//       .then(response => response.json())
//       .then(data => {
//         this.setState (
//           {
//             loading: false,
//             character: data
//           }
//         )
//       })

//   }
//   render () {
//     const text = this.state.loading ? "loading ..." : this.state.character.name

//     return (
//       <div>
//         {text}
//       </div>
//     )
//   }
// }

// class App extends Component {
//   constructor() {
//     super ()
//     this.state = {
//       fistName: ""
//     }
//     this.handleChange = this.handleChange.bind(this)
//   }

//   handleChange(event) {
//     this.setState ({
//       firstName: event.target.value 
//     })
//   }
//   render() {
//     return (
//       <form>
//         <input type="text" placeholder="First Name" onChange={this.handleChange} />
//         <h1>{this.state.firstName}</h1>
//       </form>
//     )
//   }
// }

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       firstName: "",
//       lastName: "",
//       email: "",
//       comments: "",
//       isFriendly: true,
//       gender: "",
//       favColor: ""
//     }
//     this.handleChange = this.handleChange.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }

//   handleChange(event) {
//     const {name, value, type, checked} = event.target
//     type === "checkbox" ? 
//     this.setState({ [name]: checked }) : 
//       this.setState ({ 
//         [name]: value
//       })
//   }

//   handleSubmit(event) {
//     alert(this.state.comments)
//     // event.preventDefault()
//   }

//   render () {
//     let msgFN
//     let msgLN
//     let msgEmail
//     msgFN = this.state.firstName ? this.state.firstName + "," : null
//     msgLN = this.state.lastName ? this.state.lastName : null
//     msgEmail = this.state.email ? this.state.email: null

//     return (
//       <form onSubmit={this.handleSubmit}>
//         {/* text  */}
//         <label>
//           <input 
//             type="text"
//             value = {this.state.firstName} 
//             name="firstName" 
//             placeholder="First Name" 
//             onChange={this.handleChange} 
//           /> First Name
//         </label>
//         <br />
//         <input type="text" value = {this.state.lastName} name="lastName" placeholder="Last Name" onChange={this.handleChange} />
//         <br />
//         <input type="text" value = {this.state.email} name="email" placeholder="Email" onChange={this.handleChange}/>
//         <br />

//         {/* textarea */}
//         <label>

//         </label>
//         <textarea 
//           placeholder="write your comments here"
//           value={this.state.comments} 
//           name="comments"
//           onChange={this.handleChange}
//         />
//         <br />

//         {/* checkbox */}
//         <label>
//           <input 
//             type="checkbox" 
//             checked={this.state.isFriendly} 
//             name = "isFriendly"
//             onChange={this.handleChange}
//           /> A Friend?
//         </label>
//         <br />

//         {/* radio button */}
//         <label>
//           <input 
//             type="radio" 
//             name = "gender"
//             value="male"
//             checked={this.state.gender === "male"} 
//             onChange={this.handleChange}
//           /> Male
//         </label>
//         <br />
//         <label>
//           <input 
//             type="radio" 
//             name = "gender"
//             value="female"
//             checked={this.state.gender === "female"} 
//             onChange={this.handleChange}
//           /> Female
//         </label>
//         <br />

//         {/* select options */}
//         <label>
//         <select
//           value = {this.state.favColor}
//           onChange = {this.handleChange}
//           name="favColor"
//         >
//           <option value="">--- Please choose a color ---</option>
//           <option value="blue">Blue</option>
//           <option value="gray">Gray</option>
//           <option value="red">Red</option>
//         </select>
//         Favoraite Colors
//         </label>
//         <br />

//         {/* display value for debugging */}
//         <h4>First,Last Name: {msgFN} {msgLN}</h4>
//         <h4>Email: {msgEmail}</h4>
//         <h4>textarea: {this.state.comments}</h4>
//         <h4>checkbox: {this.state.isFriendly ? "true" : "false"}</h4>
//         <h4>radio: {this.state.gender}</h4>
//         <h4>option: {this.state.favColor}</h4>

//       {/* Submit button */}
//       <button>Submit</button>
//       </form>
//     )
//   }
// }


function App () {
    return (
      <Form />
    )
}
export default App;
