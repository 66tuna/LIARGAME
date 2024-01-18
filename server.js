// server.js (또는 다른 서버 파일)

const express = require('express');
const cors = require('cors');

const app = express();

// CORS 미들웨어 추가
app.use(cors());

// 나머지 코드...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
