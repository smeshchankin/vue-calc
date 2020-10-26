(function() {
    const App = {
        data() {
            return {
                title: 'Calculator',
                result: '',
                numbers: [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]
            };
        }
    };
    Vue.createApp(App).mount('#app');
})();
