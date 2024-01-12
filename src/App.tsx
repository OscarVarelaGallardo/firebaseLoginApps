
import { FacebookProvider, LoginButton } from 'react-facebook';
import './App.css'

function App() {

  const login = (): void => {
    console.log('login')
  }
  return (
    <>
      <div>
        <button
          onClick={login}
          className="btn btn-primary"
        >Google</button>
      </div>
    </>
  )
}

export default App
