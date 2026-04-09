import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import React, { useEffect, useState } from "react";
import useData from "./useData";
import type { Genre } from "./useGenre";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => {
  const useGames = useData<Game>("/games", {params: {genres: selectedGenre?.id, platforms: selectedPlatform?.id}}, [selectedGenre, selectedPlatform]);
  return useGames;
}

export default useGames;
