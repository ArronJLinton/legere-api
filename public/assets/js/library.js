$(document).ready(function(){



  $.get('/api/books').then(response => {
    console.log(response)
    for (let i = 0; i < response.length; i++) {
      const { firstName, lastName, title, coverPhoto, id } = response[i];
      const bookDetailLink = $(`<a href=/bookDetail/${id}>`) 
      const card = $('<div class="card">').addClass('card');
      const bookCover = $('<img class="img-thumbnail float-left book-image">').attr('src', coverPhoto)
      
      const cardBody = $('<div>').addClass('card-body');
      const bookTitle = $('<h4 class="card-title text-center">').text(title);
      const author = $('<p class="card-text">').text(`Author: ${firstName} ${lastName}`);

      bookTitle.append(author)
      bookDetailLink.append(bookCover)
      cardBody.append(bookDetailLink, bookTitle)
      card.append(cardBody);
      $('#books').append(card)
    } 
  })
})