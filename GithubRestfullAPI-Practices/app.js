const accessToken =
  "";//use your access tokens

const header = document.createElement("h1");
header.textContent = "GITHUB SEARCH TOOLS";
document.body.appendChild(header);

const nameInput = document.createElement("input");
nameInput.placeholder = "Enter GitHub username";
document.body.appendChild(nameInput);

const btn = document.createElement("button");
btn.textContent = "Search a GitHub User";
document.body.appendChild(btn);
btn.style.width = "100px";

btn.addEventListener("click", async () => {
  let uservalue = nameInput.value;
  console.log(uservalue);

  try {
    const response = await fetch(`https://api.github.com/users/${uservalue}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    

    const mycontainer = document.createElement('main')
    document.body.appendChild(mycontainer)

    const container = document.createElement('div')
    mycontainer.appendChild(container)

    const imageUrl = document.createElement('img');
    imageUrl.src = data.avatar_url
    container.appendChild(imageUrl)

    const myarticle = document.createElement('article')
    mycontainer.appendChild(myarticle)

    const name = document.createElement("p");
    name.style.fontSize = "30px";
    myarticle.appendChild(name);
    name.textContent = data.name;

    const repository = document.createElement('p')
    repository.textContent =` ${data.public_repos} Repos`
    myarticle.appendChild(repository)

    const user = document.createElement('p')
    user.textContent = data.type
    myarticle.appendChild(user)

    const location = document.createElement('p')
    location.textContent = data.location
    myarticle.appendChild(location)

    const description = document.createElement('p')
    description.textContent = data.bio
    myarticle.appendChild(description)

  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
