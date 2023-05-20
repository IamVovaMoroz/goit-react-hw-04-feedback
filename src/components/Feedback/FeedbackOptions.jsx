

import React from 'react';
import PropTypes from 'prop-types';
import { ButtonContainer, Buttons } from './FeedbackOptions.styled';


// options массив с Feetback содержит 'good', 'neutral', 'bad' для кнопок 
export const FeedbackOptions = ({options, onLeaveFeedback}) =>{
    return (
// создаём кнопки
<ButtonContainer>
			{options.map(option => {
				return (
					<Buttons type="button" key={option} value={option} onClick={onLeaveFeedback}>
						{option}
					</Buttons>
				);
			})}
		</ButtonContainer>

    )

}

FeedbackOptions.propTypes = {
	options: PropTypes.arrayOf(PropTypes.string),
	onLeaveFeedback: PropTypes.func,
};