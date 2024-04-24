let avatar = document.querySelector('.image')
let username = document.getElementById('username')
let login = document.getElementById('login')
let followers = document.getElementById('followers')
let following = document.getElementById('following')
let html_url = document.getElementById('html_url')

//API request 
const requestURL = `https://api.github.com/users/31Sanskrati`
const xhr = new XMLHttpRequest();
xhr.open('GET', requestURL);
xhr.send()
xhr.onload = () => {
    if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        //console.log(typeof data);
        //console.log(data);

        //save data in variables
        username.innerHTML = data.name
        login.innerHTML = data.login
        followers.innerHTML = data.followers
        following.innerHTML = data.following
        html_url.innerHTML = `<a href="${data.html_url}">${data.html_url}</a>`
        avatar.innerHTML = `<img src="${data.avatar_url}" alt="Profile Image" srcset="">`
        
    }
    else{
        alert("Something went wrong")
        console.log(("Something went wrong"));
    }
}