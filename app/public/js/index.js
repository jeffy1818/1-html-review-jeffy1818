const RandomUser = {
  data() {
    return {
      result: {},
    }
  },
  computed: {
      CustomDOB() {
          /*Pulled from RandomUser, but now formatted */ 
          return dayjs(this.result.dob.date)
          /*Custom Formatting*/ 
          .format('MMM D, YYYY')
      }
  },
  methods: {
      fetchUserData() {
          fetch('https://randomuser.me/api/')
          .then(response => response.json())
          .then( (json) => {
              console.log("A");
              this.result = json.results[0];
              console.log("C");
          })
          .catch( (error) => {
              console.error(error);
          });
      }
  },
  created() {
      this.fetchUserData();
  }

}
Vue.createApp(RandomUser).mount('#RandomUser');