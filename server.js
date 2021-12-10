const express =require ("express");
const app =express ( );
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

app.listen (8000,function ( ){
console.log("server is listening")
})
