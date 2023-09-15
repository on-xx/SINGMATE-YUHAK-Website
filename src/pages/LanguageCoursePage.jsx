import SmallBanner from "../components/SmallBanner"

const LanguageCoursePage = () => {
    return <div id="languagecoursepage">
        <div className="languagecoursepage container">
            <div className="languagecoursepage-banner">
                <img src="../img/hillside-banner.jpg" alt="hillside-banner" />
            </div>
            <div className="dimension-row flex-row">
                <div className="dimension-img">
                    <img src="../img/hillside-trial.jpg" alt="dimension-img" />
                </div>
                <div className="dimension-content flex-column">
                    <h1>HWA 현지 학교 체험 프로그램</h1>
                    <p>2006년 설립된 싱가포르 국제학교로 동서양의 언어와 문화를 깊게 이해하고 학생들이 비전을 갖고 동양과 서양을 아우르는 인재로 성장하도록 커리큘럼을 갖추고 있는 학교입니다.</p>
                    <p>최소 1년에서 2년 이상의 재학 기간을 요구하는 다른 싱가포르 국제학교들과는 달리 싱가포르를 방문하는 외국 학생들에게 다양한 기회를 제공하고자 단기가 현지에서 재학 중인 학생들과 학교 생활을 체험할 수 있는 프로그램을 운영하고 있습니다.</p>
                </div>
            </div>
            <div className="languagecoursepage-banner">
                <img src="../img/dimension-banner.jpg" alt="dimension-banner" />
            </div>
            <div className="dimension-row flex-row-reverse">
                <div className="dimension-img">
                    <img src="../img/dimension-trial.jpg" alt="dimension-img" />
                </div>
                <div className="dimension-content flex-column">
                    <h1>DIC 현지 학교 체험 프로그램</h1>
                    <p>Dimensions Commercial School로 1980년 처음 설립된 이후 Dimensions International College로 교명을 변경하면서 기존 중, 고등학교 과정인 O-Level, A-Level 과정에서 초등학교 Primary School 캠퍼스를 확장하여 현재 싱가포르 내 3개의 캠퍼스를 동시에 운영하고 있습니다.</p>
                    <p>다양한 국적의 국제학생들이 재학중이며 단기가 현지 학교 프로그램을 체험해 볼 기회를 제공하고자 단기간 학교 체험 프로그램을 통해 현지 학생들과 다양한 배움의 기회를 얻을 수 있습니다.</p>
                </div>
            </div>
        </div>
        <SmallBanner />
    </div>
}

export default LanguageCoursePage
