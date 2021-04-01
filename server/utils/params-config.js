// This file has a singular purpose: to return a configured params object

const { v4: uuidv4 } = require('uuid');

const params = fileName => {
    const myFile = fileName.originalname.split('.');
    const fileType = myFile[myFile.length - 1];
  
    const imageParams = {
      Bucket: 'user-images-614ac8a7-ef79-4b15-926c-efb40e0e3dd4',
      Key: `${uuidv4()}.${fileType}`, // the name of this file.
      Body: fileName.buffer, // we assign the buffer property of the image. This is the temporary storage container of the image file. Once the buffer has been used, the temporary storage space is removed by multer.
      ACL: 'public-read' // allow read access to this file
    };
  
    return imageParams;
  };

module.exports = params;