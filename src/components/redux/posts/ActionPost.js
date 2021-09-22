import axios from "axios"


export const  Post_Fetch = {
    Success : "Post_Fetch_Success",
    Error : "Post_Fetch_Error" ,
    Request : "Post_Fetch_Request"
}
export const fetchPostRequest = () =>{
    return ({type :  Post_Fetch.Request})
}
export const fetchPostSuccess = ( payload) =>{
    return ({
        type : Post_Fetch.Success ,
        payload
    })
}
export const fetchPostError = ()=>{
    return({ type : Post_Fetch.Error})
}

export const fetchPost = ()=>{
return(dispatch)=>{
    dispatch(fetchPostRequest())
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{
        const posts = res.data;
        dispatch(fetchPostSuccess(posts))

    }).catch(err=>{
        dispatch(fetchPostError())
    })
}
}