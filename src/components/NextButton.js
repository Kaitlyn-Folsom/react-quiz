function NextButton({ dispatch, answer, index, questionsCount }) {
  if (answer === null) return null;

  if (index < questionsCount - 1) {
    return (
      <button className='btn btn-ui' onClick={() => dispatch({ type: 'nextQuestion' })}>
        NEXT
      </button>
    );
  }

  if (index === questionsCount - 1) {
    return (
      <button className='btn btn-ui' onClick={() => dispatch({ type: 'finish' })}>
        FINISH
      </button>
    );
  }
}

export default NextButton;
