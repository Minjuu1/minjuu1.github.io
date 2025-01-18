export class NewsTable {
    constructor(news) {
        this.news = news;
    }

    renderTableRow(item) {
        const title = item.link 
            ? `<a href="${item.link}" target="_blank">${item.title}</a>`
            : item.title;

        return `
            <tr>
                <td class="news-date">${item.date}</td>
                <td class="news-title">${title}</td>
            </tr>
        `;
    }

    render() {
        return `
            <table class="news-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>News</th>
                    </tr>
                </thead>
                <tbody>
                    ${this.news.map(item => this.renderTableRow(item)).join('')}
                </tbody>
            </table>
        `;
    }
}