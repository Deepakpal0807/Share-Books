import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';

cloudinary.config({
    cloud_name: 'dpbmy09rz', 
    api_key: '973749879693444', 
    api_secret: 'HdfFBP9gO9O1tRhZNrwLZmtkUG4'
})

const uploadOnCloudinary = async (localfilepath) => {
    try {
        if (!localfilepath) {
            console.log('localfilepath not available')
            return null;
        }

        //upload on cloudinary
        const response = await cloudinary.uploader.upload(localfilepath, {
            resource_type: 'auto',
          });

        fs.unlinkSync(localfilepath)
        return response;
    } catch (error) {
        console.log("err:", error ); 
        fs.unlinkSync(localfilepath)
        return null;
    }
}

export default uploadOnCloudinary