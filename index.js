function fetchAndUpdate() {
    console.log("updating")
    tit = document.getElementById('title').value
    desc = document.getElementById('description').value
    if (localStorage.getItem('itemsJson') == null) {
      itemJsonArray = [];
      itemJsonArray.push([tit, desc]);
      localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    } else {
      itemJsonArrayString = localStorage.getItem('itemsJson')
      itemJsonArray = JSON.parse(itemJsonArrayString)
      itemJsonArray.push([tit, desc])
      localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    updation();
  }

  function updation() {

    if (localStorage.getItem('itemsJson') == null) {
      itemJsonArray = [];
      localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    } else {
      itemJsonArrayString = localStorage.getItem('itemsJson')
      itemJsonArray = JSON.parse(itemJsonArrayString);
    }
    // Filling up the table
    let tableBody = document.getElementById("tableBody")
    let str = "";
    itemJsonArray.forEach((element, index) => {
      str += `
          <tr>
          <th scope="row">${index + 1}</th>
          <td> ${element[0]}</td>
          <td> ${element[1]}</td>
          <td><button class="btn btn-primary btn-sm" onClick="deletion(${index})">Delete</button></td>
          </tr>;
          `
    });

    tableBody.innerHTML = str;
  }
  add = document.getElementById("add");
  add.addEventListener("click", fetchAndUpdate);
  updation();
  function deletion(itemIndex) {
    console.log("Delete", itemIndex)
    itemJsonArrayString = localStorage.getItem('itemsJson')
    itemJsonArray = JSON.parse(itemJsonArrayString);
    itemJsonArray.splice(itemIndex, 1);

    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    updation();

  }
  function clearList() {
    if (confirm("Are you sure you want to clear everything on your list?")) {
      console.log('Cleared everything')
      localStorage.clear();
      updation();
    }
  }
