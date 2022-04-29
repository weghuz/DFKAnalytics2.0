import React from "react";
import Modal from "./Modal";
import Image from "next/image";
import StamPot from "../../public/StaminaPotion.png";

export default function TipModal({ closeModalFunction }) {
  return (
    <Modal Title="Tip Modal" closeModalFunction={closeModalFunction}>
      <h5>
        {`Tip to top up the developers stamina `}
        <Image
          src={StamPot}
          alt="Stamina Potion Tip Modal"
          height="60px"
          width="60px"
        />
      </h5>
      <span className="text-primary">
        {`0xCF3984f4CAa584BEA203Ba2D2A80E05aD8D8C0C9`}
      </span>
      <h5 className="my-3">
        {`With the stamina the develper can quest for more features.`}
      </h5>

      <h6>{`Tip top tippers:`}</h6>
      <ul>
        <li>{`Thorik Ẅood: 28.2J`}</li>
        <li>{`Afromaster🍍Burnmaster🍕Gamemaster: 6.969J`}</li>
        <li>{`burnem: 4.20J`}</li>
      </ul>
    </Modal>
  );
}
