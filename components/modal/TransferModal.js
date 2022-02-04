import { useState } from "react";
import styled from "styled-components";
import CoinSelectorModal from "./CoinSelectorModal";
import SendModal from "./SendModal";
import { TailSpin } from "react-loader-spinner";
import RecieveModal from "./RecieveModal";

const TransferModal = ({ sanityTokens, thirdWebTokens, walletAddress }) => {
  const [action, setAction] = useState("send");
  const [selectedToken, setSelectedToken] = useState(sanityTokens[0]);

  const selectedStyle = {
    color: "#3773f5",
  };

  const unselectedStyle = {
    border: "1px solid #282b2f",
  };

  const selectModal = (option) => {
    switch (option) {
      case "send":
        return (
          <SendModal
            selectedToken={selectedToken}
            setAction={setAction}
            thirdWebTokens={thirdWebTokens}
            walletAddress={walletAddress}
          />
        );
      case "receive":
        return (
          <RecieveModal
            selectedToken={selectedToken}
            setAction={setAction}
            walletAddress={walletAddress}
          />
        );
      case "transferred":
        return (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.5rem",
              fontWeight: "600",
              color: "#27ad75",
            }}
          >
            Transfer Complete
          </div>
        );
      case "select":
        return (
          <CoinSelectorModal
            setAction={setAction}
            action={action}
            selectedToken={selectedToken}
            setSelectedToken={setSelectedToken}
            thirdwebTokens={thirdWebTokens}
            sanityTokens={sanityTokens}
            walletAddress={walletAddress}
          />
        );
      case "transferring":
        return (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.5rem",
            }}
          >
            <TailSpin
              heigth="100"
              width="100"
              color="#3773f5"
              ariaLabel="loading"
            />
            <h2>Transfer in progress...</h2>
          </div>
        );
      default:
        return <h2>Send</h2>;
    }
  };

  return (
    <Wrapper>
      <Selector>
        <Option
          style={action === "send" ? selectedStyle : unselectedStyle}
          onClick={() => setAction("send")}
        >
          <p>Send</p>
        </Option>
        <Option
          style={action === "receive" ? selectedStyle : unselectedStyle}
          onClick={() => setAction("receive")}
        >
          <p>Receive</p>
        </Option>
      </Selector>
      <ModalMain>{selectModal(action)}</ModalMain>
    </Wrapper>
  );
};

export default TransferModal;

const Wrapper = styled.div`
  height: 35rem;
  width: 27rem;
  color: white;
  border: 1px solid #282b2f;
  display: flex;
  flex-direction: column;
`;

const Selector = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 5rem;
`;

const Option = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    background-color: #111214;
  }
`;

const ModalMain = styled.div`
  padding: 1rem;
  flex: 1;
`;
