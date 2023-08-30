import React, { useState } from 'react'
import { createMetaDataForUrl } from '../apis/data'

const Create = () => {
    const [userURL, setUserURL] = useState({
        url : "",
    })

    const [deleteURL,setDeleteURL] = useState({
        url:"",
    })

    const handleChangeCreate = ({target}) =>{
        const {value,name} = target;
        setUserURL({...userURL,[name]:value});
    }

    const handleChangeDelete = ({target}) =>{
        const {value,name} = target;
        setDeleteURL({...deleteURL,[name]:value});
        
    }

    const handleSubmitCreate = async() =>{ 
        const res = await createMetaDataForUrl(userURL);
        if(res.error) return console.log(res.error);

        return console.log("Created Successfully");

    }

    const handleSubmitDelete = async() =>{
        alert("Not Implemented Yet")
    }
  return (
    <div className='cardbox'>
        <div className="card">
            <div className='title'>
                <p style={{textAlign:'center'}}>
                Past URL to Create
                </p>
            </div>
            <div className="searchbox">
                <input 
                type="text"
                value={userURL.url}
                name="url"
                onChange={handleChangeCreate}
                placeholder='https://example.com'
                />
            </div>
            <div type="submit" className="btn" onClick={handleSubmitCreate}>
                Create
            </div>
        </div>


        <div className="card">
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
                placeholder='https://example.com'
                />
            </div>
            <div className="btn" onClick={handleSubmitDelete}>
                Delete
            </div>
        </div>
    </div>
  )
}

export default Create;