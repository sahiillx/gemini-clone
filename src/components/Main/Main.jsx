import React from "react";
import styled from "styled-components";
import ProfileL from "../../assets/ProfileL.jpeg";
import Compass from "../../assets/compass.svg";
import Bulb from "../../assets/bulb.svg";
import Code from "../../assets/code.svg";
import addImage from "../../assets/addImage.svg";
import Mic from "../../assets/mic.svg";
import Send from "../../assets/send.svg";

const Container = styled.div`
  flex: 1;
  min-height: 100vh;
  padding-bottom: 15vh;
  position: relative;
`;
const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px;

  p {
    font-size: 25px;
    font-weight: 500;
    color: #585858;
  }
`;
const LogoImage = styled.img`
  width: 55px;
  height: 55px;

  border-radius: 50%;
`;

const Body = styled.div`
  max-width: 1200px;
  margin: auto;
`;
const Greetings = styled.div`
  margin: 60px 0px;
  font-weight: 600;
  font-size: 65px;
  line-height: 65px;

  p {
    color: #c4c7c5;
    padding: 20px;
  }

  span {
    font-size: 65px;
    background: -webkit-linear-gradient(16deg, #4b90ff, #ff5546);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
const Cards = styled.div`
  display: flex;
  padding: 20px;
  gap: 15px;
`;

const Card = styled.div`
  display: flex;
  padding: 20px;
  border-radius: 12px;
  background: #f5f5f5;
  flex-direction: column;
  justify-content: space-between;
  height: 270px;
  width: 260px;
  gap: 40px;

  p {
    color: #585858;
    font-size: 20px;
  }

  &:hover {
    background-color: #dfe4ea;
  }
`;
const Img = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Image = styled.img`
  background-color: white;
  border-radius: 50%;
  padding: 5px;
  width: 40px;
  height: 40px;
`;

const PromtBox = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 20px 20px;
`;
const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  background-color: #f0f4f9;
  padding: 10px 20px;
  border-radius: 50px;
  max-width: 1085px;
`;
const Input = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  padding: 8px;
  font-size: 20px;
`;
const ImgContainer = styled.div`
  margin: 5px 0px;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Buttons = styled.img`
  border-radius: 50%;
  padding: 5px;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
const BottomInfo = styled.div`
  max-width: 1085px;
  margin: 15px auto;
  padding: 0px;
  padding-top: 20px;
  margin: 0px;
  padding-bottom: 0px;
  text-align: center;

  p {
    
  }
  
`;

const Main = () => {
  return (
    <Container>
      <Navbar>
        <p>Gemini</p>
        <LogoImage src={ProfileL} alt="" />
      </Navbar>
      <Body>
        <Greetings>
          <p>
            <span>Hello, Sahil Khan</span>
          </p>
          <p>How can I help you today?</p>
        </Greetings>
        <Cards>
          <Card>
            <p>Help design a database schema for a business</p>
            <Img>
              <Image src={Code} alt="" />
            </Img>
          </Card>
          <Card>
            <p>Brainstorm presentation ideas about a topic</p>
            <Img>
              <Image src={Compass} alt="" />
            </Img>
          </Card>
          <Card>
            <p>Improve the readability of the following code</p>
            <Img>
              <Image src={Code} alt="" />
            </Img>
          </Card>
          <Card>
            <p>Explain what the keto diet is in simple terms</p>
            <Img>
              <Image src={Bulb} alt="" />
            </Img>
          </Card>
        </Cards>
        <PromtBox>
          <SearchBox>
            <Input type="text" placeholder="Enter a promt here" />
            <ImgContainer>
              <Buttons src={addImage} />
              <Buttons src={Mic} />
              <Buttons src={Send} />
            </ImgContainer>
          </SearchBox>
          <BottomInfo>
            <p>
              Gemini may display inaccurate info, including about people, so
              double-check its responses.{" "}
              <a
                href="https://support.google.com/gemini/answer/13594961?visit_id=638479803147734955-349840869&p=privacy_notice&rd=1#privacy_notice"
                target="_blank"
              >
                Your privacy & Gemini Apps
              </a>
            </p>
          </BottomInfo>
        </PromtBox>
      </Body>
    </Container>
  );
};

export default Main;
