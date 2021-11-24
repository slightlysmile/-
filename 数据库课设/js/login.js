var vm = new Vue({
    el: "#login",
    data: {
        username: '',
        password: '',
    },
    methods: {
        login: function () {
            var username = this.username;
            var password = this.password;
            axios.post("https://autumnfish.cn/api/joke/list?num=6", {
                username: username,
                password: password,
            })
                .then(function (response) {
                    // console.log(response)
                    console.log(response.data);
                    // console.log(this.joke);

                }, function (err) { })
        }
    },
})