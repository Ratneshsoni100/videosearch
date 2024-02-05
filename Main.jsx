import React, { useState } from 'react'
import Search from './Search'
import Videolist from './Videolist'
import Videodetails from './Videodetails'

function Main() {
  let [search,setsearch]=useState('')
  let [ debounce,setDebounce]= useState(search)
  let [data,setdata]=useState([])
  let [videoId,setVideoId]= useState('')
  return (
    <div>
      
      <Search search={search} setsearch={setsearch}/>
      <div className="d-flex justify-content-between">
      {
        videoId ?  <Videodetails videoId={videoId}/> :''
       }
      <Videolist search= {search}
       debounce={debounce}
       setDebounce={setDebounce}
       data={data}
       setdata={setdata}
         setVideoId={setVideoId}/>
    </div>
    </div>
  )
}

export default Main
