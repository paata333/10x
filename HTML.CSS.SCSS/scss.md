დაიმახსოვრეთ პარამეტრის გადაცემა თუ არ გინდათ მიქსინში, შეგიძლიათ უბრალოდ null დაწეროთ,
რომელიმე მეთოდის გარჩევა თუ გაგიჭირდებათ, არ იდარდოთ მაგაზე, ვრცელი ინფორმაცია უხვადაა გუგლში

# Advanced SCSS: არქიტექტურა, ტრიკები და მიქსინები

მოგესალმებით! ამ გზამკვლევში თავმოყრილია SCSS-ის ის მოწინავე ტექნიკები, ტრიკები და მიქსინები, რომლებიც დაგეხმარებათ დაწეროთ ბევრად სუფთა, დინამიური და სკალირებადი სტილები.

---

## 1. მშობელი სელექტორის (`&`) ჯადოსნობა BEM-თან ერთად

**რას აკეთებს:** `&` კომპილაციის დროს ნაცვლდება იმ კლასის სახელით, რომელშიც ის წერია. ეს გვიზოგავს დროს და სტრუქტურას ვიზუალურად ბევრად აღქმადს ხდის.

**✍️ SCSS კოდი:**

```scss
.card {
    background: white;

    &__title {
        font-size: 20px;
    }

    &--dark {
        background: #222;

        .card__title {
            color: white;
        }
    }
}
```

**✅ კომპილირებული CSS:**

```css
.card {
    background: white;
}
.card__title {
    font-size: 20px;
}
.card--dark {
    background: #222;
}
.card--dark .card__title {
    color: white;
}
```

---

## 2. ფერების დინამიური მანიპულაცია

**რას აკეთებს:** `:hover` ეფექტებისთვის ცალკე ფერების დამახსოვრების ნაცვლად, პირდაპირ ვაბნელებთ ან ვაღიავებთ არსებულს ჩაშენებული ფუნქციებით (`darken`, `transparentize`).

**✍️ SCSS კოდი:**

```scss
$primary-color: #3498db;

.button {
    background-color: $primary-color;

    &:hover {
        background-color: darken($primary-color, 10%);
    }
}
```

**✅ კომპილირებული CSS:**

```css
.button {
    background-color: #3498db;
}
.button:hover {
    background-color: #217dbb; /* 10%-ით გამუქებული ფერი */
}
```

---

## 3. რუკები (Maps) და ციკლები (`@each`)

**რას აკეთებს:** ავტომატურად აგენერირებს მრავალ კლასს ერთი და იგივე ლოგიკით, მაგრამ სხვადასხვა პარამეტრით (მაგ: ფერებით).

**✍️ SCSS კოდი:**

```scss
$theme-colors: (
    "success": #2ecc71,
    "warning": #f1c40f,
);

@each $name, $color in $theme-colors {
    .alert-#{$name} {
        background-color: $color;
        border: 1px solid darken($color, 15%);
    }
}
```

**✅ კომპილირებული CSS:**

```css
.alert-success {
    background-color: #2ecc71;
    border: 1px solid #1e8449;
}
.alert-warning {
    background-color: #f1c40f;
    border: 1px solid #9c7e09;
}
```

---

## 4. სრულყოფილი Media Query მენეჯერი

**რას აკეთებს:** აგროვებს ყველა "გარდატეხის წერტილს" (breakpoint) ერთ ადგილას.

**✍️ SCSS კოდი:**

```scss
$breakpoints: (
    "tablet-p": 600px,
    "desktop": 1200px,
);

@mixin mq($size) {
    @if map-has-key($breakpoints, $size) {
        $breakpoint-value: map-get($breakpoints, $size);
        @media (min-width: $breakpoint-value) {
            @content;
        }
    }
}

.container {
    width: 100%;

    @include mq("tablet-p") {
        width: 80%;
    }
}
```

**✅ კომპილირებული CSS:**

```css
.container {
    width: 100%;
}
@media (min-width: 600px) {
    .container {
        width: 80%;
    }
}
```

---

## 5. Z-Index-ების აბსოლუტური კონტროლი

**რას აკეთებს:** სია, სადაც ფენები იერარქიულადაა განლაგებული. სისტემა ავტომატურად ანიჭებს მათ სწორ ინდექსს, რათა თავიდან ავიცილოთ ქაოსი.

**✍️ SCSS კოდი:**

```scss
$z-layers: ("modal", "header", "base");

@function z-index($layer) {
    @return (length($z-layers) - index($z-layers, $layer)) + 1;
}

.site-header {
    z-index: z-index("header");
}
.product-modal {
    z-index: z-index("modal");
}
```

**✅ კომპილირებული CSS:**

