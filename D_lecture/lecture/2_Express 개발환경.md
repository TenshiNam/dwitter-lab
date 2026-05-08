## 1. Express 개발환경

   
#### (1) Express 패키지 설치

1️⃣ 서버 폴더 생성
    예) mkdir node-server

2️⃣ 폴더 초기화
    예) cd node-server
        npm init --yes

3️⃣ express 설치
    예) npm i express
        npm i nodemon -save-dev

4️⃣ package.json 확인
- type을 module로 수정
- scripts에 "start": "nodemon app" 추가
```
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon app"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "module"
}
```

5️⃣ 서버 실행

```
  npm run start
```
 
      
      
## 2. React 개발환경

   
#### (1) vite 프로젝트 생성
```
  npm create vite@latest [프로젝트명]
```

#### (2) vite 프로젝트 실행
```
  npm run dev
```

