import {useState, useEffect, useRef, useCallback} from 'react';

const Counter = () => {
    const [clicks, setClicks] = useState(0);
    const [step, setStep] = useState(1);

    const currentValue = useRef(0);

    const showValue = () => {
        console.log(currentValue);

        debugger
        setTimeout(() => {
            alert(currentValue.current);
        }, 3000)
    };

    useEffect(() => {
        console.log('render: ', clicks, step);
        document.title = `Component rendered. Clicked ${clicks} times`;

        setStep((prevValue) => prevValue + 1);
    }, [clicks, setStep]);

    useEffect(() => {
        console.log('Step: ', step);
    }, [step])

    return (
        <div>
            <div>Clicked: {clicks} </div>
            <button onClick={() => setClicks(clicks + step)}>Click</button>
            <br/>
            <button onClick={showValue}>Show value</button>
            <br/>
            <input ref={currentValue} name="step" value={step} onChange={(e) => setStep(+e.target.value)}/>
        </div>
    )
};

export default Counter;