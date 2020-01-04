import React,{Component, Fragment} from 'react';

class Recommendation extends Component {

    render(){
        return(
            <Fragment>
                <section className="product Recommendation content">
                    <div className="top pb30">
                        <h1 className="tit">추천 상품</h1>
                        <p className="subtxt pb20">아이를 위해 구입했다가 사용하지 않는 경우있었죠? 별점으로 모두의 의견을 공유해요!<br/>우리가 사용했던 제품 중 좋았던 물건들을 추천해주세요!</p>
                        <p className="btn_wrap roundBtn_wrap">
                            <span className="on">전체</span>
                            <span>고양이</span>
                            <span>강아지</span>
                        </p>
                    </div>
                    <div className="mid">
                        <div>
                            <div className="btn_wrap">
                                <span className="sort kind">
                                    <strong>CARTEGORY</strong>
                                    <span className="on">전체</span>
                                    <span>패션</span>
                                    <span>외출</span>
                                    <span>하우스</span>
                                    <span>키친</span>
                                    <span>푸드</span>
                                    <span>구루밍/위생</span>
                                    <span>장난감</span>
                                    <span>기타</span>
                                </span>
                                <div className="roundBtn_wrap">
                                    <span>등록하기</span>
                                </div>
                            </div>

                            <ul className="list_wrap">
                                <li>
                                    <div className="thumb" style={{'backgroundImage':'url("https://shopping-phinf.pstatic.net/main_1013930/10139301206.20160801170704.jpg?type=f300")'}}></div>  
                                    <div className="txtBx">
                                        <p className="tit pb10">로얄캐닌 마더 앤 베이비 캣</p>

                                        <p className="info">
                                            <span className="star_graph"><span style={{'width':'70%'}}></span></span>
                                            <span className="txt">좋아요!이번에 새끼들 낳고 무얼 먹일까 고민하다가 먹였는데, 엄마도 아가도 잘 먹더라구요! </span><span className="ico"><i className="material-icons">favorite_border</i></span>
                                            <span className="txt">그냥 잘먹어요!! 이거 대환장해요!!</span><span className="ico"><i className="material-icons">favorite_border</i></span>

                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="thumb" style={{'backgroundImage':'url("https://shopping-phinf.pstatic.net/main_5665403/5665403950.20191023164538.jpg?type=f300")'}}></div>  
                                    <div className="txtBx">
                                        <p className="tit pb10">마도르스펫 열빙어드릿</p>

                                        <p className="info">
                                            <span className="star_graph"><span style={{'width':'100%'}}></span></span>
                                            <span className="txt" >좋아요!이번에 새끼들 낳고 무얼 먹일까 고민하다가 먹였는데, 엄마도 아가도 잘 먹더라구요! </span><span className="ico"><i className="material-icons">favorite</i></span>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="thumb" style={{'backgroundImage':'url("https://shopping-phinf.pstatic.net/main_2011734/20117344577.20190708115520.jpg?type=f300")'}}></div>  
                                    <div className="txtBx">
                                        <p className="tit pb10">로얄캐닌 마더 앤 베이비 캣</p>

                                        <p className="info">
                                            <span className="star_graph"><span></span></span>
                                            <span className="txt">좋아요!이번에 새끼들 낳고 무얼 먹일까 고민하다가 먹였는데, 엄마도 아가도 잘 먹더라구요! </span><span className="ico"><i className="material-icons">favorite_border</i></span>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="thumb" style={{'backgroundImage':'url("https://cafeptthumb-phinf.pstatic.net/MjAxOTEyMTVfMjc5/MDAxNTc2Mzg5Mzk3NDM3.hXqLsP_aIM8JpCnX18tg_iS2eRkrWLbv241WkK6VkdIg.EDIxRqu4IhIDPc3ELHhfX7Kt-TbD_UOcruqCuSZJKegg.JPEG/20191215_144928.jpg?type=w740")'}}></div>  
                                    <div className="txtBx">
                                        <p className="tit pb10">로얄캐닌 마더 앤 베이비 캣</p>

                                        <p className="info">
                                            <span className="star_graph"><span></span></span>
                                            <span className="txt">좋아요!이번에 새끼들 낳고 무얼 먹일까 고민하다가 먹였는데, 엄마도 아가도 잘 먹더라구요! </span><span className="ico"><i className="material-icons">favorite_border</i></span>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="thumb" style={{'backgroundImage':'url("https://cafeptthumb-phinf.pstatic.net/MjAxOTEyMTVfMjc5/MDAxNTc2Mzg5Mzk3NDM3.hXqLsP_aIM8JpCnX18tg_iS2eRkrWLbv241WkK6VkdIg.EDIxRqu4IhIDPc3ELHhfX7Kt-TbD_UOcruqCuSZJKegg.JPEG/20191215_144928.jpg?type=w740")'}}></div>  
                                    <div className="txtBx">
                                        <p className="tit pb10">로얄캐닌 마더 앤 베이비 캣</p>

                                        <p className="info">
                                            <span className="star_graph"><span></span></span>
                                            <span className="txt">좋아요!이번에 새끼들 낳고 무얼 먹일까 고민하다가 먹였는데, 엄마도 아가도 잘 먹더라구요! </span><span className="ico"><i className="material-icons">favorite_border</i></span>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="thumb" style={{'backgroundImage':'url("https://cafeptthumb-phinf.pstatic.net/MjAxOTEyMTVfMjc5/MDAxNTc2Mzg5Mzk3NDM3.hXqLsP_aIM8JpCnX18tg_iS2eRkrWLbv241WkK6VkdIg.EDIxRqu4IhIDPc3ELHhfX7Kt-TbD_UOcruqCuSZJKegg.JPEG/20191215_144928.jpg?type=w740")'}}></div>  
                                    <div className="txtBx">
                                        <p className="tit pb10">로얄캐닌 마더 앤 베이비 캣</p>

                                        <p className="info">
                                            <span className="star_graph"><span></span></span>
                                            <span className="txt">좋아요!이번에 새끼들 낳고 무얼 먹일까 고민하다가 먹였는데, 엄마도 아가도 잘 먹더라구요! </span><span className="ico"><i className="material-icons">favorite_border</i></span>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="thumb" style={{'backgroundImage':'url("https://cafeptthumb-phinf.pstatic.net/MjAxOTEyMTVfMjc5/MDAxNTc2Mzg5Mzk3NDM3.hXqLsP_aIM8JpCnX18tg_iS2eRkrWLbv241WkK6VkdIg.EDIxRqu4IhIDPc3ELHhfX7Kt-TbD_UOcruqCuSZJKegg.JPEG/20191215_144928.jpg?type=w740")'}}></div>  
                                    <div className="txtBx">
                                        <p className="tit pb10">로얄캐닌 마더 앤 베이비 캣</p>

                                        <p className="info">
                                            <span className="star_graph"><span></span></span>
                                            <span className="txt">좋아요!이번에 새끼들 낳고 무얼 먹일까 고민하다가 먹였는데, 엄마도 아가도 잘 먹더라구요! </span><span className="ico"><i className="material-icons">favorite_border</i></span>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="thumb" style={{'backgroundImage':'url("https://cafeptthumb-phinf.pstatic.net/MjAxOTEyMTVfMjc5/MDAxNTc2Mzg5Mzk3NDM3.hXqLsP_aIM8JpCnX18tg_iS2eRkrWLbv241WkK6VkdIg.EDIxRqu4IhIDPc3ELHhfX7Kt-TbD_UOcruqCuSZJKegg.JPEG/20191215_144928.jpg?type=w740")'}}></div>  
                                    <div className="txtBx">
                                        <p className="tit pb10">로얄캐닌 마더 앤 베이비 캣</p>

                                        <p className="info">
                                            <span className="star_graph"><span></span></span>
                                            <span className="txt">좋아요!이번에 새끼들 낳고 무얼 먹일까 고민하다가 먹였는데, 엄마도 아가도 잘 먹더라구요! </span><span className="ico"><i className="material-icons">favorite_border</i></span>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="thumb" style={{'backgroundImage':'url("https://cafeptthumb-phinf.pstatic.net/MjAxOTEyMTVfMjc5/MDAxNTc2Mzg5Mzk3NDM3.hXqLsP_aIM8JpCnX18tg_iS2eRkrWLbv241WkK6VkdIg.EDIxRqu4IhIDPc3ELHhfX7Kt-TbD_UOcruqCuSZJKegg.JPEG/20191215_144928.jpg?type=w740")'}}></div>  
                                    <div className="txtBx">
                                        <p className="tit pb10">로얄캐닌 마더 앤 베이비 캣</p>

                                        <p className="info">
                                            <span className="star_graph"><span></span></span>
                                            <span className="txt">좋아요!이번에 새끼들 낳고 무얼 먹일까 고민하다가 먹였는데, 엄마도 아가도 잘 먹더라구요! </span><span className="ico"><i className="material-icons">favorite_border</i></span>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="thumb" style={{'backgroundImage':'url("https://cafeptthumb-phinf.pstatic.net/MjAxOTEyMTVfMjc5/MDAxNTc2Mzg5Mzk3NDM3.hXqLsP_aIM8JpCnX18tg_iS2eRkrWLbv241WkK6VkdIg.EDIxRqu4IhIDPc3ELHhfX7Kt-TbD_UOcruqCuSZJKegg.JPEG/20191215_144928.jpg?type=w740")'}}></div>  
                                    <div className="txtBx">
                                        <p className="tit pb10">로얄캐닌 마더 앤 베이비 캣</p>

                                        <p className="info">
                                            <span className="star_graph"><span></span></span>
                                            <span className="txt">좋아요!이번에 새끼들 낳고 무얼 먹일까 고민하다가 먹였는데, 엄마도 아가도 잘 먹더라구요! </span><span className="ico"><i className="material-icons">favorite_border</i></span>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="thumb" style={{'backgroundImage':'url("https://cafeptthumb-phinf.pstatic.net/MjAxOTEyMTVfMjc5/MDAxNTc2Mzg5Mzk3NDM3.hXqLsP_aIM8JpCnX18tg_iS2eRkrWLbv241WkK6VkdIg.EDIxRqu4IhIDPc3ELHhfX7Kt-TbD_UOcruqCuSZJKegg.JPEG/20191215_144928.jpg?type=w740")'}}></div>  
                                    <div className="txtBx">
                                        <p className="tit pb10">로얄캐닌 마더 앤 베이비 캣</p>

                                        <p className="info">
                                            <span className="star_graph"><span></span></span>
                                            <span className="txt">좋아요!이번에 새끼들 낳고 무얼 먹일까 고민하다가 먹였는데, 엄마도 아가도 잘 먹더라구요! </span><span className="ico"><i className="material-icons">favorite_border</i></span>
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </section>

            </Fragment>
        )
    }
}

export default Recommendation;