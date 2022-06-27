import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {deleteUser,getListUser,detailUser} from '../../actions/userAction'
import Navbar from '../../components/Navbar'
import AddUser from '../AddUser/index'

function ListUser(props) {
  const{loginStatus,loginCbHandler} = props
  const { getListUserResult,getListUserLoading,getListUserError,deleteUserResult } = useSelector((state)=>state.UserReducer)
  const dispatch = useDispatch()

  useEffect(()=>{
    //panggil action getuser
    console.log("1. use effect did mount")
    dispatch(getListUser())
  }, [dispatch])

  useEffect(()=>{
    if(deleteUserResult){
      console.log("5.masuk component did update")
      dispatch(getListUser())
     
    }

  },[deleteUserResult, dispatch])


  return (
    <>
    <Navbar loginStatus = {loginStatus} loginCbHandler = {loginCbHandler}></Navbar>
    <div>
      
      <table className="posting table table-hover ">
      <tbody>
      {
        getListUserResult?(
          getListUserResult.map((user)=>{
            return(
              // <p>  {user.name} - {user.image}, {user.email}, {user.password}, {user.alamat}, {user.age}, {user.pendidikan}
              
              // </p>
              <div className = "postingan">
              <tr>
                <td className = "user1"> {user.name}</td> 
              </tr>
              <tr>
                <td > <img src={user.image}  className = "img-user"></img></td>
              </tr>
              <tr>
                <td className = "user-2"> alamat = {user.alamat}</td> 
              </tr>
              <tr>
                <td className = "user-2"> umur =  {user.age}</td> 
              </tr>
              <tr>
                <td className = "user-2"> pendidikan = {user.pendidikan}</td> 
              </tr>
              
              <tr>
              {/* <button onClick = {()=>dispatch(deleteUser(user.id))}>Delete</button> */}
              <button style = {{marginLeft:'10px'}} onClick = {()=>dispatch(detailUser(user))}>Edit </button>
              </tr>

              </div>
            )
          })
        ):getListUserLoading?(
          <p>Loading ...</p>
        ):(
          <p>{getListUserError? getListUserError :"data kosong"}
          
          </p>
        )
      }
      </tbody>
      </table>
    </div>
    <AddUser></AddUser>
    </>
  )
}

export default ListUser