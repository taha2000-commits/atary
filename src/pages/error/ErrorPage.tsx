import { useRouteError } from "react-router";
type Error = {
  error: {
    message: string;
  };
};
const ErrorPage = ({ errorMsg }: { errorMsg?: string }) => {
  const err = useRouteError() as Error;

  return (
    <div className="flex h-screen w-full items-center justify-center bg-red-600 text-white">
      {errorMsg
        ? errorMsg
        : err?.error?.message
          ? err?.error?.message
          : "Ooooops Error"}
    </div>
  );
};

export default ErrorPage;
