import React, { useState } from 'react'
import { createMetaDataForUrl } from '../apis/data'

const Create = () => {
    const [userURL, setUserURL] = useState({
        url : "",
    })
    const handleChangeCreate = ({target}) =>{
        const {value,name} = target;
        setUserURL({...userURL,[name]:value});
    }
    const handleSubmitCreate = async() =>{ 
        const res = await createMetaDataForUrl(userURL);
        if(res.error) return alert(res.error);
        return alert("Created Successfully");
    }

  return (
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
            <div className="btn" onClick={handleSubmitCreate}>
                Create
            </div>
        </div>
  )
}

export default Create;