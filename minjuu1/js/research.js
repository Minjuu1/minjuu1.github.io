import { projects } from './data/projects.js';
import { PaperCard } from './components/project.js';

// 모든 논문 카드 표시
function displayPaperCards(containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    projects.forEach(projects => {
        const paperCard = new PaperCard(projects);
        container.appendChild(paperCard.render());
    });
}

// CSS 스타일
const styles = `
.paper-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    margin: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: white;
    transition: transform 0.2s ease-in-out;
}

.paper-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.paper-title {
    font-size: 1.2em;
    margin: 0 0 10px 0;
    color: #333;
}

.paper-authors {
    color: #666;
    margin: 5px 0;
    font-style: italic;
}

.paper-conference {
    color: #444;
    margin: 5px 0;
}

.paper-type {
    display: inline-block;
    background-color: #f0f0f0;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 0.9em;
    color: #666;
}

.paper-links {
    margin-top: 15px;
    display: flex;
    gap: 10px;
}

.paper-links a {
    padding: 5px 10px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.2s;
}

.paper-links a:hover {
    background-color: #0056b3;
}
`;

// 스타일 적용
function applyStyles() {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
}

// 초기화 함수
function init() {
    applyStyles();
    displayPaperCards('papers-container');
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', init);