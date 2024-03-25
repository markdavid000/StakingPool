import { Box, Button, Container, Flex, Text } from "@radix-ui/themes";
import { ToastContainer } from "react-toastify";
import { configureWeb3Modal } from "./connection";
import "@radix-ui/themes/styles.css";
import Header from "./components/Header";
import AppTabs from "./components/AppTabs";
import { useState } from "react";
import TransferModal from "./components/TransferModal";
import CreatePool from "./components/CreatePool";
import "./output.css";

configureWeb3Modal();

function App() {
  return (
    <Container>
      <Header />
      <main className="mt-6">
        <AppTabs
          CreatePool={<CreatePool />}
        />
      </main>
      <ToastContainer />
    </Container>
  );
}

export default App;
