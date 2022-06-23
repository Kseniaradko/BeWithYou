import '../index.css';
import JS_IMAGE from '../assets/123.jpg';
import * as DateFunc from './dates'

const container = document.createElement('div');
container.className = 'container'
document.body.append(container)
function makeElementWithImage() {
    const title = document.createElement('h1');
    title.textContent = 'Days before be with you:'
    
    const image = document.createElement('img');
    image.className = 'image';
    image.src = JS_IMAGE;
    
    const timerContainer = document.createElement('div');
    const timerTextHtml = document.createElement('h2');
    timerContainer.id = 'timer';
    timerTextHtml.className = 'timer-text';
    timerTextHtml.textContent = DateFunc.getPreciseDateDifference(new Date(), new Date(2022, 6, 25))
    
    const todayDateHTML = document.createElement('div');
    todayDateHTML.className = 'today-date';
    todayDateHTML.textContent = `(Сегодня ${DateFunc.getTodayDayFormat(new Date())})`
    const dateUpdate = () => {
        setInterval(() => {
            todayDateHTML.textContent = `(Сегодня ${DateFunc.getTodayDayFormat(new Date())})`
        }, 1000)
    }
    timerContainer.append(timerTextHtml, todayDateHTML)

    container.append(title, timerContainer, image)
    dateUpdate()
}


makeElementWithImage()
