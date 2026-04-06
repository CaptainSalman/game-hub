import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import React, { useEffect, useState } from "react";
import useData from "./useData";

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

const useGames = () => {
  const useGames = useData<Game>("/games");
  return useGames;
}

export default useGames;
