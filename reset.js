(() => {
    const $counter = document.getElementById('js-counter');

    const clickHandler = () => {
        $counter.textContent = 0;
        //リセットすると追加要素も非表示になる。
        if(parseInt(document.getElementById('js-counter').textContent) === 0){
            document.getElementById('js-good').style.display = 'none';
            document.getElementById('js-message-hidden').style.display = 'none';
        }
    };

    document.getElementById('js-reset-button').addEventListener('click', clickHandler);

})();