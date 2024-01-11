
# Advice generator website 🗣

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents 
- [About the project]()
    - [The challenge]()
    - [Technologies used]()
- [Screenshot]()
- [Links]()
- [What I learned?]()
    - [Useful resources]()
- [Author]()
  



## About the project ℹ

This project consists in a Advice Generator using the [Advice API](https://api.adviceslip.com). 
The project allows users to generate random advices by pressing a dice icon. The technologies I used for bulding this application were HTML, CSS and Javascript. 

### The challenge 🚀

Throughout the development of the project, I had a design of the final interface in both devices. I had to develop and choose the dimensions according to my personal judgment. 

Users should be able to: 
- View the optimal layout for the app depending on their device's screen size.
- See hover states for all interactive elements on the page.
- Generate a new piece of advice by clicking the dice icon.

### Technologies used 🛠

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" title="HTML5" width="30"/> &nbsp;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" title="CSS3" width="30"/> &nbsp;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" title="Javascript" width="30" /> &nbsp; 

## Screenshot 🖼
![mobile](https://github.com/paulo-xavier/advice-generator_FRONTENDMENTOR/assets/133855530/17f4493f-b5a7-47d4-a4cf-d8bfb55914e2)


## Links 🔗

- Repository URL: [✔Click here]()
- Live Website: [✔Click here]() 

## What I learned ❓

Throughout the development of the project, I learned 2 new things: 

1- **How to add a box shadow on the entire container**: 
```css
#change-advice-button:hover{
    box-shadow: 0 0 28px var(--neon-green);
}
```

2- **How to use `transform: translateY()` to set a new position of an element inside its div, without using `position: relative` or `position: absolute`.**

```css 
#change-advice-button {
    transform: translateY(50%);
    height: 50px;
    width: 50px;
    border-radius: 100%;
    background-color: var(--neon-green);
    border: none;
    cursor: pointer;
    transition: all .3s;
}
```

### Useful resources 
- [Resource 1](https://stackoverflow.com/questions/6821295/add-css-box-shadow-around-the-whole-div) - This helped me to discover how to use `box-shadow` in the whole div.  

---

## Author
- Frontend Mentor ✔️- [@paulo-xavier](https://www.frontendmentor.io/profile/paulo-xavier)
- Instagram ✔️- [@oxavierpaulo](https://www.instagram.com/oxavierpaulo/)
- GitHub ✔️- [@paulo-xavier](https://github.com/paulo-xavier)
- Linkedin ✔️- [@Paulo Roberto Xavier da Silva](https://www.linkedin.com/in/paulo-xavier-15bb6924a/)
