import { useParams } from "react-router-dom"

const SchoolDetailPage = ({ interSchoolData }) => {
    const params = useParams()
    const school = interSchoolData.find((school) => school.title === params.title)

    return (
        <div id="schooldetailpage">
            <div className="schooldetailpage container">
                <div className="schooldetailpage-title flex-column">
                    <h3>{school.title}</h3>
                    <h1>{school.fullTitle}</h1>
                </div>
                <div className="videobanner-wrapper flex-row">
                    <div className="schooldetailpage-video">
                        <iframe frameBorder={0}
                            src={school.youtube}>
                        </iframe>
                    </div>
                    <div className="schooldetailpage-banner">
                        <img src={school.img} alt="" />
                    </div>
                </div>
                <div className="schooldetailpage-intro">
                    <h1>학교 소개</h1>
                    <p>{school.intro}</p>
                </div>
                <div className="flex-row">
                    <div className="schooldetailpage-card-wrapper flex-row">
                        <div className="schooldetailpage-card flex-column">
                            <div className="schooldetailpage-card-img">
                                <img src="../img/icons8-man-reading-a-book-48.png" alt="" />
                            </div>
                            <div className="schooldetailpage-card-text">
                                <h3>학생수 :  {school.student}</h3>
                            </div>
                        </div>
                        <div className="schooldetailpage-card flex-column">
                            <div className="schooldetailpage-card-img">
                                <img src="../img/icons8-calendar-48.png" alt="" />
                            </div>
                            <div className="schooldetailpage-card-text">
                                <h3>학기 :  {school.semester}</h3>
                            </div>
                        </div>
                        <div className="schooldetailpage-card flex-column">
                            <div className="schooldetailpage-card-img">
                                <img src="../img/icons8-coins-48.png" alt="" />
                            </div>
                            <div className="schooldetailpage-card-text">
                                <h3>평균학비 :  {school.fee}</h3>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SchoolDetailPage
