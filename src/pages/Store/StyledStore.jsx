import styled, { css } from "styled-components";

export const StyledStore = styled.div`
  /* padding: 20px; */
  background-color: #e9ecef;
`;

export const StoreHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  background-color: #ffffff;
  padding: 40px;
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  margin-bottom: 20px;
`;

export const StoreImg = styled.div`
  ${props => {
    const bgURL = `no-repeat center/80% url("${props.url}")`;
    return css`
      width: 170px;
      height: 170px;
      background: ${bgURL};
      background-size: contain;
    `;
  }}
`;

export const StoreBasic = styled.div`
  text-align: center;
  width: 200px;
`;

export const Title = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 10px;
`;

export const Sub = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #9e9e9e;
  div {
    cursor: pointer;
    margin-right: 20px;
  }
`;

export const StoreInfo = styled.div``;

export const StoreNavBar = styled.ul`
  display: flex;
  width: 100%;
  background-color: #ffffff;
  height: 50px;
`;

export const StoreInfoList = styled.li`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  background-color: #fbd1b7;
  border-bottom: 1px solid #fbd1b7;
  cursor: pointer;
  &.home {
    color: #ffffff;
    border-bottom: 5px solid #ffffff;
  }
  &.menu {
    color: #ffffff;
    border-bottom: 5px solid #ffffff;
  }
  &.review {
    color: #ffffff;
    border-bottom: 5px solid #ffffff;
  }
`;

export const StoreMap = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #9e9e9e;
  padding: 20px;
  div {
    width: 400px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e9ecef;
  }
`;

export const StoreDetail = styled.div`
  background-color: #ffffff;
`;

export const StoreHome = styled.div``;

export const StoreHomeDetail = styled.ul`
  padding: 20px 80px;
`;

export const StoreHomeDetailList = styled.li`
  border-bottom: 1px solid #9e9e9e;
  padding: 30px 0;
  display: flex;
  align-items: center;
  overflow: hidden;
  svg {
    margin-right: 20px;
  }
`;

export const StoreMenuDetail = styled.ul``;

export const StoreMenuImg = styled.div`
  ${props => {
    const bgURL = `no-repeat center/80% url("${props.url}")`;
    return css`
      width: 120px;
      height: 120px;
      background: ${bgURL};
      background-size: contain;
      border-radius: 15px;
    `;
  }}
`;

export const StoreMenuDetailList = styled.li`
  display: flex;
  align-items: center;
  padding: 20px 60px;
  border-bottom: 1px solid #9e9e9e;
`;

export const StoreMenuNameAndPrice = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50px;
`;

export const StoreMenuName = styled.h4``;

export const StoreMenuPrice = styled.div`
  color: red;
`;

export const StoreReview = styled.div`
  padding: 20px 80px;
`;
export const StoreReviewTitle = styled.h5`
  font-size: 1.3rem;
  margin-bottom: 30px;
`;
export const StoreReviewDetail = styled.ul``;
export const StoreReviewDetailList = styled.li`
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid #9e9e9e;
`;
export const StoreReviewUser = styled.div`
  margin-right: 20px;
`;
export const UserAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d3f6f3;
  font-size: 0.7rem;
`;
export const StoreReviewInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StoreReviewTime = styled.span`
  color: #9e9e9e;
  margin-bottom: 10px;
`;
export const StoreReviewContent = styled.div`
  margin-bottom: 10px;
  span {
    margin-right: 10px;
  }
`;
export const StoreReviewImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  align-self: flex-start;
`;
export const StoreReviewImg = styled.div`
  ${props => {
    const bgURL = `no-repeat center/80% url("${props.url}")`;
    return css`
      width: ${bgURL ? "120px" : "0px"};
      height: ${bgURL ? "120px" : "0px"};
      background: ${bgURL};
      background-size: contain;
      border-radius: 15px;
    `;
  }}
`;

export const StoreReviewEatMenu = styled.div`
  background-color: #fee9b2;
  padding: 10px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
