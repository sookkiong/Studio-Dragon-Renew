import { ArticleList } from "../components/Article";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const ArticleBox = () => {
  const [searchParams] = useSearchParams();
  const id = Number(searchParams.get("id"));
  const item = ArticleList.find((element) => element.id === id);
  const prevItem = ArticleList.find((element) => element.id === id - 1);
  const nextItem = ArticleList.find((element) => element.id === id + 1);

  return (
    <Wrapper>
      <CategoeyNDate>
        <CDspan id="category">ARTICLES</CDspan>
        <CDspan id="line">|</CDspan>
        <CDspan id="date">{item.date}</CDspan>
      </CategoeyNDate>

      <ArticleTitle>{item.title}</ArticleTitle>

      <ArticleRef>{item.reference}</ArticleRef>

      <PhotoboxWrap>
        <PhotoBox bg={item.id}></PhotoBox>
        <Explain>{item.photoExp}</Explain>
      </PhotoboxWrap>

      <Content>{item.content}</Content>

      <ButtonWrap>
        <PrevNnext disabled={!prevItem}>
          {prevItem ? prevItem.title : "이전 기사가 없습니다."}
        </PrevNnext>
        <GoList></GoList>
        <PrevNnext id="next" disabled={!nextItem}>
          {nextItem ? nextItem.title : "마지막 기사 입니다."}
        </PrevNnext>
      </ButtonWrap>
    </Wrapper>
  );
};

export default ArticleBox;

const Wrapper = styled.div`
  width: 65%;
  margin: 80px auto 0;
`;
const CategoeyNDate = styled.div`
  margin-bottom: 40px;
`;
const CDspan = styled.span`
  font-size: 20px;
  &#line {
    margin: 0 15px;
  }
  &#date {
    font-weight: 600;
    color: #003371;
  }
`;
const ArticleTitle = styled.div`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 50px;
`;
const ArticleRef = styled.div`
  margin-bottom: 40px;
  line-height: 32px;
  padding-left: 20px;
  border-left: 5px solid #003371;
  font-style: oblique;
`;
const PhotoboxWrap = styled.div`
  margin: 60px 0;
`;
const PhotoBox = styled.div`
  width: 85%;
  height: 450px;
  margin: 0 auto;
  background: url("/img/an${(props) => props.bg}.jpg") no-repeat center center;
  background-size: cover;
`;
const Explain = styled.span`
  display: block;
  text-align: center;
  padding-top: 20px;
  color: #7c7c7c;
`;
const Content = styled.div`
  line-height: 30px;
  text-align: justify;
`;
const ButtonWrap = styled.div`
  margin: 60px 0;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const PrevNnext = styled.button`
  width: 30%;
  cursor: pointer;
  text-align: left;
  border: none;
  background: none;
  font-size: 15px;
  &#next {
    text-align: right;
  }
  &:hover {
    text-decoration: ${(props) => (props.undefined ? "underline" : "none")};
    font-weight: ${(props) => (props.undefined ? "600" : "400")};
  }
`;
const GoList = styled.button`
  width: 50px;
  height: 50px;
  background: url("/img/go_arti.png") no-repeat center center;
  background-size: contain;
  border: none;
  cursor: pointer;
`;
