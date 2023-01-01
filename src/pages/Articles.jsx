import styled from "styled-components";
import { ArticleList } from "../components/Article";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Articles = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("q");
  const result = ArticleList.find((element) => element.title.includes(title));

  console.log(search);
  console.log(result);
  return (
    <>
      <PageTop>
        <BlackBG />
        <TextBox>
          <PageTitle>ARTICLES</PageTitle>
          <PageExplain>
            스튜디오 드래곤의 최신소식과 언론에 보도된 자료를 보실 수 있습니다.
          </PageExplain>
        </TextBox>
      </PageTop>

      <ContentsWrap>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            총 게시물 <span>{ArticleList.length}</span>, 페이지 <span></span>
          </div>
          <SearchBox>
            <div>
              <div></div>
              <ul>
                <li>제목+내용</li>
                <li>제목</li>
                <li>내용</li>
              </ul>
            </div>
            <input type="text" onChange={(e) => setSearch(e.target.value)} />
            <button onClick={() => navigate(`/article?q=${search}`)}>
              검색
            </button>
          </SearchBox>
        </div>
        <div></div>
      </ContentsWrap>
    </>
  );
};

export default Articles;

const PageTop = styled.div`
  height: 700px;
  background: url("/img/articlebg.jpg") no-repeat center 30%;
  background-size: cover;
  display: flex;
  padding: 0 12.5%;
  position: relative;
`;
const BlackBG = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`;
const TextBox = styled.div`
  margin-top: 210px;
`;
const PageTitle = styled.span`
  display: block;
  font-size: 52px;
  color: #fff;
  font-weight: 600;
  font-family: "YDestreet";
`;
const PageExplain = styled.span`
  color: #fff;
  display: block;
  margin-top: 10px;
`;
const ContentsWrap = styled.div`
  width: 70%;
  margin: 0 auto;
`;
const SearchBox = styled.div`
  display: flex;
`;
