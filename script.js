(() => {
    const $counter = document.getElementById('js-counter');
    //関数clickHandlerを定義する処理
    const clickHandler = (e) => {
        const $targetButton = e.currentTarget;
        let currentCount = parseInt($counter.textContent);
        //追加要素　10ずつ増減するボタン
        if($targetButton.textContent === '+'){
            $counter.textContent = currentCount + 1;
        } else if($targetButton.textContent === '-'){
            $counter.textContent = currentCount - 1;
        } else if($targetButton.textContent === '+10'){
            $counter.textContent = currentCount + 10;
        } else if($targetButton.textContent === '-10'){
            $counter.textContent = currentCount - 10;
        }
        //追加要素　10になったらメッセージが出る。（2箇所）
        //追加要素　100になったら別のメッセージがでる。
        const $good = document.getElementById('js-good');
        const $messageHidden = document.getElementById('js-message-hidden');

        if(parseInt(document.getElementById('js-counter').textContent) === 10){
            $good.style.display = 'block';
            $messageHidden.style.display = 'block';
            $good.textContent = 'いいね10になったね！'
        } else if(parseInt(document.getElementById('js-counter').textContent) === 100){
            $good.style.display = 'block';
            $messageHidden.style.display = 'none';
            $good.textContent = 'すごい100だよ！'
        } else
        {
            $good.style.display = 'none';
        }
    }
    //各js-buttonにイベントを持たせる処理
    for(let index = 0; index < document.getElementsByClassName('js-button').length; index++){
        document.getElementsByClassName('js-button')[index].addEventListener('click', (e) => {clickHandler(e);});
    }

})();
