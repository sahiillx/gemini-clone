import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  min-height: 100vh;
  padding-bottom: 15vh;
  position: relative;
`;
export const Navbar = styled.div`
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
export const LogoImage = styled.img`
  width: 55px;
  height: 55px;

  border-radius: 50%;
`;

export const Body = styled.div`
  max-width: 1200px;
  margin: auto;
`;
export const Greetings = styled.div`
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
export const Cards = styled.div`
  display: flex;
  padding: 20px;
  gap: 15px;
`;

export const Card = styled.div`
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
export const Img = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const Image = styled.img`
  background-color: white;
  border-radius: 50%;
  padding: 5px;
  width: 40px;
  height: 40px;
`;

export const PromtBox = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 20px 20px;
`;
export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  background-color: #f0f4f9;
  padding: 10px 20px;
  border-radius: 50px;
  max-width: 1085px;
`;
export const Input = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  padding: 8px;
  font-size: 20px;
`;
export const ImgContainer = styled.div`
  margin: 5px 0px;
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const Buttons = styled.img`
  border-radius: 50%;
  padding: 5px;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
export const BottomInfo = styled.div`
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

export const Result = styled.div`
  max-width: 1085px;
  padding: 0px 15%;
  max-height: 70vh;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

`;
export const ResultTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 45px 0px;

  p {
    font-size: 18px;
    font-weight: 400px;
    line-height: 1.8;
    color: #585858;
  }
`;

export const LogoImageSM = styled.img`
  width: 40px;
  height: 40px;

  border-radius: 50%;
`;
export const ResultData = styled.div`
  display: flex;
  align-items: start;
  gap: 20px;
  margin: 45px 0px;

  p {
    font-size: 18px;
    font-weight: 400px ;
    line-height: 1.8 ;
    color: #585858;
  
  }
`;

export const Loader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  hr {
    border-radius: 4px;
    border: none;
    background-color: #f6f7f8;
    background: linear-gradient(to right, #9ed7ff, #ffffff, #9ed7ff);
    background-size: 800px 50px;
    height: 20px;
    animation: loader 3s infinite linear;
  }

  @keyframes loader {
    0% {
      background-position: -800px 0px;

    }
    100% {
      background-position: 800px 0px;
    }
  }
`;