import {useState} from "react" ;
function Counter(){
    const [counter,setCounter]=useState(15);
    const increase=()=>{
        /*
        setCounter(counter+1);
        setCounter(counter+1);
        setCounter(counter+1);
        setCounter(counter+1);
        */
        // interview question
        // above code we tells that counter becomes 19 but  not it becomes 16 becouse it increase in bundal form
        //  to achieve above code ,basically setCounter internal take a callback in which parameter has prevcounter value

        setCounter((prevCounter)=>prevCounter+1);
        setCounter((prevCounter)=>prevCounter+1);
        setCounter((prevCounter)=>prevCounter+1);
        setCounter((prevCounter)=>prevCounter+1);

    }
    return(
        <>
        <br/>
        <button onClick={increase}>secondcounter concept{counter}</button>
        </>
    )
}
export default Counter;