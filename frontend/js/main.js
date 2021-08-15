window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const apiEndpoint = '';

const getVisitCount = async () => {
    let count = 0;
    let response = {};

    try {

        response = await (await fetch(apiEndpoint)).json();

        count = response.count;
        document.getElementById("counter").innerText = count;


    } catch (error) {

        console.log(error);
    }

    return count;
}