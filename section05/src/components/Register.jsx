import {useState, useRef} from 'react'

// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개
const Register = () => { 

  const [input, setInput] = useState({
    name : "",
    birth : "",
    country : "",
    bio : ""
  })

  const countRef = useRef(0);
  const inputRef = useRef();

  let count = 0;

  const onChange = (e) => {
    //countRef.current++;
    count++;
    //console.log(countRef.current);
    console.log(count);
    setInput({
      ...input,
      [e.target.value] : e.target.value
    })
  }
  
  const onsubmit = () => {
    console.log("onsubmit clicked")
    if(input.name === "") {
      // 이름을 입력하는 DOM 요소 포커스
      inputRef.current.focus();
    }
  }

    return (
    <div>
        <div>
          <input 
          ref={inputRef}
          name="name"
          value={input.name} 
          onChange={onChange} 
          placeholder={"이름"} />
        </div>
        <div>
          <input 
          name="birth"
          value={input.birth} 
          onChange={onChange} 
          type="date" />
        </div>
        <div>
          <select name="country" value={input.country} onChange={onChange}> 
            <option value=""></option>
            <option value="kr">한국</option>
            <option value="us">미국</option>
            <option value="uk">영국</option> 
          </select>
        </div>       
        <div>
          <textarea name="bio" value={input.bio} onChange={onChange} />
        </div> 

        <button onClick={onsubmit}>제출</button>
    </div>
    )
};

export default Register;