const counts = document.querySelectorAll('.count');
const speed = 47;
counts.forEach((counter)=> {
    function upData() {
        const target = counter.getAttribute('data-target');
        const count = Number(counter.innerText);
        const inc = target / speed;
        if(count < target) {
            counter.innerText = Math.floor(inc + count)
            setTimeout(upData, 1);
        } else {
            counter.innerText = target
        }
    }
    upData()
})