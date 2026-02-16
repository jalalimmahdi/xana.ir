# پروژه Xana.ir | ساختار و نحوه استفاده

یک ساختار مدرن و قابل تعبیر برای وب‌سایت آموزشی Xana.

## 📁 ساختار پروژه

```
Xana.ir/
│
├── 📄 index.html                    # صفحه اصلی
│
├── 📁 pages/                        # صفحات HTML
│   ├── class_python.html           # دوره پایتون
│   ├── class_javascript.html       # (برای دوره‌های جدید)
│   └── about.html                  # (صفحات دیگر)
│
├── 📁 css/                          # فایل‌های استایل
│   └── style.css                   # تمام استایل‌های مشترک
│
├── 📁 js/                           # فایل‌های جاوااسکریپت
│   ├── main.js                     # اسکریپت اصلی
│   └── utils.js                    # توابع کمکی
│
├── 📁 assets/                       # منابع و فایل‌های رسانه ای
│   ├── 🖼️ images/                   # تصاویر
│   │   ├── logo.png
│   │   ├── hero-bg.jpg
│   │   └── teacher-avatar.jpg
│   │
│   ├── 🎬 videos/                   # فیلم‌ها
│   │   ├── intro.mp4
│   │   └── tutorial.mp4
│   │
│   ├── 🎨 icons/                    # آیکون‌ها
│   │   ├── phone.svg
│   │   ├── email.svg
│   │   └── whatsapp.svg
│   │
│   └── 🔤 fonts/                    # فونت‌های سفارشی
│       └── Vazirmatn.woff2
│
├── 📄 README.md                     # این فایل
└── 📄 .gitignore                    # فایل‌های نادیده
```

## 🎯 چگونه از هر بخش استفاده کنیم

### کاهش استایل‌ها به CSS

تمام استایل‌های سایت در فایل `css/style.css` تمرکز‌دارند. هنگام تغییر رنگ‌ها یا طرح‌ها، این فایل را ویرایش کنید:

```css
:root {
  --bg: #f3f6f4;           /* رنگ زمینه*/
  --panel: #ffffff;        /* رنگ پانل‌ها */
  --ink: #132018;          /* رنگ متن */
  --brand: #116149;        /* رنگ برند*/
}
```

### استفاده از تصاویر

برای افزودن تصویر در صفحه، ابتدا آن را در `assets/images/` قرار دهید:

```html
<!-- از صفحات pages/ استفاده‌شده -->
<img src="../assets/images/logo.png" alt="Xana Logo" />

<!-- از صفحه اصلی (index.html) استفاده‌شده -->
<img src="assets/images/logo.png" alt="Xana Logo" />
```

### استفاده از فیلم‌ها

برای افزودن ویدیو:

```html
<video controls width="100%">
  <source src="../assets/videos/intro.mp4" type="video/mp4">
  مرورگر شما از ویدیو پشتیبانی نمی‌کند.
</video>
```

### استفاده از آیکون‌ها

برای استفاده از SVG آیکون‌ها:

```html
<img src="../assets/icons/phone.svg" alt="تلفن" width="24" height="24" />
```

## 📝 ایجاد صفحات جدید

برای اضافه کردن دوره‌ی جدید (مثلاً JavaScript)، این مراحل را انجام دهید:

### 1. یک فایل HTML جدید ایجاد کنید
فایل `pages/class_javascript.html` را ایجاد کنید:

```html
<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>دوره جاوااسکریپت | Xana</title>
  <link rel="stylesheet" href="../css/style.css" />
</head>
<body>
  <main class="container">
    <!-- محتوا اینجا -->
  </main>
</body>
</html>
```

### 2. محتوا را اضافه کنید

```html
<section class="hero">
  <div class="hero-card">
    <span class="badge">دوره تخصصی برنامه‌نویسی</span>
    <h1>دوره جاوااسکریپت (JavaScript)</h1>
    <p>توضیح مختصر دوره...</p>
  </div>
</section>

<section class="grid">
  <article class="card span-8">
    <h2>اطلاعات دوره</h2>
    <!-- محتوا -->
  </article>
</section>
```

### 3. لینک از صفحه اصلی اضافه کنید

[index.html](index.html) میں اضافه کنید:

```html
<article class="card span-6">
  <h2>دوره جاوااسکریپت</h2>
  <p class="muted">توضیح کوتاه...</p>
  <a href="pages/class_javascript.html">مشاهده جزئیات →</a>
</article>
```

## 🎨 استفاده از کلاس‌های CSS

سایت از یک سیستم شبکه‌ای 12 ستونی استفاده می‌کند:

```html
<!-- کارت پهن (8 ستون از 12) -->
<article class="card span-8">...</article>

<!-- کارت باریک (4 ستون از 12) -->
<aside class="card span-4">...</aside>

<!-- دو کارت برابر درکنار هم -->
<article class="card span-6">...</article>
<article class="card span-6">...</article>
```

## 📱 الگو‌های قابل اجرا (Components)

### البته

```html
<div class="hero-card">
  <span class="badge">برچسب</span>
  <h1>عنوان بزرگ</h1>
  <p>توضیح</p>
</div>
```

### کارت محتوا

```html
<article class="card span-6">
  <h2>عنوان</h2>
  <p class="muted">توضیح متنی</p>
</article>
```

### تگ‌های برچسب

```html
<span class="pill">متن برچسب</span>
```

### صندوق تماس

```html
<div class="contact-box">
  <h2>هماهنگی</h2>
  <p>
    تلفن: <a href="tel:+989121234567">0912-123-4567</a>
  </p>
</div>
```

## 🔧 نکات فنی

- **فونت**: تمام صفحات از فونت Vazirmatn استفاده می‌کنند
- **Responsive**: طراحی واکنش‌پذیر برای سایزهای مختلف
- **RTL**: تمام صفحات برای نمایش راست‌به‌چپ آماده‌شده‌اند
- **رنگ‌ها**: از متغیرهای CSS استفاده می‌شود

## 📌 نکاتی برای مدیریت بهتر

1. **نام‌گذاری**: نام‌های فایل و پوشه را کوچک و بدون فاصلہ نگہ دارید
2. **مسیرهای نسبی**: همیشہ از مسیرهای نسبی برای لینک‌ها و منابع استفاده کنید
3. **تصاویر**: تصاویر را قبل از استفاده کمپرس کنید
4. **گیت**: فایل `.gitignore` را برای حذف فایل‌های غیر ضروری استفاده کنید

## ✨ مثال: اضافه کردن دوره جدید در یک نگاه

1. فایل `pages/class_newcourse.html` ایجاد کنید
2. محتوا و استایل‌ها را اضافه کنید
3. CSS خارجی پیوند دهید
4. لینک را در `index.html` اضافه کنید

---

**نکته**: این ساختار برای توسعه سایت با صفحات متعدد طراحی‌شده‌است. همیشہ از qالب‌های موجود الهام بگیرید و رنگ‌ها و مقالات قیاس‌پذیر را حفظ کنید.

## 📞 تماس

برای سوالات و پیشنهادات:
- تلفن: 0912-123-4567
- ایمیل: info@xana.ir
