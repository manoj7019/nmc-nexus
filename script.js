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

//Year at Copyright
const year = new Date().getFullYear();
console.log(year)

let yearText = document.querySelector('#yearText');
yearText.textContent = `${year}`;

// Modal 

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if(modal == null) return 
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if(modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

// Hamburger menu

function myFunction() {
    var x = document.getElementById("myLinks");
    let close = document.getElementById("close")
    let open = document.getElementById("open")

    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        // open.style.display = "none"
        x.style.display = "flex";
        x.style.flexDirection = "column";
        x.style.alignItems = "center";
        x.style.gap = "20px";
        x.style.borderRadius = "0 0 16px 16px";
        x.style.padding = "20px";
        x.style.margin = "0 10px";
        x.style.backgroundColor= "#45085a";
        x.style.color = "white";
        x.style.transition = "all 1s"
    }
  }

// CSS Loader 