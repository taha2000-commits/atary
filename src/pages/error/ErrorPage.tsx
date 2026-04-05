import { useRouteError } from "react-router";
type Error = {
  error: {
    message: string;
  };
};
const ErrorPage = () => {
  const { error } = useRouteError() as Error;

  return (
    <div className="flex h-screen w-full items-center justify-center bg-red-600 text-white">
      {error?.message ? error?.message : "Ooooops Error"}
    </div>
  );
};

export default ErrorPage;
