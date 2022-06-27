import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {deletePosting,getListPosting} from '../../actions/postingAction'
import Navbar from '../../components/Navbar'
import AddPosting from '../../components/addPosting'
import internet from "../../image/internet.jpg";


function ListUser(props) {
  const [image,setImage] = useState("https:fakeimg.pl/350x300")
  const [saveImage,setSaveImage] = useState(null)

  function handleUploadChange(e){
    console.log(e.target.files[0])
    let uploaded = e.target.files[0]
    setImage(URL.createObjectURL(uploaded))
    setSaveImage(uploaded)
  }
  function uploadImage(){
    if(!saveImage){
      alert("upload gambar dulu")
    }
    else{

      let formData = new FormData()
      formData.append("photo",saveImage)

      fetch('http://localhost:3001/home',{
        method:"POST",
        body : formData
      }).then((res)=>res.json()).then(data=>{
        if(data.status === 'success'){
          window.location.href = data.image
        }
      })
    }
  }

  const{loginStatus,loginCbHandler} = props
  const { getListPostingResult,getListPostingLoading,getListPostingError,deletePostingResult} = useSelector((state)=>state.PostingReducer)
  const dispatch = useDispatch()

  useEffect(()=>{
    //panggil action getuser
    console.log("1. use effect did mount")
    dispatch(getListPosting())
  }, [dispatch])

  useEffect(()=>{
    if(deletePostingResult){
      console.log("5.masuk component did update")
      dispatch(getListPosting())
    }

  },[deletePostingResult, dispatch])
    
  
  
  return (
    <>
    <Navbar loginStatus = {loginStatus} loginCbHandler = {loginCbHandler}></Navbar>
    <div className = "tambah-posting">
    <AddPosting loginStatus = {loginStatus} loginCbHandler = {loginCbHandler}></AddPosting>
    </div>
    


    <div style = {{height : "5vh"}} 
    className = "d-flex justify-content-center align-items-center">
    </div>
    <div className = "w-25 mt-5 mx-auto">

      <div>
        <img src = {image} className = "img-thumb" alt = "" />
      </div>
      <div className = "m-3">
        <label htmlfor = "formFile" className = "form-label">
          upload image
        </label>
        <input onChange = {handleUploadChange} type = "file" clasName = "form-control" id = "formFile" accept = "image/*" />
      </div>
      <button onClick = {uploadImage} className = "btn btn-primary w-100 mt-2">save photo</button>
    </div>


    <div>
    
      <table className="posting table table-hover table-bordered">
      <tbody>
      {
        getListPostingResult?(
          getListPostingResult.map((postings)=>{
            return(
                <div className = "postingan">
                <tr>
                  <td className = "posting1"> {postings.user.name}</td> 
                </tr>
                <tr>
                  <img className="img-posting" src={internet} />
                </tr>
                <tr>
                  <td className = "posting-2"> {postings.user.name} {postings.postingan}</td> 
                </tr>
                <tr>
                  <button onClick = {()=>dispatch(deletePosting(postings.id))}>Delete</button>
                </tr>
                </div>
              )
          })
        ):getListPostingLoading?(
          <p>Loading ...</p>
        ):(
          <p>{getListPostingError? getListPostingError :"data kosong"}
          
          </p>
        )
      }
      </tbody>
      </table>
    </div>
    </>
  )
}

export default ListUser