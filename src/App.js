import * as React from "react";
import { Container, Heading } from "@chakra-ui/react";
import "./styles.css";
import Finder from "./features/Finder/Finder";

export default function App() {
  return (
    <Container>
      <Heading as="h1" my={16} size="xl" textAlign="center" color="purple.700">
        Welcome to TweetFind!
      </Heading>
      <Finder />
    </Container>
  );
}
