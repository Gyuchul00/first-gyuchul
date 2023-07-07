//dom트리가 완성되고 
//렌더링준비가 완료되었을때 widnow객체의 load이벤트가 발생한다. 
$(() => {
    const formObj = $('form.login')

    //아이디입력란 객체찾기
    const inputIdObj = $('form.login>input[id=id]')

    const pwdObj =$('form.login>input[id=pwd]')

    const btlogin = $('form.login>button.loginbt')

    //--폼 서브밋이벤트발생시 할 일 START--
    formObj.submit((e) => {
        $(e.target)
            .attr('action', 'http://localhost:8888/back/login')
            .attr('method', 'post')
        //alert(formObj.serialize()) 
        $.ajax({
            url: $(e.target).attr('action'),
            method: $(e.target).attr('method'),
            data: formObj.serialize(), //post method 방식일때만 가능
            //{id:inputIdObj
            //,pwd:pwdObj, 
            //name:'form.signup>input[name=name]'},
            //"id=abc&pwd=p1&name=1",
            success: (responseObj) => {
                //json 문자열을 js객체로 변환
                if(responseObj.status == 0){
                    //실패경우 할 일
                    alert("실패:"+responseObj.msg)
                }else{
                    //성공경우 할 일
                    alert(responseObj.msg)
                }
                // alert(responseData)
            },
            error: () => {

            }

        })
        // return false; //e.preventdefault() e.stopPropagation()


    })
    //--폼 서브밋이벤트발생시 할 일 End--
   
    //--아이디입력란에 focus이벤트발생시 할 일 END --
})