import React, { useState, useEffect } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import "./MainFeed.scss";
import RetirementCalc from "../RetirementCalc/RetirementCalc";

const MainFeed = () => {
  return (
    <div className="main-container">
      <Tabs width="100%">
        <TabList justifyContent="center">
          <Tab
            borderRadius="25px"
            margin="7.5px"
            boxShadow="xs"
            color="black"
            b
          >
            Retirement
          </Tab>
          <Tab borderRadius="25px" margin="7.5px">
            Mortgage
          </Tab>
          <Tab borderRadius="25px" margin="7.5px">
            Early Saving
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <div>
              <RetirementCalc />
            </div>
          </TabPanel>
          <TabPanel>
            <p>Mortgage Calculator</p>
          </TabPanel>
          <TabPanel>
            <p>Early Saving</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default MainFeed;
