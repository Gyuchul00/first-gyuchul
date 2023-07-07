// window.addEventListener('load', function() { //window에서 load 이벤트가 발생하면 콜백 함수를 호출하라
$(()=>{
    //let resultObj2 = $('input[type=text]') 
    //let resultObj2 = $('input[type=text]').first()
    //let resultObj2 = $('input[type=text]').last()
    let resultObj2 = $('input[type=text]').eq(1) 
    console.log(resultObj2)
    resultObj2.val('HELLO')
    resultObj2.attr('maxLength',10)
    // resultObj2.css('color','white')
    // resultObj2.css('background-color','black')
    resultObj2.css({"color":'white',
                    "background-color":'black'
                   })

    let num = 0;
    let op;
    let bts = $('button')
    bts.click((e)=>{
            switch($(e.target).html()){
                case '=':
                    resultObj2.val(num);
                    op=undefined;
                    break;
                case '+':
                case '-':
                    op = $(e.target).html();
                    break;
                default :
                    resultObj2.val($(e.target).html());
                    if(op == '+'){
                        num += parseInt(resultObj2.val()); //문자->정수
                    }else if(op == '-'){
                        num -= parseInt(resultObj2.val()); //문자->정수
                    }else{
                        num = parseInt(resultObj2.val()); //문자->정수
                    }
            }   
                console.log($(e.target).html(),num);          
        })

    //DOM트리에서 all checkbox 객체 찾기
    let chkAllObj = $('fieldset.all>input[type=checkbox]')

    //DOM트리에서 one,two,three checkbox 객체 찾기
    let chkObjs = $('fieldset.each>input[type=checkbox]')

    //---all checkbox객체에서 클릭되었을 때 할 일 START---
    chkAllObj.click((e)=>{
        $(chkObjs).prop('checked',
                $(e.target).prop('checked')
                )   
    })
    //---all checkbox객체에서 클릭되었을 때 할 일 END---

    //--차량 대분류를 선택했을 때 할 일 START ---
    let carTypeObj = $('div.car>select.type')
        
    //==중분류용 select객체 
    let carType2Obj = $('div.car>select.type2') 

    carTypeObj.click(()=>{
        console.log('clicked') 
    })

    carTypeObj.change((e)=>{
        console.log($(e.target).val(),'changed')

        let type2;
        switch($(e.target).val()){
            case 'sedan' :
                type2 =[{name : '쏘나타',                id : 'sonata'},
                        {name : '더 뉴 아반테',          id : 'abante'},
                        {name : '디 올 뉴 그랜저',       id : 'gtandure'},
                        {name : '디 올 뉴 그랜저Hybird', id : 'hybird'},
                ]
                carType2Obj.html('<option>선택하세요</option>');
                carType2Obj.append(`<option value="${type2[0].id}">${type2[0].name}</option>`);
                carType2Obj.append(`<option value="${type2[1].id}">${type2[1].name}</option>`);
                carType2Obj.append(`<option value="${type2[2].id}">${type2[2].name}</option>`);
                carType2Obj.append(`<option value="${type2[3].id}">${type2[3].name}</option>`);
                carType2Obj.css('display', 'inline-block');
                break; 

                case 'suv':
                    type2 = [
                        { name: '팰리세이드', id: 'palisade' },
                        { name: '베뉴', id: 'venu' },
                        { name: '코나', id: 'cona' }
                    ];
                   
                    carType2Obj.html('<option>선택하세요</option>');
                    type2.forEach((value, index) => {
                        carType2Obj.append(`<option value="${value.id}">${value.name}</option>`);
                    });
                    carType2Obj.css('display', 'inline-block');
                    break;
    
                    case 'truck':
                        carType2Obj.css('display', 'inline-block');
                        type2 = ['선택하세요', '마이티', '마이티 내로우 캡', '더 뉴 파비스']; // 배열
                    
                        carType2Obj.empty()
                    
                        type2.forEach((value) => {
                            let optionObj = $('<option>').text(value);
                            carType2Obj.append(optionObj);
                        });
            
                        carType2Obj.show()
                        break;

                default:
                        carType2Obj.hide()
        }
                 
    })

    //--차량 대분류를  선택했을 때 할 일 END ---
    
   //--입력란에 키보드 입력할 때 할 일 START --
    // DOM 키보드 입력 요소 객체 찾기
const txtObj = $('div.keyboard > input[type=text]');
txtObj.on('keyup', (e) => {
    console.log(e.key, e.target.value);
    
    if (e.key === 'Enter') {
        alert('Enter를 입력했습니다');
    } else {
        e.target.value = e.target.value.toUpperCase(); // 소문자를 대문자로 바꿔줌
    }
});
//--입력란에 키보드 입력할 때 할 일 END --

//--전송 버튼 클릭할 때 할 일 START--
const btSubmitObj = $('div.form > form > button');
// TODO: '전송버튼이 클릭되었습니다'를 콘솔에 출력
btSubmitObj.on('click', () => {
    console.log('전송버튼이 클릭되었습니다');
});

    //--전송버튼 클릭할때 할 일 END--

    //--폼의 submit이벤트 발생할때 할 일 START--
    const formobj = $('div.form>form')
    formobj.submit((e) => {
        alert('submit이벤트가 발생했습니다')
        return false
    })
    //--폼의 submit이벤트 발생할때 할 일 END--

    //--a객체의click이벤트 발생할 때 할일 START--

    //div객체
    const linkDivObj=$('div.link')
    linkDivObj.click((e)=>{
        $(e.target).css('background-color','gray')
    })

    //a객체가 클릭되면~
    const aObj = $('div.link>a')
       aObj.click((e)=>{
           this.alert('링크 클릭')
            return false
       })
    //--a객체의click이벤트 발생할 때 할일 END--
    })
