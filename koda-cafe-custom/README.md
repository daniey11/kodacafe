# 🎨 Koda Cafe - Custom Edition with Your Hand-Drawn Art!

## ✨ What's Special About This Version?

This website features **ALL of your beautiful hand-drawn illustrations** from your cafe menu artwork!

### Your Artwork Incorporated:

1. **🐶 Koda Dog Mascot** (Top of page)
   - Your adorable dog with coffee cup drawing
   - Bounces playfully at the top of the website

2. **☕ Drip Coffee** (Menu Item #1)
   - Your hand-drawn drip coffee setup
   - Pour-over style with carafe

3. **🧊 Iced Drink** (Menu Item #3 - Iced Latte)
   - Your iced drink with straw illustration
   - Perfect for the cold foam latte!

4. **🍵 Matcha Bowl** (Menu Item #4)
   - Your matcha bowl with whisk drawing
   - Traditional Japanese style

5. **🎰 Espresso Machine** (Animation & Menu Item #2)
   - Shows during the "brewing" animation when orders are placed
   - Also used for Espresso Tonic menu item

---

## 🚀 Quick Start

### Step 1: Extract the Files
Unzip `koda-cafe-custom.zip` and you'll see:

```
koda-cafe-custom/
├── index.html       # Main page
├── style.css        # Beautiful styling
├── script.js        # Interactive functionality
├── images/          # YOUR ARTWORK! 🎨
│   ├── koda-dog.png
│   ├── drip-coffee.png
│   ├── iced-drink.png
│   ├── matcha-bowl.png
│   └── espresso-machine.png
└── README.md        # This file
```

### Step 2: Open in VS Code
1. Open Visual Studio Code
2. File → Open Folder
3. Select `koda-cafe-custom`

### Step 3: Install Live Server (if you haven't already)
1. Click Extensions icon (Ctrl+Shift+X / Cmd+Shift+X)
2. Search "Live Server"
3. Install it

### Step 4: Launch Your Website!
1. Right-click `index.html`
2. Select "Open with Live Server"
3. **SEE YOUR ART COME TO LIFE!** 🎉

---

## 🎨 Where Your Drawings Appear

### On the Main Page:
- **Header:** Your Koda dog mascot bounces at the top
- **Menu Grid:** Each of your 4 drink illustrations appears in its own card
- **Hover Effects:** Your drawings slightly rotate and scale when hovered

### In the Modal (When You Click an Item):
- Your illustration appears at the top of the order modal
- Customization options below (for items 3 & 4)

### During Ordering:
- When you click "Order Now," your espresso machine drawing appears
- It pulses gently during the 2-second "brewing" animation
- Success message appears after!

---

## 🎯 How It Works

1. **Click any menu item** → Your drawing zooms in the modal
2. **Customize** with cold foam and syrups (for items 3 & 4)
3. **Click "Order Now"** → Your espresso machine animates!
4. **Success!** → Order confirmed with details

All orders are logged to the browser console (Press F12 → Console to see!)

---

## 🎨 About Your Illustrations

I extracted each drawing from your combined artwork and optimized them for web use:

- **Koda Dog:** 300×270px
- **Iced Drink:** 300×320px  
- **Drip Coffee:** 330×400px
- **Espresso Machine:** 400×400px
- **Matcha Bowl:** 300×320px

All images are PNG format with transparent backgrounds to match your original cream-colored aesthetic.

---

## 🔧 Customization

### Want to Change Colors?
Open `style.css` and modify line 10:
```css
--red-primary: #c74033;  /* This matches your drawing color! */
```

### Want to Add More Items?
1. Add more illustrations to the `images/` folder
2. Edit `script.js` menuItems array
3. Add new items with image paths

### Want to Change Prices?
Edit the `price` values in `script.js` (around line 30)

---

## 💡 What's Next?

When you're ready to add backend features:

**Email Notifications:**
- Add Node.js backend
- Use Nodemailer to send emails
- Get notified when orders come in!

**Push Notifications:**
- Implement Web Push API
- Real-time order alerts

**Database:**
- Store order history
- Track popular items
- Analytics dashboard

---

## 🎉 Your Art is Beautiful!

I love how your hand-drawn style gives this website such a unique, personal touch. The warm red color, playful illustrations, and handcrafted feel make this truly one-of-a-kind!

### The Complete Experience:
✅ Your custom Koda dog mascot
✅ Your hand-drawn menu items
✅ Your espresso machine animation
✅ Playful, bouncy interactions
✅ Retro checkerboard borders
✅ Handwritten-style fonts

---

## 📱 Mobile Friendly

Your illustrations look great on:
- Desktop computers
- Tablets
- Mobile phones

The website automatically adjusts to any screen size!

---

## 🐶☕ Enjoy!

Your Koda Cafe website is ready to go with ALL your beautiful artwork incorporated!

**To run it:**
1. Open `index.html` with Live Server
2. Click around and see your art in action!

**To customize:**
1. Edit menu items, prices, descriptions in `script.js`
2. Change colors in `style.css`
3. Replace any images in the `images/` folder

Have fun with your custom Koda Cafe! 🎨🐶☕
