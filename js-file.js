// ============================================
// TASK CLASS (OOP)
// ============================================
class Task {
    constructor(title) {
        this.id = Date.now().toString();
        this.title = title;
        this.completed = false;
        this.createdAt = new Date().toISOString();
    }

    // Getter
    get displayTitle() {
        return this.title.charAt(0).toUpperCase() + this.title.slice(1);
    }

    // Setter
    set taskTitle(newTitle) {
        if (newTitle.length >= 3) {
            this.title = newTitle;
        }
    }

    toggle() {
        this.completed = !this.completed;
    }
}

// ============================================
// APP STATE
// ============================================
let tasks = [];
let currentFilter = 'all';

// ============================================
// DOM ELEMENTS
// ============================================
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const clearAllBtn = document.getElementById('clearAll');
const taskCount = document.getElementById('taskCount');
const themeToggle = document.getElementById('themeToggle');
const burger = document.getElementById('burger');

// ============================================
// QUOTES DATA
// ============================================
const quotes = [
    { text: "წარმატება არის მცირე ძალისხმევების ჯამი, რომელიც ყოველდღე მეორდება.", author: "Robert Collier" },
    { text: "დღეს რაც შეიძლება გააკეთო, ნუ გადადებ ხვალამდე.", author: "Benjamin Franklin" },
    { text: "თუ გეგმავ წელს, დათესე ბრინჯი. თუ გეგმავ ათწლეულს, დარგე ხე.", author: "ჩინური ანდაზა" },
    { text: "მიზანი ცოტა არაფერია. ყველაფერი არის მოძრაობა.", author: "Arthur Ashe" }
];

let currentQuoteIndex = 0;

// ============================================
// INITIALIZATION
// ============================================
init();

function init() {
    loadTasks();
    renderTasks();
    loadTheme();
    startQuoteSlider();
    attachEventListeners();
}

function attachEventListeners() {
    taskForm.addEventListener('submit', handleSubmit);
    searchInput.addEventListener('input', handleSearch);
    filterButtons.forEach(btn => btn.addEventListener('click', handleFilter));
    clearAllBtn.addEventListener('click', handleClearAll);
    themeToggle.addEventListener('click', toggleTheme);
    burger.addEventListener('click', toggleBurger);
}

// ============================================
// ADD TASK
// ============================================
function handleSubmit(e) {
    e.preventDefault();
    
    const title = taskInput.value.trim();

    // Validation with Regex
    const regex = /^[a-zA-Z0-9ა-ჰ\s]{3,}$/;
    
    if (!title) {
        alert('⚠️ გთხოვთ შეიყვანოთ დავალება!');
        return;
    }

    if (!regex.test(title)) {
        alert('⚠️ დავალება უნდა შეიცავდეს მინიმუმ 3 სიმბოლოს და არ უნდა შეიცავდეს სპეციალურ სიმბოლოებს!');
        return;
    }

    // Create new task
    const task = new Task(title);
    tasks.push(task);
    
    saveTasks();
    renderTasks();
    taskInput.value = '';
    
    // Show success message with setTimeout
    showSuccessMessage('დავალება დაემატა! ✅');
}

