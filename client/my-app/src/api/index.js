import axios from "axios";

const baseURL="http://127.0.0.1:5000"

export const validateUserJWTToken =async (token)=>{
try {
    const res=await axios.get(`${baseURL}/jwtVerification`,{
    headers:{ Authorization: `Bearer ${token} ` },
});
    return res.data;
    
}
catch(err){
    return null;
}
};

export const addNewProduct = async (data) => {
    try {
        
        const formData = new FormData();
        formData.append('file', data.file);

        const res = await axios.post(`${baseURL}/create`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        
        return res.data.data;
    } catch (err) {
        console.error('Error adding new product:', err);
        return null;
    }
};

/*
export const getImagePrediction = async (imageUrl) => {
    try {
        const response = await axios.put(`${baseURL}/upload`, {
            data: JSON.stringify({ '"url"' : `"${imageUrl}"` })

        });
        return response; // Assuming the response contains the prediction message
    } catch (error) {
        console.error('Error fetching image prediction here:', error);
        return null;
    }
}
*/
export const getImagePrediction = async (imageUrl) => {
    try {
        let data = JSON.stringify({
            "url": imageUrl
        });
        
        let config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: 'http://127.0.0.1:5000/upload?"url"="https://firebasestorage.googleapis.com/v0/b/dermai-dbd02.appspot.com/o/images%252F1707995112563_download%2520(1).jpeg?alt%3Dmedia%26token%3D79653fa9-0603-4ed7-9443-d8bd89bad09e"',
            headers: { 
                'Authorization': '', 
                'Content-Type': 'application/json'
            },
            data: data
        };
        
        const response = await axios.request(config);
        console.log(JSON.stringify(response.data));
        return response.data; // Return the prediction result
    } catch (error) {
        console.error('Error fetching image prediction:', error);
        throw error; // Rethrow the error
    }
}