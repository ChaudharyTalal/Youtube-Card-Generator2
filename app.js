let title = document.querySelector(".title");
let chName = document.querySelector(".chname");
let views = document.querySelector(".views");
let timeAgo = document.querySelector(".time-ago");
let duration = document.querySelector(".duration");
let btn=document.querySelector(".btn")




const formatView=(views)=>{
     if (views >= 1000000) {
        views = views / 1000000
        return views.toFixed(1) + "M views" ;
    }
    else if (views >= 1000) {
        views = views / 1000 ;
        return views.toFixed(1) + " K views";
    }
    else{
        return views.toString() + "Views";
    }
}

const formatMonths=(timeAgo)=>{
    if(timeAgo>=12){
        timeAgo=timeAgo/12;
        timeAgo=Math.floor(timeAgo)
        return timeAgo>1?timeAgo+ " Years Old":timeAgo +" Year Old"
    }
    else{
        timeAgo=Math.floor(timeAgo)
        return timeAgo>=1? timeAgo+" Months Old":timeAgo+" Month Old"
    }
}

const createCard = (titleText, chNameText, viewsCount, timeAgoValue, durationText ,thumbnail) => {

    let html=`
    <div class="card">
        <div class="left">
            <div class="img"> <img src="${thumbnail} " alt=""></div>
            <div class="duration"> ${durationText} </div>
        </div>

        <div class="right">
            <div class="title">${titleText}</div>

            <div class="other">
                <div class="views"> ${formatView(viewsCount)} </div>
                <div>•</div>
                <div class="time-ago"> ${formatMonths(timeAgoValue)} </div>
            </div>
            <div class="chname"> ${chNameText} </div>
        </div>
    </div>
    `
document.querySelector(".container").insertAdjacentHTML("afterbegin",html)
};

createCard("Installing VS Code", "Code with Harry", 9123445, 21, "33:30", "https://i.ytimg.com/vi/_8o_BiLAgQM/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAxYnCeWYLiONJo8FUDQcHYJkjkWA");

let count =1
 btn.addEventListener("click",()=>{
    count++
    
 
    createCard("Installing VS Code "+count  , "Code with Harry", 9123445, 21, "33:30", "https://i.ytimg.com/vi/_8o_BiLAgQM/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAxYnCeWYLiONJo8FUDQcHYJkjkWA")})


