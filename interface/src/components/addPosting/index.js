import React,{useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {createPosting} from '../../actions/postingAction'
import {useSelector} from 'react-redux'
import {getListPosting} from '../../actions/postingAction'
// import {updateUser} from '../../actions/userAction'

function AddPosting() {
  const [image,setImage] = useState("")
  const [postingan,setPostingan] = useState("")
 
    
  const {createPostingResult} = useSelector((state)=>state.PostingReducer)
  const dispatch = useDispatch()

  const handleSubmit = (event)=>{
      event.preventDefault()
      dispatch(createPosting({image:image,postingan:postingan}))  
  }
  useEffect(()=>{
    if(createPostingResult){
      console.log("5.masuk component did update")
      dispatch(getListPosting())
      setImage('')
      setPostingan('')
    }

  },[createPostingResult, dispatch])

  return (
    <div>
        
        <form onSubmit = {(event)=>handleSubmit(event)}>

          <input  type = "text" name = "image" placeholder = "input image" value={image} 
          onChange = {(event)=> setImage(event.target.value)} />

          <input style = {{marginLeft:'15px'}} type = "text" name = "postingan" placeholder = "input Posting" value={postingan} 
          onChange = {(event)=> setPostingan(event.target.value)} />
          
          <button style = {{marginLeft:'15px'}} type = "submit" className = "" >Submit</button>
          
        </form>
    </div>
  )
}

export default AddPosting