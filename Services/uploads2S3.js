// AWS 
const AWS = require("aws-sdk");
const { v4: uuidv4 } = require('uuid');
// require('aws-sdk/lib/maintenance_mode_message').suppress = true;
const keys = require("../config/keys");

const s3 = new AWS.S3({
    accessKeyId: keys.accessKeyId,
    secretAccessKey: keys.secretaccessKey,
    signatureVersion: 'v4',
    region: 'ap-south-1'
})


const UploadFiles3 = async (req, res) => {
    console.log(req.user);
    const key = `${req.user.ID}/${uuidv4()}.png`

    // Connect S3 Bucket and get URL
    s3.getSignedUrl('putObject', {
        Bucket: 'notetaking123',
        ContentType: 'image/png',
        Key: key,
        Expires: 300

    }, function (err, url) {
        if (err) console.log(err.message)
        console.log('The URL is', url);
        res.status(200).json({ key: key, URL: url })
    });


}


module.exports = {
    UploadFiles3
}