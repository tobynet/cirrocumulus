jQuery(function($){
  "use strict";
  
  // Get a base element
  var $content = $("#content");

  // Reduce text
  // ex. "  a b c   " => "abc"
  console.log($content.text().length);
  var text = $content.text().replace(/\s/g, '');
  console.log(text.length);

  // Split chars
  //  ex. "abc" => [node "<span>a</span>",
  //                node "<span>b</span>",
  //                node "<span>c</span>"]
  //
  var chars = Array.prototype.map.call(text, (function(char){
    return $("<span/>").text(char).get(0);
  }));

  console.log(chars.length);
  console.log(chars[chars.length-1].textContent);

  // Replace contents to new
  $content.text("");
  $content.append(chars);

  // Add a target for `insertBefore`
  $content.prepend("<span class='target'/>");
  var $target = $("#content .target");
  
  // Sort chars in ascending order (昇順)
  var sorted_chars = chars.sort(
    function(a,b){ return a.textContent.localeCompare(b.textContent); });

  // Animate chars
  sorted_chars.forEach(function(char, i){
      // Define animation for char
      var animation = function(){
        //console.log(char.textContent);
        $(char).insertBefore($target);
      };

      setTimeout(animation, i * 50);
  });

});

