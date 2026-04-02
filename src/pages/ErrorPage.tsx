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
  if (message) {
    return <div className="text-red-500 font-bold">Error: {message}</div>;
  }
  return <div>error</div>;
};

export default ErrorPage;