```css
.site-header {
    z-index: 2; /* 3 ელემენტია, header არის მე-2 სიაში, 3-2+1 = 2 */
}
.product-modal {
    z-index: 3; /* modal პირველია სიაში, იღებს უმაღლესს */
}
```

---

## 6. დინამიური CSS Grid-ის გენერატორი

**რას აკეთებს:** ქმნის რესპონსიულ გრიდს Media Query-ების წერის გარეშე. `auto-fit` ავსებს სივრცეს იმდენი სვეტით, რამდენიც ეტევა.

**✍️ SCSS კოდი:**

```scss
@mixin auto-grid($min-width, $gap: 20px) {
    display: grid;
    gap: $gap;
    grid-template-columns: repeat(auto-fit, minmax($min-width, 1fr));
}

.product-catalog {
    @include auto-grid(250px, 30px);
}
```

**✅ კომპილირებული CSS:**

```css
.product-catalog {
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

---

## 7. აპარატურული აქსელერაცია (Hardware Acceleration)

**რას აკეთებს:** ვაიძულებთ ბრაუზერს, რთული ანიმაციების დასახატად გამოიყენოს მოწყობილობის ვიდეო ბარათი (GPU).

**✍️ SCSS კოდი:**

```scss
@mixin hardware-accelerate {
    transform: translateZ(0);
    will-change: transform, opacity;
    backface-visibility: hidden;
}

.interactive-card:hover {
    @include hardware-accelerate;
    transform: translateY(-10px);
}
```

**✅ კომპილირებული CSS:**

```css
.interactive-card:hover {
    transform: translateZ(0);
    will-change: transform, opacity;
    backface-visibility: hidden;
    transform: translateY(-10px);
}
```

---

## 8. Theme Manager (Dark/Light Mode)

**რას აკეთებს:** SCSS-ის რუკებს გარდაქმნის CSS-ის ნატიურ ცვლადებად (`--var`), რომელთა შეცვლაც ბრაუზერში დინამიურად შეიძლება.

**✍️ SCSS კოდი:**

```scss
$themes: (
    "light": (
        "bg-color": #ffffff,
        "text-color": #333333,
    ),
    "dark": (
        "bg-color": #1a1a1a,
        "text-color": #f4f4f4,
    ),
);

@mixin generate-themes {
    @each $theme, $colors in $themes {
        [data-theme="#{$theme}"] {
            @each $key, $value in $colors {
                --#{$key}: #{$value};
            }
        }
    }
}

:root {
    @include generate-themes;
}
```

**✅ კომპილირებული CSS:**

```css
:root [data-theme="light"] {
    --bg-color: #ffffff;
    --text-color: #333333;
}
:root [data-theme="dark"] {
    --bg-color: #1a1a1a;
    --text-color: #f4f4f4;
}
```

---

## 9. ფლუიდური ტიპოგრაფია SCSS მათემატიკით

**რას აკეთებს:** უზრუნველყოფს ტექსტის რეზინისებრ, დინამიურ ზრდას ეკრანის პროპორციულად.

**✍️ SCSS კოდი:**

```scss
@mixin fluid-text($min-size, $max-size, $min-vw: 320px, $max-vw: 1200px) {
    $slope: ($max-size - $min-size) / ($max-vw - $min-vw);
    $intersection: -1 * $min-vw * $slope + $min-size;
    font-size: clamp(
        #{$min-size},
        calc(#{$intersection} + #{$slope * 100}vw),
        #{$max-size}
    );
}

.hero-title {
    @include fluid-text(24px, 48px);
}
```

**✅ კომპილირებული CSS:**

```css
.hero-title {
    /* რიცხვები დაგენერირდება ავტომატურად SCSS მათემატიკის მიხედვით */
    font-size: clamp(24px, calc(15.2727px + 2.7272vw), 48px);
}
```

---

## 10. Placeholder `%` - ოქროს წესი სტატიკური კოდისთვის

**რას აკეთებს:** აჯგუფებს სელექტორებს ერთად (`.class1, .class2 { ... }`). `%-ის` გამოყენებისას, თავად placeholder-ის სახელი არ ჩნდება საბოლოო CSS-ში, ის მხოლოდ აჯგუფებს მათ, ვინც მას იძახებს (`@extend`).

**✍️ SCSS კოდი:**

```scss
%visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
}

.skip-to-content {
    @extend %visually-hidden;
}

.hidden-label {
    @extend %visually-hidden;
}
```

**✅ კომპილირებული CSS:**

```css
/* ორივე კლასი დაჯგუფდა ერთ ადგილას, %visually-hidden არსად ჩანს! */
.skip-to-content,
.hidden-label {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
}
```
