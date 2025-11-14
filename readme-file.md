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
└── README.md           # დოკუმენტაცია
```

---

## 🚀 დაწყება

### 1️⃣ **ლოკალურად გაშვება**

```bash
# Repository-ს კლონირება
git clone https://github.com/yourusername/todo-list-app.git

# საქაღალდეში შესვლა
cd todo-list-app

# index.html გახსენით ბრაუზერში
# ან გამოიყენეთ Live Server (VS Code extension)
```

### 2️⃣ **GitHub Pages-ზე დეპლოი**

1. GitHub-ზე შექმენით repository სახელით `todo-list-app`
2. ატვირთეთ ყველა ფაილი
3. Settings → Pages → Source: `main` branch → Save
4. თქვენი საიტი იქნება: `https://yourusername.github.io/todo-list-app`

---

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

---

## 📱 Responsive Breakpoints

```css
/* Desktop (Default) */
.container { max-width: 800px; }

/* Tablet */
@media (max-width: 768px) { ... }

/* Mobile */
@media (max-width: 480px) { ... }
```

---

## 🔄 გაუმჯობესების იდეები

- [ ] დავალებების რედაქტირება
- [ ] დავალებების პრიორიტეტები (High, Medium, Low)
- [ ] კატეგორიები (სამსახური, სახლი, ჰობი)
- [ ] Drag & Drop გადათრევა
- [ ] Export/Import JSON
- [ ] Pomodoro Timer
- [ ] Statistics & Charts

---

## 📖 სწავლების მასალა

პროექტი ასრულებს შემდეგ მოდულებს:

### **მოდული 1**: HTML + CSS საფუძვლები + GitHub + Figma
- ✅ HTML სტრუქტურა და სემანტიკური ტეგები
- ✅ CSS Box Model, Flexbox, Grid
- ✅ Google Fonts & Font Awesome
- ✅ Sticky Header

### **მოდული 2**: Responsive + JavaScript საფუძვლები
- ✅ Media Queries (Mobile, Tablet, Desktop)
- ✅ Open Graph meta tags
- ✅ JavaScript ცვლადები და მონაცემთა ტიპები
- ✅ მასივები, ლუპები, array methods

### **მოდული 3**: Functions + DOM + Events
- ✅ Regular და Arrow Functions
- ✅ ES6 (Spread, Destructuring)
- ✅ DOM manipulation
- ✅ Event handling

### **მოდული 4**: Advanced JS + OOP + Storage
- ✅ Classes (getters/setters)
- ✅ LocalStorage
- ✅ Regex validation
- ✅ setTimeout/Promise/async-await
- ✅ CSS Animations (@keyframes)
- ✅ Dark/Light Mode

---

## 👨‍💻 ავტორი

**თქვენი სახელი**
- 📧 Email: your.email@example.com
- 🔗 GitHub: [@yourusername](https://github.com/yourusername)

---

## 📄 ლიცენზია

ეს პროექტი ღიაა საგანმანათლებლო მიზნებისთვის.

---

## 🙏 მადლობა

- [Font Awesome](https://fontawesome.com/) - Icons
- [Google Fonts](https://fonts.google.com/) - Poppins Font
- [Unsplash](https://unsplash.com/) - Open Graph Image

---

**⭐ თუ პროექტი მოგეწონა, მიეცით Star GitHub-ზე!**