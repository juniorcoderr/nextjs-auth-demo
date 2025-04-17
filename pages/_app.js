import { Provider } from "next-auth/client"; // Updated import

import Layout from "../components/layout/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      {" "}
      {/* Updated usage for v3 */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
