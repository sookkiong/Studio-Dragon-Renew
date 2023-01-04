import { ArticleList } from "../components/Article";
import { useSearchParams } from "react-router-dom";

const ArticleBox = () => {
  const [searchParams] = useSearchParams();
  const id = Number(searchParams.get("id"));
  const item = ArticleList.find((element) => element.id === id);
  console.log(item);

  return (
    <>
      <div>안뇽?</div>
    </>
  );
};

export default ArticleBox;
