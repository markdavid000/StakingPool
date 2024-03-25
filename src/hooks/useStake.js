import { ethers } from "ethers";
import { useCallback } from "react";
import { isSupportedChain } from "../utils";
import { getProvider } from "../constants/providers";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { StakingPool, StakeToken } from "../constants/contracts";

const useStake = () => {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  return useCallback(
    async (id) => {
      if (!isSupportedChain(chainId)) return console.error("Wrong network");
      const readWriteProvider = getProvider(walletProvider);
      const signer = await readWriteProvider.getSigner();

      const stakingPoolContract = StakingPool(signer);

      const stakeTokenContract = StakeToken(signer);

      const value = ethers.parseUnits("5", 18);

      try {
        const approve = await stakeTokenContract.approve(
          import.meta.env.VITE_staking_contract_address,
          value
        );

        const approveReceipt = await approve.wait();

        console.log("Approve Receipt", approveReceipt);

        if (approveReceipt.status === 1) {
          const stake = await stakingPoolContract.stake(id, value);

          const stakeReceipt = await stake.wait();

          console.log("Stake Receipt", stakeReceipt);

          if (stakeReceipt.status) {
            return console.log("Staked Successfully");
          }

          return console.log("Staking Failed");
        }
      } catch (err) {
        console.log(err);
        return err;
      }
    },
    [chainId, walletProvider]
  );
};
export default useStake;
