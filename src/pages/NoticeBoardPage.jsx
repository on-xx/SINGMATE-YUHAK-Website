import NoticeData from '../data/NoticeData'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const NoticeBoardPage = () => {
    const [noticeData, setNoticeData] = useState(NoticeData)

    return (
        <div id="noticeboard">
            <div className="noticeboard container">
                <div className="noticeboard-banner flex-column">
                    <h1>공지사항</h1>
                </div>
                <div className="noticeboard-board flex-column">
                    {noticeData.map((notice) => (
                        <Link to={`${notice.id}`} style={{ width: 'inherit' }}>
                            <div className="noticeboard-board-row flex-row">
                                <p className='post-no'>{notice.id}</p>
                                <p className='post-category'>[공지/안내]</p>
                                <p className='post-title'>{notice.title}</p>
                                <p className='post-writer'>싱메이트</p>
                                <p className='post-date'>{notice.dateCreated}</p>
                            </div>
                        </Link>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default NoticeBoardPage