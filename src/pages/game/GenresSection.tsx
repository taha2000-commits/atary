import type { Genre } from "../../types/game";
import { Link } from "react-router";

const GenresSection = ({ genres = [] }: { genres?: Genre[] }) => {
  return (
    <>
      {genres?.[0] && (
        <div className="">
          <h5 className="mb-1 text-white/50 capitalize">genres</h5>
          <div className="flex items-center gap-2">
            {genres?.map((genre, i) => {
              if (i <= 3)
                return (
                  <Link
                    key={genre.id}
                    to={`/genre/${genre.id}`}
                    className="cursor-pointer overflow-hidden rounded-xl bg-cover text-xl font-bold shadow-xl hover:shadow-white/10"
                    style={{
                      backgroundImage: `url(${genre.image_background})`,
                    }}
                  >
                    <div className="bg-black/40 p-2 px-4 hover:bg-black/70">
                      {genre.name}
                    </div>
                  </Link>
                );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default GenresSection;
