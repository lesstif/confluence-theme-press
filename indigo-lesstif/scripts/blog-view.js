AJS.toInit(function ($) {
  $(".blog-post-list .blog-item .blog-title").each(function () {
      $(this).html($(this).find("a").first());
  });
    // Change the view button to something more friendly
  $(".blog-post-listing .endsection").each(function () {
      $(this).html($(this).find("a").first().html("Read more"));
  });
});