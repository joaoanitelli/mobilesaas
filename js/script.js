const btnMenu = document.querySelector('.btn-mobile');
const btnClose = document.querySelector('.close-btn');
const overlay = document.querySelector('.overlay');
const drawer = document.querySelector('.drawer');
const bntNotification = document.querySelector('.btn-notification');
const notification = document.querySelector('.notification');
const btnSearch = document.querySelector('.btn-search');
const searchDiv = document.querySelector('.search');
const notificationItem = document.querySelector('.notification-chat');
const allRead = document.querySelector('.n-header-read');


// abrir ou fechar menu e background, fechar outros dropdowns caso estejam abertos (notificação ou pesquisa)
function toggleMenu() {
    notification.classList.remove('active');
    searchDiv.classList.remove('active');
    drawer.classList.toggle('active');
    overlay.classList.toggle('active');
}

// abrir ou fechar notificações e fechar pesquisa caso esteja aberto
function toggleNotification() {
    searchDiv.classList.remove('active');
    notification.classList.toggle('active');
    document.querySelector('.mini-pop-up-notificacao').remove();
}

// abrir ou fechar pesquisa e fechar notificações caso esteja aberto
function toggleSearch() {
    notification.classList.remove('active');
    searchDiv.classList.toggle('active');
}

// adicionar cada evento para seus respectivos botões
btnMenu.addEventListener('click', toggleMenu);
btnClose.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);
bntNotification.addEventListener('click',toggleNotification)
btnSearch.addEventListener('click',toggleSearch)


// para os dropdowns do header não fecharem ao clicar dentro da área
notification.addEventListener('click', function(event) {
    event.stopPropagation();
});

searchDiv.addEventListener('click', function(event) {
    event.stopPropagation();
});

// marca como lido ao clicar na notificação
notificationItem.addEventListener('click', function(event) {
    notificationItem.classList.remove('view');
});

// marcar todos como lido (remove estilização de não visualizados)
allRead.addEventListener('click', function(event) {
    notificationItem.classList.remove('view');
});

// dropdown menu
$('.dropdown-btn').click(function () {
    $(this).find('.dropdown-content').get(0).classList.toggle('active');
    $(this).find('.btn-arrow').toggleClass('rotate');
    }
);

