import * as React from "react";
import {
  Flex,
  Input,
  IconButton,
  Wrap,
  WrapItem,
  Stack,
  Skeleton,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import NumberOfResults from "../numberOfResults/NumberOfResults";
import TweetEmbed from "react-tweet-embed";
import { useDispatch, useSelector } from "react-redux";
import { fetchTweets } from "./finderSlice";

function Finder() {
  const dispatch = useDispatch();
  const { tweets, isLoading, error } = useSelector((state) => state.finder);
  // retrieve numberOfResults from redux store
  const numberOfResults = useSelector((state) => state.numberOfResults);
  const [searchValue, setSearchValue] = React.useState("");
  const handleSearch = () => {
    if (searchValue) {
      setSearchValue("");
      dispatch(fetchTweets({ searchValue, numberOfResults }));
    }
  };
  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle mr={2}>An Error occurred!</AlertTitle>
        <AlertDescription>
          We couldn't fetch tweets right now. Please try again later.
        </AlertDescription>
        <CloseButton position="absolute" right="8px" top="8px" />
      </Alert>
    );
  }
  return (
    <>
      <Flex alignItems="center">
        <Input
          mr={3}
          size="lg"
          value={searchValue}
          onChange={(evt) => setSearchValue(evt.target.value)}
          placeholder="enter a theme or hashtag to search"
        />
        <IconButton
          size="lg"
          colorScheme="blue"
          aria-label="Search database"
          onClick={handleSearch}
          icon={<SearchIcon />}
          type="submit"
        />
      </Flex>
      <NumberOfResults />
      {isLoading && (
        <Stack mt={5}>
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </Stack>
      )}
      <Wrap mt={5}>
        {tweets.map((tweet) => (
          <WrapItem key={tweet.id}>
            <TweetEmbed id={tweet.id} />
          </WrapItem>
        ))}
      </Wrap>
    </>
  );
}

export default Finder;
