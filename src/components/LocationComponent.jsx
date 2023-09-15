const LocationComponent = () => {
  return (
    <>
      <div id="location-section">
        <div className="location-section container">
          <h1>
            싱가포르 유학 - 현지 본사 | 강남 지사
            <span className="title-liner"></span>
          </h1>
          <h3>싱메이트 찾아오시는 길</h3>
          <div className="location-section-wrapper flex-row">
            <div className="location-card">
              <div className="location-card-img">
                <img
                  src="../img/singmates-bugis-thumb.jpg"
                  alt="sm-bugis-map"
                />
              </div>
              <div className="location-card-content">
                <h1>싱메이트 싱가포르 본사</h1>
                <p>87 Beach Road Chye Sing Building #04-01</p>
                <p>+65 6258 1048</p>
              </div>
            </div>
            <div className="location-card">
              <div className="location-card-img">
                <img
                  src="../img/singmates-gangnam-thumb.jpg"
                  alt="sm-gangnam-map"
                />
              </div>
              <div className="location-card-content">
                <h1>싱메이트 강남 지사</h1>
                <p>
                  서울특별시 강남구 테헤란로 64길 13 선릉역 풍림 아이원레몬
                  오피스 401호
                </p>
                <p>+82 (02) 566 0386</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationComponent;
