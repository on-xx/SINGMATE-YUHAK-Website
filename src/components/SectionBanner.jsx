import { Link } from "react-router-dom"

const SectionBanner = () => {
    return (
        <>
            <div id="section-banner">
                <div className="section-banner container">
                    <h1>국내 유일 싱가포르 현지 교육 법인<span className="title-liner"></span></h1>
                    <h3>성공적인 싱가포르 유학 싱메이트와 함께</h3>
                    <div className="image-container">
                        <img src="../img/section-banner-1.jpg" alt="section-banner-img" />
                    </div>
                    <div className="quick-menu flex-row">
                        <div className="quick-menu-card flex-row">
                            <div className="quick-menu-card-icon">
                                <img src="../img/icon-stud.png" alt="stud-icon" />
                            </div>
                            <div className="quick-menu-card-content flex-column">
                                <h3>완벽 대학 입시 준비</h3>
                                <h1>대학 진학 전문 컨설팅</h1>
                                <Link to='/university' className="btn">자세히보기</Link>
                            </div>
                        </div>
                        <div className="quick-menu-card flex-row">
                            <div className="quick-menu-card-icon">
                                <img src="../img/icon-promise.png" alt="promise-icon" />
                            </div>
                            <div className="quick-menu-card-content flex-column">
                                <h3>입학부터 졸업까지</h3>
                                <h1>싱가포르 현지 케어</h1>
                                <Link to='/primaryedu' className="btn">자세히보기</Link>
                            </div>
                        </div>
                        <div className="quick-menu-card flex-row">
                            <div className="quick-menu-card-icon">
                                <img src="../img/icon-lang.png" alt="lang-icon" />
                            </div>
                            <div className="quick-menu-card-content flex-column">
                                <h3>싱가포르 현지학교 체험</h3>
                                <h1>국제학교 어학연수</h1>
                                <Link to='/langcourse' className="btn">자세히보기</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionBanner