import { ethers } from "ethers";
import { useCallback } from "react";
import { isSupportedChain } from "../utils";
import { getProvider } from "../constants/providers";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { StakingPool } from "../constants/contracts";
import { RewardToken } from "../constants/contracts";

const useCreatePool = (rate) => {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  return useCallback(async () => {
    if (!isSupportedChain(chainId)) return console.error("Wrong network");
    const readWriteProvider = getProvider(walletProvider);
    const signer = await readWriteProvider.getSigner();

    const stakingPoolContract = StakingPool(signer);

    const rewardTokenContract = RewardToken(signer);

    const value = ethers.parseUnits("100", 18);

    try {
      const approve = await rewardTokenContract.approve(
        import.meta.env.VITE_staking_contract_address,
        value
      );

      const approveReceipt = await approve.wait();

      console.log("Approving", approveReceipt);

      if (approveReceipt.status) {
        const createPool = await stakingPoolContract.createPool(rate);

        const createPoolReceipt = await createPool.wait();
        console.log("Creating", createPoolReceipt);

        if (createPoolReceipt.status) {
          return console.log("Pool Created Successfully");
        }

        return console.log("Pool Creation Failed");
      }
    } catch (err) {
      console.log(err);
      return err;
    }
  }, [rate, chainId, walletProvider]);
};
export default useCreatePool;
