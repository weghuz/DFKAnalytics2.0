import React from 'react'
import Modal from '../../Modal/Modal'

export default function DisconnectWalletModal({address ,closeModalFunction, connectionMethod, disconnectWalletCallback}) {
  return (
      
    <Modal
    Title={address}
    closeModalFunction={closeModalFunction}
  >
    <p>
      {`This site stores no data on servers. The wallet connection is
      personal and will only be used to query the DeFikingdoms API.`}
    </p>
    <p>{`You're currently connected through ${connectionMethod}`}.</p>
    <p className="text-center">
      <button
        className="btn btn-sm btn-danger"
        onClick={disconnectWalletCallback}
      >
        {`Disconnect`}
      </button>
    </p>
  </Modal>
  )
}
