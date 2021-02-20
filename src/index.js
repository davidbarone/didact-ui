import Didact from "@dbarone/didact"
const { render, useEffect } = Didact

const Counter = () => {
  useEffect(() => { alert("in useEffect!") });

  return (
    <div>Hello World!</div>
  )
}

const element = <Counter />;
const container = document.getElementById("root");
render(element, container);
