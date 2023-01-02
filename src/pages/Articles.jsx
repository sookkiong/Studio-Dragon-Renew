import styled from "styled-components";
import { ArticleList } from "../components/Article";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Articles = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [searchParams] = useSearchParams();
  const title = searchParams.get("q");
  const result = ArticleList.filter((element) => element.title.includes(title));
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState("제목+내용");
  const [cateOn, setCateOn] = useState(false);
  const [searchOn, setSearchOn] = useState(false);

  const turnArrow = () => {
    const id = cateOn === true ? "on" : undefined;
    return id;
  };
  const enterOn = (e) => {
    if (e.keyCode === 13) {
      navigate(`/article?q=${search}`);
      setSearchOn(true);
    }
  };
  const itemOff = () => {
    setCateOn(false);
  };
  const prevOff = () => {
    if (page === 1) {
      return true;
    } else {
      return false;
    }
  };
  const nextOff = () => {
    if (page === 2) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    navigate(`/article?p=${page}`);
  }, [page]);

  console.log(search);
  console.log(result);

  return (
    <div onClick={() => itemOff()}>
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
        <TopWrapper>
          <CountBox>
            총 게시물 <span>{ArticleList.length}</span>, 페이지{" "}
            <span>{page}</span>/2
          </CountBox>

          <SearchBox>
            <Category>
              <SelectedItem
                id={turnArrow()}
                onClick={(e) => {
                  e.stopPropagation();
                  setCateOn(!cateOn);
                }}
              >
                {selected}
              </SelectedItem>
              {cateOn ? (
                <Items>
                  <Item
                    onClick={() => {
                      setSelected("제목+내용");
                      setCateOn(false);
                    }}
                  >
                    제목+내용
                  </Item>
                  <Item
                    onClick={() => {
                      setSelected("제목");
                      setCateOn(false);
                    }}
                  >
                    제목
                  </Item>
                  <Item
                    onClick={() => {
                      setSelected("내용");
                      setCateOn(false);
                    }}
                  >
                    내용
                  </Item>
                </Items>
              ) : undefined}
            </Category>

            <Input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => enterOn(e)}
            />

            <FindButton
              onClick={() => {
                navigate(`/article?q=${search}`);
                setSearchOn(true);
              }}
            >
              검색
            </FindButton>
          </SearchBox>
        </TopWrapper>

        <ContentsBox>
          {searchOn ? undefined : (
            <div>
              {ArticleList.slice(0 + (page - 1) * 6, 6 + (page - 1) * 6).map(
                (value) => {
                  return <div>{value.title}</div>;
                }
              )}
              <button
                disabled={prevOff()}
                onClick={() => {
                  setPage(page - 1);
                  navigate(`/article?p=${page}`);
                }}
              >
                이전 페이지
              </button>
              <button
                disabled={nextOff()}
                onClick={() => {
                  setPage(page + 1);
                  navigate(`/article?p=${page}`);
                }}
              >
                다음 페이지
              </button>
            </div>
          )}

          {searchOn ? (
            <div>
              {result.length > 0
                ? result.map((value) => {
                    return <div key={value.id}>{value.title}</div>;
                  })
                : `'${title}' 의` + " 검색값이 없습니다"}
              <button>목록으로</button>
            </div>
          ) : undefined}
        </ContentsBox>
      </ContentsWrap>
    </div>
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
  z-index: 1;
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
`;
const SearchBox = styled.div`
  display: flex;
  position: relative;
  width: 475px;
  height: 100px;
`;
const Category = styled.div`
  position: absolute;
  z-index: 10;
  width: 160px;
  right: 290px;
  left: 0;
`;
const SelectedItem = styled.div`
  border: 1px solid #ccc;
  padding: 8px 15px;
  cursor: pointer;
  background: url("/img/cate_g.png") no-repeat 90% center;
  &#on {
    background: url("/img/cate_g_on.png") no-repeat 90% center;
  }
`;
const Items = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  background: #fff;
  border: 1px solid #ccc;
  border-top: none;
`;
const Item = styled.li`
  padding: 8px 15px;
  cursor: pointer;
`;
const Input = styled.input`
  width: 200px;
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

const ContentsBox = styled.div`
  border: 1px solid #000;
`;
