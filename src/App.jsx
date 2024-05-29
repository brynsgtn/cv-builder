import './App.css'
import Education from './components/Education'
import Experience from './components/Experience'
import Personal from './components/Personal'
import Skills from './components/Skill'
import Summary from './components/Summary'


function App() {

  return (
    <>
      <div className='shadow-2xl max-w-screen-md mx-auto my-10 pb-5'>
        <Personal />
        <Summary />
        <Experience />
        <Education />
        <Skills />
      </div>

    </>
  )
}

export default App
