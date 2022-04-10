import { ethers } from "ethers";
import React from "react";
import { useEffect, useState, useLayoutEffect } from "react";
import Modal from "./Modal";
import QuestionModal from "./QuestionModal";

export default function MetaMask() {
  const [connected, setConnected] = useState(true);
  const [address, setAddress] = useState("");
  const [metaMaskInstalled, setMetaMaskInstalled] = useState(true);
  const [showQuestionsModal, setShowQuestionsModal] = useState(false);
  const [showConnectedInformation, setShowConnectedInformation] =
    useState(false);
  const [connecting, setConnecting] = useState(false);
  const [connectionMethod, setConnectionMethod] = useState("");
  function SetLocalStorageWallet(event) {
    if (event !== undefined) {
      localStorage.setItem("address", event.target.value);
    }
  }
  const SaveLocalStorageWallet = () => {
    setConnectionMethod("Local Storage");
    setAddress(localStorage.getItem("address"));
    setShowQuestionsModal(false);
    setConnected(true);
  }
  function SetWallet(address) {
    if (address.length > 0) {
      setAddress(address[0]);
      setConnectionMethod("MetaMask");
      console.log("connected!");
      setConnected(true);
    } else {
      setConnected(false);
    }
  }
  const FindConnectedWallets = async () => {
    let provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await provider.listAccounts();
    SetWallet(accounts);
  };
  const ConnectWallet = async () => {
    setConnecting(true);
    window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((accounts) => {
        SetWallet(accounts);
      })
      .catch((f) => {
        setConnected(false);
      })
      .finally(() => {
        setConnecting(false);
      });
  };
  useEffect(() => {
    async function OnWindowLoaded() {
      let savedWallet = localStorage.getItem("address");
      console.log(savedWallet);
      if (savedWallet) {
        setAddress(savedWallet);
        SaveLocalStorageWallet();
        return;
      }
      if (typeof window.ethereum !== "undefined") {
        FindConnectedWallets();
      } else {
        setMetaMaskInstalled(false);
      }
    }
    OnWindowLoaded();
  }, []);
  function HideQuestionsModal() {
    setShowQuestionsModal(false);
  }
  function HideConnectedInformationModal() {
    setShowConnectedInformation(false);
  }
  const DisconnectWallet = () => {
    if (connectionMethod == "MetaMask") {
      window.open(
        "https://metamask.zendesk.com/hc/en-us/articles/360059535551-Disconnect-wallet-from-a-dapp"
      );
      return;
    }
    localStorage.setItem("address", "");
    setConnected(false);
  };
  if (connecting) {
    return <span className="text-success">Connecting...</span>;
  }
  if (!metaMaskInstalled) {
    return (
      <>
        <div className="d-inline-block mx-2">
          <button
            type="button"
            className="btn btn-sm text-white outline-primary btn-success"
            onClick={() => {
              setShowQuestionsModal(true);
            }}
          >
            Why connect?
          </button>
        </div>
        {showQuestionsModal && (
          <QuestionModal HideQuestionsModal={HideQuestionsModal} SetLocalStorageWallet={SetLocalStorageWallet} SaveLocalStorageWallet={SaveLocalStorageWallet} />
        )}
      </>
    );
  }
  if (!connected) {
    return (
      <>
        <div className="d-inline-block mx-2">
          <button
            className={`btn btn-sm text-white outline-primary btn-success`}
            onClick={() => ConnectWallet()}
          >
            Connect 🦊
          </button>
        </div>
        <div className="d-inline-block mx-2">
          <button
            type="button"
            className="btn btn-sm text-white outline-primary btn-success"
            onClick={() => {
              setShowQuestionsModal(true);
            }}
          >
            Why connect?
          </button>
        </div>
        {showQuestionsModal ? (
          <QuestionModal HideQuestionsModal={HideQuestionsModal} SetLocalStorageWallet={SetLocalStorageWallet} SaveLocalStorageWallet={SaveLocalStorageWallet} />
        ) : (
          ""
        )}
      </>
    );
  }

  return (
    <>
      <button
        className="btn btn-sm btn-primary"
        onClick={() => setShowConnectedInformation(true)}
      >
        {`${address.substring(0, 6)}`}
      </button>
      {showConnectedInformation && (
        <Modal
          Title={address}
          closeModalFunction={HideConnectedInformationModal}
        >
          <p>
            This site stores no data peronal data. The wallet connection is
            personal and will only be used to query the DeFikingdoms API.
          </p>
          <p>You're currently connected through {connectionMethod}.</p>
          <p className="text-center">
            <button
              className="btn btn-sm btn-danger"
              onClick={DisconnectWallet}
            >
              Disconnect
            </button>
          </p>
        </Modal>
      )}
    </>
  );
}
