import { Link } from "react-router-dom"

const TabCardComponent = ({ school }) => {
    return (
        <div className="tab-content-card flex-column">
            <div className="tab-content-card-img">
                <img src={school.thumb} alt="inter-thumb" />
            </div>
            <div className="tab-content-card-content">
                <h1>{school.title}</h1>
                <h3>{school.fullTitle}</h3>
                <Link to={`/interschool-detail/${school.title}`}>자세히보기</Link>
            </div>
        </div>
    )
}

export default TabCardComponent