# 🎯 دليل البداية السريعة (Quick Start)

## ⚡ في 5 دقائق فقط!

### الخطوة 1: Download الملفات ⬇️

```bash
# نزّل المشروع كاملاً
# أو استخدم الملفات الموجودة معك
```

### الخطوة 2: الهيكل الكامل 📂

```
botola-vs-champions/
│
├── index.html          # الصفحة الرئيسية ✅
│
├── css/
│   └── style.css      # كل التصميم ✅
│
├── js/
│   ├── charts.js      # إعدادات Chart.js ✅
│   └── main.js        # وظائف JavaScript ✅
│
├── README.md           # الوثائق الكاملة 📖
├── CHANGELOG.md        # سجل التغييرات 📋
└── DEPLOYMENT.md       # دليل النشر 🚀
```

### الخطوة 3: اختبار محلي 🧪

```bash
# Option 1: افتح index.html مباشرة
# Double-click على الملف

# Option 2: Python Server
python3 -m http.server 8000
# ثم افتح: http://localhost:8000

# Option 3: VS Code Live Server
# Install Extension → Right-click → Open with Live Server
```

### الخطوة 4: Deploy على GitHub Pages 🌐

```bash
# 1. أنشئ Repository جديد على GitHub
# 2. Upload الملفات كلها
# 3. Settings → Pages → Source: main branch, / (root)
# 4. Save ✅

# الرابط سيكون:
https://YOUR_USERNAME.github.io/REPO_NAME/
```

---

## 🎨 التخصيص السريع

### غيّر الألوان 🌈

في `css/style.css` - السطر 15:

```css
:root {
    --morocco-red: #C1272D;      /* غيّر هنا */
    --champions-blue: #034694;   /* غيّر هنا */
}
```

### غيّر البيانات 📊

في `js/charts.js` - السطر 30:

```javascript
data: [52, 420, 78]  // غيّر الأرقام هنا
```

### غيّر النصوص ✏️

في `index.html` - ابحث عن النص وغيّره مباشرة.

---

## ✅ Checklist ما قبل النشر

- [ ] كل الملفات موجودة (index.html, css/, js/)
- [ ] الروابط تعمل
- [ ] Charts تظهر بشكل صحيح
- [ ] Responsive على Mobile
- [ ] اختبرت على متصفحات مختلفة

---

## 🆘 حل المشاكل السريع

### Charts ما تظهرش؟
✅ تأكد من السطر ده في `index.html`:
```html
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js"></script>
```

### الألوان غلط؟
✅ امسح Cache: `Ctrl + Shift + R`

### ما يشتغلش على GitHub Pages؟
✅ انتظر 5 دقائق، ثم حدّث الصفحة

---

## 📞 محتاج مساعدة؟

- 📧 Email: elmehdilamtoukar@gmail.com
- 💻 GitHub: [@mehdipecko](https://github.com/mehdipecko)
- 🐛 Issues: [Report Bug](https://github.com/mehdipecko/botola-vs-champions/issues)

---

<div align="center">

**كل شيء جاهز! 🎉**

**ابدأ التخصيص والنشر الآن! 🚀**

</div>
