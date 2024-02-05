import React from 'react'
import Card from 'react-bootstrap/Card';
function Videodetails(props) {
    let {videoId}=props
  return (
    <div>
      <Card className="text-center" style={{width:'65%'}}>
      <Card.Body>
       <iframe 
       src={`https://www.youtube.com/embed/${videoId}?muted=0`} frameborder=""
       height={'500px'}
       width={'100%'}
       
       ></iframe>
      </Card.Body>
     
    </Card>
    </div>
  )
}

export default Videodetails
