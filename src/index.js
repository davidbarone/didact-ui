import Didact from "@dbarone/didact"

function Counter(props) {
  return (
    <div>
      <div>{props.value}</div>
    </div>
  )
}

function MyTable() {
  const [state, setState] = Didact.useState(1)
  return (
    <div>
      <h1 onClick={() => setState(c => c + 1)}>Click Me!</h1>      
      <Counter message="Counter A" value={state} />
      <Counter message = "Counter B" value={state} />
      <Counter message = "Counter C" value={state} />
    </div>
  )
}

const element = <MyTable />
const container = document.getElementById("root")
Didact.render(element, container)
