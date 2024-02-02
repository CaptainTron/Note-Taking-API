const express = require('express');
const { CreateNote, GetNote, UpdateNote, DeleteNote } = require('../Controller/Note_Controller');
const router = express.Router()

// ClearHashKey EveryTime a New Note, updated, created , or deleted...
const { ClearHashKey } = require('../MiddleWare/ClearCache');
const { UploadFiles3 } = require('../Services/uploads2S3');
// These are Note Endpoints
router.post('/createnote', ClearHashKey, CreateNote);
router.get('/getnote', GetNote);
router.delete('/deletenote/:NID', ClearHashKey, DeleteNote);
router.patch('/updatenote', ClearHashKey, UpdateNote);


// UploadfileRoute Goes Here
router.post('/uploadfile', UploadFiles3)


module.exports = router