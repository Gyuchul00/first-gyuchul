$(()=>{
    const logObj = $('li.login')
    const sectionObj = $('section')
    const signupObj = $('li.signup')
    const ulObj = $('header>nav>ul')
    const listObj = $('li.pdlist')

    
    ulObj.click((e)=>{
        let url
        if(e.target.innerText == '로그인'){
            url = '../html/login.html'
            aajax(url)
        }else if(e.target.innerText == '가입'){
            console.log('2');
            url = '../html/signup.html'
            aajax(url)
        }else if(e.target.innerText == '상품목록'){
            console.log('')
            console.log('3');
             url = 'productlist.html'
            window.location.href = url;     
        }else{
        }
    })

    function aajax(url1){
        $.ajax({
            url: url1,
            success:(responseData)=>{
                sectionObj.html(responseData)
            },error: (jqXhr,status)=>{
                alert(`status:${status},jqXhr.status:${jqXhr.statusCode}`)
            }
        })
    }
   


    //     logObj.click(()=>{
    //     $.ajax({
    //       url:'login.html',
    //       method:'get',
    //       success:(responseData)=>{
    //         sectionObj.html(responseData)
    //       }
    //     })
    // })
    //     signupObj.click(()=>{
    //             $.ajax({
    //                 url:'signup.html',
    //                 method:'get',
    //                 success:(responseData)=>{
    //                     sectionObj.html(responseData)
    //             }
    //         })
    // })
})


