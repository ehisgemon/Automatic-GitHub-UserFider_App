// init GitHub
const github = new GitHub;

// init UI
const ui = new UI;

// Get  Input Element
const searchUser = document.getElementById('searchUser');

// Add Event Listener
searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;

    if(userText !== ''){
        github.getUser(userText)
              .then(data => {
                if(data.profile.message === 'Not Found'){
                    // show Alert mssg
                   ui.showAlert('search not found', 'alert alert-danger')
                }else {
                   // Show profile
                   ui.showProfile(data.profile);
                   ui.showRepo(data.repos);
                }
              })

    }else {
        // clear profile
        ui.clearProfile();
    }

});