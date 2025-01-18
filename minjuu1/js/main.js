import { news } from './data/news.js';
import { NewsTable } from './components/newsTable.js';

//News
document.addEventListener('DOMContentLoaded', () => {
    const newsContainer = document.getElementById('news-section');
    const newsTable = new NewsTable(news);
    newsContainer.innerHTML = newsTable.render();
});