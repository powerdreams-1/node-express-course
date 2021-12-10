const express =require ("express");
const app =express ( );
const bodyParser=require('body-parser');
app.use (bodyParser.json ( ));
const morkuserData=[
{name:'martin'},
{name:'musyoka'}
]
app.get('/users',function (req,res){
res.json({
success:true ;
message:successfully got users.Nice!',
users:MorkUserData
})
app.get('/users/:id',function (req,res){
console.log (req.params.id)
res.json ({
succsess :true,
message :'i got one user',
user : req.params.id
app.post ('/login ', function (req,res){
const username=req.body.username 9
const password=req.body.password ;
const mockUsername="billyTheKid";
const mockpassword="superSecret ";
if(username===mockUsername && pasword===mockpassword ){
res.json({
success:true
message:'pasword and username match !',
token:'encrypted token goes here'
})
}else{
res.json({
success:false,
message:'password and username do not match'
})
}
})
app.listen (8000,function ( ){
console.log("server is listening")
})
