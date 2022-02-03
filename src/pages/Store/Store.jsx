// import Header from "../../components/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ImgWrapper,
  StoreImg,
  StyledStore,
  StoreHeader,
  Title,
  StoreBasic,
  Sub,
  StoreInfo,
  StoreNavBar,
  StoreInfoList,
  StoreMap,
  StoreDetail,
  StoreHome,
  StoreHomeDetail,
  StoreHomeDetailList,
  StoreMenuDetail,
  StoreMenuDetailList,
  StoreMenuName,
  StoreMenuPrice,
  StoreMenuNameAndPrice,
  StoreMenuImg,
  StoreReview,
  StoreReviewTitle,
  StoreReviewDetail,
  StoreReviewDetailList,
  StoreReviewUser,
  UserAvatar,
  StoreReviewInfo,
  StoreReviewTime,
  StoreReviewContent,
  StoreReviewImg,
  StoreReviewImgWrapper,
  StoreReviewEatMenu,
} from "./StyledStore";
import {
  faThumbsDown,
  faThumbsUp,
  faStar,
  faClock,
} from "@fortawesome/free-regular-svg-icons";
import { useCallback, useState } from "react";
import {
  faBed,
  faHome,
  faMapMarkedAlt,
  faParking,
  faPhone,
  faStar as faSolidStar,
} from "@fortawesome/free-solid-svg-icons";

const storeMenu = [
  {
    id: 1,
    url: "https://mp-seoul-image-production-s3.mangoplate.com/1129699_1620482534399327.jpg?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
    title: "민물장어덮밥",
    price: "6700",
  },
  {
    id: 2,
    url: "https://mp-seoul-image-production-s3.mangoplate.com/1187014_1642204185842842.jpg?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
    title: "해산물덮밥",
    price: "7200",
  },
  {
    id: 3,
    url: "https://mp-seoul-image-production-s3.mangoplate.com/1187014_1642204186557414.jpg?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
    title: "카이센동",
    price: "8900",
  },
  {
    id: 4,
    url: "https://mp-seoul-image-production-s3.mangoplate.com/1187014_1642204186249261.jpg?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
    title: "생연어덮밥",
    price: "7200",
  },
];

const reviews = [
  {
    user: {
      id: 1,
      avatar: "",
      nickname: "test",
    },
    eatMenu: "해산물덮밥",
    eatMenuImg:
      "https://mp-seoul-image-production-s3.mangoplate.com/1187014_1642204185842842.jpg?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
    recommend: true,
    content: "친절하고 맛있어요",
    time: "2022-02-01",
    id: 1,
  },
  {
    user: {
      id: 2,
      avatar: "",
      nickname: "test2",
    },
    eatMenu: "카이센동",
    eatMenuImg:
      "https://mp-seoul-image-production-s3.mangoplate.com/1187014_1642204186557414.jpg?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
    recommend: true,
    content: "맛잇어요",
    time: "2022-01-21",
    id: 2,
  },
  {
    user: {
      id: 3,
      avatar: "",
      nickname: "test3",
    },
    eatMenu: "생연어덮밥",
    eatMenuImg:
      "https://mp-seoul-image-production-s3.mangoplate.com/1187014_1642204186249261.jpg?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
    recommend: false,
    content: "별로",
    time: "2022-01-15",
    id: 3,
  },
  {
    user: {
      id: 4,
      avatar: "",
      nickname: "test4",
    },
    eatMenu: "민물장어덮밥",
    eatMenuImg:
      "https://mp-seoul-image-production-s3.mangoplate.com/1129699_1620482534399327.jpg?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
    recommend: true,
    content: "생각보다 매운데 맛있음",
    time: "2021-12-02",
    id: 4,
  },
];

