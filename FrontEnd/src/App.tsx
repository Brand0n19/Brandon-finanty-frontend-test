import { BrowserRouter } from 'react-router'
import { ContentRouter } from './routes/content-router'

function App() {

  return (
    <BrowserRouter basename='finanty'>
      <ContentRouter/>
    </BrowserRouter>
  )
}

export default App
