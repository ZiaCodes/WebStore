import client from "./client";

//Create a metaData

export const createMetaDataForUrl = async(url) =>{
    try {
        const {data} = await client.post('/scrap',url);
        return data;
    } catch (error) {
        const {response} = error;
        if(response?.data) return response.data;

        return ({error: error.message || error})
    }
}

export const getMetaData = async() =>{
    try {
        const {data} = await client.get('/getmetadata');
        return data;
    } catch (error) {
        const {response} = error;
        if(response?.data) return response.data;

        return ({error: error.message || error})
    }
}