const Store = () => {
  const [like, setLike] = useState(0);
  const [unlike, setUnLike] = useState(0);
  const [toggleStar, setToggleStar] = useState(false);
  const [storeInfo, setStoreInfo] = useState("home");

  const onClickLike = useCallback(() => {
    setLike(prev => prev + 1);
  }, [like]);

  const onClickUnLike = useCallback(() => {
    setUnLike(prev => prev + 1);
  }, [unlike]);

  const onClickStar = useCallback(() => {
    setToggleStar(prev => !prev);
  }, [toggleStar]);

  const onClickStoreInfo = useCallback(
    e => {
      switch (e.target.innerText) {
        case "홈":
          return setStoreInfo("home");
        case "메뉴":
          return setStoreInfo("menu");
        case "리뷰":
          return setStoreInfo("review");
      }
    },
    [storeInfo]
  );
  console.log(storeInfo);
  return (
    <>
      <StyledStore>
        <StoreHeader>
          <ImgWrapper>
            {storeMenu.map(storeMenuList => (
              <StoreImg key={storeMenuList.url} url={storeMenuList.url} />
            ))}
          </ImgWrapper>
          <StoreBasic>
            <Title>식당이름</Title>
            <Sub>
              <div onClick={onClickLike}>
                <FontAwesomeIcon icon={faThumbsUp} />
                <span>{like}</span>
              </div>
              <div onClick={onClickUnLike}>
                <FontAwesomeIcon icon={faThumbsDown} />
                <span>{unlike}</span>
              </div>
              <div onClick={onClickStar}>
                {toggleStar ? (
                  <>
                    <FontAwesomeIcon icon={faSolidStar} color="green" />
                    <span>취소</span>
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faStar} />
                    <span>찜하기</span>
                  </>
                )}
              </div>
            </Sub>
          </StoreBasic>
        </StoreHeader>
        <StoreInfo>
          <StoreNavBar>
            <StoreInfoList
              onClick={onClickStoreInfo}
              className={storeInfo === "home" ? storeInfo : ""}
            >
              홈
            </StoreInfoList>
            <StoreInfoList
              onClick={onClickStoreInfo}
              className={storeInfo === "menu" ? storeInfo : ""}
            >
              메뉴
            </StoreInfoList>
            <StoreInfoList
              onClick={onClickStoreInfo}
              className={storeInfo === "review" ? storeInfo : ""}
            >
              리뷰
            </StoreInfoList>
          </StoreNavBar>
          <StoreDetail>
            {storeInfo === "home" && (
              <StoreHome>
                <StoreMap>
                  <div>지도</div>
                </StoreMap>
                <StoreHomeDetail>
                  <StoreHomeDetailList>
                    <FontAwesomeIcon icon={faPhone} />
                    <span>0507-1398-7125</span>
                  </StoreHomeDetailList>
                  <StoreHomeDetailList>
                    <FontAwesomeIcon icon={faMapMarkedAlt} />
                    <span>경성대.부경대역 1번 출구에서104m</span>
                  </StoreHomeDetailList>
                  <StoreHomeDetailList>
                    <FontAwesomeIcon icon={faClock} />
                    <span>매일 10:30 - 03:00</span>
                  </StoreHomeDetailList>
                  <StoreHomeDetailList>
                    <FontAwesomeIcon icon={faHome} />
                    <a href="https://blog.naver.com/tkanfkdl45">
                      https://blog.naver.com/tkanfkdl45
                    </a>
                  </StoreHomeDetailList>
                  <StoreHomeDetailList>
                    <FontAwesomeIcon icon={faParking} />
                    <span>주차 가능</span>
                  </StoreHomeDetailList>
                  <StoreHomeDetailList>
                    <FontAwesomeIcon icon={faBed} />
                    <span>매주 월요일</span>
                  </StoreHomeDetailList>
                </StoreHomeDetail>
              </StoreHome>
            )}
            {storeInfo === "menu" && (
              <StoreMenuDetail>
                {storeMenu.map(storeMenuList => (
                  <StoreMenuDetailList key={storeMenuList.id}>
                    <StoreMenuImg url={storeMenuList.url} />
                    <StoreMenuNameAndPrice>
                      <StoreMenuName>{storeMenuList.title}</StoreMenuName>
                      <StoreMenuPrice>{storeMenuList.price}원</StoreMenuPrice>
                    </StoreMenuNameAndPrice>
                  </StoreMenuDetailList>
                ))}
              </StoreMenuDetail>
            )}
            {storeInfo === "review" && (
              <StoreReview>
                <StoreReviewTitle>리뷰 ({reviews.length})</StoreReviewTitle>
                <StoreReviewDetail>
                  {reviews.map(review => (
                    <StoreReviewDetailList key={review.id}>
                      <StoreReviewUser>
                        <UserAvatar>{review.user.nickname}</UserAvatar>
                      </StoreReviewUser>
                      <StoreReviewInfo>
                        <StoreReviewTime>{review.time}</StoreReviewTime>
                        <StoreReviewContent>
                          <span>{review.content}</span>
                          <span>
                            {review.recommend ? (
                              <FontAwesomeIcon icon={faThumbsUp} />
                            ) : (
                              <FontAwesomeIcon icon={faThumbsDown} />
                            )}
                          </span>
                        </StoreReviewContent>
                        <StoreReviewImgWrapper>
                          <StoreReviewImg url={review.eatMenuImg} />
                          <StoreReviewEatMenu>
                            {review.eatMenu}
                          </StoreReviewEatMenu>
                        </StoreReviewImgWrapper>
                      </StoreReviewInfo>
                    </StoreReviewDetailList>
                  ))}
                </StoreReviewDetail>
              </StoreReview>
            )}
          </StoreDetail>
        </StoreInfo>
      </StyledStore>
    </>
  );
};

export default Store;
