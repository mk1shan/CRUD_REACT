const app =require('./app');
const port =3001;
const host ='127.0.0.1'


const server =app.listen(3001,'127.0.0.1',() =>{
    console.log(`Node server is listenin to${server.address().port}`)
});

