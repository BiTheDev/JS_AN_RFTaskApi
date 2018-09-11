const Tasks = require("./controller.js");

function router(app)
{
    app.get('/',Tasks.home)
    app.get('/tasks/',Tasks.allTasks);
    app.get('/tasks/:id/',Tasks.getTask);
    app.post('/tasks/new/',Tasks.createTask);
    app.put('/tasks/update/:id', Tasks.updateTask);
    app.delete('/tasks/remove/:id/', Tasks.removeTask);
}

module.exports = router;