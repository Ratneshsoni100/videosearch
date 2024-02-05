import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

function Videoiteam(props) {
    let {video,setVideoId}=props
  return (
    <div>
      <ListGroup.Item >
      <Card className='m-auto' style={{ width: '28rem',height:'400px' }} 
      onClick={()=>setVideoId(video?.id?.videoId)}>
      <Card.Img variant="top" src={video?.snippet?.thumbnails?.medium?.url} style={{width:'100%',height:'200px'}}/>
      <Card.Body>
        <Card.Title>  {video?.snippet?.title}</Card.Title>
        <Card.Text>
        {video?.snippet?.description}
        </Card.Text>
      </Card.Body>
    </Card>
    </ListGroup.Item>
    </div>
  )
}

export default Videoiteam
