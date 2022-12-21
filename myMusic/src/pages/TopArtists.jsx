import React from "react";
import axios from "axios";
import { ArtistCard, Error, Loader } from "../components";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const TopArtists = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching && loading) return <Loader title="Loading TopCharts" />;
  if (error && country) return <Error />;
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Top Artist
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((track, i) => (
          <ArtistCard key={track.key} track={track} i={i} />
        ))}
      </div>
    </div>
  );
};

export default TopArtists;
