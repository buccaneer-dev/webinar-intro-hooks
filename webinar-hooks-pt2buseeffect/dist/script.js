const { useState, useEffect } = React;

// fetch data every 1 minute
const POLLING_INTERVAL = 1 * 60 * 1000;
const API_URL = "https://api.coindesk.com/v1/bpi/";

const App = () => {
  const [rateEuro, setRateEuro] = useState();
  const [updateDate, setUpdateDate] = useState();

  useEffect(() => {
    const fetchData = () =>
    fetch(API_URL + "currentprice.json").
    then(resp => resp.json()).
    then(({ time, bpi }) => {
      setRateEuro(bpi.EUR.rate);
      setUpdateDate(time.updated);
    });

    fetchData();

    const timer = window.setInterval(fetchData, POLLING_INTERVAL);
    return () => window.clearInterval(timer);
  }, [rateEuro, updateDate]);

  return /*#__PURE__*/(
    React.createElement("div", { className: "h-screen bg-gray-200 p-6" }, /*#__PURE__*/
    React.createElement("h1", { className: "text-3xl leading-9 tracking-tight" }, "Webinar - useEffect"), /*#__PURE__*/
    React.createElement("p", { className: "text-xl leading-7 py-1 mb-2" }, "Bitcoin - Euro Rate"), /*#__PURE__*/
    React.createElement("div", { className: "list-disc max-w-lg py-4 px-8 bg-white shadow-lg rounded-lg my-20" }, /*#__PURE__*/
    React.createElement("h2", null, " ", `1 BTC == ${rateEuro} EUR`, " ")), /*#__PURE__*/

    React.createElement("p", null, " ", `Aggiornato alle ${updateDate}`, " ")));


};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));