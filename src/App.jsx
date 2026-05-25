import { Switch, Route } from 'wouter'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <Switch>
        <Route path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </ThemeProvider>
  )
}

export default App
