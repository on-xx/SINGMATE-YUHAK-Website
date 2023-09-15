import SmallBanner from "../components/SmallBanner"

const SubmittedPage = () => {
    return (
        <div id='visitsection'>
            <div className='visitsection container'>
                <div className="form-banner">
                    <SmallBanner />
                </div>

                <div className='form-wrapper flex-column'>
                    <h1>신청 완료 되었습니다</h1>
                    <h3>최고의 결과를 약속드립니다</h3>
                    <p>남겨주신 연락 정보를 통해 개별 연락 및 안내 드리겠습니다</p>
                </div>
            </div>
        </div>
    )
}

export default SubmittedPage