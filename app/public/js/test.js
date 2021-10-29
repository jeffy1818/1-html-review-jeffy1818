const SomeApp = {
    data() {
      return {
        books: [],
        booksForm: {}, 
        selectedBook: null
      }
    },
    computed: {},
    methods: {
        prettyDollar(n) {
            const d = new Intl.NumberFormat("en-US").format(n);
            return "$ " + d;
        },
        fetchBookData() {
            fetch('/api/books/')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.books = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            })
            .catch( (err) => {
              console.error(error);
            });
        },
        postEditBook(evt) {
          this.booksForm.id = this.selectedBook.id;     
          
          console.log("Updating!", this.booksForm);
  
          fetch('api/books/update.php', {
              method:'POST',
              body: JSON.stringify(this.booksForm),
              headers: {
                "Content-Type": "application/json; charset=utf-8"
              }
            })
            .then( response => response.json() )
            .then( json => {
              console.log("Returned from post:", json);
              // TODO: test a result was returned!
              this.books = json;
              
              this.handleResetEditBook();
            });
        },
        postDeleteBook(bk) {
          if (!confirm("Are you sure you want to delete the book from "+bk.title+"?")) {
              return;
          }
          
          fetch('api/books/delete.php', {
              method:'POST',
              body: JSON.stringify(bk),
              headers: {
                "Content-Type": "application/json; charset=utf-8"
              }
            })
            .then( response => response.json() )
            .then( json => {
              console.log("Returned from post:", json);
              // TODO: test a result was returned!
              this.books = json;
              
              this.handleResetEditBook();
            });
        },
        handleEditBook(book) {
          console.log("selecting", book);
          this.selectedBook = book;
          this.booksForm = Object.assign({}, this.selectedBook);
        },
        handleResetEditBook() {
          this.selectedBook = null;
          this.booksForm = {};
        },
        postBook(evt) {
          if (this.selectedBook === null) {
              this.postEditBook(evt);
          } else {
              this.postNewBook(evt);
          }
        },
        postNewBook(evt) {
            //this.offerForm.studentId = this.selectedStudent.id;        
            
            console.log("Posting:", this.booksForm);

            fetch('api/books/create.php', {
                method:'POST',
                body: JSON.stringify(this.booksForm),
                headers: {
                  "Content-Type": "application/json; charset=utf-8",
                }
              })
              .then( response => response.json() )
              .then( json => {
                console.log("Returned from post:", json);
                // TODO: test a result was returned!
                this.books = json;
                
                // reset the form
                this.booksForm = {};
              });
          }
      },
      created() {
        this.fetchBookData();
    }
}
  
  Vue.createApp(SomeApp).mount('#offerApp');
        // fetchUserData(){
        //     fetch('https://randomuser.me/api/')
        //     .then( response => response.json() )
        //     .then( (responseJson) => {
        //         this.person = responseJson.results[0];
        //     })
        //     .catch( (err) => {
        //         console.error(err);
        //     })
        //     }
        