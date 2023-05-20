


import React, { useState } from "react";
import PropTypes from 'prop-types';

import { Statistics } from "../Statistics/Statistics";
import Notification from '../Notification/Notification';
import Section from "../Section/Section"
import { FeedbackOptions } from "./FeedbackOptions"
import options from '../Data/options.json';

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (event) => {
    const { value } = event.target;
    //  Через switch метод увеличивает при нажатии, нажатие на good, bad, neutral +1
    switch (value) {
      case 'good':
        setGood((prevValue) => prevValue + 1);
        break;
      case 'neutral':
        setNeutral((prevValue) => prevValue + 1);
        break;
      case 'bad':
        setBad((prevValue) => prevValue + 1);
        break;
      default:
        break;
    }
  }

  const calculateTotal = () => {
    return good + neutral + bad;
  }

  const calculatePositivePercentage = () => {
    const total = calculateTotal();
    return total ? Math.round((good / total) * 100) : 0;
  }

  const total = calculateTotal();
  const positivePercentage = calculatePositivePercentage();

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </div>
  );
}

Feedback.propTypes = {
  initialValueGood: PropTypes.number,
  initialValueNeutral: PropTypes.number,
  initialValueBad: PropTypes.number,
}

export default Feedback;


// import React from "react";
// import PropTypes from 'prop-types';

// import {Statistics} from "../Statistics/Statistics";
// import Notification from '../Notification/Notification';
// import Section from "../Section/Section"
// import {FeedbackOptions} from "./FeedbackOptions"
// import options from '../Data/options.json';

// class Feedback extends React.Component {
//   // state значение по умолчанию +
//   static defaultProps = {
//       initialValueGood: 0,
//       initialValueNeutral: 0,
//       initialValueBad: 0,
//   };

//   state = {
//       good: this.props.initialValueGood,
//       neutral: this.props.initialValueNeutral,
//       bad: this.props.initialValueBad,
//   }

//   //  Через switch метод увеличивает при нажатии, нажатие на good, bad, neutral +1
//   onLeaveFeedback = (event) => {
//       switch (event.target.value) {
//           case 'good':
//               this.setState(prevState => ({
//                   good: prevState.good + 1,
//               }));
//               break;

//           case 'neutral':
//               this.setState(prevState => ({
//                   neutral: prevState.neutral + 1,
//               }));
//               break;

//           case 'bad':
//               this.setState(prevState => ({
//                   bad: prevState.bad + 1,
//               }));
//               break;
//           default: break;
//       }
//   }

//   // метод подсчета total,  общее количество отзывов 
//   calculateTotal = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   }

//   // метод подсчета позитивного процента отзыва
//   calculatePositivePercentage = () => {
//     const { good } = this.state;
//     const total = this.calculateTotal();
//     // total если ноль то 0 
//     return total ? parseInt((good / total) * 100) : 0;
//   }

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.calculateTotal();
//     const positivePercentage = this.calculatePositivePercentage();

//     return (
//       <div>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>
//         <Section title="Statistics">
//           {total === 0 ? (
//             <Notification message="There is no feedback" />
//           ) : (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positivePercentage}
//             ></Statistics>
//           )}
//         </Section>
//       </div>
//     )
//   }
// }

// Feedback.propTypes = {
//     initialValueGood: PropTypes.number,
//     initialValueNeutral: PropTypes.number,
//     initialValueBad: PropTypes.number,

// }


// export default Feedback;