import React,{Component, Fragment} from 'react';
import '../css/Join.css';

class Join extends Component {

  constructor(props) {
    super(props);
    this.state = {
      financialGoal: ''
    }
  }
  
  handleChange(evt) {
    const financialGoal = (evt.target.validity.valid) ? evt.target.value : this.state.financialGoal;
    
    this.setState({ financialGoal });
  }
  
  render(){
    return(
      <Fragment>
        <div className="joinClass">
          <div>
            회원가입
          </div>
          <form>
            <table className="joinTable">
              <tbody>
              <tr>
                <td className="must">*</td>
                <td className="td_left">이름</td>
                <td><input type="text"></input></td>
              </tr>
              <tr>
                <td className="must">*</td>
                <td className="td_left">아이디</td>
                <td className="td_right"><input type="text"></input></td>
              </tr>
              <tr>
                <td className="must">*</td>
                <td className="td_left">비밀번호</td>
                <td className="td_right"><input type="text"></input></td>
              </tr>
              <tr>
                <td className="must">*</td>
                <td className="td_left">비밀번호 확인</td>
                <td className="td_right"><input type="text"></input></td>
              </tr>
              <tr>
                <td className="must">*</td>
                <td className="td_left">생년월일</td>
                <td className="td_right">

                <select name="byear" id="byear" className="c_birth01" defaultValue={'DEFAULT'}>
                  <option value="DEFAULT">선택</option>
                  <option value="1957">1957년</option>
                  <option value="1958">1958년</option>
                  <option value="1959">1959년</option>
                  <option value="1960">1960년</option>
                  <option value="1961">1961년</option>
                  <option value="1962">1962년</option>
                  <option value="1963">1963년</option>
                  <option value="1964">1964년</option>
                  <option value="1965">1965년</option>
                  <option value="1966">1966년</option>
                  <option value="1967">1967년</option>
                  <option value="1968">1968년</option>
                  <option value="1969">1969년</option>
                  <option value="1970">1970년</option>
                  <option value="1971">1971년</option>
                  <option value="1972">1972년</option>
                  <option value="1973">1973년</option>
                  <option value="1974">1974년</option>
                  <option value="1975">1975년</option>
                  <option value="1976">1976년</option>
                  <option value="1977">1977년</option>
                  <option value="1978">1978년</option>
                  <option value="1979">1979년</option>
                  <option value="1980">1980년</option>
                  <option value="1981">1981년</option>
                  <option value="1982">1982년</option>
                  <option value="1983">1983년</option>
                  <option value="1984">1984년</option>
                  <option value="1985">1985년</option>
                  <option value="1986">1986년</option>
                  <option value="1987">1987년</option>
                  <option value="1988">1988년</option>
                  <option value="1989">1989년</option>
                  <option value="1990">1990년</option>
                  <option value="1991">1991년</option>
                  <option value="1992">1992년</option>
                  <option value="1993">1993년</option>
                  <option value="1994">1994년</option>
                  <option value="1995">1995년</option>
                  <option value="1996">1996년</option>
                  <option value="1997">1997년</option>
                  <option value="1998">1998년</option>
                  <option value="1999">1999년</option>
                  <option value="2000">2000년</option>
                  <option value="2001">2001년</option>
                  <option value="2002">2002년</option>
                  <option value="2003">2003년</option>
                  <option value="2004">2004년</option>
                  <option value="2005">2005년</option>
                  <option value="2006">2006년</option>
                  <option value="2007">2007년</option>
                  <option value="2008">2008년</option>
                  <option value="2009">2009년</option>
                  <option value="2010">2010년</option>
                  <option value="2011">2011년</option>
                  <option value="2012">2012년</option>
                  <option value="2013">2013년</option>
                  <option value="2014">2014년</option>
                  <option value="2015">2015년</option>
                  <option value="2016">2016년</option>
                  <option value="2017">2017년</option>
                  <option value="2018">2018년</option>
                  <option value="2019">2019년</option>
                </select>

                <select name="bmonth" id="bmonth" className="c_birth02" defaultValue={'DEFAULT'}>
                  <option value="DEFAULT">선택</option>
                  <option value="1">1월</option>
                  <option value="2">2월</option>
                  <option value="3">3월</option>
                  <option value="4">4월</option>
                  <option value="5">5월</option>
                  <option value="6">6월</option>
                  <option value="7">7월</option>
                  <option value="8">8월</option>
                  <option value="9">9월</option>
                  <option value="10">10월</option>
                  <option value="11">11월</option>
                  <option value="12">12월</option>
                </select>

                <select name="bday" id="bday" className="c_birth03" defaultValue={'DEFAULT'}>
                  <option value="DEFAULT">선택</option>
                  <option value="1">1일</option>
                  <option value="2">2일</option>
                  <option value="3">3일</option>
                  <option value="4">4일</option>
                  <option value="5">5일</option>
                  <option value="6">6일</option>
                  <option value="7">7일</option>
                  <option value="8">8일</option>
                  <option value="9">9일</option>
                  <option value="10">10일</option>
                  <option value="11">11일</option>
                  <option value="12">12일</option>
                  <option value="13">13일</option>
                  <option value="14">14일</option>
                  <option value="15">15일</option>
                  <option value="16">16일</option>
                  <option value="17">17일</option>
                  <option value="18">18일</option>
                  <option value="19">19일</option>
                  <option value="20">20일</option>
                  <option value="21">21일</option>
                  <option value="22">22일</option>
                  <option value="23">23일</option>
                  <option value="24">24일</option>
                  <option value="25">25일</option>
                  <option value="26">26일</option>
                  <option value="27">27일</option>
                  <option value="28">28일</option>
                  <option value="29">29일</option>
                  <option value="30">30일</option>
                  <option value="31">31일</option>
                </select>
                </td>
              </tr>
              <tr>
                <td className="must">*</td>
                <td className="td_left">휴대폰</td>
                <td className="td_right">
                  <input type="text" name="tel1" id="tel1" pattern="[0-9]*" onInput={this.handleChange.bind(this)} value={this.state.financialGoal} onChange={event => this.setState({financialGoal: event.target.value.replace(/\D/,'')})}></input>-
                  <input type="text" name="tel2" id="tel2" pattern="[0-9]*" onInput={this.handleChange.bind(this)} value={this.state.financialGoal} onChange={event => this.setState({financialGoal: event.target.value.replace(/\D/,'')})}></input>-
                  <input type="text" name="tel3" id="tel3" pattern="[0-9]*" onInput={this.handleChange.bind(this)} value={this.state.financialGoal} onChange={event => this.setState({financialGoal: event.target.value.replace(/\D/,'')})}></input>
                </td>
              </tr>
              <tr>
                <td className="must">*</td>
                <td className="td_left">주소</td>
                <td className="td_right"><input type="text"></input></td>
              </tr>
              <tr>
                <td className="must">*</td>
                <td className="td_left">메일주소</td>
                <td className="td_right">

                  <input name="email1" id="email1" type="text" maxLength="50" className="email01"></input>
                  <span className="bl_a">@</span>
                  <input type="text" name="email3" id="email3" className="email02" maxLength="50" ></input>
                  <select name="email2" id="email2" className="email03" defaultValue={'DEFAULT'}>
                    <option value="DEFAULT">직접입력</option>
                    <option value="naver.com">naver.com</option>
                    <option value="nate.com">nate.com</option>
                    <option value="daum.net">daum.net</option>
                    <option value="hanmail.net">hanmail.net</option>
                    <option value="gmail.com">gmail.com</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td height="10"></td>
              </tr>
              <tr>
                <td colSpan="3" className="btn">
                  <button type="button" className="joinBtn">무료회원가입</button>
                </td>
              </tr>
              </tbody>
            </table>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default Join;