import { ethers } from "ethers";
import { useEffect, useState, useContext } from "react";
import DisconnectWalletModal from "./Modal/DisconnectWalletModal";
import QuestionModal from "./Modal/QuestionModal";
import QueryContext from "../../Context/Context";
import { Button, Grid } from "@mui/material";

export default function MetaMask() {
  const [connected, setConnected] = useState(true);
  const [address, setAddress] = useState("");
  const [metaMaskInstalled, setMetaMaskInstalled] = useState(true);
  const [showQuestionsModal, setShowQuestionsModal] = useState(false);
  const [showConnectedInformation, setShowConnectedInformation] =
    useState(false);
  const [connecting, setConnecting] = useState(false);
  const [connectionMethod, setConnectionMethod] = useState("");
  const [connectionText, setConnectionText] = useState("");
  const [textInterval, setTextInterval] = useState(0);
  const queryContext = useContext(QueryContext);
  useEffect(() => {
    if (address.length == 42) {
      queryContext.setQuery({
        ...queryContext.query,
        wallet: address,
      });
    }
  }, [address]);
  const SaveLocalStorageWallet = (address) => {
    setConnectionMethod("Local Storage");
    localStorage.setItem("address", address);
    setAddress(address);
    setConnected(true);
    setShowQuestionsModal(false);
  };
  const FindConnectedWallets = async () => {
    let provider = new ethers.providers.Web3Provider(window.ethereum);
    const address = await provider.listAccounts();
    ConnectMetamaskAddress(address);
  };
  useEffect(() => {
    console.log("setInterval");
    const intervalId = setInterval(() => {
      console.log(connectionText);
      setConnectionText((text) => {
        if (text.length < 3) {
          return text + ".";
        }
        return "";
      });
    }, 350);
    setTextInterval((interval) => {
      console.log(intervalId);
      return intervalId;
    });
  }, [connecting]);
  useEffect(() => {
    const OnWindowLoaded = async () => {
      let savedWallet = localStorage.getItem("address");
      if (savedWallet) {
        SaveLocalStorageWallet(savedWallet);
        return;
      }
      if (typeof window.ethereum !== "undefined") {
        FindConnectedWallets();
      } else {
        setConnected(false);
        setMetaMaskInstalled(false);
      }
    };
    OnWindowLoaded();
  }, []);
  const ConnectMetamaskAddress = (address) => {
    if (address.length == 0) {
      setConnected(false);
      return;
    }
    setAddress(address[0]);
    setConnected(true);
    setConnectionMethod("MetaMask");
  };
  const ConnectWallet = async () => {
    setConnecting(true);
    window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((address) => {
        ConnectMetamaskAddress(address);
      })
      .catch((f) => {
        setConnecting(false);
      })
      .finally(() => {
        setConnecting(false);
      });
  };
  const HideQuestionsModal = () => {
    setShowQuestionsModal(false);
  };
  const DisconnectWallet = () => {
    if (connectionMethod == "MetaMask") {
      window.open(
        "https://metamask.zendesk.com/hc/en-us/articles/360059535551-Disconnect-wallet-from-a-dapp"
      );
      return;
    }
    localStorage.setItem("address", "");
    setShowConnectedInformation(false);
    setShowQuestionsModal(false);
    setConnected(false);
  };
  if (connecting) {
    return (
      <div
        style={{ width: "100px" }}
        className="text-start d-inline-block text-success mx-2"
      >
        Connecting{connectionText}
      </div>
    );
  }
  if (textInterval !== 0) {
    console.log("reset");
    setConnectionText("");
    clearInterval(textInterval);
    setTextInterval(0);
  }
  if (!metaMaskInstalled) {
    return (
      <>
        <Grid container spacing={2}>
          <Grid item>
            <Button
              variant="contained"
              color="success"
              onClick={() => {
                setShowQuestionsModal(true);
              }}
            >
              Why connect?
            </Button>
          </Grid>
        </Grid>
        {showQuestionsModal && (
          <QuestionModal
            HideQuestionsModal={HideQuestionsModal}
            SaveLocalStorageWallet={SaveLocalStorageWallet}
          />
        )}
      </>
    );
  }
  if (!connected) {
    return (
      <Grid container spacing={2}>
        <Grid item className="d-inline-block mx-2">
          <Button
            variant="contained"
            color="success"
            onClick={() => ConnectWallet()}
          >
            Connect 🦊
          </Button>
        </Grid>
        <Grid item className="d-inline-block mx-2">
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              setShowQuestionsModal(true);
            }}
          >
            Why connect?
          </Button>
        </Grid>
        {showQuestionsModal ? (
          <QuestionModal
            HideQuestionsModal={HideQuestionsModal}
            SaveLocalStorageWallet={SaveLocalStorageWallet}
          />
        ) : (
          ""
        )}
      </Grid>
    );
  }
  return (
    <Grid container spacing={2} alignItems={"center"}>
      <Grid item sx={{ fontWeight: "bold" }}>
        Connected with
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="success"
          onClick={() => setShowConnectedInformation(true)}
        >
          {`${
            address.substring(2, 6) +
            "..." +
            address.substring(address.length - 4, address.length)
          }`}
        </Button>
      </Grid>
      {showConnectedInformation && (
        <DisconnectWalletModal
          closeModalFunction={() => setShowConnectedInformation(false)}
          address={address}
          connectionMethod={connectionMethod}
          disconnectWalletCallback={DisconnectWallet}
        />
      )}
    </Grid>
  );
}
