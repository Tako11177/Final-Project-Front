# 📝 To-Do List App

> **მარტივი და ელეგანტური დავალებების მართვის აპლიკაცია**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## 🎯 მიზანი

ეს პროექტი შექმნილია Front-End Development-ის ფინალური დავალებისთვის და მოიცავს:
- **HTML5** სემანტიკური ტეგებით
- **CSS3** თანამედროვე დიზაინით (Flexbox, Grid, Animations)
- **JavaScript ES6+** ფუნქციონალით (OOP, LocalStorage, DOM Manipulation)

---

## ✨ ფუნქციები

✅ **დავალებების დამატება** - ვალიდაციით (3+ სიმბოლო, Regex)  
✅ **დავალებების შესრულება** - Checkbox-ით მონიშვნა  
✅ **დავალებების წაშლა** - ცალ-ცალკე ან ყველა ერთად  
✅ **ძებნა** - რეალურ დროში ფილტრაცია  
✅ **ფილტრაცია** - ყველა / აქტიური / დასრულებული  
✅ **LocalStorage** - მონაცემების ავტომატური შენახვა  
✅ **Dark/Light Mode** - თემის გადართვა  
✅ **Responsive Design** - Mobile, Tablet, Desktop  
✅ **Motivational Quotes** - ციტატების ავტომატური slider  
✅ **Smooth Animations** - CSS @keyframes და transitions  

---

## 📂 პროექტის სტრუქტურა

```
todo-list-app/
│
├── index.html          # HTML სტრუქტურა
├── style.css           # CSS სტილები
├── script.js           # JavaScript ლოგიკა
└── README.md           # დოკუმენტაცია# Final-Project-Front

## 🛠️ ტექნოლოგიები

### **HTML5**
- სემანტიკური ტეგები (`<header>`, `<nav>`, `<footer>`, `<form>`)
- Meta tags (SEO & Open Graph)
- Accessibility (aria-label)

### **CSS3**
- **CSS Variables** - თემებისთვის
- **Flexbox & Grid** - layout-ისთვის
- **Media Queries** - Responsive Design
- **Animations** - @keyframes, transitions
- **Google Fonts** - Poppins
- **Font Awesome** - Icons

### **JavaScript ES6+**
- **Classes (OOP)** - Task კლასი getters/setters-ით
- **Arrow Functions** - თანამედროვე სინტაქსი
- **Array Methods** - map, filter, find, forEach
- **Spread Operator** - მონაცემების კოპირება
- **Destructuring** - ობიექტების/მასივების დაშლა
- **Template Literals** - დინამიკური HTML
- **LocalStorage API** - მონაცემების შენახვა
- **DOM Manipulation** - querySelector, createElement
- **Event Handling** - addEventListener
- **Async/Await** - Promise-ების მართვა
- **Regex Validation** - ფორმის ვალიდაცია

---

## 📚 კოდის სტრუქტურა

### **Task კლასი (OOP)**
```javascript
class Task {
    constructor(title) {
        this.id = Date.now().toString();
        this.title = title;
        this.completed = false;
    }
    
    get displayTitle() {
        return this.title.charAt(0).toUpperCase() + this.title.slice(1);
    }
    
    toggle() {
        this.completed = !this.completed;
    }
}
```

### **LocalStorage**
```javascript
// შენახვა
localStorage.setItem('tasks', JSON.stringify(tasks));

// წაკითხვა
const stored = localStorage.getItem('tasks');
tasks = JSON.parse(stored);
```

### **Regex Validation**
```javascript
const regex = /^[a-zA-Z0-9ა-ჰ\s]{3,}$/;
if (!regex.test(title)) {
    alert('არასწორი ფორმატი!');
}
```

---

## 🎨 დიზაინის მახასიათებლები

- **Color Scheme**: Indigo (#6366f1) primary color
- **Typography**: Poppins font family
- **Layout**: Centered container (max-width: 800px)
- **Shadows**: Soft elevation for depth
- **Border Radius**: 10-15px for modern look
- **Transitions**: 0.3s ease for smooth interactions
