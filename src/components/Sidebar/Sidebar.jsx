import React, { useState , useContext} from "react";
import {
  Container,
  Top,
  NewChat,
  Recent,
  RecentTitle,
  RecentEntry,
  Bottom,
  BottomContent,
  BottomBody,
  Image,
} from "./SidebarStyled";
import Menu from "../../assets/menu.svg";
import Add from "../../assets/add.svg";
import Message from "../../assets/message.svg";
import Help from "../../assets/help.svg";
import History from "../../assets/history.svg";
import Settings from "../../assets/settings.svg";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [extended, setextended] = useState(false);
  const { onSent, prevPrompt, setRecentPrompt } = useContext(Context);
  const loadPromt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  }
  return (
    <Container>
      <Top>
        <Image onClick={() => setextended((prev) => !prev)} src={Menu} alt="" />
        <NewChat>
          <Image src={Add} alt="" />
          {extended ? <p>New Chat</p> : null}
        </NewChat>
        {extended ? (
          <Recent>
            <RecentTitle> Recent </RecentTitle>
            {prevPrompt.map((item, index) => {
              return (
                <RecentEntry onClick={() => loadPromt(item)}>
                  <Image src={Message} alt="" />
                  <p>{item.slice(0,18)} ...</p>
                </RecentEntry>
              );
            })}
          </Recent>
        ) : null}
      </Top>
      <Bottom>
        <BottomContent>
          <BottomBody>
            <Image src={Help} alt="" />
            {extended ? <p>Help</p> : null}
          </BottomBody>
        </BottomContent>
        <BottomContent>
          <BottomBody>
            <Image src={History} alt="" />
            {extended ? <p>Activity</p> : null}
          </BottomBody>
        </BottomContent>
        <BottomContent>
          <BottomBody>
            <Image src={Settings} alt="" />
            {extended ? <p>Setting</p> : null}
          </BottomBody>
        </BottomContent>
      </Bottom>
    </Container>
  );
};

export default Sidebar;
