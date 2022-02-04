import { useInView } from "react-intersection-observer";
import TestImageList from "./Test";
import { useMediaQuery } from "react-responsive";
//import { Contatiner } from "./StyledContents";

const Contents = () => {
  const { ref, inView } = useInView;
  //(무한스크롤)ref가 화면에 나타나면 inView는 true, 아니면 false를 반환한다.
  return (
    // <div className="parent">
    //   <div className="first">첫 번째 가게 이미지</div>
    //   <div className="second">두 번째 가게 이미지</div>
    //   <div ref={ref} className="third">
    //     세 번째 가게 이미지
    //   </div>
    //   {/* ref를 div에 걸어주면 해당 요소가 보이면 스크롤 확장*/}
    // </div>
    <TestImageList />
  );
};

export default Contents;
