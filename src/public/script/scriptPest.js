$(function () {
  $('#jstree').jstree({
      "json_data" : {
          "data" : [
              {
                  "data" : "A node",
                  "children" : [ "Child 1", "A Child 2" ]
              },
              {
                  
                  "data" : {
                      "title" : "Long format demo",
                      "attr" : { "href" : "#" }
                  }
              }
          ]
      },
      "plugins" : [ "themes", "json_data", "ui" ]
  });
});
  