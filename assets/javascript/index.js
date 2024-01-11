const url = "https://api.adviceslip.com/advice";

const adviceId = document.getElementById('advice-id'); 
const adviceMessage = document.getElementById('advice-message'); 
const changeAdviceButton = document.getElementById('change-advice-button'); 


changeAdviceButton.addEventListener('click', () => {
    fetchDataApi(); 
})

const fetchDataApi = () => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        printDataInScreen(data); 
    }); 
}

const printDataInScreen = (data) => {
    
    adviceId.textContent = `Advice #${data.slip.id}`; 
    adviceMessage.textContent = `${data.slip.advice}`;  

}

fetchDataApi();

