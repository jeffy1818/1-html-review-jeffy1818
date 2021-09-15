const Counter = {
    data() {
      return {
        counter: 0
      }
    }
  }

  created() {
    fetch('https://randomuser.me/api')
    .then(
      function(response) {
        return response.json()
      }
    )
    .then(
      function(json) {
        console.log(json);
        this.result = json.results[0];
      }
    )
  }
  
  Vue.createApp(Counter).mount('#counter')