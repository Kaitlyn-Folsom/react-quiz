function Question({ question }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <div>
        {question.options.map((option) => (
          <button key={question} className='btn btn-option'>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
