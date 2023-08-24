import React, { useEffect, useReducer } from 'react';
import { useState } from 'react';
import './imageuploader.css'





const ImageUploader = () => {
    const data=[{
        id:'1',
        urlnumber:'10',
        title:'I am title of image'
    },
    {
        id:'2',
       urlnumber:'14',
       title:'I am title of image'
    },
    {   id:'3',
        urlnumber:'20',
    title:'I am title of image'}]

    const[image,setImage]= useState({
        id:'',
        urlnumber:'',
        title:''});

    const[editimg,setEditimg]=useState(null)    

        const reducerNewdata=(newdata,action)=>{
            switch(action.type){
                case 'UPLOAD':
                    return( [...newdata,
                        {   id:newdata.length+1,
                            urlnumber:action.payload.urlnumber,
                        title:action.payload.title
                    }] 
                    )

                case 'DELETE':

                    return(
                        newdata.filter((_,index)=>index!=action.payload)
                    ) 
                
                case 'EDIT':
                    const edit=[...newdata]
                   const index=newdata.findIndex(obj => obj.id === action.payload.editimg.id);
                   edit.splice(index,1,action.payload.image)
                   setImage({urlnumber:'',
                   title:''})
                   setEditimg(null)
                    return(
                      edit
                    )    
                    
                default:
                    return newdata    
            }    
        };    

    const[newdata,dispatch]=useReducer(reducerNewdata,data)

    const handleEdit=(e)=>{
        const value=e.target.value;
       setEditimg(newdata.find((_,index)=>index==value))
       
    }

   useEffect(()=>{
    if(editimg){
        setImage(editimg)
    }
   },[editimg])
    

    const handleChange=(e)=>{
           setImage({...image,
            [e.target.name]:e.target.value})
    }
   
    const handleUpload=()=>{
        if(editimg){
            dispatch({type:'EDIT',payload:{editimg,image}})
        }
        else{
            
        dispatch({type:'UPLOAD',payload:image})
        setImage({urlnumber:'',title:''});
        }
    }

    const handleDelete=(e)=>{
        const value=e.target.value;
       dispatch({type:'DELETE',payload:value})
    }

    

    return (
    <>
    <div className='imagesuploader'>
       
            <div className='imgtop'>
            <input type='text' name='urlnumber' placeholder='Enter a number to generate url' value={image.urlnumber} onChange={handleChange}></input>
            <input type='text' name='title' placeholder='Enter Title for your image' value={image.title} onChange={handleChange}></input>
            <button onClick={handleUpload}>{editimg?'Edit':'Upload'}</button>
            </div>

        <div className='imgcontainer'>
        {newdata.map((data,index)=>
            <div className='images' key={index}>
            <img src={`https://picsum.photos/id/${data.urlnumber}/250`} alt="" />
            <h3 style={{color:"white"}}>{data.title}</h3>
            <button onClick={handleDelete} value={index}>Delete</button>
            <button onClick={handleEdit} value={index}>Edit</button>
            </div>
        )}
        </div>
       
    </div>
    </>
    )

}


export default ImageUploader;