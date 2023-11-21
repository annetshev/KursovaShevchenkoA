const express = require('express');
const cors = require('cors');
const fs = require('fs').promises; 
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

const readNewsFile = async () => {
  try {
    const data = await fs.readFile('../../news.json', 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading news file:', error.message);
    return { news: [] };
  }
};
const writeNewsFile = async (data) => {
  try {
    await fs.writeFile('../../news.json', JSON.stringify(data, null, 2), 'utf-8');
  } 
  catch (error) {
    console.error('Error writing news file:', error.message);
  }
};
app.get('./db/news.json', async (req, res) => {
  const newsData = await readNewsFile();
  res.json(newsData.news);
});
app.post('./db/news.json', async (req, res) => {
  const newNews = req.body;
  const newsData = await readNewsFile();
  newNews.id = (newsData.news.length + 1).toString();
  newsData.news.push(newNews);
  await writeNewsFile(newsData);
  res.json({ success: true, news: newNews });
});