// Array of User Objects
let users = [
  {
    "id": "#98765",
    "name": "Mustapha Ansari",
    "role": "Designer",
    "isLoggedIn": true,
    "loggedinDuration": "23",
    "takenActions": ["Visit Google", "Play Games"],
    "regDate":"2016-05-11"
  },
  {
    "id": "#98766",
    "name": "Naziah Bashir",
    "role": "Computer Systems Analyst II",
    "isLoggedIn": false,
    "loggedinDuration": "56",
    "takenActions": ["Visit Google", "Play Games", "Visit Linked In"],
    "regDate":"2019-06-02"
  },
  {
    "id": "#98767",
    "name": "Mohamed Bashir",
    "role": "Social Worker",
    "isLoggedIn": true,
    "loggedinDuration": "17",
    "takenActions": ["Visit Google", "Visit Youtube", "Visit Linked In"],
    "regDate":"2020-06-02"
  },
  {
    "id": "#98768",
    "name": "Ubayda Shams",
    "role": "Project Manager",
    "isLoggedIn": false,
    "loggedinDuration": "20",
    "takenActions": ["Visit Google", "Play Pinball", "Visit Linked In"],
    "regDate":"2017-01-23"
  },
  {
    "id": "#98769",
    "name": "Abd-El-Kader Huda",
    "role": "Quality Control Specialist",
    "isLoggedIn": false,
    "loggedinDuration": "06",
    "takenActions": ["Visit Google", "Play Games", "Visit Linked In"],
    "regDate":"2020-07-16"
  },
  {
    "id": "#98770",
    "name": "Qabil Karim",
    "role": "Recruiter",
    "isLoggedIn": true,
    "loggedinDuration": "10",
    "takenActions": ["Visit Google", "Play Games"],
    "regDate":"2021-03-16"
  },
  {
    "id": "#98771",
    "name": "Luqman Shaheed",
    "role": "Programmer Analyst I",
    "isLoggedIn": true,
    "loggedinDuration": "13",
    "takenActions": ["Play Games", "Visit Linked In"],
    "regDate":"2016-09-13"
  },
  {
    "id": "#98772",
    "name": "Ashraf Nazeer",
    "role": "Technical Writer",
    "isLoggedIn": true,
    "loggedinDuration": "07",
    "takenActions": ["Visit Google", "Play Games", "Visit Linked In"],
    "regDate":"2017-03-27"
  },
  {
    "id": "#98773",
    "name": "Firas Shaban",
    "role": "Software Test Engineer IV",
    "isLoggedIn": false,
    "loggedinDuration": "60",
    "takenActions": ["Visit Google", "Play Games", "Visit Linked In"],
    "regDate":"2019-11-19"
  },
]

// Initiating the Table with the Table Header
var tableInit = `<table id="my-table" width="100%;">
                <thead>
                  <tr class="table__header">
                    <th><div><span class="indicator ${even}"></span></div></th>
                    <th>
                      <div>
                        <span class="header__name">ID</span
                        ><span class="arrow__down">&#9660;</span>
                      </div>
                    </th>
                    <th>
                      <div>
                        <span class="header__name">Name</span
                        ><span class="arrow__down">&#9660;</span>
                      </div>
                    </th>
                    <th>
                      <div>
                        <span class="header__name">Role</span
                        ><span class="arrow__down">&#9660;</span>
                      </div>
                    </th>
                    <th>
                      <div>
                        <span class="header__name">Is Logged In</span
                        ><span class="arrow__down">&#9660;</span>
                      </div>
                    </th>
                    <th>
                      <div>
                        <span class="header__name">Logged in duration</span
                        ><span class="arrow__down">&#9660;</span>
                      </div>
                    </th>
                    <th class = "disableSort">
                      <div>
                        <span class="header__name">Taken Actions</span
                      </div>
                    </th>
                    <th>
                      <div>
                        <span class="header__name">Registration Date</span
                        ><span class="arrow__down">&#9660;</span>
                      </div>
                    </th>
                  </tr></thead><tbody>`;
// ----------------------------------------
// Displaying table data
// ----------------------------------------
var output = "";
var statusColor = "";
var loggedinUsers = [];
var minutesLoggedIn = [];
var even = "";

