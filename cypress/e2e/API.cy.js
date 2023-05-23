/// <reference types="cypress"/> 

describe ('login test cases', ()=>{
it('login with API ', () =>{
cy.request ({
method: 'POST',
URL: 'https://www.google-analytics.com/g/collect?v=2&tid=G-SCT41TW89V&gtm=45je35a0&_p=1308222902&cid=1039881288.1684231899&ul=en-us&sr=1536x864&uaa=x86&uab=64&uafvl=Google%2520Chrome%3B113.0.5672.93%7CChromium%3B113.0.5672.93%7CNot-A.Brand%3B24.0.0.0&uamb=0&uam=&uap=Windows&uapv=10.0.0&uaw=0&ngs=1&_s=1&sid=1684414327&sct=9&seg=1&dl=https%3A%2F%2Fdemo.nopcommerce.com%2F&dr=https%3A%2F%2Fdemo.nopcommerce.com%2Flogin%3FreturnUrl%3D%252F&dt=nopCommerce%20demo%20store&en=page_view&_ee=1',
body: {
    email: "alaa.mostafa795@gmail.com",
    password: "alaa1234"
  }

}).then()

})

})