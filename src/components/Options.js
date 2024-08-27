function Options({ question }) {
  return (
    <div>
      {question.options.map((option) => (
        <button key={question} className='btn btn-option'>
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
