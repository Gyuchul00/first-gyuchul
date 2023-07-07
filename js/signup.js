window.addEventListener("load", () => {
  const formObj = document.querySelector("form");
  const inputIdObj = document.querySelector("form > input[name=id]");
  const btnIdDipchk = document.querySelector("form > button.iddupchk");
  const btnSignup = document.querySelector("form > button.signup");
  
  // 아이디 중복확인버튼 클릭 - 일반버튼
  btnIdDipchk.addEventListener('click', () => {
      if (inputIdObj.value === "id1") {
          alert("이미 사용 중인 아이디입니다.");
          return;
      } else if (inputIdObj.value.trim() === "") {
          btnSignup.style.display = "none";
      } else {
          btnSignup.style.display = "block";
      }
  });

  // 가입버튼 클릭 - 전송버튼 클릭
  // 폼의 서브밋 이벤트 발생
  // 폼 서브밋 이벤트 발생시 할 일
  formObj.addEventListener("submit", (e) => {
      // 비밀번호1,2가 일치 확인
   
      const pwdObj = document.querySelector('form.signup > input[name=pwd]');
      const pwd1Obj = document.querySelector('#p1');
      if (pwdObj.value != pwd1Obj.value) {
          alert('비밀번호가 일치하지 않습니다.');
          pwdObj.focus();
          e.preventDefault();
          return false; 
      }
      e.target.action = 'http://localhost:8888/back/signup'
      e.target.method = 'post' //get과 post방식 공부하기 

      // 아이디 입력값이 'id1'인 경우
      // 이미 사용중인 아이디입니다. 라는 경고창 띄우기
      if (inputIdObj.value === 'id1') {
          alert('이미 사용중인 아이디입니다.');
          e.preventDefault();
          return;
      }

      // 아이디 입력값이 'id1'이 아닌 경우
      // 가입 버튼을 화면에 노출시키기
  });

  // 아이디 입력란에 focus 이벤트 발생시 할 일
  inputIdObj.addEventListener("focus", () => {
      // 가입버튼 사라지기
      btnSignup.style.display = "none";
  });
});