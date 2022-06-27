import axios from 'axios'
import Swal from 'sweetalert'

export const GET_LIST_USER = "GET_LIST_USER"
export const CREATE_USER = "CREATE_USER"
export const DELETE_USER = "DELETE_USER"
export const DETAIL_USER = "DETAIL_USER"
export const UPDATE_USER = "UPDATE_USER"

export const getListUser = ()=>{
    
    return(dispatch)=>{
        dispatch({
            type : GET_LIST_USER,
            payload :{
                loading :true,
                data:false,
                erorMessage : false
            }
        })
        axios({
            method: 'GET',
            url : 'http://localhost:3000/user',
            timeout : 120000,
            headers: {
                access_token: localStorage.getItem('access_token')
                
            }
        })
        .then((response)=>{
             dispatch({
                 type : GET_LIST_USER,
                 payload : {
                     loading : false,
                     data: response.data,
                     errorMessage : false,
                     
                 }
             })
        })
        .catch((error)=>{
            
            dispatch({
                type : GET_LIST_USER,
                payload:{
                    loading: false,
                    data:false,
                    errorMessage: error.message
                }
            })
        })
    }
}

export const createUser = (data)=>{
    return(dispatch)=>{
        dispatch({
            type : CREATE_USER,
            payload :{
                loading :true,
                data:false,
                erorMessage : false
            }
        })
        axios({
            method: 'POST',
            url : 'http://localhost:3000/user/create',
            timeout : 120000,
            data:data
        })
        .then((response)=>{
             dispatch({
                 type : CREATE_USER,
                 payload : {
                     loading : false,
                     data: response.data,
                     errorMessage : false
                 }
             })
             
        })
        .catch((error)=>{
            dispatch({
                type : CREATE_USER,
                payload:{
                    loading: false,
                    data:false,
                    errorMessage: error.message
                }
            })
        })
    }
}

export const deleteUser = (id)=>{
    console.log("2. masuk action")
    return(dispatch)=>{
        dispatch({
            type : DELETE_USER,
            payload :{
                loading :true,
                data:false,
                erorMessage : false
            }
        })
        axios({
            method: 'DELETE',
            url : 'http://localhost:3000/user/delete/' + id,
            timeout : 120000,
        })
        .then((response)=>{
            console.log("3. berhasil dapet data : ", response.data)
             dispatch({
                 type : DELETE_USER,
                 payload : {
                     loading : false,
                     data: response.data,
                     errorMessage : false
                 }
             })
        })
        .catch((error)=>{
            console.log("3.gagal dapet api : ", error)
            dispatch({
                type : DELETE_USER,
                payload:{
                    loading: false,
                    data:false,
                    errorMessage: error.message
                }
            })
        })
    }
}
// tandain buat di user menit 7.13
export const detailUser = (data)=>{
    return(dispatch)=>{
        console.log("3.dapat data : ", data)
        dispatch({
            type:DETAIL_USER,
            payload:{
                data:data
            }
        })
    }
}

export const updateUser = (data)=>{
    return(dispatch)=>{
        dispatch({
            type : UPDATE_USER,
            payload :{
                loading :true,
                data:false,
                erorMessage : false
            }
        })
        axios({
            method: 'PUT',
            url : 'http://localhost:3000/user/update/' + data.id,
            timeout : 120000,
            data:data
           
        })
        .then((response)=>{
             dispatch({
                 type : UPDATE_USER,
                 payload : {
                     loading : false,
                     data: response.data,
                     errorMessage : false
                 }
             })
        })
        .catch((error)=>{
            dispatch({
                type : UPDATE_USER,
                payload:{
                    loading: false,
                    data:false,
                    errorMessage: error.message
                }
            })
        })
    }
}