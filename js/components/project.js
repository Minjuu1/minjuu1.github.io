// PaperCard 컴포넌트 클래스
export class PaperCard {
    constructor(paper) {
        this.paper = paper;
    }

    createTitle() {
        const title = document.createElement('h2');
        title.textContent = this.paper.title;
        title.className = 'paper-title';
        return title;
    }

    createAuthors() {
        const authors = document.createElement('p');
        authors.textContent = this.paper.authors.join(', ');
        authors.className = 'paper-authors';
        return authors;
    }

    createConference() {
        const conference = document.createElement('p');
        conference.textContent = this.paper.conference;
        conference.className = 'paper-conference';
        return conference;
    }

    createLink(url, text) {
        const link = document.createElement('a');
        link.href = url;
        link.textContent = text;
        link.target = '_blank';
        return link;
    }

    createLinks() {
        const links = document.createElement('div');
        links.className = 'paper-links';

        if (this.paper.links.website) {
            links.appendChild(this.createLink(this.paper.links.website, 'Website'));
        }

        if (this.paper.links.arxiv) {
            links.appendChild(this.createLink(this.paper.links.arxiv, 'arXiv'));
        }

        return links;
    }

    render() {
        const card = document.createElement('div');
        card.className = 'paper-card';

        card.appendChild(this.createTitle());
        card.appendChild(this.createAuthors());
        card.appendChild(this.createConference());
        card.appendChild(this.createType());
        card.appendChild(this.createLinks());

        return card;
    }
}