document.addEventListener('DOMContentLoaded', function() {
    var dropDowns = document.querySelectorAll('.drop_down_list');
    var panelLeft = document.querySelector('.panel_left');
    var panelRight = document.querySelector('.panel_right');
    var sum = document.querySelector('.summary_panel .sum strong');
    var checkbox = document.querySelector('#transport');

    function calculateFinalPrice() {
        var finalPrice = 0;
        for(var j = 0; j < panelRight.children.length; j++) {
            if(panelRight.children[j].textContent != '') {
                finalPrice = finalPrice + Number(panelRight.children[j].textContent);
            }
        }
        sum.textContent = finalPrice + ' zł';
    }


    dropDowns.forEach(function(dropDown, index) {
        var listArrow = dropDown.querySelector('.list_arrow');
        var listPanel = dropDown.querySelector('.list_panel');

        listArrow.addEventListener('click', function() {
            listPanel.classList.toggle('visible');
        });

        for(var i = 0; i < listPanel.children.length; i++) {
            listPanel.children[i].addEventListener('click', function(){
                panelLeft.children[index].textContent = listPanel.children[i].textContent;
                panelRight.children[index].textContent = (listPanel.children[i].dataset.price);
                panelRight.children[index].classList.add('redAlert');

                calculateFinalPrice();
            });
        }

    });

    checkbox.addEventListener('click', function() {
        if(checkbox.checked) {
            panelLeft.children[3].textContent = 'Transport';
            panelRight.children[3].textContent = (checkbox.dataset.price);
        } else if(!checkbox.checked) {
            panelLeft.children[3].textContent = '';
            panelRight.children[3].textContent = '';
        }
        calculateFinalPrice();
    });
});