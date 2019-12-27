import React,{Component, Fragment} from 'react';
import '../css/Foster.css'

class Foster extends Component {
  render(){
    return(
      <Fragment>
        <div className="fosterClass">
          <div>임시보호<br/>잠시나마 우리의 사랑을 나누어 주세요</div>
          <div>

          </div>
          <table>
            <tr>
              <td>No</td>
              <td>사진</td>
              <td>품종</td>
              <td>지역</td>
              <td>상세</td>
              <td>제목</td>
              <td>나이</td>
              <td>성별</td>
              <td>중성화</td>
              <td>예방접종</td>
              <td>상태</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
      </Fragment>
    )
  }
}
export default Foster;