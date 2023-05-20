import React from 'react';
import PropTypes from 'prop-types';

import { StatisticData, RatingStatistics, StatisticCell, FeedbackSummary } from './Statistics.styled';

export const Statistics = ({
	good,
	neutral,
	bad,
	total,
	positivePercentage,
}) => {
	return (
		<StatisticData>
			<RatingStatistics>
				<StatisticCell>
					<p>Good</p>
					<span>{good}</span>
				</StatisticCell>
				<StatisticCell>
					<p>Neutral</p>
					<span>{neutral}</span>
				</StatisticCell>
				<StatisticCell>
					<p>bad</p>
					<span>{bad}</span>
				</StatisticCell>
			</RatingStatistics>

			<FeedbackSummary>
				<StatisticCell>
					<p>Total</p>
					<span>{total}</span>
				</StatisticCell>
				<StatisticCell>
					<p>positive feedback</p>
					<span>{positivePercentage}%</span>
				</StatisticCell>
			</FeedbackSummary>
		</StatisticData>
	);
};

Statistics.propTypes = {
	good: PropTypes.number.isRequired,
	neutral: PropTypes.number.isRequired,
	bad: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
	positivePercentage: PropTypes.number.isRequired,
};
