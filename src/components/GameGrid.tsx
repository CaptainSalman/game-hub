import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div>
      {error && <Text>{error}</Text>}
      {isLoading && (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} padding={5} gap={3}>
          {Skeletons.map((skeleton) => (
            <GameCardContainer>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}
        </SimpleGrid>
      )}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} padding={5} gap={3}>
        {}
        {data?.map((game) => (
          <GameCardContainer>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
