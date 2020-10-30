import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const RoomsOverview = () => {
  const rooms = useSelector((state) => state.fetchRoom);
  const { results, isLoading } = rooms;
  return (
    <>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        Object.values(results).map((result) => {
          return (
            <Link to={`room/${result.id}`} key={result.id}>
              {result.name}
            </Link>
          );
        })
      )}
    </>
  );
};

export default RoomsOverview;
