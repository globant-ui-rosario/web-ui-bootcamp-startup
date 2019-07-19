let btn = document.querySelector('button');

const week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

btn.onclick = function () {
    const day = parseInt(document.getElementById("day").value);
    const n = parseInt(document.getElementById("num").value);

    getDayAfter (week , n+day);

    function getDayAfter(arr , count) {
        ln = arr.length;
        b = new Array();

        for (i=0; i<=count;i++) {
            b.push(arr[i%ln]);
        }
        
        alert(b[count]);
    } 
}