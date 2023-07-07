//const prodNo = location.search.substring(1).split('=')[1] //product.html?prodNo=C0001 
                                //==search결과: ?prodNo=C0001
                                //-->subString(1)결과 : prodNo=C0001
                                //-->split('=')결과 : [0]는 prodNo [1]는 C0001
                                
                                
$(()=>{
    //상품번호
    const prodNo = sessionStorage.getItem('prodNo')
    alert("in productjq.js prodNo=" + prodNo)
    //상품이미지는 상품번호 이미지로변경
    $.ajax({
        url: 'http://localhost:8888/back/product',
        method: 'get',
        data : `prodNo=${prodNo}`,
        success: (responseObj)=>{
            //{"prodNo":"C0001","prodName":"아메리카노", "prodPrice":1000}
            const prodName = responseObj.prodName
            const prodPrice = responseObj.prodPrice
            

            $('div.product_view>div.product_view_detal>h4>span.ko').html(prodName)
            $('div.product_view>div.product_view_detal>h4>span.ko').html(prodPrice)
        },
        error: (xhr)=>{
            //alert('에러' + xhr.)
        }
    })
    $('div.product_view>div.product_view_pic>img').attr('src',`../images/${prodNo}.png`)
    
})