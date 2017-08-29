 $(document).ready(function() {
     console.log("ready!");
     var js = jsonData.faq;
     var HTML_array = [];


     $('.instr_container').html(instruction("Klik få spørgsmålene i FAQ'en"));

     for (var i = 0; i < js.length; i++) {


console.log("i: " + i);
         //var infowindow = new google.maps.InfoWindow({});

         HTML = '<div class="col-xs-12 fold_ud_objekt"><h3 class="toggle_btn"><span class="toggle_header">'+ js[i][0]+'</span><div class="glyhicontainer"> <span class = "glyphicon glyphicon-chevron-down"> </span> <span class="glyphicon glyphicon-chevron-up"> </span> </div></h3><div class="toggle_container">';
        HTML += '<div>' + js[i][1] + '</div>';

         //HTML += "<img class='img-responsive' src='" + js[i].header_pic + "'>";


  

         HTML += '</div></div>';
         $(".container-fluid").append(HTML);
     }


     //$('.panorama').paver();

     $(".toggle_container").slideUp(0);

     $(".glyphicon-chevron-up").hide();

     $(".toggle_btn").click(function() {
         var indeks = $(this).index(".toggle_btn");

         console.log("Indeks: " + indeks)
         if ($(".toggle_container").eq(indeks).is(":hidden")) {
             console.log("hidden");
             $(".toggle_container").eq(indeks).slideDown(200); // do stuff
             $(".glyphicon-chevron-down").eq(indeks).hide();
             $(".glyphicon-chevron-up").eq(indeks).show();
         } else {
             console.log("shown");
             $(".toggle_container").eq(indeks).slideUp(400);
             $(".glyphicon-chevron-up").eq(indeks).hide();
             $(".glyphicon-chevron-down").eq(indeks).show();
         }
     });

     one_line_footer();
 });
