import NoticeData from "./data/NoticeData"
import InterSchoolData from "./data/InterSchoolData";
import { useState } from "react"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Navigate } from "react-router-dom";


import NavBar from "./components/NavBar";
import MainBanner from "./components/MainBanner";
import NoticeComponent from "./components/NoticeComponent";
import SectionBanner from "./components/SectionBanner";
import SchoolRecSection from "./components/SchoolRecSection";
import LocationComponent from "./components/LocationComponent";
import SmallBanner from "./components/SmallBanner";
import Footer from "./components/Footer";

import ScrollToTop from "./components/shared/ScrollToTop";

import SingmatePage from "./pages/SingmatePage";
import EarlyUhakPage from "./pages/EarlyUhakPage";
import UniversityPage from "./pages/UniversityPage";
import LanguageCoursePage from "./pages/LanguageCoursePage";
import VisitPage from "./pages/VisitPage";
import SubmittedPage from "./pages/SubmittedPage";
import NoticeBoardPage from "./pages/NoticeBoardPage";
import NoticeDetailPage from "./pages/NoticeDetailPage";
import SchoolDetailPage from "./pages/SchoolDetailPage";
import PriUniData from "./data/PriUniData";
import NatUniData from "./data/NatUniData";

function App() {
  const [noticeData, setNoticeData] = useState(NoticeData)
  const [interSchoolData, setInterSchoolData] = useState(InterSchoolData)
  const [priUniData, setPriUniData] = useState(PriUniData)
  const [natUniData, setNatUniData] = useState(NatUniData)

  return (
    <Router>
      <ScrollToTop>
        <NavBar />
        <>
          <Routes>
            <Route exact path='/' element={
              <>
                <MainBanner />
                <NoticeComponent noticeData={noticeData}/>
                <SectionBanner />
                <SchoolRecSection />
                <LocationComponent />
                <SmallBanner />
              </>
            }>
            </Route> 

            <Route path='/about' element={<SingmatePage />}/>
            <Route path='/primaryedu' element={<EarlyUhakPage />}/>
            <Route path='/university' element={<UniversityPage />}/>
            <Route path='/langcourse' element={<LanguageCoursePage />}/>
            <Route path='/visitform' element={<VisitPage />}/>
            <Route path='/submitted' element={<SubmittedPage />}/>
            <Route path='/noticeboard' element={<NoticeBoardPage />}/>
            <Route path='/noticeboard/:id' element={<NoticeDetailPage noticeData={noticeData}/>}/>
            <Route path='/interschool-detail/:title' element={<SchoolDetailPage interSchoolData={interSchoolData} />}/>
            <Route path='/priuni-detail/:title' element={<SchoolDetailPage interSchoolData={priUniData} />}/>
            <Route path='/natuni-detail/:title' element={<SchoolDetailPage interSchoolData={natUniData} />}/>
            {/* <Route path='*' element={<Navigate to='/'/>} /> */}
          </Routes>
          <Footer />
        </>
      </ScrollToTop>
    </Router>
  );
}

export default App;
