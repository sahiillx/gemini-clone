import React, { useContext } from "react";
import {
  Container,
  Navbar,
  LogoImage,
  Body,
  Greetings,
  Cards,
  Card,
  Img,
  Image,
  PromtBox,
  SearchBox,
  Input,
  ImgContainer,
  Buttons,
  BottomInfo,
  Result,
  ResultTitle,
  ResultData,
  LogoImageSM,
  Loader,

} from "./MainStyled.js";
import ProfileL from "../../assets/ProfileL.jpeg";
import Compass from "../../assets/compass.svg";
import Bulb from "../../assets/bulb.svg";
import Code from "../../assets/code.svg";
import addImage from "../../assets/addImage.svg";
import Mic from "../../assets/mic.svg";
import Send from "../../assets/send.svg";
import ProfileSM from "../../assets/ProfileSM.jpeg";
import GeminiSparkle1 from "../../assets/geminiSparkle1.svg";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    input,
    setInput,
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
  } = useContext(Context);
  return (
    <Container>
      <Navbar>
        <p>Gemini</p>
        <LogoImage src={ProfileL} alt="" />
      </Navbar>
      <Body>
        {!showResult ? <> <Greetings>
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
        </Cards></> 
        :
        <Result>
          <ResultTitle>
            <LogoImageSM src={ProfileSM} alt="profile image"/>
            <p>{recentPrompt}</p>
          </ResultTitle>
          <ResultData>
            <Buttons src={GeminiSparkle1} />
            {loading ? <Loader>
                <hr />
                <hr />
                <hr />
            </Loader> :<p dangerouslySetInnerHTML={{__html: resultData}}></p>}
            

          </ResultData>

        </Result>
        
        }

        <PromtBox>
          <SearchBox>
            <Input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a promt here"
            />
            <ImgContainer>
              <Buttons src={addImage} />
              <Buttons src={Mic} />
              <Buttons
                onClick={() => {
                  onSent();
                }}
                src={Send}
              />
            </ImgContainer>
          </SearchBox>
          <BottomInfo>
            <p>
              Gemini may display inaccurate info, including about people, so
              double-check its responses.{" "}
              <a
                href="https://support.google.com/gemini/answer/13594961?visit_id=638479803147734955-349840869&p=privacy_notice&rd=1#privacy_notice"
                target="_blank"
                rel="noreferrer"
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
