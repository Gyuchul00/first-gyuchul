$(() => {
  $.ajax({
    url: "http://localhost:8888/back/productlist",
    method: "GET",
    success: (responseObj) => {
      console.log(responseObj);
      const productOriginObj = $("div.productlist > div.product").first(); //원본
      responseObj.forEach((pObj) => {
        let productCloneObj = productOriginObj.clone();
        productCloneObj.addClass(pObj.prodNo);
        productCloneObj
          .find("ul>li>img")
          .attr("src", `../images/${pObj.prodNo}.png`)
          .attr("alt", pObj.prodNo);

        productCloneObj.find("ul>li>span").html(pObj.prodName);
        productOriginObj.parent().append(productCloneObj);
      });
      productOriginObj.hide();

      

    }
  });
  // const productOriginObj =
  //         $('div.productlist>div.product').first()//원본

  //         responseObj.forEach((pObj)=>{
  //             let productCloneObj = productOriginObj.clone()
  //             productCloneObj.addClass(pObj.prodNo)
  //             productCloneObj.find('ul>li>span').html(pObj.prodName)
  //             productOriginObj.parent().append(productCloneObj)
  //         })

  // let productCloneObj = productOriginObj.clone()//복제본
  // productCloneObj.addClass(responseObj[0].prodNo)//복제본 클래스속성값 추가
  // productCloneObj.find('ul>li>img') //복제본 이미지
  //  .attr('src', `../images/${responseObj[0].prodNo}.png`)
  //  .attr('alt', responseObj[0].prodNo)

  // productCloneObj.find('ul>li>span').html(responseObj[0].prodName) //복제본 상품명

  // productOriginObj.parent().append(productCloneObj) //복제본 추가


  // const divProductObj = $('div.product')
  // console.log(divProductObj.length)

  $('div.productlist').on('click', 'div.product', (e)=>{

     const prodNo = $(e.currentTarget).attr('class').split(" ")[1]
     alert(prodNo + 'clicked')

//--WB에는 Storage가 제공됨:localStorage(),
//                        sessionStorage(탭단위저장소)     
//--setItem()/getItem()/removeItem()


    sessionStorage.setItem('prodNo',prodNo)

     $('section').load('./product.html')
  })

 
});
