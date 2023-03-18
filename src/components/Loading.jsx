import React from "react";
import { Spinner } from "@chakra-ui/react";

const Loading = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-12 text-center">
          <h2>Cargando...</h2>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;
