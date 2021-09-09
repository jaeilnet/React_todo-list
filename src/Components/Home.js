import { Link } from "react-router-dom";
import styled from "styled-components";
import Inputs from "./Inputs";
// import List from "./List";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("https://images.unsplash.com/photo-1548913344-66177da9425e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1052&q=80");
  background-size: cover;
  background-position: center center;
`;

const Title = styled.div`
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Links = styled(Link)`
  font-size: 36px;
  font-weight : bold;
  color : #0c8599;
  opacity: 0.8;
`;

export default function Home(){
  return(
    <>
    <Container>
      <Title>
        <Links to="/">Todo List</Links>
      </Title>
      <Inputs />
    </Container>
    </>
  )
}