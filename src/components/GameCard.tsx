import type { Game } from "@/hooks/useGames"
import { Card, CardBody, Heading, Image } from "@chakra-ui/react"

interface props {
    game: Game
}

const GameCard = ({ game }: props) => {
  return (
    <Card.Root borderRadius={10} overflow={"hidden"}>
        <Image src={game.background_image} />
        <CardBody>
            <Heading fontSize='2xl'>{game.name}</Heading>
        </CardBody>
    </Card.Root>
  )
}

export default GameCard