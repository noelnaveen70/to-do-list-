function getNewENumber() {


    fetch('https://jsonplaceholder.typicode.com/todos')



        .then((res) => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json(); // Parse the response as JSON
        })




        .then((data) => {
            console.log('response data:', data);   





            // Render the todos dynamically
            const todoList = document.getElementById('todoList');
            let completedCount = 0;

            // Create an array to store completed tasks
            const completedPromises = [];





            data.forEach(todo => {
                // Create a new list item for each todo
                const li = document.createElement('li');
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = `todo-${todo.id}`;
                checkbox.checked = false; // Set all checkboxes as unchecked initially





                // Mark as completed when clicked
                checkbox.addEventListener('change', () => {
                    if (checkbox.checked) {
                        completedCount++;
                    } else {
                        completedCount--;
                    }




                    // If 5 tasks are completed, show the alert
                    if (completedCount === 5) {
                        const completionPromise = new Promise((resolve) => {
                            alert('Congrats. 5 Tasks have been Successfully Completed');
                            resolve();
                        });
                        completedPromises.push(completionPromise);
                    }
                });





                // Add checkbox and label to the list item
                const label = document.createElement('label');
                label.setAttribute('for', checkbox.id);
                label.innerText = todo.title;

                li.appendChild(checkbox);
                li.appendChild(label);
                todoList.appendChild(li);
            });






            // Wait for all promises to resolve (i.e., when 5 tasks are completed)
            Promise.all(completedPromises)
                .then(() => {
                    console.log('All completed tasks have been validated');
                });

        })




        .catch((err) => {
            console.log('error:', err);
        });
}





getNewENumber();
