const { useState, useEffect, useRef, createContext, useContext } = React;

const loginUser = () =>
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      username: "Joe Dever",
      id: "4baea1a4-0e99-457b-a987-de9f86f7c736",
      permissions: ["permission:p"] });

  }, 100);
});

const logoutUser = () =>
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(defaultAuthCtxUser());
  }, 100);
});

// The options to initialize a default AuthCtx
const defaultAuthCtxUser = () => {
  return {
    id: "",
    username: "",
    permissions: [] };

};

class AuthCtx {
  constructor(_opts = defaultAuthCtxUser()) {}

  hasPermission(permission) {var _this$_opts;
    return (((_this$_opts = this._opts) === null || _this$_opts === void 0 ? void 0 : _this$_opts.permissions) || []).includes(permission);
  }

  userProfileName() {var _this$_opts2;
    return ((_this$_opts2 = this._opts) === null || _this$_opts2 === void 0 ? void 0 : _this$_opts2.username) || "Nessuno";
  }

  setUser(user) {
    this._opts = user;
  }}


const AuthContext = createContext(new AuthCtx());

const Component5 = () => {
  const user = useContext(AuthContext);
  return /*#__PURE__*/(
    React.createElement("div", { className: "max-w-md py-2 px-3 bg-white shadow-lg rounded-lg my-5 border-2" }, /*#__PURE__*/
    React.createElement("h2", { className: "text-3xl leading-9 tracking-tight" }, `Ciao ${
    user.userProfileName() || "Nessuno"
    }!`),
    user.hasPermission("permission:p") && /*#__PURE__*/
    React.createElement("p", null, "Ai piedi della collina il sentiero si biforca, ma entrambe le piste portano nel folto della foresta: se scegli il sentiero di destra vai al paragrafo 85, se scegli quello di sinistra al 275.")));







};

const Component4 = () => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "max-w-md py-2 px-3 bg-white shadow-lg rounded-lg my-5 border-2" }, /*#__PURE__*/
    React.createElement("h2", { className: "text-3xl leading-9 tracking-tight" }, "... 3"), /*#__PURE__*/
    React.createElement(Component5, null)));


};

const Component3 = () => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "max-w-lg py-2 px-3 bg-white shadow-lg rounded-lg my-5 border-2" }, /*#__PURE__*/
    React.createElement("h2", { className: "text-3xl leading-9 tracking-tight" }, "... 2"), /*#__PURE__*/
    React.createElement(Component4, null)));


};

const Component2 = () => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "max-w-md py-2 px-3 bg-white shadow-lg rounded-lg my-5 border-2" }, /*#__PURE__*/
    React.createElement("h2", { className: "text-3xl leading-9 tracking-tight" }, "... 1"), /*#__PURE__*/
    React.createElement(Component3, null)));


};

const App = () => {
  const [auth, setAuth] = useState(new AuthCtx());
  const [logged, setLogged] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // fingiamo la chiamata ad un API per l'utente
    if (!logged) {
      loginUser().then(u => auth.setUser(u));
    } else {
      logoutUser().then(u => auth.setUser(u));
    }
  }, [logged]);

  return /*#__PURE__*/(
    React.createElement(AuthContext.Provider, { value: auth }, /*#__PURE__*/
    React.createElement("div", { className: "h-screen bg-gray-200 p-6" }, /*#__PURE__*/
    React.createElement("h1", { className: "text-3xl leading-9 tracking-tight" }, `Utente: ${
    auth.userProfileName() || "Nessuno"
    }`), /*#__PURE__*/
    React.createElement(Component2, null), /*#__PURE__*/
    React.createElement("input", {
      ref: ref,
      id: "auth-checkbox",
      type: "checkbox",
      value: "",
      class: "mb-8 w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600",
      onClick: () => setLogged(ref.current.checked) }), /*#__PURE__*/

    React.createElement("label", {
      for: "auth-checkbox",
      class: "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" },

    " ", "Toggle Utente"))));





};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));