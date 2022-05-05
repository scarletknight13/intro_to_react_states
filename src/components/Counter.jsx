function Counter(props){
    console.log(props)
    return (
        <div>
            <h1>Counter Component</h1>
            <section>
                <h2>Current Count: {props.count}</h2>
            </section>
            <section>
                <button onClick={props.decrement}>-</button>
                <button onClick={props.increment}>+</button>
            </section>
        </div>
    );
}
export default Counter;