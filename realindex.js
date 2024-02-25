document.getElementById('p-button').addEventListener('click', () => {

    let parent = document.getElementById(p-div);

    let newElement = document.getElementById('p');
    newElement.textContent = document.getElementById('p-input').value;
    newElement.setAttribute('id', paragraphId++);

    parent.appendChild(newElement);

    document.getElementById('p-input').value = "";

});