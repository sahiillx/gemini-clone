import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f0f4f9;
  padding: 25px 0px 25px 25px;
  
`;
export const Top = styled.div``;
export const Image = styled.img`
  display: block;
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin: 15px 15px;
`;
export const NewChat = styled.div`
  margin-top: 25px;
  display: inline-flex;
  align-items: center;
  padding-right: 15px;
  background-color: #e6eaf1;
  border-radius: 25px;
  font-size: 14px;
  color: grey;
  cursor: pointer;

  p {
    font-size: 16px;
    font-weight: 500;
  }
`;



export const Recent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  padding-right: 25px;
`;
export const RecentTitle = styled.div`
  margin: 25px 0 15px 15px;
  font-size: 16px;
  font-weight: 500;
`;
export const RecentEntry = styled.div`
  display: flex;
  align-items: center;
  border-radius: 50px;
  padding-right: 140px;
  color: #282828;

  p {
    font-size: 18px;
    font-weight: 500;
  }
  &:hover {
    background-color: #e2e6eb;
  }
`;

export const RecentChat = styled.div``;
export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
`;
export const BottomIcon = styled.div`
  cursor: pointer;
`;