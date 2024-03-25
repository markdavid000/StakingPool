import { Avatar, Box, Button, Card, Flex, Text } from "@radix-ui/themes";
import { useState } from "react";
import useCreatePool from "../hooks/useCreatePool";
import usePools from "../hooks/usePool";
import useStake from "../hooks/useStake";
import useUnStake from "../hooks/useUnStake";
import useClaimReward from "../hooks/useClaimReward";

const CreatePool = () => {
  const [rate, setRate] = useState(Number(""));

  const handleCreatePool = useCreatePool(rate);

  const handleStake = useStake();
  const handleUnStake = useUnStake();
  const handleClaimReward = useClaimReward();

  const poolId = usePools();

  const poolIDs = [...Array.from({ length: poolId })].map((_, index) => index);

  return (
    <div className="flex gap-4">
      <Card
        size="2"
        style={{ width: 500, height: 150, backgroundColor: "#EFEFEF" }}
      >
        <div className="text-xl font-bold pb-3">Create Pool</div>
        <div>
          <Box width={"100%"}>
            <div className="flex flex-col gap-4 justify-item-center">
              <input
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                placeholder="Rate"
                className="w-full border rounded-md py-1 px-2"
              />
              <button
                onClick={() => handleCreatePool()}
                className="text-white bg-blue-500 py-1 px-4 rounded-md w-full"
              >
                Create Pool
              </button>
            </div>
          </Box>
        </div>
      </Card>

      <Flex gap="3" direction="column">
        {poolIDs.length === 0 ? (
          <Text>Nothing to show</Text>
        ) : (
          poolIDs.map((x) => {
            return (
              <Card key={x} size="1" style={{ width: 350 }}>
                <Flex gap="3" align="center">
                  <Avatar size="3" radius="full" fallback={x} color="indigo" />
                  <Box>
                    <Text as="div" size="2" weight="bold">
                      Amount Staked:
                    </Text>
                    <Text as="div" size="2" color="gray">
                      Engineering
                    </Text>
                    <Button onClick={() => handleStake(x)}>Stake</Button>
                    <Button onClick={() => handleUnStake(x)}>UnStake</Button>
                    <Button onClick={() => handleClaimReward(x)}>
                      Claim Reward
                    </Button>
                  </Box>
                </Flex>
              </Card>
            );
          })
        )}
      </Flex>
    </div>
  );
};

export default CreatePool;
