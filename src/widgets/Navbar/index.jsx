import React from 'react';
import { Link } from 'react-router-dom';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { useWeb3Modal } from '@web3modal/react';
import { Web3Modal } from '@web3modal/react';
import { Web3Button } from '@web3modal/react';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { arbitrum, mainnet, polygon } from 'wagmi/chains';

import './Navbar.scss';

import Button from '../../uiKit/Button';
import Profile from '../../assets/icons/profile.svg';

const chains = [mainnet];
const projectId = '712f7d51b96dc65255344160ee0bfff7';

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});

function Navbar() {
  const { open, close } = useWeb3Modal();
  const [isLogin, setIsLogin] = React.useState(false);

  const ethereumClient = new EthereumClient(wagmiConfig, chains);
  const account = ethereumClient.getAccount().address;

  React.useEffect(() => {
    if (account) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [account]);

  return (
    <div className="navbar">
      <div className="leftSide">
        <h3>
          <Link to="/">Digital barter</Link>
        </h3>
      </div>
      <div className="rightSide">
        <button className="localization">Ru</button>
        {isLogin && (
          <Link to="/profile">
            <Profile />
          </Link>
        )}
        <div className="divider">|</div>

        <div className="modal">
          <WagmiConfig config={wagmiConfig}>
            <Button onClick={() => open()}>
              {isLogin ? account?.slice(0, 5) + '...' + account?.slice(-4) : 'Зарегистрироваться'}
            </Button>
          </WagmiConfig>

          <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
