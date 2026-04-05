import { useParams } from "react-router";

const GenreGamesPage = () => {
  const { genre_id } = useParams();
  return <div className="text-black">Genre {genre_id}</div>;
};

export default GenreGamesPage;
