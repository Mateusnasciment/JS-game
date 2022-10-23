const athena = document.querySelector('.athena-run');

const jump = () => {
    athena-run.classList.add('jump');

    setTimeout(() => {

        athena.classList.remove('jump');

    }, 600);
}
document.addEventListener('keydown', jump);

