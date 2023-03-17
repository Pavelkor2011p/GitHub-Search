const mainEl = document.querySelector('.main');
const wrapper = document.createElement('div');

const formEl = document.createElement('form');
formEl.classList.add('search');
formEl.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const inputValue = Object.fromEntries(new FormData(e.target));
    const response = await fetch(`https://api.github.com/search/commits?q=${inputValue.name}/readme`);

    const dataArray = [];

    if(response.ok && inputEl.value.length > 3) {
        let data = await response.json();
        wrapper.appendChild(createProfileEl(data));
        mainEl.appendChild(wrapper);
        inputEl.value = '';
    } else {
        alert("Введите больше символов");
    }
});

const inputEl = document.createElement('input');
inputEl.classList.add('search-input');
inputEl.setAttribute('name', 'name');

const searchButtonEl = document.createElement('button');
searchButtonEl.classList.add('search-button');
searchButtonEl.setAttribute('type', 'submit');
searchButtonEl.innerHTML = "Search"

formEl.appendChild(inputEl);
formEl.appendChild(searchButtonEl);
mainEl.appendChild(formEl);

res = '';
function createProfileEl(profileData) {
    for (let i = 0; i < 10; i++) {
    element = `
    <div class="block">
    <p><span>Name: </span><a href="${profileData.items[i].author.html_url}" target="_blank">${profileData.items[i].author.login}</a></p>
    <a href="${profileData.items[i].html_url}" target="_blank">${profileData.items[i].html_url}</a>
    </div>
    `
    res += element;
    };
    result = document.createElement('div');
    result.innerHTML = res;
    return result;
};

