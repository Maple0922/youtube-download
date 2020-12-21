import Vue from 'vue/dist/vue.esm.js';

export const app = new Vue({
    el: '#app',
    data: {
        videoURL: ''
    },
    methods: {
        paste: function() {
            var pasteArea = document.getElementById("input");
            pasteArea.focus();
            document.execCommand("paste");
            console.log('pasted');

            navigator.clipboard.readText()
            .then((text) => {
                pasteArea.value = text;
                console.log('Pasted: "', text, '"');
            })
            .catch(err => {
                console.error('Pasting is failed!! Please press Ctrl + v to paste.', err);
            });
        }
    }
});
