import { useParams } from "react-router";

const PublisherPage = () => {
  const { publisher_id } = useParams();
  return <div className="text-black">publisher {publisher_id}</div>;
};

export default PublisherPage;