for (var i in users) {
    // Get a list with Logged-in Users
    if(users[i].isLoggedIn) {
        // if the user is logged in
        statusColor = "lightgreen";
        loggedinUsers.push(users[i].name);
    }
    else if (!users[i].isLoggedIn) {
        statusColor = "red";
    }
    // Change indicator color evenly
    if (i % 2 === 0) {
        even = "even";
    }
    else {
        even = "";
    }
    // Get a list with minutes spent by every user
    minutesLoggedIn.push(users[i].loggedinDuration);
    output +=
                `<tr> 
                    <td>
                      <div>
                        <span class="indicator ${even}"></span>
                      </div>
                    </td>
                    <td><div>${users[i].id}</div></td>
                    <td><div class="user__name">${users[i].name}</div></td>
                    <td><div class="user__role">${users[i].role}</div></td>
                    <td><div class="isLogged" style="color:${statusColor}">${users[i].isLoggedIn}</div></td>
                    <td><div>${users[i].loggedinDuration} mins</div></td>
                    <td>
                      <div>
                        <p class="taken__actions">${users[i].takenActions}</p>
                      </div>
                    </td>
                    <td><div class="reg__date">${users[i].regDate}</div></td>
                </tr>`;
}
var loggedUsers = loggedinUsers.length;
// Calculate the total minutes that users spent on the network (loggedIn)
var totalMintues = minutesLoggedIn.reduce((a, b) => parseInt(a) + parseInt(b), 0);
// Display the number of loggedin Users
document.getElementById("loggedInUsers").innerHTML = loggedUsers;
// Display the list of loggedin Users
for (var i = 0; i<loggedinUsers.length; i++) {
document.getElementById("logusers").innerHTML += `<i>${loggedinUsers[i]}</i>`;
}
// Display the total minutes that users spent on the network (loggedIn)
document.getElementById("timeSpent").innerHTML = totalMintues;
// Display the final table data
document.getElementById("table-responsive").innerHTML = tableInit + output + "</tbody></table>"
// ----------------------------------------

// Searching & Filtering
//-------------------------------------------------
// First - Searching by 'Name'
const searchElement = document.getElementById("search_by_name");
searchElement.addEventListener("input", e => {
    // Get the value typed in the input
    const { value } = e.target;
    // get a list of all usernames
    const userNames = document.querySelectorAll(".user__name"); 
    // Loop on the list of usernames and compare with the input value
    userNames.forEach(name => {
        // if a match is found
        if(name.innerText.toLowerCase().includes(value.toLowerCase())) {
            // Display the row of the matched name
            name.parentElement.parentElement.style.display = "table-row";
        }
        else {
            // Delete the other rows that found no match
            name.parentElement.parentElement.style.display = "none";
        }
    });
});

// ------------------------------------------
// Second - Filtering By "Date"
// Let the Date Chosen in the 'ToDate' by MIN the Date Chosen in the 'From Date' & Never be less
var fromDate;
$("#fromDate").on("change", function (){
    fromDate = $(this).val();
    $('#toDate').prop("min", function(){
        return fromDate;
    });
});
// Let the Date Chosen in the 'FromDate' by MAX the Date Chosen in the 'To Date' & Never be more    
var toDate;
$("#toDate").on("change", function (){
    toDate = $(this).val();
    $('#fromDate').prop("max", function(){
        return toDate;
    });
});

$(document).ready(function () {
    // Extract the Date Value from the input
    let now = new Date();
    let day = ("0" + now.getDate()).slice(-2);
    let month = ("0" + (now.getMonth() + 1)).slice(-2);
    let today = day + "-" + month + "-" + now.getFullYear();

    $("#fromDate").val(today);
    $("#toDate").val(today);

    // When clicking on Filter by Date button
    $("#submitDates").click(function () {
        x = $("#fromDate").val();
        y = $("#toDate").val();

        // Get a list with all 'registartionDates' of the users
        const registrationDate = document.querySelectorAll(".reg__date");
        // Loop on the list and check if any of dates in the list is between the filter range
        registrationDate.forEach( rdate => {
            if(rdate.innerText > x && rdate.innerText < y) {
              rdate.parentElement.parentElement.style.display = "table-row";
            }
            else {
              rdate.parentElement.parentElement.style.display = "none";
            }
          });
    });
});

// --------------------------------
// Third - Filtering By "Role"
const filterByRole = document.getElementById("filter_by_role");
const filterList = document.getElementById("filter__list");
const roleFilters = filterByRole.querySelectorAll("li");

// Display the filter list by clicking on the "Filter By Role" Div
filterByRole.addEventListener("click", ()  => {
  filterList.classList.toggle("open");
})

// Loop on the roles and compare
roleFilters.forEach(filter => {
    filter.addEventListener("click", () => {
        const value = filter.innerText;
        const userRole = document.querySelectorAll(".user__role");

        userRole.forEach(role=>{
            if(role.innerText.toLowerCase().includes(value.toLowerCase()) || value === "All" ) {
                role.parentElement.parentElement.style.display = "table-row";
            }
            else {
                role.parentElement.parentElement.style.display = "none";
            }
        });
    });
});


// "Switch Theme Button" Using "Local Storage"

// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#checkbox');
const darkModeState = document.querySelector('#darkmode__state');


const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
  darkModeState.innerHTML = "OFF";
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
  
  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
      enableDarkMode();
        darkModeState.innerHTML = "OFF";

    
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
    darkModeState.innerHTML = "ON";

  }
});


// Pagination 
       $("#my-table").tablemanager({
        firstSort: [
            [2, 0]
        ],
        debug: true,
        vocabulary: {
            voc_show_rows: "Rows Per Page"
        },
        pagination: true,
        showrows: [5, 10, 20, 50 ,100],
    });

    // $("#pagesControllers button").on("click", function(){
    //   if(!$(this).hasClass("active")){
    //     $("#pagesControllers button.active").removeClass("active");
    //     $(this).addClass("active");
    //   }

    // });








