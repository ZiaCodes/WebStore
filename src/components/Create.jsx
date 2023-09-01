import React, { useState } from 'react'
import { createMetaDataForUrl } from '../apis/data';
import { isValidEmail } from '../util/helper';
import {AiOutlineLoading3Quarters} from 'react-icons/ai';

const Create = () => {
    const [isLoading , setIsLoading] = useState(false);
    const [userURL, setUserURL] = useState({
        url : "",
    })
    const handleChangeCreate = ({target}) =>{
        const {value,name} = target;
        setUserURL({...userURL,[name]:value});
    }
    const handleSubmitCreate = async() =>{ 
            const check = isValidEmail(userURL.url);
            if(!check) return alert("Invalid URL!")
            setIsLoading(true);
            const res = await createMetaDataForUrl(userURL);
            if(res.error){
                setIsLoading(false);
                return alert(res.error);
            } 
            setIsLoading(false);
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
           <div className="btn" onClick={!isLoading ? handleSubmitCreate : null}>
                {
                    isLoading ? (<AiOutlineLoading3Quarters className='loader'/>) : "Create"  
                }
            </div>
        </div>
  )
}

export default Create;