const Photo = require("../../models/photo");
const uploadFile = require('../../config/upload-file');


module.exports = {
    create
};



async function create(req, res) {
    try {

        if (req.file) {
            // TODO: Remove the console.log after you've verified the output
            // The uploadFile function will return the uploaded file's S3 endpoint
            const regex = new RegExp(/[^a-zA-Z0-9\:]*/g)   
            const updatedName = req.file.originalname.replaceAll(regex, "");
            req.file.originalname = updatedName;
            const photoURL = await uploadFile(req.file);
            const photoDoc = await Photo.create({
                url: photoURL,
                // As usual, other inputs sent with the file are available on req.body
                title: req.body.title
            });
            // profile.currProfilePic = photoDoc._id;
            // profile.profilePics.unshift(photoDoc._id);
            // const updatedProfile = await profile.save();
            // req.profile = updatedProfile;
            res.json(photoDoc);
        } else {
            throw new Error('Must select a file');
        }
    } catch (err) {
        console.log(err)
        res.status(400).json(err.message);
    }
}