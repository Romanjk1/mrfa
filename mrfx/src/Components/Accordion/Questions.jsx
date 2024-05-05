import SingleQuestion from './SingleQuestion'

const Questions = ({ questions }) => {
  return (
    <section className="questions">
      <h1>Got Questions?</h1>
      {questions.map((question) => {
        return <SingleQuestion key={question.id} {...question}></SingleQuestion>
      })}
    </section>
  )
}
export default Questions
