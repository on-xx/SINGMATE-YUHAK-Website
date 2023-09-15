import { useParams } from "react-router-dom"

const NoticeDetailPage = ({ noticeData }) => {
    const params = useParams()

    const notice = noticeData.find((notice) => notice.id === +params.id)

    return (
        <div id="noticeboard">
            <div className="noticeboard container">
                <div className="noticeboard-banner flex-column">
                    <h1>공지사항</h1>
                </div>

                <div className="notice-detail-wrapper flex-column">
                    <div className="notice-detail-title flex-column">
                        <div className="notice-detail-title-1 flex-row">
                            <p className="title">제목</p>
                            <p className="title-text">{notice.title}</p>
                        </div>
                        <div className="notice-detail-title-2 flex-row">
                            <p className="writer">작성자</p>
                            <p className="writer-text">싱메이트</p>
                            <p className="date">작성일자</p>
                            <p className="date-text">{notice.dateCreated}</p>
                        </div>
                    </div>

                    <div className="notice-detail-content flex-column">
                        <div className="notice-detail-img">
                            <img src={notice.img} alt="" />
                        </div>
                        <h1>{notice.title}</h1>
                        <p>{notice.contentPara}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NoticeDetailPage