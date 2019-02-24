$(function(){
  function buildHTML(content){
    var messageImage = content.image ? content.image : " ";
    var html = `<div class="message">
                  <div class="upper-message">
                    <div class="upper-message__user-name">
                      ${content.user_name}
                    </div>
                    <div class="upper-message__date">
                      ${content.created_at}
                    </div>
                  </div>
                  <div class="lower-meesage">
                    <p class="lower-message__content">
                      ${content.content}
                    </p>
                    <div>
                      <img src=${messageImage}>
                    </div>
                  </div>
                </div>`
    return html;
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html)
      $('.form__message').val('')
      $('form')[0].reset();
    })
    .fail(function(){
      alert('error');
    })
    .always(function() {
      $('.form__submit').prop('disabled',false);
    })
  })
});
