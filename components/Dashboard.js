import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Main from "./Main";
import Sidebar from "./Sidebar";
import { ThirdwebSDK } from "@3rdweb/sdk";
import { ethers } from "ethers";

const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    process.env.NEXT_PUBLIC_METAMASK_KEY,
    ethers.getDefaultProvider(
      "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
    )
  )
);

const Dashboard = ({ address }) => {
  const [sanityTokens, setSanityTokens] = useState([]);
  const [thirdwebToken, setThirdwebTokens] = useState([]);

  useEffect(() => {
    const getSanityAndThirdWebTokens = async () => {
      const coins = await fetch(
        "https://exm7xgf0.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20%22coins%22%20%5D%7B%0A%20%20name%2C%0A%20%20usdPrice%2C%0A%20%20contractAddress%2C%0A%20%20symbol%2C%0A%20%20logo%0A%7D"
      );
      const sanityTokens = (await coins.json()).result;
      setSanityTokens(sanityTokens);

      setThirdwebTokens(
        sanityTokens.map((token) => sdk.getTokenModule(token.contractAddress))
      );
    };

    return getSanityAndThirdWebTokens();
  }, []);

  //console.log("Sanity ⌚", sanityTokens);
  //console.log("Thirdweb ⌚", thirdwebToken);

  return (
    <Wrapper>
      <Sidebar />
      <MainContainer>
        <Header
          walletAddress={address}
          sanityTokens={sanityTokens}
          thirdwebToken={thirdwebToken}
        />
        <Main
          walletAddress={address}
          sanityTokens={sanityTokens}
          thirdwebToken={thirdwebToken}
        />
      </MainContainer>
    </Wrapper>
  );
};

export default Dashboard;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #0a0b0d;
  color: white;
`;

const MainContainer = styled.div`
  flex: 1;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
