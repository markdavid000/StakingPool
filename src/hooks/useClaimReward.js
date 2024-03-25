import { ethers } from "ethers";
import { useCallback } from "react";
import { isSupportedChain } from "../utils";
import { getProvider } from "../constants/providers";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { StakingPool } from "../constants/contracts";

const useClaimReward = () => {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  return useCallback(
    async (id) => {
      if (!isSupportedChain(chainId)) return console.error("Wrong network");
      const readWriteProvider = getProvider(walletProvider);
      const signer = await readWriteProvider.getSigner();

      const stakingPoolContract = StakingPool(signer);

      try {
        const claimReward = await stakingPoolContract.claimReward(id);

        const claimRewardReceipt = await claimReward.wait();

        console.log("Reward Receipt", claimRewardReceipt);

        if (claimRewardReceipt.status) {
          return console.log("Unstake Successfully");
        }

        return console.log("Unstaking Failed");
      } catch (err) {
        console.log(err);
        return err;
      }
    },
    [chainId, walletProvider]
  );
};
export default useClaimReward;
