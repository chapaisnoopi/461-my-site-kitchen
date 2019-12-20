const clock = document.querySelector('.clock');
const updateTime = () => clock.innerHTML = new Date().toLocaleTimeString();
setInterval(updateTime, 1000);

const btnMoreProject = document.querySelector('.more-project');
btnMoreProject.addEventListener('click', moreProject);
let idProject = "";
function moreProject() {
    fetch('more-about.json')
        .then( response => response.json() )
        .then( data =>  {
            if ( idProject === "more" ) {
                document.querySelector('.more-project-pluss').innerHTML = data.lessProject;
                document.querySelector('.more-project').innerText = data.more;
                idProject = "less";  
            } else {
                document.querySelector('.more-project-pluss').innerText = data.moreProject;
                document.querySelector('.more-project').innerText = data.less;
                idProject = "more";
            }
        } );
}

const btnMoreProduction = document.querySelector('.more-production');
btnMoreProduction.addEventListener('click', moreProduction);
let idProduction = "";
function moreProduction() {
    fetch('more-about.json')
        .then( response => response.json() )
        .then( data =>  {
            if ( idProduction === "more" ) {
                document.querySelector('.more-production-pluss').innerHTML = data.lessProduction;
                document.querySelector('.more-production').innerText = data.more;
                idProduction = "less";  
            } else {
                document.querySelector('.more-production-pluss').innerText = data.moreProduction;
                document.querySelector('.more-production').innerText = data.less;
                idProduction = "more";
            }
        } );
}

const btnMoreBlum = document.querySelector('.more-blum');
btnMoreBlum.addEventListener('click', moreBlum);
let idBlum = "";
function moreBlum() {
    fetch('more-about.json')
        .then( response => response.json() )
        .then( data =>  {
            if ( idBlum === "more" ) {
                document.querySelector('.more-blum-pluss').innerHTML = data.lessBlum;
                document.querySelector('.more-blum').innerText = data.more;
                idBlum = "less";  
            } else {
                document.querySelector('.more-blum-pluss').innerText = data.moreBlum;
                document.querySelector('.more-blum').innerText = data.less;
                idBlum = "more";
            }
        } );
}


