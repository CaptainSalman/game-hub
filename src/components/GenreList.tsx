import useGenre, { type Genre } from "@/hooks/useGenre";
import {
  Button,
  Heading,
  HStack,
  Image,
  List,
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
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      <List.Root>
        {genres.map((genre) => (
          <HStack key={genre.id} paddingY={2} >
            <Image
              boxSize={"32px"}
              borderRadius={6}
              objectFit={"cover"}
              src={genre.image_background}
            />
            <Button
              p={0}
              justifyContent={"flex-start"}
              width={"100%"}
              onClick={() => onSelectGenre(genre)}
              variant="ghost"
              colorPalette={selectedGenre?.id === genre.id ? "blue" : "gray"}
            >
              {genre.name}
            </Button>
          </HStack>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
