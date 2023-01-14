import React, { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { NoFeedbackMassage } from './NoFeedbackMassage/NoFeedbackMassage';

export function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    bad: 0,
    neutral: 0,
  });

  const { good, bad, neutral } = feedback;
  const handleClick = e => {
    const key = e.target.textContent;
    console.log(key);
    setFeedback(
      prevState => {
        return {
          ...prevState,
          [key]: prevState[key] + 1,
        };
      },
      [feedback]
    );
  };
  const countTotalFeedback = () => {
    const total = Object.values(feedback).reduce((acc, el) => {
      acc += el;
      return acc;
    }, 0);

    if (total) {
      return total;
    }
  };
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const possitiveValue = [feedback].reduce((acc, el) => {
      acc += el['good'];
      return acc;
    }, 0);

    const result = (possitiveValue / total) * 100;
    if (!result) {
      return feedback.good;
    }
    return Math.round(result);
  };
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={handleClick}
        />
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
