import { projects } from './data/projects.js';
import { ResearchProject } from './components/researchProject.js';

document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.getElementById('projects-container');
    
    projects.forEach(projectData => {
        const project = new ResearchProject(projectData);
        projectsContainer.innerHTML += project.render();
    });
});