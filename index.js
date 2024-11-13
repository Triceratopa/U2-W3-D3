const getBook=function(){
    fetch('https://striveschool-api.herokuapp.com/books',{
      
    })


    .then((response)=>{
        if(response.ok){
            return response.json()
        }else{
            throw new Error('Not ok')
        }
    })

    .then((books)=>{
        console.log('that books', books)
        const singleBook=document.getElementById('single-book')
        books.forEach((book) => {
            const newCard = document.createElement('div')
            newCard.classList.add('col', 'col-12', 'col-md-6', 'col-lg-4',)
            newCard.innerHTML=`<div class="card" >
              <img src="${book.img}" class="card-img-top" alt="${book.title}" />
              <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                
                <p class="card-text"> Prezzo: €${book.price}</p>
                <a href="#" class="btn btn-primary">Carrello</a>
                <a href="#" class="btn btn-primary" id="scarta">Scarta</a>
              </div>
            </div> `
            singleBook.appendChild(newCard)

            //const scrBtn=newCard.getElementById('scarta')
            //scrBtn.addEventListener('click',()=>{
            //   newCard.remove()
            //})
          
        })

    })
    .catch((error)=>{
        console.log(error)
    })
}
getBook()