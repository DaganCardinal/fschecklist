import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col justify-center text-center">
      <h1 className="text-3xl font-bold my-8">Error</h1>
      <p className="text-lg my-6">Sorry, an unexpected error occurred!</p>
    </div>
  );
};
