import Header from './components/Header';
import Main from './components/Main';
import Loader from './components/Loader';
import Error from './components/Error';
import StartScreen from './components/StartScreen';
import Question from './components/Question';
import NextButton from './components/NextButton';
import Progress from './components/Progress';
import FinishScreen from './components/FinishScreen';
import Timer from './components/Timer';
import Footer from './components/Footer';
import { useQuiz } from './contexts/QuizContext';

export default function App() {
  const { status, questionsCount, totalPoints, dispatch, points, answer, index, secondsRemaining, questions, highscore } = useQuiz();

  return (
    <div className='app'>
      <Header />
      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <StartScreen questionsCount={questionsCount} dispatch={dispatch} />}
        {status === 'active' && (
          <>
            <Progress index={index} questionsCount={questionsCount} points={points} totalPoints={totalPoints} answer={answer} />
            <Question question={questions[index]} dispatch={dispatch} answer={answer} />
            <Footer>
              <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
              <NextButton dispatch={dispatch} answer={answer} index={index} questionsCount={questionsCount} />
            </Footer>
          </>
        )}
        {status === 'finished' && <FinishScreen points={points} totalPoints={totalPoints} highscore={highscore} dispatch={dispatch} />}
      </Main>
    </div>
  );
}
