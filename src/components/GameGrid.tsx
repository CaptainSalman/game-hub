import apiClient from "@/services/api-client";
import { Text } from "@chakra-ui/react";
import React, { use, useEffect } from "react";

interface FetchGamesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Game[];
}

export interface GameDetail {
  id: number;
  name: string;
}

interface Game {
  id: number;
  name: string;
  released: string;
  background_image: string;
  rating: number;
}

const GameGrid = () => {
  const [games, setGames] = React.useState<Game[]>([]);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((response) => {
        setGames(response.data.results);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <div>
      {error && <Text>{error}</Text>}
      <ul>
        {games?.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameGrid;
