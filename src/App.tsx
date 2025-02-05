import { Provider } from 'react-redux'
import Login from './pages/login/index'
import { useTheme } from "@h/index";
function App() {
  useTheme()
  return (
    <Login />
  )
}

export default App
