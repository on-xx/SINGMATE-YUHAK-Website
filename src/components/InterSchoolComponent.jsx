import InterTabComponent from "./InterTabComponent"

const InterSchoolComponent = () => {
    return (
        <>
            <div id="school-rec">
                <div className="school-rec container">
                    <h1>싱메이트 추천 국제학교<span className="title-liner"></span></h1>
                    <h3>싱가포르 유학의 첫 걸음</h3>
                    <div className="school-rec-tab">
                        <InterTabComponent />
                    </div>

                </div>
            </div>
        </>
    )
}

export default InterSchoolComponent