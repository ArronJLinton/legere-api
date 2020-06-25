$(document).ready(() => {
  $('#add-book-button').on('click', (event)=>{
    event.preventDefault()
    const title = $('#book-title').val().trim();
    const coverPhoto = $('#cover-photo').val().trim() 
    const authorId = $('#author-id').val().trim();


    const newBookObj = {
      title,
      coverPhoto,
      authorId
    }

    $.post('/api/book', newBookObj)
      .then(response => {
        console.log(response)
      
        window.location = "/library"
      })
      .catch(error => console.log(error))
  })
})