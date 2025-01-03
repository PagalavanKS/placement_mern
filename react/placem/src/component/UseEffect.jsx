import React,{useState , useEffect} from 'react'
import axios from 'axios'
 const UseEffect = () => {
//     const [Text,setText ]=useState("")
//     useEffect(()=>{
//         console.log(Text)
//         setText(Text)
//     },[Text])
//   return (
//     <div>
//         <label>This is the text:</label><br></br>
//         <input type="text"placeholder='enter text' onChange={(e)=>{
//             setText(e.target.value)
//         }}/>
//     </div>
//   )


  var [Post, setPost]= useState([])
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/')
    .then(res=>{
        console.log(res.data)
        setPost(res.data)
  })
    .catch(err=>{console.log(err)})
 },[])
  return(
    <div>
        <h1>Fetching data from Json Placement API</h1>
        <h2>Posts are</h2>
    </div>
  )
}
export default UseEffect