import React,{Component, Fragment} from 'react';

class Adoption extends Component {
  render(){
    return(
        <Fragment>
            <section className="animal_list content">
                <div className="top pb30">
                    <h1 className="tit">입양</h1>
                    <p className="subtxt pb20">평생을 함께할 가족을 찾아요!</p>
                    <p className="btn_wrap roundBtn_wrap">
                        <span className="on">전체</span>
                        <span>서울</span>
                        <span>경기도</span>
                        <span>강원도</span>
                        <span>충청도</span>
                        <span>전라도</span>
                        <span>경상도</span>
                        <span>제주도</span>
                    </p>
                </div>
                <div className="mid">
                    <div className="btn_wrap">
                        <span className="sort kind">
                            <span className="on">강아지</span>
                            <span>고양이</span>
                        </span>
                        <span className="sort state">
                            <span className="on">진행 중</span>
                            <span>완료</span>
                        </span>
                        <div className="roundBtn_wrap">
                            <span>등록하기</span>
                        </div>
                    </div>

                    <ul className="list_wrap">
                        <li state="on">
                            <div className="thumb" style={{"backgroundImage":"url(https://www.catjoa.com/dog_sale/photo_free/201912/1577725900_26588400.jpg)"}}></div>  
                            <div className="txtBx">
                                <p className="tit pb10">임보 보호자를 찾아요</p>
                                <p className="subtxt mb20">	주유소에서 5냥이 구조하여 동물병원에서 분유사서 먹인다음 3마리는 입양보냈고 나머지 2마리는 본가에서 키웠습니다. 구조당시 어머냥이는 새끼를 낳고 무지개다리 건넜구요 ... 제가 본가에서 데려온지 한달이 지났는데 신랑이 고양이와 맞지않아 힘들어하여 입양을 결정하였습니다...곧 제 뱃속에 아가도 태어나서 신랑이 더 예민하네요 ...신랑과 계속 싸우는것도 힘들어서 힘들게 입양 결정합니다..</p>
                                <p className="info">
                                    <span>코숏</span>
                                    <span>서울시 도봉구</span>
                                    <span>5년</span>
                                    <span>여아</span>
                                    <span>중성화</span>
                                    <span>예방접종</span>
                                </p>
                            </div>
                        </li>
                        <li state="off">
                            <div className="thumb" style={{"backgroundImage":"url(https://www.catjoa.com/dog_sale/photo_free/202001/1577847202_42135700.jpg)"}}></div>  
                            <div className="txtBx">
                                <p className="tit pb10">임보 보호자를 찾아요</p>
                                <p className="subtxt mb20">서울강서)골골대장 반반이 집사님 찾아요~.. 3개월령이고 독트관 삼색무늬에 얼굴은 반반으로 나뉘 아수라냥입니다.. 돌보던 어미가 이소하고 2개월령때 구조되어 사람 손 탄 아기냥이예요만지면 고롱고롱 골골송 대장에 똥꼬발랄합니다. 냥이전문 동물병원샘이 카오스가 순하고 똑똑하데요..진짜 보시면 실물이 더 이뽀요!!입양조건)1.전가족동의.2 묘생함께할 경제력,책임감 3.방묘문 방묘창 설치권유 4.한동안 아이사진 공유5.계약서 작성, 데려다 드려요문의주시면 더 많은 사진 동영상 보내드려요..</p>
                                <p className="info">
                                    <span>코숏</span>
                                    <span>서울시 도봉구</span>
                                    <span>5년</span>
                                    <span>여아</span>
                                    <span>중성화</span>
                                    <span>예방접종</span>
                                </p>
                            </div>
                        </li>
                        <li state="on">
                            <div className="thumb" style={{"backgroundImage":"url(https://www.catjoa.com/dog_sale/photo_free/202001/1577845030_59707000.gif)"}}></div>  
                            <div className="txtBx">
                                <p className="tit pb10">임보 보호자를 찾아요</p>
                                <p className="subtxt mb20">개인사정으로 분양합니다. 귀엽고 이쁘고 애교많아요. 잘 키워주실분 문자주세요...</p>
                                <p className="info">
                                    <span>코숏</span>
                                    <span>서울시 도봉구</span>
                                    <span>5년</span>
                                    <span>여아</span>
                                    <span>중성화</span>
                                    <span>예방접종</span>
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </Fragment>
    )
  }
}


export default Adoption;