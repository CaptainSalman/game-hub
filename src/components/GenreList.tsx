import useData from "@/hooks/useData";
import useGenre from "@/hooks/useGenre";
import { HStack, Image, List, ListItem } from "@chakra-ui/react";

const GenreList = () => {
  const { data: genres } = useGenre();

  return (
    <List.Root>
      {genres.map((genre) => (
        <HStack key={genre.id} paddingY={2} paddingX={2}>
            <Image boxSize={'32px'} borderRadius={8} src={genre.image_background}/>
          <ListItem>{genre.name}</ListItem>
        </HStack>
      ))}
    </List.Root>
  );
};

export default GenreList;
