import React,{useState} from 'react';
import firestore from './firebase/firebase'
const App = ()=>{
  const [username,setUserName] = useState("")
  const [age,setAge] = useState("")
  const addUserHandler = (obj)=>{
    const ref = firestore.collection('users')
    const id = "myid#"+Math.random(999).toString()
    ref
    .doc(id)
    .set(obj)
    .then(()=>{
      console.log("add success full")
    }).catch((err)=>console.log(err))
  }
  const submitHandler = (e)=>{
    e.preventDefault()
    const obj = {
    username : username,
      age : age,
    }
    setUserName("")
    setAge("")
    addUserHandler(obj)
  }
  return (
    <div>
        <div style={{width:"80%",marginLeft:20}}>
          <form onSubmit={submitHandler}>
            <label>ชื่อ</label>
            <input type="text" value={username} onChange={(e)=> setUserName(e.target.value)}></input>
            <label>อายุ</label>
            <input type="text" value={age} onChange={(e)=> setAge(e.target.value)}></input>
            <button type="submit">Add</button>
            </form>
           </div>
          </div>  
  )
}
export default App;
