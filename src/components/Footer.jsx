import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 10%;
  background-color: crimson;
  color: lightgray;
`;

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    padding: 20px;
  }
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
`;

const ListItem = styled.li`
  margin-right: 20px;
  @media only screen and (max-width: 480px) {
    margin-right: 10px;
    font-size: 12px;
  }
`;
const Copyright = styled.span`
  @media only screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <List>
          <ListItem>Guide</ListItem>
          <ListItem>Support</ListItem>
          <ListItem>API</ListItem>
          <ListItem>Community</ListItem>
        </List>
        <Copyright>Randy Anderson Ⓒ</Copyright>
      </Wrapper>
    </Container>
  );
};

export default Footer;
