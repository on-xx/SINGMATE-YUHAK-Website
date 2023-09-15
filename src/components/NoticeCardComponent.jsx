import { Link } from "react-router-dom"

const NoticeCardComponent = ({ notice }) => {
    return (
        <div className="main-notice-card flex-column">
            <div className="main-notice-card-img">
                <img src={notice.img} alt="notice-thumb" />
            </div>
            <div className="main-notice-card-content flex-column">
                <h1>{notice.title}</h1>
                <p className="cutoff-text">{notice.contentPara}</p>
                <p>{notice.dateCreated}</p>
                <Link to={`noticeboard/${notice.id}`} className='btn' style={{ color: '#fff' }}>자세히보기</Link>
            </div>
        </div>
    )
}

export default NoticeCardComponent