// ============================================
// RENDER TASKS (Arrow Function)
// ============================================
const renderTasks = () => {
    const searchTerm = searchInput.value.toLowerCase();
    
    let filteredTasks = tasks.filter(task => {
        const matchesSearch = task.title.toLowerCase().includes(searchTerm);
        const matchesFilter = 
            currentFilter === 'all' || 
            (currentFilter === 'active' && !task.completed) ||
            (currentFilter === 'completed' && task.completed);
        
        return matchesSearch && matchesFilter;
    });

    // Update count
    updateTaskCount();

    // Empty state
    if (filteredTasks.length === 0) {
        taskList.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-clipboard-check"></i>
                <p>${tasks.length === 0 ? 'დავალებები არ არის. დაამატე პირველი!' : 'დავალებები ვერ მოიძებნა 🔍'}</p>
            </div>
        `;
        return;
    }

    // Render tasks using template literals
    taskList.innerHTML = filteredTasks.map(task => `
        <li class="task-item ${task.completed ? 'completed' : ''}" data-id="${task.id}">
            <div class="checkbox ${task.completed ? 'checked' : ''}" onclick="toggleTask('${task.id}')">
                ${task.completed ? '<i class="fas fa-check" style="color: white; font-size: 0.8rem;"></i>' : ''}
            </div>
            <span class="task-text">${task.displayTitle}</span>
            <div class="task-actions">
                <button class="btn-delete" onclick="deleteTask('${task.id}')">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </li>
    `).join('');
};

// ============================================
// TOGGLE TASK
// ============================================
function toggleTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.toggle();
        saveTasks();
        renderTasks();
    }
}

// ============================================
// DELETE TASK
// ============================================
function deleteTask(id) {
    if (confirm('დარწმუნებული ხარ, რომ გსურს ამ დავალების წაშლა?')) {
        tasks = tasks.filter(t => t.id !== id);
        saveTasks();
        renderTasks();
        showSuccessMessage('დავალება წაიშალა! 🗑️');
    }
}

// ============================================
// SEARCH
// ============================================
function handleSearch() {
    renderTasks();
}

// ============================================
// FILTER
// ============================================
function handleFilter(e) {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    currentFilter = e.target.dataset.filter;
    renderTasks();
}

// ============================================
// CLEAR ALL TASKS
// ============================================
function handleClearAll() {
    if (tasks.length === 0) {
        alert('დავალებები უკვე ცარიელია!');
        return;
    }

    if (confirm('დარწმუნებული ხარ, რომ გსურს ყველა დავალების წაშლა?')) {
        tasks = [];
        saveTasks();
        renderTasks();
        showSuccessMessage('ყველა დავალება წაიშალა! 🗑️');
    }
}

// ============================================
// UPDATE TASK COUNT
// ============================================
function updateTaskCount() {
    const activeCount = tasks.filter(t => !t.completed).length;
    const total = tasks.length;
    taskCount.textContent = `${activeCount} აქტიური / ${total} სულ`;
}

// ============================================
// SUCCESS MESSAGE
// ============================================
function showSuccessMessage(message) {
    const msgEl = document.createElement('div');
    msgEl.className = 'success-message';
    msgEl.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    document.body.appendChild(msgEl);

    setTimeout(() => {
        msgEl.remove();
    }, 3000);
}

// ============================================
// LOCAL STORAGE - SAVE
// ============================================
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// ============================================
// LOCAL STORAGE - LOAD
// ============================================
function loadTasks() {
    const stored = localStorage.getItem('tasks');
    if (stored) {
        const parsed = JSON.parse(stored);
        // Reconstruct Task instances
        tasks = parsed.map(t => {
            const task = new Task(t.title);
            task.id = t.id;
            task.completed = t.completed;
            task.createdAt = t.createdAt;
            return task;
        });
    }
}

// ============================================
// THEME TOGGLE
// ============================================
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    const icon = themeToggle.querySelector('i');
    icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    const icon = themeToggle.querySelector('i');
    icon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// ============================================
// BURGER MENU TOGGLE
// ============================================
function toggleBurger() {
    burger.classList.toggle('active');
    // In a real app, you would show/hide a mobile menu here
}

// ============================================
// QUOTE SLIDER
// ============================================
function startQuoteSlider() {
    setInterval(() => {
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
        const quote = quotes[currentQuoteIndex];
        
        const quoteContent = document.getElementById('quoteContent');
        quoteContent.style.opacity = '0';
        
        setTimeout(() => {
            quoteContent.innerHTML = `
                <p class="quote-text">"${quote.text}"</p>
                <p class="quote-author">— ${quote.author}</p>
            `;
            quoteContent.style.opacity = '1';
        }, 300);
    }, 5000);
}

// ============================================
// ASYNC/AWAIT SIMULATION (for demonstration)
// ============================================
async function simulateAPI() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ message: 'Data loaded successfully!' });
        }, 1000);
    });
}

// ============================================
// SPREAD OPERATOR EXAMPLE
// ============================================
function addMultipleTasks(...taskTitles) {
    const newTasks = taskTitles.map(title => new Task(title));
    tasks = [...tasks, ...newTasks];
    saveTasks();
    renderTasks();
}

// ============================================
// DESTRUCTURING EXAMPLE
// ============================================
function getTaskStats() {
    const { length: total } = tasks;
    const completed = tasks.filter(t => t.completed).length;
    const active = total - completed;
    
    return { total, completed, active };
}

// ============================================
// INSTANCEOF CHECK (for demonstration)
// ============================================
// Uncomment to test:
// console.log('First task is Task instance:', tasks[0] instanceof Task);