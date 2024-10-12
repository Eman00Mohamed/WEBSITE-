let menu =document.querySelector('#menu-bar');
let navbar =document.querySelector('.navbar');
window.onscroll=() =>{
    menu.classList.remove('fa-times'); 
    navbar.classList.remove('active');
}
menu.addEventListener('click',() =>{
    menu.classList.toggle('fa-times'); 
    navbar.classList.toggle('active');  
})

// search 
let suggestions = [
    "Channel",
    "CodingLab",
    "CodingNepal",
    "YouTube",
    "YouTuber",
    "YouTube Channel",
    "Blogger",
    "Bollywood",
    "Vlogger",
    "Vechiles",
    "Facebook",
    "Freelancer",
    "Facebook Page",
    "Designer",
    "Developer",
    "Web Designer",
    "Web Developer",
    "Login Form in HTML & CSS",
    "How to learn HTML & CSS",
    "How to learn JavaScript",
    "How to became Freelancer",
    "How to became Web Designer",
    "How to start Gaming Channel",
    "How to start YouTube Channel",
    "What does HTML stands for?",
    "What does CSS stands for?",
];
{/* <div class="wrapper">
      <div class="search-input">
        <a href="" target="_blank" hidden></a>
        <input type="text" placeholder="Type to search..">
        <div class="autocom-box">
          <!-- here list are inserted from javascript -->
        </div>
        <div class="icon"><i class="fas fa-search"></i></div>
      </div>
    </div>
     <script src="js/suggestions.js"></script> 
     <script src="js/script.js"></script>  */}
// getting all required elements
const searchWrapper = document.querySelector(".search-bar-container");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;
// if user press any key and release
inputBox.onkeyup = (e) => {
  let userData = e.target.value; //user enetered data
  let emptyArray = [];
  if (userData) {
    icon.onclick = () => {
      webLink = `https://www.google.com/search?q=${userData}`;
      linkTag.setAttribute("href", webLink);
      linkTag.click();
    }
    emptyArray = suggestions.filter((data) => {
      //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });
    emptyArray = emptyArray.map((data) => {
      // passing return data inside li tag
      return data = `<li>${data}</li>`;
    });
    searchWrapper.classList.add("active"); //show autocomplete box
    showSuggestions(emptyArray);
    let allList = suggBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
      //adding onclick attribute in all li tag
      allList[i].setAttribute("onclick", "select(this)");
    }
  } else {
    searchWrapper.classList.remove("active"); //hide autocomplete box
  }
}
function select(element) {
  let selectData = element.textContent;
  inputBox.value = selectData;
  icon.onclick = () => {
    webLink = `https://www.google.com/search?q=${selectData}`;
    linkTag.setAttribute("href", webLink);
    linkTag.click();
  }
  searchWrapper.classList.remove("active");
}
function showSuggestions(list) {
  let listData;
  if (!list.length) {
    userValue = inputBox.value;
    listData = `<li>${userValue}</li>`;
  } else {
    listData = list.join('');
  }
  suggBox.innerHTML = listData;
}

// for Search input 
let searchable = [
  { name: 'Web Development', url: 'Web.html' },
  { name: 'Embedded', url: 'Embedded.html' },
  { name: 'Cybersecurity', url: 'Cyper.html' },
  { name: 'Java', url: 'Java.html' },
  { name: 'Automation', url: 'Automation.html' },
  { name: 'PV Software Design', url: 'Photovolatic.html' },
];

const searchInput = document.getElementById('search-bar');
const search_Wrapper = document.querySelector('.wrapper');
const resultsWrapper = document.querySelector('.results');

searchInput.addEventListener('keyup', () => {
  let results = [];
  let input = searchInput.value;
  if (input.length) {
      results = searchable.filter((item) => {
          return item.name.toLowerCase().includes(input.toLowerCase());
      });
  }
  renderResults(results);
});

function renderResults(results) {
  if (!results.length) {
      return search_Wrapper.classList.remove('show');
  }

  const content = results
      .map((item) => {
          return `<li data-url="${item.url}">${item.name}</li>`;
      })
      .join('');

      search_Wrapper.classList.add('show');
  resultsWrapper.innerHTML = `<ul>${content}</ul>`;
}

resultsWrapper.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
      const url = e.target.getAttribute('data-url');
      window.open(url, '_blank');
  }
});