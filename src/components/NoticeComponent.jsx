import NoticeCardComponent from "./NoticeCardComponent"
import { Link } from "react-router-dom"
import NoticeData from "../data/NoticeData"
import { useState } from "react"


const NoticeComponent = ({ noticeData }) => {

    return (
        <>
            <div id="main-notice">
                <div className="main-notice container">
                    <div className="main-notice-grid">
                        <div className="main-notice-title">
                            <h1>공지사항 <span className="title-liner"></span></h1>
                            <p>싱메이트 유학의 다양한 싱가포르 소식을 확인하세요.</p>
                            <Link to='/noticeboard' className="btn">공지사항 더보기</Link>
                        </div>
                        {noticeData.filter((item, idx) => idx < 4).map((notice) => (
                            <NoticeCardComponent notice={notice} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default NoticeComponent