const contentHideClass = "content-hide";
const contentClass = ".content";
const contentComponent = document.querySelector(contentClass);

const modalShowClass = "show-modal";
const modalClass = ".modal-back-start";
const modalComponent = document.querySelector(modalClass);

const pledgeDivShowClass = "show-pledge";

const bambooPledgeElement = document.querySelector('.bamboo');
const blackEditionPledgeElement = document.querySelector('.black_edition');

const modalSucessClass = ".modal-sucess";

function modalOpen(e){
    e.preventDefault();
    modalComponent.classList.add(modalShowClass);
    contentComponent.classList.add(contentHideClass);
    // document.body.scrollTop = 0;
    window.scrollTo({ top: 100, behavior: 'smooth' });
    // document.documentElement.scrollTop = 0; 
};

function closeModal(e){
    e.preventDefault();
    modalComponent.classList.remove(modalShowClass);
    contentComponent.classList.remove(contentHideClass);
    bambooPledgeElement.classList.remove(pledgeDivShowClass);
    blackEditionPledgeElement.classList.remove(pledgeDivShowClass);
    document.querySelector(modalSucessClass).classList.remove(pledgeDivShowClass);
    document.querySelector('#default').checked = true;
};

function pledge(option){
    console.log(option);
    if(option == 1){
        bambooPledgeElement.classList.add(pledgeDivShowClass);
        if(blackEditionPledgeElement.classList.contains(pledgeDivShowClass)){
            blackEditionPledgeElement.classList.remove(pledgeDivShowClass);
        }
    }
    if(option == 2){
        blackEditionPledgeElement.classList.add(pledgeDivShowClass);
        if(bambooPledgeElement.classList.contains(pledgeDivShowClass)){
            bambooPledgeElement.classList.remove(pledgeDivShowClass);
        }
    }
};

function sucessfull(e){
    e.preventDefault();
    closeModal(e);
    window.scrollTo({ top: 100, behavior: 'smooth' });
    document.querySelector(modalSucessClass).classList.add(pledgeDivShowClass);
    contentComponent.classList.add(contentHideClass);

}

function modalOpenSelect(e, option){
    e.preventDefault();
    modalOpen(e);
    if(option == 1){
        document.querySelector('#bamboo').checked = true;
    }
    if(option == 2){
        document.querySelector('#blackEdition').checked = true;
    }
    pledge(option);
}