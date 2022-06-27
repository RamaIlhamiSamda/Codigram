import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import LoadingBar from '../helpers/LoadingBar'
import CreatePosting from './createPosting'


const Home = (props) => {
    const{loginStatus,loginCbHandler} = props

    const [posting,setPosting] = useState([]);

    const getPosting = async ()=>{
      axios({
        method:"GET",
        url:"http://localhost:3000/posting"
      })
      .then(result=>{
        setPosting(result.data)      
      })
      .catch(err=>{
        console.log(err)
      })
    }
    getPosting()
    
  return (
    <>
        <Navbar loginStatus = {loginStatus} loginCbHandler = {loginCbHandler}></Navbar>
        
        <CreatePosting loginStatus = {loginStatus} loginCbHandler = {loginCbHandler}></CreatePosting>
        
        <div className = "tabel-posting" text = "center">
          <table className="posting table table-hover table-bordered">
            <tbody>
          {posting.length !== 0 ? (
            posting.map((postings) => {
              
              return(
                <div className = "">
                <tr>
                  <td className = ""> {postings.user.name}</td> 
                </tr>
                <tr>
                  <td className = ""> <img src={postings.image}></img></td>
                </tr>
                <tr>
                  <td className = ""> {postings.user.name} {postings.postingan}</td> 
                </tr>
               
                </div>
              )
            })
          ) : (
            <LoadingBar></LoadingBar>
          )}
          </tbody>
          </table>
        </div>

    </>
  )
}

export default Home