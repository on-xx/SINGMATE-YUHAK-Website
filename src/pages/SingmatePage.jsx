import LocationComponent from '../components/LocationComponent'
import SmallBanner from '../components/SmallBanner'


const SingmatePage = () => {
    return <div id="singmatepage">
        <div className="singmatepage container">
            <div className="singmatepage-banner">
                <img src="../img/singmate-home-banner-1.png" alt="singmatebanner" />
            </div>
            <div className="flex-row">
                <div className="small-banner">
                    <img src="../img/top_banner-01.jpg" alt="small-banner" />
                </div>
                <div className="small-banner">
                    <img src="../img/top_banner-02.jpg" alt="small-banner" />
                </div>
                <div className="small-banner">
                    <img src="../img/top_banner-03.jpg" alt="small-banner" />
                </div>
            </div>

            <div className="singmatepage-intro">
                <div className="flex-row">
                    <div className="singmate-intro-img">
                        <img src="../img/singmate-logo.jpg" alt="logo" />
                    </div>
                    <div className="singmate-intro-content flex-column">
                        <h1>안녕하세요 싱메이트입니다<span className="title-liner"></span></h1>
                        <p>지난 십 수년간 저희 싱메이트 유학원은 한국에서 싱가포르로 유학의 길을 선택하고 집을 떠나는 수 많은 학생들과 학부모님들께 작은 도움이 되면 어떨까 했던 마음이 시작이었습니다.</p>
                        <p>2008년 싱가포르 현지에서 'HANKOOK-SINGMATES Education' 설립을 시작으로 2018년 서울 강남역을 중심으로 그 범위를 확장하여 학부모님들과 꾸준히 소통하며 현재까지 유학 수속 서비스를 제공하고 있습니다.</p>
                    </div>
                </div>
                <div className="flex-row-reverse">
                    <div className="singmate-intro-img">
                        <img src="../img/singmate-sg-1.jpg" alt="logo" />
                    </div>
                    <div className="singmate-intro-content flex-column">
                        <h1>싱가포르 현지 교육 법인의 강점<span className="title-liner"></span></h1>
                        <p>매일 빠르게 변화하는 시대와 더불어 싱가포르 현지 교육 상황도 하루가 다르게 변화하는 시기입니다.</p>
                        <p>저희 싱메이트는 시작도 싱가포르 현지에서였고 현재도 그러하기 때문에 수 많은 다른 유학원들과는 차별화된 유학 서비스를 제공해드리고 있습니다.</p>
                        <p>동시에 싱메이트 내신 센터를 병행하여 학생들의 유학 생활이 입학으로 끝나는 것이 아니라 끝까지 함께 한다는 마음으로 지난 십 수년간 최고를 약속드려왔습니다.</p>
                    </div>
                </div>
                <div className="flex-row">
                    <div className="singmate-intro-img">
                        <img src="../img/gangnam-sg-1.jpg" alt="logo" />
                    </div>
                    <div className="singmate-intro-content flex-column">
                        <h1>책임감을 우선시 하는 교육 법인<span className="title-liner"></span></h1>
                        <p>아이들을 지도하면서 교육은 사업이 아니라 책임감이라는 사명감을 가지고 부모님들께 믿음을 드리고자 노력해왔습니다.</p>
                        <p>험난한 유학 생활에서의 성공적인 결과는 그 시작을 누구와 함께 하느냐에 달려있다고 굳게 믿고 있습니다</p>
                        <p>항상 최고를 약속드리겠습니다. 든든한 싱가포르 친구 싱메이트와 함께 성공적인 유학의 길을 시작해보세요.</p>
                    </div>
                </div>
            </div>

            <div className="singmatepage-footprint">
                <img src="../img/singmate-footprint.png" alt="footprint" />
            </div>
        </div>
        <LocationComponent />
        <SmallBanner />
    </div>
}

export default SingmatePage
