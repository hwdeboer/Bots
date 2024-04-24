import { Link } from "react-router-dom"; // Import Link component from react-router-dom
import { useState, useEffect } from "react";

/*    message1: usdValueAll,
    message2: usdValueBNB,
    message3: usdValueUSDT,
    message4: usdValueWBNB,
    message5: usdValueCAKE,
    message6: usdValueUSDTBot,
    message7: usdValueBNBBot,
    message8: usdValueUSDTFee,
    message9: usdValueWBNBFee,
    message10: usdValueCAKEFee,
    message11: usdValueBNBW,
    message12: usdValueUSDTW,
    message13: usdValueWBNBW,
    message14: usdValueBNBBot,
*/

function PCSbot6() {
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");
  const [message4, setMessage4] = useState("");
  const [message5, setMessage5] = useState("");
  const [message6, setMessage6] = useState("");
  const [message7, setMessage7] = useState("");
  const [message8, setMessage8] = useState("");
  const [message9, setMessage9] = useState("");
  const [message10, setMessage10] = useState("");
  const [message11, setMessage11] = useState("");
  const [message12, setMessage12] = useState("");
  const [message13, setMessage13] = useState("");
  const [message14, setMessage14] = useState("");

  const handleClick = () => {
    fetch("http://localhost:8000/messagebot3")
      .then((res) => res.json())
      .then((data) => {
        setMessage1(data.message1);
        setMessage2(data.message2);
        setMessage3(data.message3);
        setMessage4(data.message4);
        setMessage5(data.message5);
        setMessage6(data.message6);
        setMessage7(data.message7);
        setMessage8(data.message8);
        setMessage9(data.message9);
        setMessage10(data.message10);
        setMessage11(data.message11);
        setMessage12(data.message12);
        setMessage13(data.message13);
        setMessage14(data.message14);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <main className="main-container">
      <div className="main-title">
        <h1>Statistics Pancakeswap Bot 6</h1>
      </div>
      <div className="PCS_bot_pages">
        <h1>Inactive...will be activated soon!</h1>
      </div>
    </main>
  );
}

export default PCSbot6;
