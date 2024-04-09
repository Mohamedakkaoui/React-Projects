import Student from "./Student"
function App() {
  return (
    <>
      <Student name = "mohamed" age={23} isStudent = {false}/>
      <Student name = "Wissal" age = {21} isStudent = {true}/>
      <Student name = "yassine" age = {16} isStudent = {true}/>
      <Student name = "youssef" age = {16} isStudent = {true}/>
      <Student age = {12} isStudent = {false}/>
    </>
  )
}

export default App
