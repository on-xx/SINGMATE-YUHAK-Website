import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div id="footer">
        <div className="footer container">
          <div className="footer-sns-row flex-row">
            <div className="footer-sns-wrapper flex-column">
              <div className="footer-sns-icon">
                <a target="_blank" href="https://pf.kakao.com/_xfxlpNC">
                  <img src="../img/icon-kakao.png" alt="kakaoplus" />
                </a>
              </div>
              <div className="footer-sns-title">
                <h3>카카오톡 채널</h3>
              </div>
            </div>
            <div className="footer-sns-wrapper flex-column">
              <div className="footer-sns-icon">
                <a
                  target="_blank"
                  href="https://m.blog.naver.com/PostList.naver?blogId=singmate"
                >
                  <img src="../img/icon-blog.png" alt="blogicon" />
                </a>
              </div>
              <div className="footer-sns-title">
                <h3>네이버 블로그</h3>
              </div>
            </div>
            <div className="footer-sns-wrapper flex-column">
              <div className="footer-sns-icon">
                <a
                  target="_blank"
                  href="https://www.instagram.com/singmates.uhak"
                >
                  <img src="../img/icon-insta.png" alt="blogicon" />
                </a>
              </div>
              <div className="footer-sns-title">
                <h3>인스타그램</h3>
              </div>
            </div>
            <div className="footer-sns-wrapper flex-column">
              <div className="footer-sns-icon">
                <Link to="/visitform">
                  <img src="../img/icon-visit.png" alt="visiticon" />
                </Link>
              </div>
              <div className="footer-sns-title">
                <h3>방문상담 예약</h3>
              </div>
            </div>
            <div className="footer-sns-wrapper flex-column">
              <div className="footer-sns-icon">
                <Link to="/about">
                  <img src="../img/icon-location.png" alt="locationicon" />
                </Link>
              </div>
              <div className="footer-sns-title">
                <h3>찾아오시는 길</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content flex-row">
          <div className="footer-logo">
            <img src="../img/all-logo-white.png" alt="" />
          </div>
          <div className="footer-text">
            <h3>싱메이트유학 | 사업자 등록번호 : 658-09-00699</h3>
            <h3>
              주소 : 서울특별시 강남구 테헤란로 64길 13 선릉역 풍림 아이원레몬
              오피스 401호{" "}
            </h3>
            <h3> 87 Beach Road Chye Sing Building #04-01 Singapore</h3>
            <h3>대표전화 : 02-566-0386 | +65 6258 1048 </h3>
            <h3>이메일:singmates86@gmail.com</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
