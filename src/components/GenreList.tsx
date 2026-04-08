import useData from "@/hooks/useData";
import useGenre, { type Genre } from "@/hooks/useGenre";
import {
  Button,
  HStack,
  Image,
  Link,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data: genres, isLoading, error } = useGenre();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List.Root>
      {genres.map((genre) => (
        <HStack key={genre.id} paddingY={2} paddingX={2}>
          <Image
            boxSize={"32px"}
            borderRadius={6}
            src={genre.image_background}
          />
          <Button
            onClick={() => onSelectGenre(genre)}
            variant="ghost"
            colorPalette={selectedGenre?.id === genre.id ? "blue" : "gray"}
          >
            {genre.name}
          </Button>
        </HStack>
      ))}
    </List.Root>
  );
};

export default GenreList;
