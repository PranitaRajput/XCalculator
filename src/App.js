import React, {useState} from 'react';

const App = ()=> {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

const handleClick =(value) => {
  setInput ((prevInput) => prevInput + value);
};

const handleCalculate =() =>{
  try{
    const calcResult = eval(input);
    setResult(calcResult.toString());
  }catch(error){
    setResult('Error');
  }
};

const handleClear = () => {
  setInput ('');
  setResult('');
};

return (
  <div style={{textAlign:'center', margin:'50px', fontFamily:'san-serif'}}> 
      <h1 style={{padding:'10px'}}>React calculator</h1>

      <div style={{marginBottom: '10px', fontSize:'24px'}} >
      <input 
       type="text"
       value={input || ' '}
       readOnly
        style={{
          border: '1px solid #000',
          borderRadius: '2px',
          width: '200px',
          height: '10px',
          margin: '10px auto',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: '5px',
          fontSize: '16px',
          backgroundColor: '#f5f5f5',
        }}
      />        
      <div style={{color:'grey'}}> {result || ''}</div>
      </div>

      <div>
        {/* <button onClick={handleClear}>C</button> */}
        {[7,8,9].map((num) => (
          <button style={{padding:'15px 18px', fontSize:'22px', borderRadius:'5px', margin:'5px'}}
          key={num} onClick={() => handleClick(num.toString())}>
            {num}
          </button>
        ))}
        <button style={{padding:'15px 18px', fontSize:'22px', borderRadius:'5px', margin:'5px'}}
        onClick={() =>handleClick('+')}>+</button>
      </div>
      <div>
        {[4, 5, 6].map ((num) => (
          <button style={{padding:'15px 18px', fontSize:'22px', borderRadius:'5px', margin:'5px'}}
          key={num} onClick={() => handleClick(num.toString())}>
            {num}
          </button>
        ))}
        <button style={{padding:'15px 18px', fontSize:'22px', borderRadius:'5px', margin:'5px'}}
        onClick={() => handleClick('-')}>-</button>
      </div>
      <div>
        {[1, 2, 3].map ((num) => (
          <button style={{padding:'15px 18px', fontSize:'22px', borderRadius:'5px', margin:'5px'}}
          key={num} onClick={() => handleClick(num.toString())}>
          {num}
          </button>
        ))}
         <button style={{padding:'15px 18px', fontSize:'22px', borderRadius:'5px', margin:'5px'}}
         onClick={() => handleClick('*')}>*</button>
      </div>
      <div>  
      <button style={{padding:'15px 18px', fontSize:'22px', borderRadius:'5px', margin:'5px'}}
      onClick={handleClear}>C</button>
      <button style={{padding:'15px 18px', fontSize:'22px', borderRadius:'5px', margin:'5px'}}
      onClick={() => handleClick('0')}>0</button>
      <button style={{padding:'15px 18px', fontSize:'22px', borderRadius:'5px', margin:'5px'}}
      onClick={handleCalculate}>=</button>
      <button style={{padding:'15px 18px', fontSize:'22px', borderRadius:'5px', margin:'5px'}}
      onClick={() => handleClick('/')}>/</button>
      </div>
  </div>
);

};

export default App;
