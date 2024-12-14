$(document).ready(function () {
    $('#store-image').slick({
        autoplay: true
    })

    $('#price').on('input', function () {
        const price = $(this).val();
        $('#price-value').text(`R$${price}`);
    });
})