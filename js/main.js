/*$(document).ready(function () {

    $('.miswitch a').click(function(){
        $('.switch-btn').toggleClass('on');

        if ($('#switch-btn').attr('class') == 'switch-btn on') {
            $('.pricing-table-cont').toggleClass('rotando-tabla');
        } else {
            $('.pricing-table-cont').toggleClass('rotando-tabla');
            
        }
    });

});*/





const faq = document.querySelectorAll(".faq")

faq.forEach((faq) => {
    faq.addEventListener("click", () =>{
       faq.classList.toggle("active");s
    });
});




