import ImageUploader from './ImageUploader/ImageUploader.jsx'
import "./App.css";



function App(){
  return(
    <>
   <div className='container'>
   <ImageUploader/>
   </div>
   </>
  
  )
   


}
























/** import { useState } from "react";
import AddVideo from "./AddVideo";
import Videos from "./Videos";
import VideoList from "./VideoList";

function App(){
 const[newvideo,setNewvideo]=useState(VideoList);
 const[editable,setEditable]=useState(null)
 const addVideos=(image)=>{
     
     setNewvideo([...newvideo,
      { id:newvideo.length+1,
        urlnumber:image.urlnumber,
        title:image.title,
      }
    ])
 }

 const deleteVideo=(id)=>{
   setNewvideo(newvideo.filter(video=>video.id!=id))
 }

 const editVideo=(id)=>{
  setEditable(newvideo.find(video=>video.id==id));
   
 }

 const updateVideo=(image)=>{
  const index=newvideo.findIndex(video=>video.id===image.id)
  const editvideos=[...newvideo]
  editvideos.splice(index,1,image)
  console.log(editvideos)
  setNewvideo(editvideos)
  setEditable(null)
 }

  return(
    <>
   //  <AddVideo addVideos={addVideos} editable={editable} updateVideo={updateVideo}/>
   // < Videos newvideo={newvideo} deleteVideo={deleteVideo} editVideo={editVideo}/>
   
    
    </>
  )
}
*/
export default App;