import staffMembers from './_incs/data.js';

// Selectors
const selectors = {
  staffBtn: document.querySelector('[el="staff-btn"]'),
  staffList: document.querySelector('[el="staff-list"]')
}

// DOM nodes
const nodes = {
  viewStaffBtn: null,
  listPopulated: false
}

// Click event listeners
const setClickEvents = () => {
  // Adds a click event listener which calls loadStaffMembers func
  selectors.staffBtn.addEventListener('click', loadStaffMembers);
}

// Show the staff members to the user
const showStaffMembers = (member) => {
  const li = getMemberTemplate(member);
  selectors.staffList.insertAdjacentHTML('beforeEnd', li);
  
  // Sets listPopulated to true
  nodes.listPopulated = true;
}

// Load the staff members from the data
const loadStaffMembers = () => {
  // Checks if the listPopulated is true
  if (nodes.listPopulated) {
    // While there is still a child element within staffList ul element, condition returns true 
    while (staffList.firstChild) {
      // Removes the last child of the staffList ul element 
      staffList.removeChild(staffList.lastChild);
    }
  }
  // Loops through the data and calls the showStaffMembers func
  staffMembers.forEach(showStaffMembers);
}

// Return the HTML markup for a staff member
const getMemberTemplate = member => {
  return `
    <li class="staff-member" style="text-align:center;">
      <img src=${member.img} alt=${member.name} />
      <p>${member.name}</p>
      <p>${member.occupation}</p>
      <p>${member.team}</p>
    </li>
  `
}

// Initialise the script
const init = () => {
  setClickEvents();
}

// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  init()
})