import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const CreatePosting = () => {
    const [form, setForm] = useState({
        image:"",
        postingan:""
        
    })

    
    const addPosting= async (posting) => {
        try {
          let result = await axios({
            method: "POST",
            url: "http://localhost:3000/posting/create",
            data: posting 
          });
          
          setForm(result.data);
         
        } catch (err) {
          console.log(err);
        }
      };
      const navigation = useNavigate()

    const submitHandler = ()=>{
        addPosting(form)
        navigation('/home')
    }
  return (
    <div className = "row my-3">
        <div className = "w-100 text-center">
            <h5>CreatePirates</h5>
        </div>
        <div className = "w-50 mx-auto">
        <hr />
            <div className = "mb-3">
                <label>Image : </label>
                <input 
                    onChange = {(e) =>setForm({...form,image:e.target.value })}
                    type = "text" 
                   ></input>
            </div>
            <div className = "mb-3">
                <label>Postingan: </label>
                <input 
                    onChange = {(e) =>setForm({...form,postingan:e.target.value })}
                    type = "text" 
                    ></input>
            </div>
           
            <div className = "mb-3">
                <button onClick = {()=>submitHandler()} className = "btn btn btn-primary btn-block">Submit</button>
            </div>
        </div>
    </div>
  )
}

export default CreatePosting