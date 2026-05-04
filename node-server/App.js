//1. Express 라이브러리 임포트
import express from 'express';

//2. Express 객체 생성
const PORT = 9000;
const app = express();

//3. 미들웨어 - Express 서버 정책

//4. 라우팅 - 프론트에서 요청하는 처리를 담당
app.get('/', (req, res) => {
    res.send('node-server의 root 요청 --> 응답 결과!!');
});   

app.get('/test', (req, res) => {
    res.send('/test 요청 => 응답 결과!!');
});   


//5. Express 서버 실행
app.listen(PORT, () => {
    console.log(`서버 실행 완료 ============>> ${PORT}`);    
});
