import React,{Component, Fragment} from 'react';
import Swiper from 'swiper';

import sample_01 from '../img/sample_1.jpg';
import sample_02 from '../img/sample_2.jpg';
import sample_03 from '../img/sample_3.jpg';

class Talktalk extends Component {
    componentDidMount(){
        new Swiper('.swiper-container', {
            slidesPerView: 5,
            spaceBetween: 10,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

    }
    render(){
        return(
            <Fragment>
                <section className="Talk content">
                    <div className="top pb30">
                        <h1 className="tit">스토리 톡톡</h1>
                        <p className="subtxt pb20">귀엽고 이쁜 반려 동물의 이야기를 함께 공유해요. </p>
                        <p className="btn_wrap roundBtn_wrap">
                            <span className="on">전체</span>
                            <span>고양이</span>
                            <span>강아지</span>
                        </p>
                    </div>
                    <div className="mid">
                        <div className="writeBox roundBtn_wrap">
                            <textarea name="contents" title="반려동물의 재미난 일상 이야기를 공유해주세요."  readOnly="" defaultValue="로그인 후 글을 남길 수 있습니다."></textarea>
                            <input type="submit" value="입력하기" className="btn"/>
                            <div className="file-wrap">
                                <div className="btn-file-del">
                                    <img alt="" src={sample_01}/>
                                    <span className="cover" >
                                        <span>삭제</span>
                                    </span>
                                </div>
                                <div className="btn-file-del">
                                    <img alt="" src={sample_01}/>
                                    <span className="cover" >
                                        <span>삭제</span>
                                    </span>
                                </div>
                                <div className="file-attach">
                                    <span className="camera btn-file" >
                                        <input type="file" id="fileupload" name="file" className="file-trick"/>
                                        <span></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="listBox">
                            <ul>
                                <li>
                                    <div className="writer">이젠웃자</div>
                                    <div>
                                        <div className="txt">따뜻한건 귀신같이 아는 냥이들<br/>따뜻한걸 확실히 좋아하긴하네요 찬바닥엔 거의앉지않고 수건이라도 떨어뜨려서 깔고 앉드라구요;;ㅎ</div>
                                        <div className="swiper-container">
                                            <div className="swiper-wrapper">
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="writer">뷰리누나</div>
                                    <div>
                                        <div className="txt">따뜻한건 귀신같이 아는 냥이들<br/>따뜻한걸 확실히 좋아하긴하네요 찬바닥엔 거의앉지않고 수건이라도 떨어뜨려서 깔고 앉드라구요;;ㅎ</div>
                                        <div className="swiper-container">
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide">
                                                    <img alt="" src={sample_01}/>
                                                </div>
                                                <div className="swiper-slide">
                                                    <img alt="" src={sample_02}/>
                                                </div>
                                                <div className="swiper-slide">
                                                    <img alt="" src={sample_03}/>
                                                </div>
                                                <div className="swiper-slide">
                                                    <img alt="" src={sample_01}/>
                                                </div>
                                                <div className="swiper-slide">
                                                    <img alt="" src={sample_02}/>
                                                </div>
                                            </div>
                                        </div>
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

export default Talktalk;