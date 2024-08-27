function FinishScreen({ points, totalPoints, highscore, dispatch }) {
  const percentage = (points / totalPoints) * 100;

  return (
    <>
      <p className='result'>
        You scored <strong>{points} </strong> out of {totalPoints} ({Math.ceil(percentage)}%)
      </p>
      <p className='highscore'>High Score: {highscore} points</p>
      <button className='btn btn-ui' onClick={() => dispatch({ type: 'reset' })}>
        Restart
      </button>
    </>
  );
}

export default FinishScreen;
