import React from 'react';
import firestore from './firebase/firebase'
// const App = ()=>{
//     const ref = firestore.collection('users').doc("DPyOrXTzvXRLkhUZZNrT")
//     ref.get()
//     .then((doc)=>{
//       if(doc.exists){
//       console.log(`id: ${doc.id}`)
//       console.log(`Document Data : ${doc.data()}`)
//       console.log(`Field userName : ${doc.get("username")}`)
//     }
//     else console.log("No such document")
//   }).catch((err)=>console.log(err))
//   return <div></div>
//   }
  
const App = ()=>{
  const ref = firestore.collection("users").doc("DPyOrXTzvXRLkhUZZNrT")
 const a =  ref.update({username:"kuykuy"})
  console.log(a)
  
  return <div></div>
}

export default App;
