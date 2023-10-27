let posts = [];

const TITLE_INPUT_NODE = document.querySelector('.js-input-title');
const POST_TEXT_INPUT_NODE = document.querySelector('.js-input-post-text');
const PUBLICATION_BTN_NODE = document.querySelector('.js-btn');
const POSTS_NODE = document.querySelector('.js-posts');
const LIMITATION_TITLE = document.querySelector('.js-limitation-title');
const LIMITATION_POST = document.querySelector('.js-limitation-post');

let maxCharactersTitle = 100;
let maxCharactersPost = 200;

PUBLICATION_BTN_NODE.addEventListener('click', function () {
    const postFromUser = getPostFromUser();

    addPost(postFromUser);

    renderPosts();

    
});


// Ограничение символов
TITLE_INPUT_NODE.addEventListener('input', function () {
    validation();

});

// function counter() {
//     COUNTER_TITLE.innerHTML = `Символов осталось: ${maxCharactersTitle - this.value.length}`;
//     COUNTER_TITLE.classList.remove('counter-title__hidden');
// }



POST_TEXT_INPUT_NODE.addEventListener('input', function () {
    validation()
});

function validation() {
    const TITLE_LENG = TITLE_INPUT_NODE.value.length;
    const TEXT_LENG = POST_TEXT_INPUT_NODE.value.length;

    if (TITLE_LENG <= maxCharactersTitle) {
        LIMITATION_TITLE.innerHTML = `У вас есть ${maxCharactersTitle - TITLE_LENG} символов`;
        LIMITATION_TITLE.classList.remove('color_red');
    } else  {
        LIMITATION_TITLE.innerHTML = `В заголовке больше ${maxCharactersTitle} символов`;
        LIMITATION_TITLE.classList.add('color_red');
    };


    if (TEXT_LENG <= maxCharactersPost) {
        LIMITATION_POST.innerHTML = `У вас есть ${maxCharactersPost - TEXT_LENG} символов`;
        LIMITATION_POST.classList.remove('color_red');
    } else  {
        LIMITATION_POST.innerHTML = `В заголовке больше ${maxCharactersPost} символов`;
        LIMITATION_POST.classList.add('color_red');
    };


}




// Получение данных из поля ввода
function getPostFromUser() {
    const title = TITLE_INPUT_NODE.value;
    const text = POST_TEXT_INPUT_NODE.value;
    const options = {hour: 'numeric', minute: 'numeric'};
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString([], options);
    return {
        title: title,
        text: text,
        date: date,
        time: time,
    };
}

// Сохранить пост 
function addPost({title, text, date, time}) {
    posts.push({
        title,
        text,
        date,
        time,
    })
}

function getPosts() {
    return posts;
}


// Отобразить пост  
function renderPosts() {
    const posts = getPosts();
    
    let postsHTML = '';

    posts.forEach(post => {
        postsHTML += `
                
            <div class = "life-post">
                <p class = "life-post__data">${post.date} ${post.time}</p>
                <p class = "life-post__title">${post.title}</p>
                <p class = "life-post__text">${post.text}</p>
                <hr>
            </div>
            
        `
    });



    POSTS_NODE.innerHTML = postsHTML;
}