import SmallBanner from '../components/SmallBanner'

const VisitPage = () => {
    return (
        <div id='visitsection'>
            <div className='visitsection container'>
                <div className="form-banner">
                    <SmallBanner />
                </div>
                <div className="form-title">
                    <h1>방문상담 / 설명회 신청</h1>
                </div>

                <div className='form-wrapper'>
                    <form action="https://formsubmit.co/a08297a42114e7c98ec6f59bbca9e3dc" method="POST">
                        <div className="parent-info flex-column">
                            <h1>신청자정보<span className="title-liner"></span></h1>
                            <div className="form-row flex-column">
                                <label htmlFor='visitpurpose'>신청내용</label>
                                <input type='text' placeholder="방문상담 / 설명회" name="visitpurpose" />
                            </div>
                            <div className="form-row flex-column">
                                <label htmlFor='name'>이름</label>
                                <input type='text' name="name" />
                            </div>
                            <div className="form-row flex-column">
                                <label htmlFor='relation'>학생과의 관계</label>
                                <input type='text' name="relation" />
                            </div>
                            <div className="form-row flex-column">
                                <label htmlFor='phone'>연락처</label>
                                <input type='number' name="phone" />
                            </div>
                            <div className="form-row flex-column">
                                <label htmlFor='email'>이메일</label>
                                <input type='email' name="email" />
                            </div>
                        </div>
                        <div className="student-info flex-column">
                            <h1>학생정보<span className="title-liner"></span></h1>
                            <div className="form-row flex-column">
                                <label htmlFor='name'>이름</label>
                                <input type='text' />
                            </div>
                            <div className="form-row flex-column">
                                <label htmlFor='dateofbirth'>생년월일</label>
                                <input type='text' name="dateofbirth" />
                            </div>
                            <div className="form-row flex-column">
                                <label htmlFor='school'>학교</label>
                                <input type='text' name="school" />
                            </div>
                            <div className="form-row flex-column">
                                <label htmlFor='grade'>학년</label>
                                <input type='text' name="grade" />
                            </div>
                            <div className="form-row flex-column">
                                <label htmlFor='visitoption'>참석 방법</label>
                                <input type='text' name="visitoption" placeholder="온라인 / 오프라인" />
                            </div>
                            <div className="form-row flex-column">
                                <label htmlFor='enquiry'>문의 사항</label>
                                <textarea name="enquiry"></textarea>
                            </div>
                        </div>
                        <div className="form-button flex-column">
                            <button className="btn" type="submit">신청하기</button>
                            <input type="hidden" name='_next' value='http://singmates.com/submitted' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default VisitPage
