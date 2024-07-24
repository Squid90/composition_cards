import './App.css'
import { Card } from './compinents/Card'
import { Widget } from './compinents/Widget'
import { data } from './data/data.ts'

function App() {

  return (
    <>
      <Widget img={data.img}>
        <Card title={data.title} text={data.text}/>
      </Widget>
    </>
  )
}

export default App
