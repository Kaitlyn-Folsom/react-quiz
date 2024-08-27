function Progress({ index, questionsCount, points, totalPoints, answer }) {
  return (
    <header className='progress'>
      <progress max={questionsCount} value={index + Number(answer !== null)}></progress>
      <p>
        Question <strong>{index + 1}</strong>/{questionsCount}
      </p>
      <p>
        <strong>{points}</strong>/{totalPoints} points
      </p>
    </header>
  );
}

export default Progress;
