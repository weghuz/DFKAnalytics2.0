import { useState } from "react";
import Columns from "../Components/Columns";
import HeroFilters from "../Components/HeroFilters";
import Layout from "../Components/Layout";
import ToggleButton from "../Components/ToggleButton";

export default function Home() {
  const [showColumnSelect, setShowColumnSelect] = useState(false);
  const [showFilterSelect, setShowFilterSelect] = useState(false);
  return (
    <>
      <Layout Title={"DFKAnalytics"}>
        <div className="text-center mb-3">
          <ToggleButton variant="text"
            active={showColumnSelect}
            onClick={() => setShowColumnSelect(!showColumnSelect)}
          >
            Columns
          </ToggleButton>
          <ToggleButton
            active={showFilterSelect}
            onClick={() => setShowFilterSelect(!showFilterSelect)}
          >
            Filters
          </ToggleButton>
        </div>
        {showFilterSelect && <HeroFilters />}
        {showColumnSelect && <Columns />}
      </Layout>
    </>
  );
}
