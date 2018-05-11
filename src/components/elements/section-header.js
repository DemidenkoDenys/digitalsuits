import React from 'react';

import './section-header.scss';

const SectionHeader = ({ text, line, fixed }) => {

	const lineClass = !!line ? 'line ' : '';
	const fixedClass = !!fixed ? 'fixed ' : '';

	return (
		<h2 className={ 'section-header ' + lineClass + fixedClass }>
			<span>{ text }</span>
		</h2>
	);
}

export default SectionHeader;