import {Select} from './select/select'
import './select/style.scss'

const select = new Select('#select', {
    placeholder: 'Выбери пожалуйто элемент',
    selectedId: '4',
    data: [
        {id: '1', value:'React'},
        {id: '2', value:'Angular'},
        {id: '3', value:'Vue'},
        {id: '4', value:'React Native'},
        {id: '5', value:'Next'}
    ],
    onSelect(item){
        console.log('Selected Item', item)
    }
    
})

window.s = select