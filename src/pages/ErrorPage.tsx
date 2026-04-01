import { useRouteError } from "react-router";
type Error = {
  error: {
    message: string;
  };
};
const ErrorPage = () => {
  const {
    error: { message },
  } = useRouteError() as Error;

  return <div className="text-red-500 font-bold">Error: {message}</div>;
};

export default ErrorPage;
