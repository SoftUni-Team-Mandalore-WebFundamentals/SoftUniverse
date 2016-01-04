$(function () {
    $.fn.setCursorAtEnd = function(){
      var content = this.val();
      this.val('').val(content);
    };

    var cursor;
    var input = $('input');
    var cmdSpan = $('#cmd span');
    cmdSpan.text(input.val());
    var output = document.getElementById('cmd-output');
    var contextOutput = [];

    //cursor implementation
    input.focus(function(){
      cursor = window.setInterval(function () {
          if ($('#cursor').css('visibility') === 'visible') {
              $('#cursor').css({
                  visibility: 'hidden'
              });
          } else {
              $('#cursor').css({
                  visibility: 'visible'
              });
          }
      }, 500);
    });

    input.setCursorAtEnd();
    input.focus();

    input.keyup(function () {
        cmdSpan.text($(this).val());
    });
    //commands dictionary for users
    var commandDictionary = [];
    commandDictionary.push("/add-story {-language} {content}");
    commandDictionary.push("-available languages - EN,BG,SH(Shliokavica)");
    commandDictionary.push("/repeat {content}");

    //robot costs
    var robot = "<i>.  [R2/D2]~:"+"</i> ";
    var you = "<i>.  You~:"+"</i> ";
    //Print Title row on console
    contextOutput.push(1+"<i>.  [R2/D2]~:"+"</i> ");
    contextOutput.push("Type:/help to list all commands");
    contextOutput.push("<br>");
    output.innerHTML = contextOutput.join('');
    //Command parser
    var rowCounter = 2;
    input.keyup(function(event){
        if(event.keyCode == 13){
            var inputCommand = input.val();
            cmdSpan.text("");
            input.val("");
            contextOutput.push(rowCounter+you+inputCommand);
            rowCounter++;
            contextOutput.push("<br>");
            var inpValCommand = inputCommand.split(" ")[0];
            var inpValContent = inputCommand.substring(inpValCommand.length+1,inputCommand.length);
            if (inpValCommand == "/help") {
                contextOutput.push(rowCounter+robot);
                contextOutput.push("Use one of following commands:<br>");
                contextOutput.push(commandDictionary.join("<br>"));
                contextOutput.push("<br>");
            }else if(inpValCommand == "/repeat"){
                contextOutput.push(rowCounter+robot);
                contextOutput.push(inpValContent);
                contextOutput.push("<br>");
            }
            else if(inpValCommand == "/add-story" &&
                    (inpValContent.indexOf('-BG') === 0 ||
                    inpValContent.indexOf('-SH') === 0 ||
                    inpValContent.indexOf('-EN') === 0 ||
                    inpValContent.indexOf('-D!') === 0))
              {

                var postData = {'text': inpValContent};
                $.ajax({
                   cache: false,
                   data: postData,
                   url: window.location.origin +'/api/storyline',
                   type: 'POST',
                   success: function (data) {
                      rowCounter--;
                      contextOutput.push(rowCounter+robot);
                      contextOutput.push(data);
                      contextOutput.push("<br>");
                      output.innerHTML = contextOutput.join('');
                      rowCounter++;
                   }
               });

            }else{
                contextOutput.push(rowCounter+robot);
                contextOutput.push("Invalid Command");
                contextOutput.push("<br>");
            }
            output.innerHTML = contextOutput.join('');
            rowCounter++;
        }
        input.blur();
        input.focus();
    });

    //Cursor
    input.blur(function () {
        clearInterval(cursor);
        $('#cursor').css({
            visibility: 'visible'
        });
    });
    //set focus on laod
    $('.r2-console').click(function(){
      input.setCursorAtEnd();
      input.focus();
    });
});
