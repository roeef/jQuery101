$('h1').css('color','blue')
$('.red-div').css('color', 'red');
console.log($('li:first-child'));
console.log($('ul:first-child'));

$('li:first-child').css('color', 'green');
$('li:nth-child(2)').css('color', 'pink');
console.log($('li')[0].style);

$('#brown-div').css('color', 'brown')

$('#alert-input').click(function () {
    alert($('#my-input').val());
});

$('#add-student').click(function () {
    $('.students').append("<li>"+ $('#student-input').val() + "</li>");
    let $students = $('.students li:last');
    $('.students li:last').click(function () {
        $students.remove();
    });
});

let $students = $('.students li:last');
$('.students li:last').click(function () {
    $students.remove();
});

