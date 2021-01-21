import React from "react"

function FormComponent(props) {
    let msgFN
    let msgLN
    let msgEmail
    msgFN = props.state.firstName ? props.state.firstName + "," : null
    msgLN = props.state.lastName ? props.state.lastName : null
    msgEmail = props.state.email ? props.state.email: null

    return (
        <form onSubmit={props.handleSubmit}>
        {/* text  */}
        <label>
            <input 
            type="text"
            value = {props.state.firstName} 
            name="firstName" 
            placeholder="First Name" 
            onChange={props.handleChange} 
            /> First Name
        </label>
        <br />
        <input type="text" value = {props.state.lastName} name="lastName" placeholder="Last Name" onChange={props.handleChange} />
        <br />
        <input type="text" value = {props.state.email} name="email" placeholder="Email" onChange={props.handleChange}/>
        <br />

        {/* textarea */}
        <label>

        </label>
        <textarea 
            placeholder="write your comments here"
            value={props.state.comments} 
            name="comments"
            onChange={props.handleChange}
        />
        <br />

        {/* checkbox */}
        <label>
            <input 
            type="checkbox" 
            checked={props.state.isFriendly} 
            name = "isFriendly"
            onChange={props.handleChange}
            /> A Friend?
        </label>
        <br />

        {/* radio button */}
        <label>
            <input 
            type="radio" 
            name = "gender"
            value="male"
            checked={props.state.gender === "male"} 
            onChange={props.handleChange}
            /> Male
        </label>
        <br />
        <label>
            <input 
            type="radio" 
            name = "gender"
            value="female"
            checked={props.state.gender === "female"} 
            onChange={props.handleChange}
            /> Female
        </label>
        <br />

        {/* select options */}
        <label>
        <select
            value = {props.state.favColor}
            onChange = {props.handleChange}
            name="favColor"
        >
            <option value="">--- Please choose a color ---</option>
            <option value="blue">Blue</option>
            <option value="gray">Gray</option>
            <option value="red">Red</option>
        </select>
        Favoraite Colors
        </label>
        <br />

        {/* display value for debugging */}
        <h4>First,Last Name: {msgFN} {msgLN}</h4>
        <h4>Email: {msgEmail}</h4>
        <h4>textarea: {props.state.comments}</h4>
        <h4>checkbox: {props.state.isFriendly ? "true" : "false"}</h4>
        <h4>radio: {props.state.gender}</h4>
        <h4>option: {props.state.favColor}</h4>

        {/* Submit button */}
        <button>Submit</button>
        </form>
    )
  
}

export default FormComponent