import { useRouteError } from "react-router-dom";

const ErrorMessage = () => {
  const error = useRouteError();

  return (
    <center className="font-bold mt-8 text-3xl">
      <h1>Oops!!!😢</h1>
      <h2>Something went wrong</h2>
      <p>
        {error.status} : {error.statusText}
      </p>
      <p>{error.data}</p>
    </center>
  );
};

export default ErrorMessage;
