import Layout from "../Components/Layout";
import Image from "next/image";
import StamPot from "../public/StaminaPotion.png";
import { useState } from "react";
import TipModal from "../Components/Modal/TipModal";

export default function About() {
  const [showTipModal, setShowTipModal] = useState(false);
  return (
    <>
      <Layout Title={"DFKA - About"}>
        <div className="text-light container">
          <h2 className="text-center">About</h2>
          <div>
            <p>
              For any feedback about the site feel free to dm me on Discord at
              weghuz#1978. I hang around in the DFK discord a lot, you can find
              me in the hero and price discussion channels.
            </p>
            <p>
              You can find my most recent analysis of how I use formulas to
              analyse heroes in DFK{" "}
              <a
                href="https://medium.com/@Weghuz/advanced-theory-part-1-scoring-heroes-in-defi-kingdoms-1ffd043fcd1c"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
              . This is what makes up the &quot;Class Score&quot; I use on this
              site. You can also find the code in the below section.
            </p>
            <p>
              The &quot;Growth Score&quot; is a growth based score. It&apos;s
              based on a heroes Stat Growth Values. A medium article about it
              will come out at some point and then get linked in this section.
            </p>
            <h5>
              Tip a developer, click the potion:
              <a href="#" onClick={() => setShowTipModal(true)}>
                <Image
                  src={StamPot}
                  alt="Clickable Stamina Potion Tip Modal"
                  height="48px"
                  width="48px"
                />
              </a>
            </h5>
          </div>
          <hr />
          <div>
            <h5>Image assets from DFK</h5>
            <p>
              {"All assets are used with the blessings of the "}
              <a
                href="https://defikingdoms.com/team.html"
                target="_blank"
                rel="noreferrer"
              >
                {"DFK team "}
              </a>
              {"and "}
              <a
                href="https://kingdomstudios.io/"
                target="_blank"
                rel="noreferrer"
              >
                DefikingdomStudios.io
              </a>
              . All credit for the art assets goes to the amazing team behind DeFi Kingdoms.
            </p>
          </div>
        </div>
        {showTipModal ? <TipModal closeModalFunction={() => setShowTipModal(false)} /> : ""}
      </Layout>
    </>
  );
}
