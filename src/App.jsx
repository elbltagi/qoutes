import { useEffect, useState } from "react";
import { FiRefreshCcw, FiTwitter } from "react-icons/fi";
import "./App.css";

function App() {
  const [qoute, setQoute] = useState();
  const get_qoute = () => {
    setQoute(null);
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        setQoute(data[Math.floor(Math.random() * data.length)]);
      });
  };
  useEffect(() => {
    get_qoute();
  }, []);

  return (
    <div className="App bg-[#E6E7EA] w-full h-full gap-3 flex-col flex justify-center items-center">
      <div className="w-1/3 max-md:w-[90%] flex flex-col gap-3 items-start justify-center">
        <div
          className={`p-6 rounded-lg text-xl w-full flex flex-col gap-4 font-sans text-left bg-[#958d75] text-[#313443] shadow-xl shadow-gray-800`}
        >
          {qoute ? (
            <>
              <p>{qoute?.text}</p>
              <p className="text-[#5fc6e6]">by {qoute?.author}</p>
            </>
          ) : (
            <h1>loading...</h1>
          )}
        </div>
        <div className="flex w-full gap-4">
          <button
            className="bg-[#c29470] flex-1  p-4 text-xl shadow-xl text-[#313443] hover:bg-[#313443] hover:text-[#c29470] transition-all shadow-gray-800 gap-2 flex justify-center items-center rounded-md"
            onClick={get_qoute}
          >
            Another one
            <FiRefreshCcw size={24} />
          </button>
          <a
            target="_blank"
            className="flex-1 bg-[#be7843] flex items-center justify-center shadow-xl text-[#313443] hover:bg-[#313443] hover:text-[#be7843] transition-all shadow-gray-800 gap-2 text-xl rounded-md "
            href={`https://twitter.com/intent/tweet?text=${
              qoute?.text + "%0A%0A" + "by " + qoute?.author
            }`}
          >
            Tweet
            <FiTwitter />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
