import "./App.css";
import Card from "./Component/Card";
function App() {
  const student = {
    name: "pawan kumar",
    age: 20,
    sec: "K22ZA",
    regNo: 12205836,
  };
  const arr=[1,3,5,1,5]
  return (
    <>
      <h1 className="bg-green-400">TailWind CSS</h1>
      <h1 className="bg-black mb-5"> Pawan Kumar </h1>
      <Card userName="Pawan Kumar" student={student} btnText="click me"/>{/* we can pass arr like object like this  myarr={arr}*/ }
      <Card userName="gautam kumar" student={student} /> 
    </>
  );
}

export default App;
