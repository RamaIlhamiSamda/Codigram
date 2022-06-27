import React, { useState, useEffect } from "react";
import { getProfiles } from "../axios/profileAxios";
import axios from 'axios'
import LoadingBar from "../helpers/LoadingBar";
import Navbar from '../components/Navbar'


const Profile = (props) => {
  const{loginStatus,loginCbHandler} = props
  const [ user, setProfiles ] = useState([]);

    const getProfiles = ()=>{
      axios({
        method:"GET",
        url:"http://localhost:3000/user"
      })
      .then(result=>{
        setProfiles(result.data)      
      })
      .catch(err=>{
        console.log(err)
      })
    }

    getProfiles()
  return (
    <>
    <Navbar loginStatus = {loginStatus} loginCbHandler = {loginCbHandler}></Navbar>
      <div className="">
      <table className="table table-hover table-bordered">
        <thead className="bg-primary text-white">
          <tr>
            <th>Id</th>
            <th>alamat</th>
            <th>pendidikan</th>
            <th>organisasi</th>
            <th>kerja</th>
            <th>deskripsi</th>
            <th>image</th>
            <th>userId</th>
          </tr>
        </thead>
        <tbody>
          {user.length !== 0 ? (
            user.map((profile) => {
              const {
                id,
                name,
                email,
                password
                
                
              } = profile;
              return(
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{password}</td>
               
              </tr>
              )
            })
          ) : (
            <LoadingBar></LoadingBar>
          )}
        </tbody>
        </table>
      </div>
    </>
  );
};

export default Profile;
