import React,{useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {createUser, detailUser} from '../../actions/userAction'
import {useSelector} from 'react-redux'
import {getListUser} from '../../actions/userAction'
import {updateUser} from '../../actions/userAction'
import {useNavigate} from 'react-router-dom'


function AddUser() {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [image,setImage] = useState("")
  const [alamat,setAlamat] = useState("")
  const [pendidikan,setPendidikan] = useState("")
  const [age,setAge] = useState("")
  const [id,setId] = useState("")
    
  

  const { createUserResult,detailUserResult,updateUserResult} = useSelector((state)=>state.UserReducer)
  const dispatch = useDispatch()

  const handleSubmit = (event)=>{
    event.preventDefault()
    
    if(id){
      dispatch(updateUser({id : id, name : name,email:email, password:password,image:image,alamat:alamat,pendidikan:pendidikan}))
    }
    else{
      dispatch(createUser({name : name,email:email, password:password,image:image,alamat:alamat,pendidikan:pendidikan}))
    }

  }
  
  useEffect(()=>{
  
    if(createUserResult){
      console.log("5.masuk component did update")
      dispatch(getListUser())
      setName('')
      setEmail('')
      setPassword('')
      setImage('')
      setAlamat('')
      setPendidikan('')
      setAge('')
    }

  },[createUserResult, dispatch])

  useEffect(()=>{
    if(detailUserResult){
        setName(detailUserResult.name)
        setEmail(detailUserResult.email)
        setImage(detailUserResult.image)
        setAlamat(detailUserResult.alamat)
        setPendidikan(detailUserResult.pendidikan)
        setAge(detailUserResult.age)
        setId(detailUser.id)
    }

  },[detailUserResult, dispatch])

  useEffect(()=>{
    if(updateUserResult){
      dispatch(getListUser())
      setName('')
      setEmail('')
      setPassword('')
      setImage('')
      setAlamat('')
      setPendidikan('')
      setAge('')
    }
  },[updateUserResult, dispatch])

  return (
    <div>
        <h4 className = "daftar" >Daftar</h4>
        <form className = "form-login" onSubmit = {(event)=>handleSubmit(event)}>

          <input type = "text" name = "email" placeholder = "input email" value={email} class="form-control"
          onChange = {(event)=> setEmail(event.target.value)} />

          <input type = "text" name = "password" placeholder = "input password" value = {password} class="form-control"
          onChange = {(event)=> setPassword(event.target.value)} />

          <input type = "text" name = "image" placeholder = "input image" value = {image} class="form-control"
          onChange = {(event)=> setImage(event.target.value)} />

          <input type = "text" name = "name" placeholder = "input name" value = {name} class="form-control"
          onChange = {(event)=> setName(event.target.value)} />
          
          <input type = "text" name = "alamat" placeholder = "input alamat" value = {alamat} class="form-control"
          onChange = {(event)=> setAlamat(event.target.value)} />

          <input type = "text" name = "pendidikan" placeholder = "input pendidikan" value = {pendidikan} class="form-control"
          onChange = {(event)=> setPendidikan(event.target.value)} />

          <input type = "text" name = "age" placeholder = "input age" value ={age} class="form-control"
          onChange = {(event)=> setAge(event.target.value)} />
          
          <button type = "submit" className = "button-login" >Submit</button>
          
        </form>
    </div>
  )
}

export default AddUser