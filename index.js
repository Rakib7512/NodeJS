const express= require('exprexx');
const bodyParse=require('body-parse');
const cors =require('cors');

const app = express();
const PORT =3000;
app.use(cors())
app.use(bodyParse());
















 app.listen(PORT,()=>{
    console.log('Server running on http://localhost:${PORT}')
 })