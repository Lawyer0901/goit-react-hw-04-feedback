import React, { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { NoFeedbackMassage } from './NoFeedbackMassage/NoFeedbackMassage';

export function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const feedback = ['good', 'bad', 'neutral'];
  const handleClick = e => {
    const key = e.target.textContent;
    console.log(key);
    switch (key) {
      case 'good':
        setGood(prevKey => prevKey + 1);
        break;
      case 'bad':
        setBad(prevKey => prevKey + 1);
        break;
      case 'neutral':
        setNeutral(prevKey => prevKey + 1);
        break;

      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    const total = good + bad + neutral;

    if (total) {
      return total;
    }
  };
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();

    const result = (good / total) * 100;
    if (!result) {
      return feedback.good;
    }
    return Math.round(result);
  };
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={feedback} onLeaveFeedback={handleClick} />
      </Section>
      <Section title={'Statistic'}>
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <NoFeedbackMassage text={'There is no feedback'} />
        )}
      </Section>
    </>
  );
}

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleClick = e => {
//     const key = e.target.textContent;
//     console.log(key);
//     this.setState(prevState => ({
//       [key]: prevState[key] + 1,
//     }));
//   };
//   countTotalFeedback = () => {
//     const total = Object.values(this.state).reduce((acc, el) => {
//       acc += el;
//       return acc;
//     }, 0);

//     if (total) {
//       return total;
//     }
//   };

//   countPositiveFeedbackPercentage = () => {
//     const total = this.countTotalFeedback();
//     // console.log(total);
//     const possitiveValue = [this.state].reduce((acc, el) => {
//       acc += el['good'];
//       return acc;
//     }, 0);

//     const result = (possitiveValue / total) * 100;
//     if (!result) {
//       return this.state.good;
//     }
//     return Math.round(result);
//   };
//   render() {
//     const { good, bad, neutral } = this.state;
//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.handleClick}
//           />
//         </Section>
//         <Section title={'Statistic'}>
//           {this.countTotalFeedback() ? (
//             <Statistics
//               good={good}
//               bad={bad}
//               neutral={neutral}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <NoFeedbackMassage text={'There is no feedback'} />
//           )}
//         </Section>
//       </>
//     );
//   }
// }
