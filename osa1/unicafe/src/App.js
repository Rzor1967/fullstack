import React, { useState } from "react"

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const StatisticLine = ({ text, value, unit }) => (
  <tr><td>{text}</td><td>{value} {unit}</td></tr>
)

const Statistics = ({ good, neutral, bad }) => {
  let sum = good + neutral + bad
  if (sum > 0)
    return (
      <table>
        <StatisticLine text='good' value={good} />
        <StatisticLine text='neutral' value={neutral} />
        <StatisticLine text='bad' value={bad} />
        <StatisticLine text='all' value={sum} />
        <StatisticLine text='average' value={((good - bad) / sum).toFixed(1)} />
        <StatisticLine text='positive' value={(good / sum * 100).toFixed(1)} unit='%' />
      </table>
    )
  return (
    <>No feedback given</>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1);
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1);
  }
  const handleBad = () => {
    setBad(bad + 1);
  }

  return (
    <>
      <div>
        <h1>give feedback</h1>
      </div>
      <Button
        handleClick={handleGood}
        text='good'
      />
      <Button
        handleClick={handleNeutral}
        text='neutral'
      />
      <Button
        handleClick={handleBad}
        text='bad'
      />
      <div>
        <h1>statistics</h1>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App;
