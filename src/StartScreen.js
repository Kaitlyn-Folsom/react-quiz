function StartScreen({ questionsCount }) {
  return (
    <div className='start'>
      <h2>Welcome to the React Quiz!</h2>
      <h3>{questionsCount} questions to test your react mastery</h3>
      <button className='btn btn-ui'>Let's Start</button>
    </div>
  );
}

export default StartScreen;
