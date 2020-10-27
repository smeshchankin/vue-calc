(function() {
    const App = {
        data() {
            return {
                title: 'Calculator',
                result: '',
                numbers: [7, 8, 9, 4, 5, 6, 1, 2, 3, 0],
                operations: ['/', '*', '-', '+']
            };
        },
        methods: {
            input: function(ch) {
                this.result += ch;
            },
            reset: function() {
                this.result = '';
            },
            calc: function() {
                this.result = eval(this.result).toString();
            }
        }
    };
    Vue.createApp(App).mount('#app');
})();
