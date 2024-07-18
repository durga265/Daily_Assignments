// Task1 - Using Fetch API
function fetcData() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error)
    });
}
fetcData();


// Task2 - Handling Promises with Async and Await
async function fetchData1() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error("HTTP error");
    }
    const fetdata = await response.json();
    console.log(fetdata);
  } catch (error) {
    console.error('Error', error);
  }
}

fetchData1();

// Task3 - Fetch with Parameters

document.addEventListener("DOMContentLoaded", () => {
  async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      if (!response.ok) {
        throw new Error("HTTP error");
      }
      const data = await response.json();
      populateTable(data);
    } catch (error) {
      console.log("error", error);
    }
  }

  function populateTable(data) {
    const tableBody = document.querySelector("#table-data tbody");

    data.forEach((table) => {
      const row = document.createElement("tr");

      const idCell = document.createElement('td');
      idCell.textContent = table.id;
      row.appendChild(idCell);

      const titleCell = document.createElement('td');
      titleCell.textContent = table.title;
      row.appendChild(titleCell);

      const completeCell = document.createElement('td');
      completeCell.textContent = table.completed;
      row.appendChild(completeCell);

      tableBody.appendChild(row);
    });
  }

  fetchData();
});


// Task4 - Error Handling in Asynchronous Code

const fetchData3 = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products/invalid");

    if (!response.ok) {
      throw new Error("HTTP error");
    }

    const data = await response.json();

    console.log("response data:", data);
  } catch (error) {
    console.error("error in data:", error);
  }
};

fetchData3();

//Task5 - Combining Fetch with Async/Await and Error Handling

async function fetchPost() {
  const fetchurl = ("https:jsonplaceholder.typicode.com/posts");

  try {
    const response = await fetch(fetchurl);
    if (!response.ok) {
      throw new Error("HTTP error")
    }
    const fthpost = await response.json();
    console.log(fthpost);
  } catch (error) {
    console.log('fetching error:', error);
  }
}
fetchPost();
