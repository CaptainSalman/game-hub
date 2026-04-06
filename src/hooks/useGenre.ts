import useData from "./useData";

export interface Genre {
    id: number;
    name: string;
}

const useGenre = () => {
    const useGenera = useData<Genre>("/genres");
    return useGenera;
}

export default useGenre