import Vue from 'vue/dist/vue.esm.js';

export const app = new Vue({
    el: '#app',

    data: {
        videoURL: ''
    },

    methods: {

        validate: function(){
            var pasteArea = document.getElementById("input");
            const url = pasteArea.value;
            const downloadButton = document.getElementById('download');
            if ( url.match('http') && url.match('you')) {
                downloadButton.disabled = false;
            }else{
                downloadButton.disabled = true;
            }
        },

        paste: function() {
            var pasteArea = document.getElementById("input");
            pasteArea.focus();
            document.execCommand("paste");

            navigator.clipboard.readText()
            .then((text) => {
                pasteArea.value = text;
                console.log('Pasted: "', text, '"');
            })
            .catch(err => {
                console.error('Pasting is failed!! Please press Ctrl + v to paste.', err);
            })
            .then(() => {
                this.validate();
            });
        },

        download: function(){
            const requestUrl = this.videoURL;
            const param = requestUrl.slice(-11);
            // const singleUrl = "https://www.youtube.com/embed/" + param;
            // https://dirpy.com/studio?url=https://www.youtube.com/watch?v=wXRrarkBvuI
            const singleUrl = "https://dirpy.com/studio?url=" + requestUrl;
            window.open(singleUrl, '_blank');
        }
    }
});
