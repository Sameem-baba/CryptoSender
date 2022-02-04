import styled from "styled-components";
import CoinItem from "./CoinItem";

const CoinSelectorModal = ({
  setAction,
  selectedToken,
  setSelectedToken,
  thirdwebTokens,
  sanityTokens,
  walletAddress,
}) => {
  return (
    <Wrapper>
      <Title>Select Assets</Title>
      <Coinlist>
        {sanityTokens.map((token, i) => (
          <CoinItem
            key={i}
            token={token}
            sender={walletAddress}
            selectedToken={selectedToken}
            setSelectedToken={setSelectedToken}
            setAction={setAction}
            thirdwebTokens={thirdwebTokens}
            sanityTokens={sanityTokens}
          />
        ))}
      </Coinlist>
    </Wrapper>
  );
};

export default CoinSelectorModal;

const Wrapper = styled.div``;

const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Coinlist = styled.div`
  display: flex;
  flex-direction: column;
`;
