import axios from 'axios'

export const GET_LIST_POSTING = "GET_LIST_USER"
export const CREATE_POSTING = "CREATE_POSTING"
export const DELETE_POSTING = "DELETE_POSTING"


export const getListPosting = ()=>{
    
    return(dispatch)=>{
        dispatch({
            type : GET_LIST_POSTING,
            payload :{
                loading :true,
                data:false,
                erorMessage : false
            }
        })
        axios({
            method: 'GET',
            url : 'http://localhost:3000/posting',
            timeout : 120000
        })
        .then((response)=>{
            
             dispatch({
                 type : GET_LIST_POSTING,
                 payload : {
                     loading : false,
                     data: response.data,
                     errorMessage : false
                 }
             })
        })
        .catch((error)=>{
            
            dispatch({
                type : GET_LIST_POSTING,
                payload:{
                    loading: false,
                    data:false,
                    errorMessage: error.message
                }
            })
        })
    }
}

export const createPosting = (data)=>{

    return(dispatch)=>{
        dispatch({
            type : CREATE_POSTING,
            payload :{
                loading :true,
                data:false,
                erorMessage : false
            }
        })
        
        axios({
            method: 'POST',
            url : 'http://localhost:3000/posting/create',
            timeout : 120000,
            data:data,
            headers: {
                access_token: localStorage.getItem('access_token')
            }
            
        })
        .then((response)=>{
             dispatch({
                 type : CREATE_POSTING,
                 payload : {
                     loading : false,
                     data: response.data,
                     errorMessage : false,
                 }
             })
        })
        .catch((error)=>{
            dispatch({
                type : CREATE_POSTING,
                payload:{
                    loading: false,
                    data:false,
                    errorMessage: error.message
                }
            })
        })
    }
}

export const deletePosting = (id)=>{
    console.log("2. masuk action")
    return(dispatch)=>{
        dispatch({
            type : DELETE_POSTING,
            payload :{
                loading :true,
                data:false,
                erorMessage : false
            }
        })
        axios({
            method: 'DELETE',
            url : 'http://localhost:3000/posting/delete/' + id,
            timeout : 120000,
        })
        .then((response)=>{
            console.log("3. berhasil dapet data : ", response.data)
             dispatch({
                 type : DELETE_POSTING,
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
                type : CREATE_POSTING,
                payload:{
                    loading: false,
                    data:false,
                    errorMessage: error.message
                }
            })
        })
    }
}

