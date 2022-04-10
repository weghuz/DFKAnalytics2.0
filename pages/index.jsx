import Columns from "./Components/Columns";
import HeroFilters from "./Components/HeroFilters";
import Layout from "./Components/Layout";

export default function Home() {
  return (
    <>
      <Layout Title={"DFKAnalytics"}>
        <HeroFilters />
        <Columns />
      </Layout>
    </>
  );
}
