import type { Game } from "@/hooks/useGames";
import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsList";
import Score from "./Score";
import getCroppedImageUrl from "@/services/image-url";

interface props {
  game: Game;
}

const GameCard = ({ game }: props) => {
  return (
    <Card.Root>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack marginBottom={3} justifyContent={"space-between"}>
          <PlatformIconsList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <Score score={game.metacritic} />
        </HStack>
          <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card.Root>
  );
};

export default GameCard;
