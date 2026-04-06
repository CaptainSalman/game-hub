import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div>
      {error && <Text>{error}</Text>}
      {isLoading && (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} padding={5} gap={10}>
          {Skeletons.map((skeleton) => (
            <GameCardSkeleton key={skeleton} />
          ))}
        </SimpleGrid>
      )}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} padding={5} gap={10}>
        {}
        {games?.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
