import React, { useState } from 'react'
import Modal from './Modal'

export default function QuestionModal({HideQuestionsModal, SaveLocalStorageWallet}) {
  const [address, setAddress] = useState("")
  return (
    <Modal Title="Why connect?" closeModalFunction={HideQuestionsModal}>
    <p>
      The reason DFKAnalytics has a connect with MetaMask feature is to
      make it easier for you to provide your active MetaMask wallets
      addresses.
    </p>
    <p>
      If you prefer to provide your 0x for the Wallet page through an
      input window instead you can do it here.
    </p>
    <input
      className="form-control form-control-sm mb-2"
      placeholder="0x address"
      onInput={(e) => setAddress(e.target.value)}
    />
    <button
      className="btn btn-sm btn-success"
      onClick={() => SaveLocalStorageWallet(address)}
    >
      Save address
    </button>
  </Modal>
  )
}
