new Vue({
  el: '#app-vue',
  data() {
    return {
      users: [],
      loading: false,
      submitting: false,
      newUser: '',
      updateUser: '',
      tutorial: {
        id: null,
        name: "",
      },


    }
  },
  methods: {
       showEditInput(users){
       this.$set(users, 'isEdit', true)
        },
        // saveTask(users){
        //     users.isEdit = false
        //      this.submitting = true;
        //     axios.put('https://jsonplaceholder.typicode.com/users', {
        //     name: this.users.isEdit
        //    })
        //       .then((response) => {
        //        const data = response.data;
        //       this.users.push(data);
        //        this.users.isEdit = '';
        //        this.submitting = false;
        //        });

        //     },


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
    },
    saveTask(users){
      users.isEdit = false
      var data1 = {
        name : this.tutorial.name
      };

      // updateUser = this.users.isEdit;

      axios.put('https://jsonplaceholder.typicode.com/users', {
        updateUser: this.data1
      })
        .then((response) => {
          // const data1 = response.data1;
          // const updateUser = this.user.isEdit;
          this.tutorial.id = response.updateUser.id;
          this.users.push(response.updteUser);
          // this.updateUser = '';

        });

    }

  }
})
