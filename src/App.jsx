import { useState } from 'react';

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  const [num4, setNum4] = useState(0);
  const [num5, setNum5] = useState(0);
  const [num6, setNum6] = useState(0);
  const [num7, setNum7] = useState(0);
  const [num8, setNum8] = useState(0);

  return (
    <div className="p-5 bg-black h-screen w-full">
      <div className="flex">
        <input
          className="p-2 w-20 rounded-lg bg-gray-300"
          type="text"
          onChange={(e) => setNum1(Number(e.target.value))}
          value={num1}
        />
        <div className="text-white text-3xl w-16 text-center">+</div>
        <input
          className="p-2 w-20 rounded-lg bg-gray-300"
          type="text"
          onChange={(e) => setNum2(Number(e.target.value))}
          value={num2}
        />
        <div className="text-white text-3xl ml-3">= {num1 + num2}</div>
      </div>

      <div className="flex mt-5">
        <input
          className="p-2 w-20 rounded-lg bg-gray-300"
          type="text"
          onChange={(e) => setNum3(Number(e.target.value))}
          value={num3}
        />
        <div className="text-white text-3xl w-16 text-center">-</div>
        <input
          className="p-2 w-20 rounded-lg bg-gray-300"
          type="text"
          onChange={(e) => setNum4(Number(e.target.value))}
          value={num4}
        />
        <div className="text-white text-3xl ml-3">= {num3 - num4}</div>
      </div>
    </div>
  );
}

export default App;
