import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Search(props) {
    let {search,setsearch}=props
  return (
    <div>
      
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
        <Form.Control
          placeholder="Search"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value = {search}        
          onChange={e=>setsearch(e.target.value)}    
      />              
       
      </InputGroup>
    </div>
  )
}

export default Search
