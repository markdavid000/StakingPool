import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Dialog,
  Flex,
  Text,
  TextField,
} from "@radix-ui/themes";

const TransferModal = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button className="px-8 py-2 mt-2 bg-red-500">Transfer NFT</Button>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 450 }}>
        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              New Owner Address
            </Text>
            <TextField.Input placeholder="0x0000..." />
          </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray" className="bg-gray-300">
              Cancel
            </Button>
          </Dialog.Close>

          <Dialog.Close>
            <Button className="bg-red-500">Transfer</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default TransferModal;
