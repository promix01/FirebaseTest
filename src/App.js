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
  const ref = firestore.collection("users")
  const query = ref.orderBy("age","asc")
 query.limit(1)
  query.get()
  .then((querySnapshot)=>{
    querySnapshot.forEach((doc)=>{
      if(doc.exists){

        console.log(doc.get("age"))
      }
    })
  })
  return <div></div>
}

export default App;
