const SomeApp = {
    data() {
      return {
        books: [],
        bookForm: {},
        selectedBook: null
      }
    },
    computed: {},
    methods: {
        prettyData(d) {
            return dayjs(d)
            .format('D MMM YYYY')
        },
        prettyDollar(n) {
            const d = new Intl.NumberFormat("en-US").format(n);
            return "$ " + d;
        },
        fetchBooksData() {
            fetch('/api/books/')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.books = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            });
        },
        postNewBook(evt) {
            console.log("Posting!", this.bookForm);
            fetch('api/books/create.php', {
                method:'POST',
                body: JSON.stringify(this.bookForm),
                headers: {
                  "Content-Type": "application/json; charset=utf-8"
                }
              })
              .then( response => response.json() )
              .then( json => {
                console.log("Returned from post:", json);
                // TODO: test a result was returned!
                this.books = json;
                // reset the form
                this.bookForm = {};
              });
        },
        postEditBook(evt) {
          this.bookForm.id = this.selectedBook.id;     
          
          console.log("Updating!", this.bookForm);
  
          fetch('api/books/update.php', {
              method:'POST',
              body: JSON.stringify(this.bookForm),
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
        postDeleteBook(book) {
          if (!confirm("Are you sure you want to delete the book " + "'" + book.title + "'" +"?")) {
              return;
          }
          
          fetch('api/books/delete.php', {
              method:'POST',
              body: JSON.stringify(book),
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
          this.bookForm = Object.assign({}, this.selectedBook);
        },
        handleResetEditBook() {
          this.selectedBook = null;
          this.bookForm = {};
        },
        postBook(evt) {
          if (this.selectedBook) {
              this.postEditBook(evt);
          } else {
              this.postNewBook(evt);
          }
        }
    },
    created() {
        this.fetchBooksData();
        // this.postNewBook();
    }
  
  }
  
  Vue.createApp(SomeApp).mount('#SomeApp');