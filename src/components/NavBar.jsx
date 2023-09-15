import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <div id='navbar'>
                <div className='navbar container'>
                    <div className='main-logo'>
                        <Link to='/'>
                            <img
                                className='main-logo'
                                src='../img/main-logo.png'
                                alt='sm-logo'
                            />
                        </Link>
                    </div>
                    <div className='nav-menu flex-row'>
                        <ul className='flex-row'>
                            <li>
                                <Link to='/about'>싱메이트 유학</Link>
                            </li>
                            <li>
                                <Link to='/primaryedu'>조기유학</Link>
                            </li>
                            <li>
                                <Link to='/university'>대학교</Link>
                            </li>
                            <li>
                                <Link to='/langcourse'>어학연수</Link>
                            </li>
                            <li>
                                <Link to='/visitform'>방문신청</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="side-quick-menu flex-column">
                <div className="quick-menu-title">
                    <h3>Quick Menu</h3>
                </div>
                <a target='_blank'
                    href='https://pf.kakao.com/_xfxlpNC'>
                    <div className="quick-menu-card flex-column">
                        <div className="quick-menu-img">
                            <img src="../img/icon-kakao.png" alt="kakaoicon" />
                        </div>
                        <div className="quick-menu-btn">
                            <p>카카오톡 채널</p>
                        </div>
                    </div>
                </a>

                <a target='_blank'
                    href='https://m.blog.naver.com/PostList.naver?blogId=singmate'>
                    <div className="quick-menu-card flex-column">
                        <div className="quick-menu-img">
                            <img src="../img/icon-blog.png" alt="kakaoicon" />
                        </div>
                        <div className="quick-menu-btn">
                            <p>싱메이트 블로그</p>
                        </div>
                    </div>
                </a>

                <Link to='/visitform'>
                    <div className="quick-menu-card flex-column">
                        <div className="quick-menu-img">
                            <img src="../img/icon-visit.png" alt="kakaoicon" />
                        </div>
                        <div className="quick-menu-btn">
                            <p>방문상담 예약</p>
                        </div>
                    </div>
                </Link>

                <a href='tel: 025660386'>
                    <div className="quick-menu-card flex-column">
                        <div className="quick-menu-img">
                            <img src="../img/icon-phone.png" alt="kakaoicon" />
                        </div>
                        <div className="quick-menu-btn">
                            <p>전화 상담</p>
                        </div>
                    </div>
                </a>

                <div className="quick-menu-operation flex-column">
                    <div className="operation flex-column">
                        <p>싱메이트 싱가포르</p>
                        <p>평일: 9AM-9PM</p>
                        <p>주말: 9AM-5PM</p>
                    </div>
                    <div className="operation flex-column">
                        <p>싱메이트 강남</p>
                        <p>평일: 9AM-9PM</p>
                        <p>주말: 9AM-5PM</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar
