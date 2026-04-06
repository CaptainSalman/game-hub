import useData from "@/hooks/useData";
import useGenre from "@/hooks/useGenre";

const GenreList = () => {
  const { data: genres } = useGenre();

  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
