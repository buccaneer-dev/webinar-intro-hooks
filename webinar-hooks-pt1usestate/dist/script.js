const { useState } = React;

const randomD6 = () => Math.floor(Math.random() * 6) + 1;

const App = () => {
  const [diceRoll, setDiceRoll] = useState(randomD6());

  return /*#__PURE__*/(
    React.createElement("div", { className: "h-screen bg-gray-200 p-6" }, /*#__PURE__*/
    React.createElement("h1", { className: "text-3xl leading-9 tracking-tight" }, "Webinar - useState"), /*#__PURE__*/
    React.createElement("p", { className: "text-xl leading-7 py-6" }, "Hai tirato un ", /*#__PURE__*/
    React.createElement("strong", null, diceRoll), "!"), /*#__PURE__*/

    React.createElement("button", {
      className: "bg-indigo-500 font-bold rounded-full mr-2 py-4 px-8 shadow-lg uppercase tracking-wider text-white focus:outline-none",
      onClick: () => setDiceRoll(randomD6()) }, "Roll"), /*#__PURE__*/



    React.createElement("button", {
      className: "bg-indigo-500 font-bold rounded-full py-4 px-10 shadow-lg uppercase tracking-wider text-white focus:outline-none",
      onClick: () => setDiceRoll(prev => 7 - prev) }, "Flip")));





};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));