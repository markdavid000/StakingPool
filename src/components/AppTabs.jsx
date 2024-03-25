import { Box, Tabs, Text } from "@radix-ui/themes";

const AppTabs = ({ CreatePool }) => {
  return (
    <Tabs.Root defaultValue="create">
      <Tabs.List>
        <Tabs.Trigger value="create" color="gray">
          <Text size="2">create</Text>
        </Tabs.Trigger>
      </Tabs.List>

      <Box px="4" pt="3" pb="2">
        <Tabs.Content value="create">{CreatePool}</Tabs.Content>
      </Box>
    </Tabs.Root>
  );
};

export default AppTabs;
