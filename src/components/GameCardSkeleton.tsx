import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"

const GameCardSkeleton = () => {
  return (
    <Card.Root>
        <Skeleton height={200} />
        <CardBody>
            <SkeletonText />
        </CardBody>
    </Card.Root>
  )
}

export default GameCardSkeleton