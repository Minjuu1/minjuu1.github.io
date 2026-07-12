import React from 'react';
import './NewsSection.css';

const newsList = [
	{
		date: 'Jun 2026',
		content: <>✈️ Attending Festival of Learning 2026 in Seoul, Korea.</>,
	},
	{
		date: 'Apr 2026',
		content: <>
				🎉 Our paper{' '}
				<a
					href="https://dl.acm.org/doi/10.1145/3774398.3811612"
					target="_blank"
					rel="noopener noreferrer"
				>
					RelianceScope
				</a>{' '}
				was accepted to L@S 2026.
			</>,
	},
	{
		date: 'Mar 2026',
		content: <>✨ Serving as General Chair Assistant for the Festival of Learning 2026.</>,
	},
	{
		date: 'Sep 2025',
		content: <>✈️ Attending UIST 2025 in Busan, Korea.</>,
	},
	{
		date: 'Sep 2025',
		content: <>👩‍💻 Started Master's program at KAIST School of Computing.</>,
	},
	{
		date: 'Jun 2025',
		content: <>🦊 Joined LaLaLab as a summer intern, working with the Mindful Math Team.</>,
	},
	{
		date: 'Apr 2025',
		content: <>✈️ Attending CHI 2025 in Yokohama, Japan.</>,
	},
	{
		date: 'Jan 2025',
		content: (
			<>
				🎉 Our paper{' '}
				<a
					href="https://arxiv.org/abs/1234.5678"
					target="_blank"
					rel="noopener noreferrer"
				>
					TeachTune
				</a>{' '}
				was accepted to CHI 2025.
			</>
		),
	},
];

const NewsSection = () => {
	return (
		<section className="news-section">
			<h2 className="news-title">
				News
			</h2>
			<div className="news-container">
				<ul className="news-list">
					{newsList.map((news, idx) => (
						<li key={idx} className="news-item">
							<span className="news-date">
								{news.date}
							</span>
							<span className="news-content">{news.content}</span>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default NewsSection;