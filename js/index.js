const clock = document.querySelector('.clock');
const updateTime = () => clock.innerHTML = new Date().toLocaleTimeString();
setInterval(updateTime, 1000);


const btnFetchHtmlProject = document.querySelector('.more-project');
btnFetchHtmlProject.addEventListener('click', fetchHtmlProject);
function fetchHtmlProject() {
    fetch('more-project.html')
        .then( response => response.text() )
        .then( html =>  document.querySelector('.more-project-pluss')
                .innerHTML = html );
}

const btnFetchHtmlProduction = document.querySelector('.more-production');
btnFetchHtmlProduction.addEventListener('click', fetchHtmlProduction);
function fetchHtmlProduction() {
    fetch('more-production.html')
        .then( response => response.text() )
        .then( html =>  document.querySelector('.more-production-pluss')
                .innerHTML = html );
}

const btnFetchHtmlBlum = document.querySelector('.more-blum');
btnFetchHtmlBlum.addEventListener('click', fetchHtmlBlum);
function fetchHtmlBlum() {
    fetch('more-blum.html')
        .then( response => response.text() )
        .then( html =>  document.querySelector('.more-blum-pluss')
                .innerHTML = html );
}
