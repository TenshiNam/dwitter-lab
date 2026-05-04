import express from 'express';

const PORT = 8080;
const server = express();

// 미들웨어

server.get('/dwitter', (req, res, next) => {
    res.send('welcome to dwitter!!');
});


server.listen(PORT, () => {
    console.log(`dwitter 서버 실행 ========>> ${PORT}`);    
});