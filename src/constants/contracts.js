import { ethers } from "ethers";
import stakingPoolAbi from "./abis/stakingPool.json";
import tokensAbi from "./abis/tokens.json";

export const StakingPool = (providerOrSigner) =>
  new ethers.Contract(
    import.meta.env.VITE_staking_contract_address,
    stakingPoolAbi,
    providerOrSigner
  );

export const RewardToken = (providerOrSigner) =>
  new ethers.Contract(
    import.meta.env.VITE_reward_token_contract_address,
    tokensAbi,
    providerOrSigner
  );
export const StakeToken = (providerOrSigner) =>
  new ethers.Contract(
    import.meta.env.VITE_stake_token_contract_address,
    tokensAbi,
    providerOrSigner
  );
