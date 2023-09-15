import UniversityTabComponent from "./UniversityTabComponent"

const UniversityComponent = () => {
    return (
        <>
            <div id="school-rec">
                <div className="school-rec container">
                    <h1>싱메이트 추천 사립 · 국립 대학교<span className="title-liner"></span></h1>
                    <h3>글로벌 인재를 향한 첫 걸음</h3>
                    <div className="school-rec-tab">
                        <UniversityTabComponent />
                    </div>

                </div>
            </div>
        </>
    )
}

export default UniversityComponent