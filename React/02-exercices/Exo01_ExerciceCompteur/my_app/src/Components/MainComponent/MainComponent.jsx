import React, { useState, useRef } from 'react';


const MainComponent = () => {
    const [startValues, setStartValues] = useState([]);
    const counterStartInputRef = useRef()

    const onFormSubmitHandler = (e) => {
        e.preventDefault()

        setStartValues(prev => [...prev, +counterStartInputRef.current.value])
    }

    return (  
        <div className='container my-3'>
            <div className='row'>
                <div className='col-6 offset-3 bg-dark text-light p-3 rounded'>
                    <h1>MainComponent</h1>
                    <hr />
                    <form onSubmit={onFormSubmitHandler}>
                        <div className='mb-3'>
                            <label htmlFor="counterStartValue" className='form-label'>Start value : </label>
                            <input type="number" id='CounterStartValue' className='form-control' min={0}
                            ref={counterStartInputRef} required/>
                        </div>
                        <button className='d-block ms-auto btn btn-outline-light'>Add a counter</button>
                    </form>
                    <div>
                        <h3>Counters</h3>
                        <hr />




                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default MainComponent;