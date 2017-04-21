$(function() {

  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/ZichenWang.json',
    dataType: 'jsonp',
    success: function(response) {
      response.courses.completed.forEach(function(course){
        $div = $('<div />').addClass('course').appendTo('#badges');

        $('<h3 />').text(course.title).appendTo($div);

        $('<img />').attr('src', course.badge).appendTo($div);

        $('<a />', {
          'class': 'btn btn-primary',
          target: '_blank',//open in a new tab
          href: course.url,
          text: 'See Course'
        }).appendTo($div);
      });
    }
  })
});
