import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import tocbot from 'tocbot';

const Nav = styled.nav`
	position: fixed;
	top: 5rem;
	right: 2.5rem;
	padding: 1rem;
	max-width: 18rem;
	background: rgba(255, 255, 255, 0.95);
	border-radius: 0.4rem;
	z-index: 9999;
	transition: all 0.3s ease-in;

	.toc-list {
		list-style: none;
		padding: 0;
	}

	.toc-link {
		color: black;
		text-decoration: none;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	.toc-list-item {
		position: relative;
		display: flex;
		flex-direction: column;
		padding: 0 1rem;
		cursor: pointer;

		&:before {
			position: absolute;
			content: ' ';
			display: inline-block;
			top: 0;
			left: 0;
			bottom: 0;
			width: 3px;
			background: #f5f5f5;
		}

		&.is-active-li {
			color: #0675c1;

			&:before {
				background: #0675c1;
			}
		}

		.toc-list-item {
			opacity: 0.6;

			&:before {
				content: none;
			}
		}
	}
`;

const NavHeader = styled.header`
	font-weight: bold;
`;

const configuration = {
	tocSelector: '.js-toc',
	contentSelector: '.sbdocs-content',
	headingSelector: '.sbdocs-h2, .sbdocs-h3, .sbdocs-h4, .sbdocs-h5, .sbdocs-h6',
};

const TableOfContents: FunctionComponent = () => {
	const [headings, setHeadings] = React.useState([]);

	React.useEffect(() => {
		const h2 = [...document.getElementsByClassName('sbdocs-h2')];

		if (h2.length > 1) {
			// @ts-ignore
			setHeadings(h2);

			tocbot.init({
				...configuration,
				onClick: event => {
					event.preventDefault();
					// @ts-ignore
					const hash = event?.currentTarget.hash;
					const id = hash?.substr(1);
					const element = document.getElementById(id);
					setTimeout(() => {
						element?.focus();
						element?.scrollIntoView();
					}, 500);
				},
			});

			return () => {
				tocbot.destroy();
			};
		}
	}, []);

	return (
		<Nav style={{display: headings.length > 1 ? 'block' : 'none'}}>
			<NavHeader>Table of contents</NavHeader>
			<div className="js-toc"></div>
		</Nav>
	);
};

export default TableOfContents;
