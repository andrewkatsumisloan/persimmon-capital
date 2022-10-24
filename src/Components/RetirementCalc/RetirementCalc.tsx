import React, { useState, useEffect } from "react";
import ValueInput from "../ValueInput";
import InvestmentGraph from "../InvestmentGraph";
import { Button, ButtonGroup } from "@chakra-ui/react";

import "./RetirementCalc.scss";

const RetirementCalc = () => {
  const [graphData, setGraphData] = useState({
    investmentArray: [1, 2, 3],
    yearArray: [2022, 2023, 2024],
  });

  const [financeData, setFinanceData] = useState({
    income: 0,
    annualSpend: 0,
    investments: 0,
    years: 0,
    growthRate: 0,
  });

  useEffect(() => {
    console.log("Logging the finance data from MainFeed", financeData);
  }, [financeData]);

  const investmentGrowth = (
    investments: number,
    growthRate: number,
    years: number,
    annualSpend: number,
    income: number
  ) => {
    let investmentArray = [];
    let yearArray = [];
    let investment = investments;
    let year = 2022;

    console.log("This is year before running while loop: ", +years + +2022);

    while (year < +years + +2022) {
      investment = investment * (+1 + +growthRate);
      investment = +investment - +annualSpend + +income;

      investmentArray.push(investment);
      yearArray.push(year);
      year++;
    }
    console.log("Investment Array: ", investmentArray);
    console.log("Year array: ", yearArray);

    setGraphData({
      investmentArray: investmentArray,
      yearArray: yearArray,
    });
  };

  return (
    <div className="main-container">
      <h1 className="retirement-calc-header"> Retirement Calculator </h1>
      <div className="main-feed-column">
        <div className="inputs-column">
          <ValueInput
            title="Net Income"
            varName="income"
            financeData={financeData}
            updateData={setFinanceData}
            increment={1000}
          ></ValueInput>

          <ValueInput
            title="Annual Spend"
            varName="annualSpend"
            financeData={financeData}
            updateData={setFinanceData}
            increment={1000}
          ></ValueInput>

          <ValueInput
            title="Investments"
            varName="investments"
            financeData={financeData}
            updateData={setFinanceData}
            increment={1000}
          ></ValueInput>

          <ValueInput
            title="Years"
            varName="years"
            financeData={financeData}
            updateData={setFinanceData}
            increment={1}
          ></ValueInput>

          <ValueInput
            title="Annual Growth Rate"
            varName="growthRate"
            financeData={financeData}
            updateData={setFinanceData}
            increment={0.01}
          ></ValueInput>

          <Button
            onClick={() =>
              investmentGrowth(
                financeData.investments,
                financeData.growthRate,
                financeData.years,
                financeData.annualSpend,
                financeData.income
              )
            }
            colorScheme="blue"
          >
            Compute
          </Button>
        </div>
        <div className="graph-component">
          <InvestmentGraph graphData={graphData}></InvestmentGraph>
        </div>
      </div>
    </div>
  );
};

export default RetirementCalc;
