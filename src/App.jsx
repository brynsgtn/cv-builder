import './App.css'
import Experience from './components/Experience'
import Personal from './components/Personal'
import Summary from './components/Summary'


function App() {

  return (
    <>
      <div className='shadow-2xl max-w-screen-md mx-auto mt-10'>
        <Personal />
        <Summary />
        <Experience />
      </div>

    </>
  )
}

export default App
