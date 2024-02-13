import { useState } from "react";
import "./App.css";

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please",
      "What about a kiss?",
      "PLEASE GORGEOUS",
      "But :*(",
      "I am going to die",
      "Yep im dead",
      "ok you're talking to Siven's ghost",
      "please babe",
      ":((((",
      "PRETTY PLEASE",
      "PLEASEEEEEEE",
      "I KNOW IT IS let but please",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="App">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="Bear Kiss" />
          <div className="my-4 text-4xl font-bold">
            YAYYY!!! I love you Gorgeous!! ; Thank you for saying yes :P))
          </div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            alt="Bear with Roses"
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine Yugendhri?</h1>
          <div className="flex items-center">
            <button
              className="green App-button"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="red App-button"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
