import { Flex } from "@radix-ui/themes";

export default function Header() {
  return (
    <div className="flex justify-between pb-5 items-center">
      <h1 className="text-gray-300">Staking Pool</h1>
      <w3m-button />
    </div>
  );
}
