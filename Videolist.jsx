import axios from 'axios'
import React, { useEffect } from 'react'
import Videoitem from './Videoiteam'
import ListGroup from 'react-bootstrap/ListGroup';

function Videolist(props) {
    let { search,debounce,setDebounce,data,setdata,setVideoId} = props
    let apikey = 'AIzaSyATSGS60lg46P7k257qWrAZrjSYtKOMxv4'


    useEffect(()=>{

        let timerId= setTimeout(()=>{
          setDebounce(search)
        },1000)
        
        return ()=>{
          clearTimeout(timerId)
        }
        
        },[search])


    useEffect(() => {
        let ytsearch = async () => {
            await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
                params: {
                    part: 'snippet',
                    maxResults: 10,
                    key: apikey,
                    q: debounce
                }
            })
                .then(responese => setdata(responese?.data?.items))
                .catch(err => console.log(err))
        }
        if (debounce) {
            ytsearch()
        }


    }, [debounce])
    return (
        <div>
             <ListGroup>
            {
                data && data.map((video,index)=>{
                    return <Videoitem
                    key={index} 
                     video={video}

                      setVideoId= {setVideoId}/>
                    
                })
            }
            </ListGroup>
        </div>
    )

}
export default Videolist
