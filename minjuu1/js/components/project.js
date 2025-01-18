export class ResearchProject {
    constructor(data) {
        this.data = data;
    }

    renderAuthors() {
        return this.data.authors.join(", ");
    }

    renderLinks() {
        const links = [];
        if (this.data.links.paper) {
            links.push(`<a href="${this.data.links.paper}" target="_blank">[Paper]</a>`);
        }
        if (this.data.links.website) {
            links.push(`<a href="${this.data.links.website}" target="_blank">[website]</a>`);
        }
        return links.join(" ");
    }

    render() {
        return `
            <article class="project-card" id="project-${this.data.id}">
                <div class="project-image">
                    <img src="${this.data.image}" alt="${this.data.title}">
                </div>
                <div class="project-content">
                    <h3 class="project-title">${this.data.title}</h3>
                    <p class="project-authors">${this.renderAuthors()}</p>
                    <p class="project-type">${this.data.type}</p>
                    <p class="project-conference">${this.data.conference}</p>
                    <p class="project-description">${this.data.description}</p>
                    <div class="project-links">
                        ${this.renderLinks()}
                    </div>
                </div>
            </article>
        `;
    }
}