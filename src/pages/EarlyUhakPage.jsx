import SmallBanner from '../components/SmallBanner'
import InterSchoolComponent from "../components/InterSchoolComponent"

const EarlyUhakPage = () => {
    return <div id="earlyuhakpage">
        <div className="earlyuhakpage container">
            <div className="earlyuhak-banner">
                <img src="../img/early_banner.jpg" alt="earlyuhak-banner" />
            </div>

            <div className="earlyuhakpage-content flex-column">
                <h1>싱가포르 국제학교</h1>
                <h3>International School in Singapore</h3>
                <p>싱가포르는 동서양의 다양한 인종의 사람들이 모여 사는 국가로서 동남아시아의 비즈니스, 무역 및 금융 허브 (HUB)로서 유명하며 이러한 세계화 시대의 중심이 되는 환경은 국제 학생들에게 세계적인 수준의 교육 환경을 누릴 수 있는 기회가 주어집니다.</p>
                <p>약 40 여개의 국제학교가 있으며 교육과정은 SAT / IB / A-Level 로 나뉘어 학교별 각기 다른 커리큘럼을 제공하고 있습니다.</p>
                <p>빠르게 변화해가는 시대에 맞춰 새롭게 떠오르는 국제학교부터 오랜 기간 세계적으로 인정 받고 역사가 깊은 국제학교들이 앞 다퉈 다양한 학업 프로그램을 선보이고 있습니다. 첫 선택이 향후 학업 및 진로를 결정 지을 만큼 중요하며 자녀에게 가장 적합한 커리큘럼을 선택하는 것이 우선시 되어야 합니다.</p>
                <p>전문가와 함께 올바른 방향 선정만이 성공적인 유학생활을 만듭니다.</p>
            </div>

            <div className="earlyuhak-section-content flex-column">
                <h1>입학 수속 부터 내신 관리 까지 한번에 !<span className="title-liner"></span></h1>
                <h3>싱메이트 유학의 강점</h3>
                <div className="flex-row">
                    <div className="earlyuhak-card flex-column">
                        <div className="earlyuhak-card-img">
                            <img src="../img/icons8-working-conditions-64.png" alt="" />
                        </div>
                        <div className="earlyuhak-card-content flex-column">
                            <h3>맞춤 상담을 통한 학교찾기</h3>
                            <p>유학 전문 컨설턴트와 1:1 집중 상담을 통해 맞춤 학교 선정 및 절차 안내를 진행합니다</p>
                        </div>
                    </div>
                    <div className="earlyuhak-card flex-column">
                        <div className="earlyuhak-card-img">
                            <img src="../img/icons8-work-visa-64.png" alt="" />
                        </div>
                        <div className="earlyuhak-card-content">
                            <h3>신속 서류 준비 및 입학 수속 처리</h3>
                            <p>현지 유학원 본사에서 진행하여 입학 및 비자 발급까지 시간 단축해드립니다</p>
                        </div>
                    </div>
                    <div className="earlyuhak-card flex-column">
                        <div className="earlyuhak-card-img">
                            <img src="../img/icons8-independent-64.png" alt="" />
                        </div>
                        <div className="earlyuhak-card-content">
                            <h3>입학 및 학교 생활 완벽 적응</h3>
                            <p>서류 제출로 끝나는게 아니라 적응하여 완벽한 유학생활을 시작하도록 도와드립니다</p>
                        </div>
                    </div>
                    <div className="earlyuhak-card flex-column">
                        <div className="earlyuhak-card-img">
                            <img src="../img/icons8-teachers-64.png" alt="" />
                        </div>
                        <div className="earlyuhak-card-content">
                            <h3>Follow-Up 완벽 내신 관리</h3>
                            <p>학교 입학은 시작을 의미합니다 싱메이트 내신센터에서 완벽 내신 관리를 도와드립니다</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <InterSchoolComponent />
        <SmallBanner />
    </div>
}

export default EarlyUhakPage
