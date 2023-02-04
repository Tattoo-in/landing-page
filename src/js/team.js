var teamData = [
    {image: "https://cdn5.vectorstock.com/i/1000x1000/92/89/hipster-avatar-image-vector-19639289.jpg", name: "Sample", about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, voluptatem."},
    {image: "https://cdn5.vectorstock.com/i/1000x1000/92/89/hipster-avatar-image-vector-19639289.jpg", name: "Sample", about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, voluptatem."},
    {image: "https://cdn5.vectorstock.com/i/1000x1000/92/89/hipster-avatar-image-vector-19639289.jpg", name: "Sample", about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, voluptatem."},
    {image: "https://cdn5.vectorstock.com/i/1000x1000/92/89/hipster-avatar-image-vector-19639289.jpg", name: "Sample", about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, voluptatem."},
];

const employeeTemplate = document.getElementsByClassName("employee-template")[0];

teamData.forEach(e => {
    console.log("team is owrkig");
    let employee = e;

    let clone = employeeTemplate.content.cloneNode(true);

    let image = clone.querySelectorAll('img')[0];
    let name = clone.querySelectorAll('h2')[0];
    let text = clone.querySelectorAll('p')[0];

    image.setAttribute("src", employee.image);
    name.innerHTML = employee.name;
    text.innerHTML = employee.about;

    employeeTemplate.parentNode.appendChild(clone);

});