import { useContext, useEffect } from 'react'
import { QuizContext } from './context/quiz'

// ESTILOS
import './App.css'

// COMPONENTES
import Welcome from './components/Welcome'
import Questions from './components/Questions'

function App() {

  const [quizState, dispatch] = useContext(QuizContext)

  useEffect(() => {
    // embralhando perguntas
    dispatch({type: 'REORDER_QUESTIONS'})
  }, [])
  
  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === 'Start' && <Welcome/>}
      {quizState.gameStage === 'Playing' && <Questions/>}
    </div>
      
  )
}

export default App
