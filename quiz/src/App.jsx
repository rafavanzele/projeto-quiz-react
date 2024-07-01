import { useContext, useEffect } from 'react'
import { QuizContext } from './context/quiz'

// ESTILOS
import './App.css'

// COMPONENTES
import Welcome from './components/Welcome'
import PickCategory from './components/PickCategory'
import Questions from './components/Questions'
import GameOver from './components/GameOver'

function App() {

  const [quizState, dispatch] = useContext(QuizContext)

   
  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === 'Start' && <Welcome/>}
      {quizState.gameStage === 'Category' && <PickCategory/>}
      {quizState.gameStage === 'Playing' && <Questions/>}
      {quizState.gameStage === 'End' && <GameOver/>}
    </div>
      
  )
}

export default App
