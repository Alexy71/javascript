    const task = [];
    let time = 0;
    let timer = null;
    let timerBreak = null;
    let current = null;

    const iptAdd = document.querySelector('#iptAdd');
    const txtTask = document.querySelector('#txtTask');
    const form = document.querySelector('#form');
    const taskName = document.querySelector("#time #taskName");

    form.addEventListener('submit', e => {
        e.preventDefault();
        if (txtTask.value !== '') {
            createTask(txtTask.value);
            txtTask.value = "";
            renderTasks();
        }
    });

    function createTask(value) {
        const newTask = {
            id: (Math.random() * 100).toString(36).slice(3),
            title: value,
            completed: false,
        };
        task.unshift(newTask);
    }

    function renderTasks() {
        const html = task.map((task) => {
            return `
                <div class="tasks">
                    <div class ="completed">${
                        task.completed
                        ? `<span class="done">Done</span>`
                        : `<button class="startButton" dataId="${task.id}">Start</button>`
                    }</div>
                    <div class ="title">${task.title}</div>
                </div>
            `;
        });
        const tasksContainer = document.querySelector("#tasks");
        tasksContainer.innerHTML = html.join("");

        const startButtons = document.querySelectorAll('.task .startButton');

        startButtons.forEach(button => {
            button.addEventListener('click', e => {
                if (!timer) {
                    const id = button.getAttribute("dataId");
                    startButtonHandler(id);
                    button.textContent = "In progress";
                }
            });
        });
        function startButtonHandler(id) {
            time = 25 * 60;
            current = id;
            const taskIndex = task.findIndex(task => task.id == id);
            taskName.textContent = task[taskIndex].title;
    
            timer = setInterval(() => {
                timeHandler(id);
            }, 1000);
        }
    
        function timeHandler(id) {
            time--;
            renderTime();
    
            if (time == 0) {
                clearInterval(timer);
                current = null;
                taskName.textContent = "";
                renderTime();
            }
        }
    
        function renderTime() {
            const timeDiv = document.querySelector('#time #value');
            const minutes = parseInt(time / 60);
            const seconds = parseInt(time % 60);
    
            timeDiv.textContent = `${minutes < 10 ? "0" : ""}${minutes}:${
                seconds < 10 ? "0" : ""
                }${seconds}`;
        }
    }


