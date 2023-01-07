const getTemplate = () => {
    return`
        <div class="select__input">
            <span>Text</span>
            <i class="fa fa-list-alt"></i>
        </div>
        <div class="select__dropdown">
            <ul class="select__list">
                <li class="select__item">123</li>
                <li class="select__item">123</li>
                <li class="select__item">123</li>
                <li class="select__item">123</li>
                <li class="select__item">123</li>
                <li class="select__item">123</li>
            </ul>
        </div>
        `
}

export class Select{
    constructor(selector, options){
        this.$el = document.querySelector(selector)

        this.#render()
    }
    
    #render(){
        this.$el.innerHTML = getTemplate()
    }

    open(){
        this.$el.classList.add('open')
    }

    clouse(){
        this.$el.classList.remove('open')
    }
}