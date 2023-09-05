import React, { useState } from 'react'
import { deleteMetaData } from '../apis/data'
import Container from './Container'

const Delete = () => {
    const [deleteURL,setDeleteURL] = useState({
        url:"",
    })

    const handleChangeDelete = ({target}) =>{
        const {value,name} = target;
        setDeleteURL({...deleteURL,[name]:value});
    }

    const handleSubmitDelete = async() =>{
            const res = await deleteMetaData(deleteURL);
            if(res.error) return alert(res.error);
            return alert("Deleted Successfully");
    }

  return (
    <Container>
        <div className='title'>
            <p style={{textAlign:'center'}}>
            Past URL to Delete
            </p>
        </div>
        <div className="searchbox">
            <input 
            value={deleteURL.url}
            onChange={handleChangeDelete}
            type="text" 
            name='url'
            placeholder='https://example.com'
            />
        </div>
        <div className="btn" onClick={handleSubmitDelete}>
            Delete
        </div>
    </Container>
  )
}

export default Delete