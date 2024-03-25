import {
  Box,
  Card,
  Flex,
  Text,
  TextField,
  TextFieldRoot,
} from "@radix-ui/themes";
import { useState } from "react";
import useStake from "../hooks/useStake";

const Stake = () => {
  const [amount, setAmount] = useState(0);
  //   const handleStake = useStake(, amount);

  return (
    <div className="flex justify-center gap-4">
      <Card
        size="2"
        style={{ width: 500, height: 150, backgroundColor: "#EFEFEF" }}
      >
        <Flex gap="" align="center">
          <Box width={"100%"}>
            <div className="text-xl font-bold pb-3">Stake</div>
            <Flex
              justify={"between"}
              align={"center"}
              direction={"column"}
              gap={"2"}
            >
              <input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount"
                className="w-full border rounded-md py-1 px-2"
              />
              <button
                className="text-white bg-blue-500 py-1 px-4 rounded-md w-full"
                onClick={() => handleStake()}
              >
                Stake
              </button>
            </Flex>
          </Box>
        </Flex>
      </Card>
      <Card
        size="2"
        style={{ width: 500, height: 150, backgroundColor: "#EFEFEF" }}
      >
        <Flex gap="" align="center">
          <Box width={"100%"}>
            <div className="text-xl font-bold pb-3">Unstake</div>
            <Flex
              justify={"between"}
              align={"center"}
              direction={"column"}
              gap={"2"}
            >
              <input
                value={amount}
                onChange={(e) => setRate(e.target.value)}
                placeholder="Amount"
                className="w-full border rounded-md py-1 px-2"
              />
              <button
                className="text-white bg-blue-500 py-1 px-4 rounded-md w-full"
                // onClick={() => handleVote(id)}
              >
                Unstake
              </button>
            </Flex>
          </Box>
        </Flex>
      </Card>
    </div>
  );
};

export default Stake;
