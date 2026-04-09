import { Button, Menu, Portal } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu.Root>
      <Menu.Trigger>
        <Button variant="outline" size="sm">
          Order by: relevance
          <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="relevance">Relevance</Menu.Item>
            <Menu.Item value="date_added">Date added</Menu.Item>
            <Menu.Item value="name">Name</Menu.Item>
            <Menu.Item value="release_date">Release Date</Menu.Item>
            <Menu.Item value="popularity">Popularity</Menu.Item>
            <Menu.Item value="average_rating">Average Rating</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
