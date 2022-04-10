import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
require("./Logic/site.js");
require("./Logic/DFKBase.js");

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
