import React, { useEffect } from "react";

import { Box } from "@material-ui/core";
import Page from "src/component/Page";
import Banner from "./Banner";
import RoadMap from "./RoadMap";
import ConnectUs from "./ConnectUs";
import FAQ from "./FAQ";
import { useLocation } from "react-router-dom";
import Scroll from "react-scroll";

function Home(props) {
  const location = useLocation();
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [location.pathname]);

  useEffect(() => {
    let searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has("id")) {
      let param = searchParams.get("id");
      const getdiv = document.getElementById(param);
      const ofsetTop = getdiv.offsetTop - 30;
      console.log(ofsetTop);
      var scroll = Scroll.animateScroll;
      scroll.scrollTo(ofsetTop, param);
    }
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <Page title="SUPPLY | CHAIN">
      <Box style={{ position: "relative" }}>
        <div id="home">
          <Banner />
        </div>
        <div id="roadmap">
          <RoadMap />
        </div>

        <ConnectUs />
        <FAQ />
      </Box>
    </Page>
  );
}

export default Home;
