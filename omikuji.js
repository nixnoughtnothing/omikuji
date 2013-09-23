
/*
* おみくじ: ランダム抽出
*/
function getOmikuji()
{
    var omikuji = ['大吉','中吉','小吉','凶','大凶'];

    // length : 配列の要素数を出す
    var result  = Math.floor(Math.random()*omikuji.length);

    // alertでは表示しないので、コメントアウトalert(omikuji[result]);
    document.getElementById('result').innerHTML = omikuji[result];
}