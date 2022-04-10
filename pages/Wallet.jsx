import Layout from "./Components/Layout";
import MetaMask from "./Components/MetaMask";

export default function Wallet() {
  return (
    <>
      <Layout Title={"DFKA - Wallet"}>
        <div className="text-center text-light">
          <MetaMask />
          
        </div>
      </Layout>
    </>
  );
}
