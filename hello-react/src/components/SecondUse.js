import React,{Component, Fragment} from 'react';

class SecondUse extends Component {
  render(){
    return(
        <Fragment>
            <section className="product secondUse content">
                <div className="top pb30">
                    <h1 className="tit">중고 물품</h1>
                    <p className="subtxt pb20">사용하지 않는 반려 동물 물품 벼룩시장!</p>
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
                                <strong>CATEGORY</strong>
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
                                <div className="thumb" style={{'backgroundImage':'url("https://cafeptthumb-phinf.pstatic.net/MjAxOTEyMTVfMjc5/MDAxNTc2Mzg5Mzk3NDM3.hXqLsP_aIM8JpCnX18tg_iS2eRkrWLbv241WkK6VkdIg.EDIxRqu4IhIDPc3ELHhfX7Kt-TbD_UOcruqCuSZJKegg.JPEG/20191215_144928.jpg?type=w740")'}}></div>  
                                <div className="txtBx">
                                    <p className="tit pb10"><span className="state_info">[거래 완료]</span>제품 무료나눔<span className="new_ico">NEW</span></p>
                                    <p className="info">
                                        <span>화장실</span>
                                        <span>택배비 선불</span>
                                    </p>
                                </div>
                            </li>
                            <li state="on">
                                <div className="thumb" style={{'backgroundImage':'url("https://cafeptthumb-phinf.pstatic.net/MjAxOTEyMjlfMTQz/MDAxNTc3NTQ2ODM3NTAw.6__sTDrw9gSgqvT5LV-z54Hl_Y5vy3L03e2oFDSjUx4g.pc6iG2OI-mL3OsxFPlntJqRaOVFMvt78lGa23o6VsIgg.JPEG/externalFile.jpg?type=w740")'}}></div>  
                                <div className="txtBx">
                                    <p className="tit pb10">	제품 무료나눔</p>
                                    <p className="info">
                                        <span>모래</span>
                                        <span>택배비 착불</span>
                                    </p>
                                </div>
                            </li>
                            <li state="on">
                                <div className="thumb" style={{'backgroundImage':'url("https://cafeptthumb-phinf.pstatic.net/MjAxOTEyMjlfMTk3/MDAxNTc3NTQ2ODM5OTg0.wzEfou4gnfksjijgwRGQoHX8aa4ovdSXTExJ84LWCXgg.xUqe3ubn81k4pcHufSf57GWLl96bA7VolS05RdUFpSwg.JPEG/externalFile.jpg?type=w740")'}}></div>  
                                <div className="txtBx">
                                    <p className="tit pb10">고양이 물품 나눔합니다.</p>
                                    <p className="info">
                                        <span>장난감</span>
                                        <span>택배비 선불</span>
                                    </p>
                                </div>
                            </li>
                            <li state="on">
                                <div className="thumb" style={{'backgroundImage':'url("https://cafeptthumb-phinf.pstatic.net/MjAxOTEyMjlfMjc3/MDAxNTc3NTQ2ODQwODI1.dH-49mK12gnjUYbaHksL080ltNPIQ7Qoqs9MH3akm1Mg.6IriiRPTXh_I5HHiRrvWlWzZYcY-GRO76FXZGN8SCeMg.JPEG/externalFile.jpg?type=w740")'}}></div>  
                                <div className="txtBx">
                                    <p className="tit pb10">연말 첫 나눔 실천</p>
                                    <p className="info">
                                        <span>장난감</span>
                                        <span>택배비 선불</span>
                                    </p>
                                </div>
                            </li>
                            <li state="on">
                                <div className="thumb" style={{'backgroundImage':'url("https://cafeptthumb-phinf.pstatic.net/MjAxOTEyMjlfMjU4/MDAxNTc3NTQ2ODQxNjkz.5gQOKHhCCTINAtan19kdKxEPgRe0x2d4iGA6GvWEXHsg.X-8DoWwHfYwKou6uFDhSYFIrnzclIvlAeSboL2wY7tQg.JPEG/externalFile.jpg?type=w740")'}}></div>  
                                <div className="txtBx">
                                    <p className="tit pb10">구미 고양이 물품 무료 나눔합니다.</p>
                                    <p className="info">
                                        <span>화장실</span>
                                        <span>택배비 선불</span>
                                    </p>
                                </div>
                            </li>
                            <li state="on">
                                <div className="thumb" style={{'backgroundImage':'url("https://cafeptthumb-phinf.pstatic.net/MjAxOTEyMjlfMjUg/MDAxNTc3NTQ2ODQyNTYy.gjd-m2KmksJk5HVsYeFWLss8HIidFuypc5CXf_XxTgAg.JvP8LovtLEGZ1o5YcUuZeTxoBRFLEffQWCTKuEmK-B8g.JPEG/externalFile.jpg?type=w740")'}}></div>  
                                <div className="txtBx">
                                    <p className="tit pb10">	제품 무료나눔</p>
                                    <p className="info">
                                        <span>화장실</span>
                                        <span>택배비 선불</span>
                                    </p>
                                </div>
                            </li>
                            <li state="on">
                                <div className="thumb" style={{'backgroundImage':'url("https://cafeptthumb-phinf.pstatic.net/MjAxOTEyMjlfMjE2/MDAxNTc3NTQ2ODQzNjkw.mWY-ZkJusA8VeZrZgRdZrNO8t8ufk2WPofyETWuaVsog.1-2eh5j19orDb82JfOmb_W9svwqlGLWSWE-uQSXgTVwg.JPEG/externalFile.jpg?type=w740")'}}></div>  
                                <div className="txtBx">
                                    <p className="tit pb10">	제품 무료나눔</p>
                                    <p className="info">
                                        <span>화장실</span>
                                        <span>택배비 선불</span>
                                    </p>
                                </div>
                            </li>
                            <li state="on">
                                <div className="thumb" style={{'backgroundImage':'url("https://cafeptthumb-phinf.pstatic.net/MjAxOTEyMjlfMTEw/MDAxNTc3NjIzMDEyOTIy.Gn5DECotJHWZe28FuI0sw3t5XvMGDlU00dKdqNtexCAg.G0QvMfTJYcQ5MsM3zMj7Ae1Dd_NJoGIT9lnOEUPfkf4g.JPEG/6BE79564-D48A-4C42-BDBC-87DBA399F089.jpeg?type=w740")'}}></div>  
                                <div className="txtBx">
                                    <p className="tit pb10">	제품 무료나눔</p>
                                    <p className="info">
                                        <span>화장실</span>
                                        <span>택배비 선불</span>
                                    </p>
                                </div>
                            </li>
                            <li state="on">
                                <div className="thumb" style={{'backgroundImage':'url("https://cafeptthumb-phinf.pstatic.net/MjAxOTEwMTVfMTQg/MDAxNTcxMTI0NDAyMDY4.ZkflvISbAfpviGePAX5wd4np7ZkZyyB_hIkEnkLluc0g.BLVSEhPdmJhx2IcHqpCdWg79TpuRrRNpUNWdgQD8VRcg.JPEG/externalFile.jpg?type=w740")'}}></div>  
                                <div className="txtBx">
                                    <p className="tit pb10">	제품 무료나눔</p>
                                    <p className="info">
                                        <span>화장실</span>
                                        <span>택배비 선불</span>
                                    </p>
                                </div>
                            </li>
                            <li state="on">
                                <div className="thumb" style={{'backgroundImage':'url("https://cafeptthumb-phinf.pstatic.net/MjAxOTEwMTVfMTkz/MDAxNTcxMTI0NDAyOTMx.ALkhhO9xHdvBIrL05gkZw4VahmbsZ6BCqV45h7L5JeUg.0XbdZW3w74LpU0R25e3iVhe8m_qmeWuBfZzAP7FsQeUg.JPEG/externalFile.jpg?type=w740")'}}></div>  
                                <div className="txtBx">
                                    <p className="tit pb10">	제품 무료나눔</p>
                                    <p className="info">
                                        <span>화장실</span>
                                        <span>택배비 선불</span>
                                    </p>
                                </div>
                            </li>
                            <li state="on">
                              <div className="thumb" style={{'backgroundImage':'url("https://cafeptthumb-phinf.pstatic.net/MjAxOTEyMjlfMjU4/MDAxNTc3NTQ2ODQxNjkz.5gQOKHhCCTINAtan19kdKxEPgRe0x2d4iGA6GvWEXHsg.X-8DoWwHfYwKou6uFDhSYFIrnzclIvlAeSboL2wY7tQg.JPEG/externalFile.jpg?type=w740")'}}></div>  
                                <div className="txtBx">
                                    <p className="tit pb10">	제품 무료나눔</p>
                                    <p className="info">
                                        <span>화장실</span>
                                        <span>택배비 선불</span>
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

export default SecondUse;