// USING USEREF - works like document query selector

// import React from 'react'
// import { useRef } from 'react'

// const App = () => {
//   const greet = useRef(null)
//   const changehandler = () =>{
//     console.log(greet)
//     greet.current.innerText = "Goodbye!!!"
//     greet.current.style.color = "red"
//   }
  
//   return (
//     <div>
//       <h1 ref={greet}>helllooooo</h1>
//       <button onClick={changehandler}>change</button>
//     </div>
//   )
// }

// export default App

// FORM WITH TWO WAY BINDING WITH MORE INPUTS AND RENDERING LIST

// import React, { useState } from 'react'

// const App = () => {
//   const [users, setusers] = useState([])

//   const [username, setusername] = useState("")
//   const [gender, setgender] = useState("male")
//   const [city, setcity] = useState("pune")
//   const [text, settext] = useState("")
//   const [accept, setaccept] = useState("")

//   const submitHandler = (e) => {
//     e.preventDefault()
    
//     const newuser = { username, gender, city, text, accept }
//     const copyuser = [...users]
//     copyuser.push(newuser)
//     setusers(copyuser)

//     setusername("")
//     setgender("male")
//     setcity("bhopal")
//     settext("")
//     setaccept(false)
//   }

//   let renderUser = "no data"
//   if(users.length > 0){
//     renderUser = users.map((user, index) => (
//       <li key={index}>
//         <strong>Username: </strong> {user.username}<br />
//         <strong>Gender: </strong> {user.gender}<br />
//         <strong>City: </strong> {user.city}<br />
//         <strong>Text: </strong> {user.text}<br />
//         <strong>Accept: </strong> {user.accept? 'true' : 'false'}<br /><br />
//       </li>
//     ))
//   }

//   return (
//     <div>
//       <h1 className='text-center'>FORM</h1>
//       <form onSubmit={submitHandler}>
//         <input onChange={(e) => setusername(e.target.value)} type="text" placeholder='username' name='username' /><br /><br />
//         <input onChange={(e) => setgender(e.target.value)} type="radio" name='gender' value="male" checked={gender === "male" ? true : false} />Male
//         <input onChange={(e)=> setgender(e.target.value)} type="radio" name="gender" value="female" checked={gender === "female" ? true : false} />Female<br /><br />
//         <select value={city} onChange={(e)=> setcity(e.target.value)}>
//           <option value="bhopal">Bhopal</option>
//           <option value="indore">Indore</option>
//           <option value="pune">Pune</option>
//         </select><br /><br />
//         <textarea onChange={(e)=> settext(e.target.value)} value={text} name="text" placeholder='enter text'></textarea><br /><br />
//         <input onChange={(e)=> setaccept(e.target.value)} checked={accept} type="checkbox" name="accept" value="accept" />Accept <br /><br />
//         <input type="submit" />
//       </form><hr />
//       <ol>{renderUser}</ol>
//     </div>
//   )
// }

// export default App

// FORM AND TWO WAY BINDING

// import React, { useState } from 'react'

// const App = () => {
//   const [username, setusername] = useState("")
//   const submitHandler = (e) => {
//     e.preventDefault()
//     // console.log('Form submitted')
//     // console.log(e.target.username.value)
//     console.log({ username})
//   }
//   return (
//     <div>
//       <h1>React Form</h1>
//       <form onSubmit={submitHandler}>
//         <input onChange={(e) => setusername(e.target.value)} type="text" name="username" placeholder='username' />
//         <button>submit</button>
//       </form>
//     </div>
//   )
// }

// export default App

// USING PARAMATERISED FUNCTION

// import React, { useState } from 'react'

// const App = () => {
//   const [username, setusername] = useState("pradeep")
//   const changeName = (n) => {
//     setusername(n)
//   }
//   return (
//     <div>
//       <h1>{username}</h1>
//       <button onClick={() =>changeName("tashu") }>change name</button>
//     </div>
//   )
// }

// export default App

// STOPWATCH

// import React, { useState } from 'react'

// const App = () => {
//   const [time, settime] = useState(new Date().toLocaleTimeString())
//   setInterval(() => settime(new Date().toLocaleTimeString()), 1000)
//   return (
//     <div>
//       <h1>{time}</h1>
//     </div>
//   )
// }

// export default App

// USING USESTATE

// import React, { useState } from 'react'

// const App = () => {

//   const [a, seta] = useState(12)

//   const changehandler =  () => {
//     seta ( a + 1 )
//   }
//   console.log(a)

//   return (
//     <div>
//       <h1>Hello</h1>
//       <h2>{a}</h2>
//       <button onClick={changehandler}>change</button>
//     </div>
//   )
// }

// export default App