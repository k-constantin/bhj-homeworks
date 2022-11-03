const hasTooltip = document.getElementsByClassName('has-tooltip');
let tooltip = document.getElementsByClassName('tooltip');

for (let i = 0; i < hasTooltip.length; i++) {
    hasTooltip[i].insertAdjacentHTML('afterend', '<div class="tooltip">' + hasTooltip[i].title + '</div>');
    hasTooltip[i].onclick = function() {
        const { top, left } = hasTooltip[i].getBoundingClientRect();
        tooltip[i].style = `top: ${top + 25}px; left: ${left}px;`;
        tooltip[i].classList.toggle('tooltip_active');
        return false;
    };
};
