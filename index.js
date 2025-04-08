var express = require('express');
var cors = require('cors');
const multer = require('multer');
const upload = multer({limits: {fileSize: 512000000 }}) 
require('dotenv').config()


var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});
app.use('/api/fileanalyse',upload.single('upfile'))
app.post('/api/fileanalyse',(req,res)=> {
  const name = req.file.originalname
  const size = req.file.size
  const type = req.file.mimetype
  res.json({name,size,type })
})




const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});