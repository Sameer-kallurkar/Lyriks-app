import { Link } from "react-router-dom";

const DetailsHeader = ({ artistId, artistData, songData }) => {
  const artist = artistData?.artists[artistId]?.attributes;
  return (
    <div className="relative w-full flex flex-col p-5">
      <div className="w-full bg-gradient-to-tl from-green-900 to-black sm:h-48 h-28 rounded-lg rounded-tl-xl rounded-bl-[10%] " />
      <div className="absolute inset-0 flex items-center ">
        <img
          alt="profile"
          src={
            artistId
              ? artist.artwork?.url.replace("{w}", "500").replace("{h}", "500")
              : songData?.images?.coverart
          }
          className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black "
        />
        <div className="ml-5">
          <p className="font-bold sm:text-3xl text-xl text-white">
            {" "}
            {artistId ? artist.name : songData?.title}{" "}
          </p>
          {!artistId && (
            <Link to={`/artists/${songData?.artists[0].adamid} `}>
              <p className="text-base mt-2 text-gray-400">
                {songData?.subtitle}
              </p>
            </Link>
          )}

          <p className="text-base mt-2 text-gray-400">
            {artistId ? artist?.genreNames[0] : songData?.genres?.primary}
          </p>
        </div>
      </div>
      {/* <div className="w-full sm:h-44 h-24" /> */}
    </div>
  );
};

export default DetailsHeader;
