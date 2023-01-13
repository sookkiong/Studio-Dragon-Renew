import styled from "styled-components";
import { ArticleList } from "../components/Article";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const Articles = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get("q") || "";
  const [search, setSearch] = useState("");
  const pageCount = Number(searchParams.get("page")) || 1;
  const result = ArticleList.filter((element) =>
    element["title"].includes(searchValue)
  ).slice(0 + (pageCount - 1) * 6, 6 + (pageCount - 1) * 6);
  const totalCount = ArticleList.filter((element) =>
    element["title"].includes(searchValue)
  ).length;
  const [titleUp, setTitleUp] = useState("");
  const upRef = useInView();

  const isLast =
    ArticleList.filter((element) => element.title.includes(searchValue)).slice(
      0 + pageCount * 6,
      6 + pageCount * 6
    ).length === 0;

  const enterOn = (e) => {
    if (e.keyCode === 13) {
      navigate(`/article?q=${search}&page=1`);
    }
  };

  const prevOff = pageCount === 1;
  const nextOff = () => {
    if (isLast) {
      return true;
    } else {
      return false;
    }
  };
  const borderStyle = (value) => {
    if (value % 3 === 0) {
      return "three";
    }
  };
  const pageTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    setSearch(searchValue);
  }, [searchValue]);

  useEffect(() => {
    if (upRef.inView) setTitleUp("up");
  }, [upRef.inView]);

  return (
    <>
      <PageTop ref={upRef.ref}>
        <BlackBG />

        <TextBox id={titleUp}>
          <PageTitle>ARTICLES</PageTitle>
          <PageExplain>
            스튜디오 드래곤의 최신소식과 언론에 보도된 자료를 보실 수 있습니다.
          </PageExplain>
        </TextBox>
      </PageTop>

      <ContentsWrap>
        <TopWrapper>
          <CountBox>
            총 게시물 <CountSpan>{totalCount}</CountSpan>, 페이지{" "}
            <CountSpan>{pageCount}</CountSpan>/
            {totalCount % 6 !== 0
              ? Math.floor(totalCount / 6) + 1
              : totalCount / 6}
          </CountBox>

          <SearchBox>
            <Input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => enterOn(e)}
              placeholder="기사를 검색해보세요!"
            />

            <FindButton
              onClick={() => {
                navigate(`/article?q=${search}`);
              }}
            >
              검색
            </FindButton>
          </SearchBox>
        </TopWrapper>

        <ContentsBox>
          <div>
            {!result.length ? (
              <SearchNone>
                <SearchResult>'{searchValue}'</SearchResult> 의 검색값이
                없습니다.
              </SearchNone>
            ) : (
              <ArticleUL>
                {result.map((value) => {
                  return (
                    <>
                      <List
                        id={borderStyle(value.id)}
                        key={value.id}
                        onClick={() =>
                          navigate(`/article/detail?id=${value.id}`)
                        }
                      >
                        <ListInner id="blackBorder">
                          <PhotoBox bg={value.id}></PhotoBox>
                          <TitleBox>{value.title}</TitleBox>
                          <SummaryBox>{value.summary}</SummaryBox>
                          <DateBox>{value.date}</DateBox>
                        </ListInner>
                      </List>
                    </>
                  );
                })}
              </ArticleUL>
            )}

            <ButtonWrap>
              <GoPageBtn
                disabled={prevOff}
                onClick={() => {
                  navigate(`/article?q=${searchValue}&page=${pageCount - 1}`);
                  pageTop();
                }}
              >
                이전 페이지
              </GoPageBtn>

              {searchValue ? (
                <GoList onClick={() => navigate("/article")}>글 목록</GoList>
              ) : undefined}

              <GoPageBtn
                disabled={nextOff()}
                onClick={() => {
                  navigate(`/article?q=${searchValue}&page=${pageCount + 1}`);
                  pageTop();
                }}
              >
                다음 페이지
              </GoPageBtn>
            </ButtonWrap>
          </div>
        </ContentsBox>
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
  margin-top: 260px;
  z-index: 1;
  opacity: 0;
  transition: all 1.5s;

  &#up {
    margin-top: 210px;
    opacity: 1;
  }
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
const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
`;
const CountBox = styled.div`
  margin-top: 8px;
  font-size: 18px;
`;
const CountSpan = styled.span`
  color: #003371;
  font-weight: 600;
`;
const SearchBox = styled.div`
  display: flex;
  position: relative;
  width: 475px;
  height: 60px;
`;
const Input = styled.input`
  width: 250px;
  position: absolute;
  right: 75px;
  padding: 12px 10px;
  border: 1px solid #ccc;
`;
const FindButton = styled.button`
  position: absolute;
  right: 0;
  padding: 11px 15px;
  border: 1px solid #003371;
  background-color: #003371;
  color: #fff;
  cursor: pointer;
  &:hover {
    background: #fff;
    color: #003371;
    font-weight: 600;
  }
`;

const ContentsBox = styled.div``;
const ArticleUL = styled.ul`
  display: grid;
  grid-template-columns: 33.333% 33.333% 33.333%;
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
`;
const List = styled.li`
  padding: 15px;
  box-sizing: border-box;
  cursor: pointer;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  &:hover {
    #blackBorder {
      border: 1px solid #000;
    }
  }
  &#three {
    border-right: none;
  }
`;
const ListInner = styled.div`
  padding: 15px;
  height: 100%;
  box-sizing: border-box;
  border: 1px solid #fff;
`;
const PhotoBox = styled.div`
  width: 100%;
  height: 200px;
  background: url("/img/ap${(props) => props.bg}.jpg") no-repeat center 30%;
  background-size: cover;
`;
const TitleBox = styled.div`
  font-size: 19px;
  font-weight: 500;
  text-align: justify;
  padding: 20px 0 20px;
  line-height: 28px;
`;
const SummaryBox = styled.div`
  color: #7c7c7c;
  font-weight: 300;
  text-align: justify;
  padding-bottom: 30px;
  line-height: 26px;
`;
const DateBox = styled.div`
  color: #7c7c7c;
  font-weight: 300;
`;
const ButtonWrap = styled.div`
  text-align: center;
  margin: 50px 0 200px;
`;
const GoPageBtn = styled.button`
  cursor: pointer;
  padding: 10px 15px;
  margin: 0 10px;
  border: 1px solid #003371;
  background: #003371;
  color: #fff;
  &:disabled {
    cursor: default;
    background: #ccc;
    color: #fff;
    border: 1px solid #ccc;
  }
  &:hover {
    background: ${(props) => (props.disabled ? "#ccc" : "#fff")};
    color: ${(props) => (props.disabled ? "#fff" : "#003371")};
    font-weight: ${(props) => (props.disabled ? "400" : "600")};
  }
`;
const GoList = styled.button`
  cursor: pointer;
  padding: 10px 15px;
  margin: 0 10px;
  border: 1px solid #003371;
  background: #003371;
  color: #fff;
`;

const SearchNone = styled.div`
  text-align: center;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  padding: 80px 0;
`;
const SearchResult = styled.span`
  font-weight: 500;
`;
