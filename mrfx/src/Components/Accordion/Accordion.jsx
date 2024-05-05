import React, { useState } from 'react'
import data from '../../constants/data'
import Questions from './Questions'
import './accordion.css'

const Accordion = () => {
  const [questions, setQuestions] = useState(data)
  return (
    <div className="accordion">
      <Questions questions={questions} />
    </div>
  )
}
export default Accordion
