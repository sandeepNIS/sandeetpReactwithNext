let username = '';
        let email = '';
        let password = '';
  
        // Functions to update the input text
        updateFname = () => {
            username = document
                .getElementByName('username').value;
        }
  
        updateLname = () => {
            email = document
                .getElementsByName('email').value;
        }
  
        updateSubject = () => {
            password = document
                .getElementByName('password').value;
        }
  
        // Event listener for the 
        // 'beforeunload' event
        window.addEventListener('beforeunload', 
                                function (e) {
  
            // Check if any of the input
            // fields are filled
            if (username !== '' ||
                email !== '' ||
                password !== '') {
  
                // Cancel the event and
                // show alert that the unsaved
                // changes would be lost
                e.preventDefault();
                e.returnValue = '';
            }
        });