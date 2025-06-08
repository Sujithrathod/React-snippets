export default function Sum(props){
    const firstNumber = props.firstNumber;
    const secondNumber = props.secondNumber;
    const result = firstNumber + secondNumber;
    return(
        <>
            <h1>sum of {firstNumber} and {secondNumber}</h1>
            <p>{result}</p>
        </>
    )
}

// props are objects