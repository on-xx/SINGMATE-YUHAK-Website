import UniversityComponent from "../components/UniversityComponent"
import SmallBanner from '../components/SmallBanner'

const UniversityPage = () => {

    return <div id="universitypage">
        <div className="universitypage container">
            <div className="universitypage-banner">
                <img src="../img/prinatuni-banner.jpg" alt="prinatuni-banner" />
            </div>
            <div className="universitypage-content flex-column">
                <h1>싱가포르 사립/국립 대학교</h1>
                <h3>Private/National Universities in Singapore</h3>
                <p>아시아를 넘어 전 세계 탑 순위에 매번 위치하는 싱가포르 명문 국립대 그리고 각국의 명문 대학 학위 프로그램을 이수할 수 있는 글로벌 캠퍼스들이 모여있는 곳이 바로 싱가포르 입니다.</p>
                <p>싱가포르 국립 대학교의 높은 진학 장벽에 막혀 폴리테크닉 대학을 진학하여 준학사 학위에 해당되는 디플로마(Diploma) 학위를 받은 학생들이 국립 대학교 학사 학위를 받은 학생에 비하여 급여 및 승진 기회에 있어서 겪는 차이들을 줄이고자 1956년 MDIS를 시작으로 1964년 SIM이 설립되어 두 사립 대학을 필두로 지금의 싱가포르 사립 대학들이 설립이 되었습니다.</p>
                <p>설립 이 후 그 역사가 길어지면서 현재는 국립 대학교와 나란히 수 많은 학생들이 미래를 펼치는 교육기관들로 자리를 잡았습니다.</p>
            </div>

            <div className="universitypage-content flex-column">
                <h1>사립대학을 선택하는 이유</h1>
                <h3>Private Universities In Singapore</h3>
                <div className="private-uni-card-wrapper flex-row">
                    <div className="private-uni-card flex-column">
                        <div className="private-uni-card-title flex-row">
                            <img src="../img/icons8-mortarboard-48.png" alt="" />
                            <h3>학사 학위 취득</h3>
                        </div>
                        <p>싱가포르 사립대학에서 학위 취득 기간이 본교에서와 비교했을때 훨씬 짧습니다. 본교의 경우 파운데이션 기간을 포함해 학위 취득까지 3년 9개월에서 4년 정도 학위 취득 기간이 소요되는 반면에 싱가포르 사립 대학에서는 2년 1개월에서 최대 3년 6개월 안에 취득이 가능합니다.</p>
                    </div>
                    <div className="private-uni-card flex-column">
                        <div className="private-uni-card-title flex-row">
                            <img src="../img/icons8-reading-48.png" alt="" />
                            <h3>전공</h3>
                        </div>
                        <p>싱가포르 사립대학의 경우 비즈니스 계열, 호텔 관광 계열, 컴퓨터 및 IT 계열, 엔지니어링, 미디어 계열 전공, 사회학 및 심리학 계열 전공을 중심으로 하여 그중에서도 비즈니스 계열 전공의 선호도가 높습니다.</p>
                    </div>
                    <div className="private-uni-card flex-column">
                        <div className="private-uni-card-title flex-row">
                            <img src="../img/icons8-diploma-64.png" alt="" />
                            <h3>졸업장</h3>
                        </div>
                        <p>싱가포르 사립대학 과정을 마치고 학위를 취득하면 본교와 동일한 졸업장을 받게됩니다. 입학과정은 본교에 비해 비교적 쉬운편이지만 졸업까지 학생의 성적 및 모든 학업 과정은 철저히 본교의 심사와 승인을 거쳐 졸업 가능 여부가 결정됩니다.</p>
                    </div>
                </div>
            </div>

        </div>
        <UniversityComponent />
        <SmallBanner />
    </div>
}

export default UniversityPage
