// * class형 컴포넌트
class MyComponent extends React.Component {
  static PropTypes = {}; // * 속성값 타입 설정
  state = {}; // * 상탯값 초기화
  constructor(props) {} // * 생명주기 
  componentDidMount() {} // * 생명주기
  componentWillMount() {} // * 생명주기
  requestData() {} // * render 메서ㅓ드를 제외한 나머지 메서드 정의
  render() {
    const {prop1, prop2} = this.props;
    const {state1, state2} = this.state;
    // return 
  }
}
const URL_PRODUCT_LIST = 'api/product'; // * 외부 변수
function getTotalPrice({price, total}) {} // * 외부 함수

export default MyComponent;
// * END - class형 컴포넌트

// * 함수형 컴포넌트
MyComponent.PropTypes = {};

function MyComponent({prop1, prop2}) {}

const URL_PRODUCT_LIST = 'api/product'; // * 외부 변수
function getTotalPrice({price, total}) {} // * 외부 함수
export default MyComponent;
// * END - 함수형 컴포넌트