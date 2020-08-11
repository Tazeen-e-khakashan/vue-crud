new Vue({
  el: '#app-vue',
  data() {
    return {
      users: [],
      loading: false,
      submitting: false,
      newUser: '',
      updateUser: '',
      editUser: ''
    }
  },
  methods: {
    showEditInput(user){
      this.$set(user, 'isEdit', true)

  },
  // saveTask(user){
  //    user.isEdit = false
  //  },
    fetchUsers() {
      this.loading = true;
      this.users = [];

      axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          const data = response.data;
          this.users = data;
          this.loading = false;
        });
    },
    addUser() {
      this.submitting = true;
      axios.post('https://jsonplaceholder.typicode.com/users', {
        name: this.newUser
      })
        .then((response) => {
          const data = response.data;
          this.users.push(data);
          this.newUser = '';
          this.submitting = false;
        });
    }
    // editUser() {
    //   this.submitting = true;
    //   axios.put('https://jsonplaceholder.typicode.com/users', {
    //     name: this.updateUser
    //   })
    //     .then((response) => {
    //       const data = response.data;
    //       this.users.put(data);
    //       this.updateUser = '';
    //       this.submitting = false;
    //     });
    // }
  }
})
