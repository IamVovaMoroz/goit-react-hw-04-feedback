

import React from 'react';
import PropTypes from 'prop-types';
import { SectionBox, Title } from './Section.styled';
const Section = props => {
	return (
		<SectionBox>
			<Title>{props.title}</Title>
			{props.children}
		</SectionBox>
	);
};

Section.propType = {
	title: PropTypes.string.isRequired,
	children: PropTypes.element.isRequired,
};
export default Section;