function FinishScreen({ points, totalPoints, highscore }) {
  const percentage = (points / totalPoints) * 100;

  return (
    <>
      <p className='result'>
        You scored <strong>{points} </strong> out of {totalPoints} ({Math.ceil(percentage)}%)
      </p>
      <p className='highscore'>High Score: {highscore} points</p>
    </>
  );
}

export default FinishScreen;
