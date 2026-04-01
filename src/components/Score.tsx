import { Badge } from "@chakra-ui/react";

interface props {
  score: number;
}

const Score = ({ score }: props) => {
  const color = score > 80 ? "green" : score > 50 ? "yellow" : "red";
  return (
    <Badge paddingX={2} fontSize={14} colorPalette={color}>
      {score}
    </Badge>
  );
};

export default Score;
