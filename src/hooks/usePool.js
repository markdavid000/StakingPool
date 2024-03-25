import { ethers } from "ethers";
import { useCallback, useEffect, useState } from "react";
import { isSupportedChain } from "../utils";
import { getProvider } from "../constants/providers";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { StakingPool } from "../constants/contracts";

const usePools = () => {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  const [data, setData] = useState();
  let PoolIds;

  useEffect(() => {
    (async () => {
      if (!isSupportedChain(chainId)) return console.error("Wrong network");
      const readWriteProvider = getProvider(walletProvider);
      const signer = await readWriteProvider.getSigner();

      const stakingPoolContract = StakingPool(signer);

      try {
        const createPool = await stakingPoolContract.id();

        PoolIds = Number(createPool);

        setData(PoolIds);
      } catch (err) {
        console.log(err);
        return err;
      }
    })();
  }, [chainId, walletProvider]);

  return data;
};
export default usePools;
