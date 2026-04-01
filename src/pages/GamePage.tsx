import { useParams } from "react-router";

const GamePage = () => {
  const x = useParams();
  console.log(x);

  return <div>GamePage</div>;
};

export default GamePage;
