import React from "react"
import ReactDOM from "react-dom"



function MainContent() {
  return (
    <div>

      <h1>Welcome to the main content of the page</h1>
      <p>I hope you enjoy!</p>
    </div>
  )
}

ReactDOM.render(
  <MainContent />,
  document.getElementById('root')
)