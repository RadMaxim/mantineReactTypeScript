import express from 'express';
import fetch from 'node-fetch';

const app = express();

// Установите порт, на котором будет работать прокси-сервер
const port = 3000;

// Маршрут для перенаправления запросов на TMDB
app.get('/api/tmdb/*', async (req, res) => {
  // Извлеките путь запроса к TMDB из URL-адреса
  
//   let data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=aa85885346f02a12b02f65ae53349d45&language=en-US&page=2',
// 

  // Сформируйте полный URL-адрес запроса к TMDB
  const tmdbUrlWithApiKey = "https://api.themoviedb.org/3/movie/popular?api_key=aa85885346f02a12b02f65ae53349d45&language=en-US&page=2";

  // Добавьте к запросу свой ключ API TMDB
  // Замените 'YOUR_API_KEY' своим фактическим ключом API TMDB
//   const tmdbUrlWithApiKey = ${tmdbUrl}?api_key=YOUR_API_KEY;

  // Перенаправьте запрос на TMDB
  const tmdbResponse = await fetch(tmdbUrlWithApiKey);

  // Проверьте код состояния ответа TMDB
  if (tmdbResponse.ok) {
    // Если код состояния в порядке, передайте ответ клиенту
    const tmdbData = await tmdbResponse.json();
    res.end(tmdbData);
  } else {
    // Если код состояния не в порядке, верните ошибку
    res.status(tmdbResponse.status).send(tmdbResponse.statusText);
  }
});

// Запустите прокси-сервер на указанном порту
app.listen(port, () => {
  console.log(`Прокси-сервер запущен на порту ${port}`);
});
