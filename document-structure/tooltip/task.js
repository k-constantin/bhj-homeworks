const hasTooltip = document.getElementsByClassName('has-tooltip');
let tooltip = document.getElementsByClassName('tooltip');

for (let i = 0; i < hasTooltip.length; i++) {
    hasTooltip[i].insertAdjacentHTML('afterend', '<div class="tooltip">' + hasTooltip[i].title + '</div>');
    hasTooltip[i].onclick = function() {
        tooltip[i].style.top = hasTooltip[i].getBoundingClientRect().top + 25 + "px";
        tooltip[i].style.left = hasTooltip[i].getBoundingClientRect().left + "px";
        tooltip[i].classList.toggle('tooltip_active');
        return false;
    };
};
