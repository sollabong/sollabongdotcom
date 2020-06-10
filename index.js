//header animation
const items = Array.from(document.getElementsByClassName('item'));

        items.forEach((item, i) => {
            let prev = items[i - 1];
            if (!prev) prev = items[items.length - 1];

            prev.addEventListener('animationend', () => {
                item.classList.add('animate');
                prev.classList.remove('animate');
            });
        })

        items[0].classList.add('animate');
//skill bar animation
setTimeout(function(){
    $('.bar').each(function(){
        $(this).find('.load').animate({
        width: $(this).attr('data-percent') }, 1500);
    });
}, 1000);