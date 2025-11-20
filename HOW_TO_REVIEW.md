# Step-by-Step Guide: How to Review Your Website

## 🎯 Goal
Learn how to open, view, and inspect your personal website to see how it looks and works.

---

## Step 1: Locate Your Files

1. **Open Finder** (the blue and white face icon in your dock)
2. **Navigate to**: Desktop → `paranjay-gulati-website` folder
3. **You should see**:
   - `index.html` (your main website file)
   - `styles.css` (your styling file)
   - `DESIGN_ANALYSIS.md` (design documentation)

---

## Step 2: Open the Website in Your Browser

### Method A: Double-Click (Easiest)
1. **Double-click** on `index.html`
2. It will automatically open in your default web browser (Safari, Chrome, or Firefox)

### Method B: Right-Click Menu
1. **Right-click** (or Control+Click) on `index.html`
2. Select **"Open With"**
3. Choose your preferred browser:
   - **Safari** (default on Mac)
   - **Google Chrome**
   - **Firefox**

### Method C: Drag and Drop
1. **Open your browser** first
2. **Drag** `index.html` from Finder
3. **Drop** it into the browser window

---

## Step 3: What You Should See

When the website opens, you should see:

### ✅ Top Section
- **Large bold text**: "Erik Torenberg" (very big, dark)
- **Smaller text below**: "Erik Torenberg" (medium size)
- **Lots of white space** at the top

### ✅ Introduction Section
- **Left side**: Two paragraphs of text about Erik Torenberg
- **Right side**: A placeholder image with a caption below it
- Text and image are side-by-side

### ✅ Investing Section
- **Heading**: "Investing" with an underline
- **Long list**: Company names in bold, separated by commas
- Examples: Notion, Figma, Coinbase, etc.

### ✅ Writing Section
- **Heading**: "Writing" with an underline
- **Three columns**:
  - **Startups** (left column)
  - **Career** (middle column)
  - **Culture** (right column)
- Each column has a list of article links

---

## Step 4: Test Desktop View (What You're Seeing Now)

### Check These Elements:

1. **Typography (Text)**
   - [ ] Main name is very large and bold
   - [ ] Text is easy to read
   - [ ] Company names in Investing section are bold
   - [ ] Section headings ("Investing", "Writing") have underlines

2. **Layout**
   - [ ] Content is centered on the page
   - [ ] Text and image are side-by-side in intro section
   - [ ] Three columns in Writing section are evenly spaced
   - [ ] Lots of white space around everything

3. **Colors**
   - [ ] Background is pure white
   - [ ] Text is very dark (almost black, but not pure black)
   - [ ] Image caption is light grey and italic

4. **Spacing**
   - [ ] Big gap at the top
   - [ ] Good spacing between sections
   - [ ] Comfortable spacing between paragraphs

---

## Step 5: Test Mobile View (Phone Size)

This is important! Most people will view your site on phones.

### On Mac (Chrome or Safari):

1. **Open Developer Tools**:
   - **Chrome**: Press `Cmd + Option + I` (or `F12`)
   - **Safari**: First enable Developer menu:
     - Go to Safari → Settings → Advanced
     - Check "Show features for web developers"
     - Then press `Cmd + Option + I`

2. **Toggle Device Toolbar**:
   - **Chrome**: Click the device icon (📱) in the toolbar, or press `Cmd + Shift + M`
   - **Safari**: Click "Enter Responsive Design Mode" or press `Cmd + Ctrl + R`

3. **Select a Device**:
   - Choose **iPhone 12** or **iPhone 13** from the dropdown
   - Or manually resize to **375px** width

### What Should Change on Mobile:

- [ ] Main name gets smaller (but still prominent)
- [ ] Text and image stack vertically (image below text)
- [ ] Three columns become one column (stacked)
- [ ] Everything still looks good and readable
- [ ] No horizontal scrolling needed

---

## Step 6: Make a Test Change

Let's verify you can edit and see changes:

### A. Edit the HTML (Content)

1. **Open `index.html`** in your code editor (VS Code, TextEdit, etc.)
2. **Find line 15**: `<h1>Erik Torenberg</h1>`
3. **Change it to**: `<h1>Your Name Here</h1>`
4. **Save the file** (`Cmd + S`)
5. **Go back to your browser**
6. **Refresh the page** (`Cmd + R` or `F5`)
7. **You should see**: The name changed!

### B. Edit the CSS (Styling)

1. **Open `styles.css`** in your code editor
2. **Find line 25**: `font-size: 60px;`
3. **Change it to**: `font-size: 80px;`
4. **Save the file** (`Cmd + S`)
5. **Refresh your browser** (`Cmd + R`)
6. **You should see**: The main name got even bigger!

### C. Revert Your Changes

1. **Change the name back** to "Erik Torenberg"
2. **Change the font size back** to `60px`
3. **Save both files**
4. **Refresh browser** - back to original!

---

## Step 7: Compare with Design Specs

Use the `DESIGN_ANALYSIS.md` file to verify everything matches:

1. **Open `DESIGN_ANALYSIS.md`** in your editor
2. **Compare each section** with what you see in the browser
3. **Check**:
   - Colors match the specifications
   - Font sizes are correct
   - Spacing looks right
   - Layout matches the description

---

## Step 8: Test Different Browsers

Websites can look slightly different in different browsers. Test in:

1. **Safari** (Mac default)
2. **Chrome** (if installed)
3. **Firefox** (if installed)

**What to check**:
- [ ] Layout looks the same
- [ ] Fonts load correctly
- [ ] Colors are consistent
- [ ] Everything works as expected

---

## Step 9: Check for Issues

### Common Things to Look For:

1. **Broken Images**
   - [ ] The placeholder image shows (or shows a broken image icon)
   - [ ] Image caption appears below

2. **Text Overflow**
   - [ ] No text cut off
   - [ ] No horizontal scrolling on desktop
   - [ ] Everything fits on mobile

3. **Font Loading**
   - [ ] Text looks clean and modern (Inter font)
   - [ ] If Inter doesn't load, it should fall back to system fonts

4. **Spacing Issues**
   - [ ] No elements touching each other
   - [ ] Good breathing room everywhere

---

## Step 10: Review Checklist

### ✅ Desktop View
- [ ] Website opens correctly
- [ ] All sections visible
- [ ] Text is readable
- [ ] Layout is centered
- [ ] Colors are correct
- [ ] Spacing looks good

### ✅ Mobile View
- [ ] Responsive design works
- [ ] Content stacks properly
- [ ] Text is still readable
- [ ] No horizontal scroll
- [ ] Touch targets are adequate

### ✅ Functionality
- [ ] Can make edits and see changes
- [ ] Browser refresh works
- [ ] Links are clickable (even if they go to #)

---

## 🎓 Understanding What You're Seeing

### The HTML File (`index.html`)
- **What it is**: The structure and content of your website
- **Contains**: Text, headings, images, links, sections
- **Think of it as**: The skeleton of your website

### The CSS File (`styles.css`)
- **What it is**: The styling and design of your website
- **Contains**: Colors, fonts, spacing, layout rules
- **Think of it as**: The clothes and makeup of your website

### How They Work Together
1. **HTML** says: "Here's a heading that says 'Erik Torenberg'"
2. **CSS** says: "Make that heading 60px, bold, and dark grey"
3. **Browser** shows: A large, bold, dark grey heading

---

## 🐛 Troubleshooting

### Problem: Website won't open
- **Solution**: Make sure you're double-clicking `index.html`, not `styles.css`
- **Alternative**: Right-click → Open With → Browser

### Problem: Changes don't show up
- **Solution**: Make sure you saved the file (`Cmd + S`)
- **Solution**: Hard refresh the browser (`Cmd + Shift + R`)

### Problem: Fonts look wrong
- **Solution**: Check your internet connection (Inter font loads from Google)
- **Solution**: Fonts should fall back to system fonts if offline

### Problem: Layout looks broken
- **Solution**: Make sure both `index.html` and `styles.css` are in the same folder
- **Solution**: Check that `styles.css` is linked in the HTML (line 10)

---

## 🎉 Next Steps

Once you're comfortable reviewing:

1. **Customize the content**: Change the name, text, and links
2. **Adjust colors**: Modify the color values in `styles.css`
3. **Change spacing**: Adjust padding and margin values
4. **Add your own image**: Replace the placeholder image URL
5. **Add more sections**: Create new content areas

---

## 💡 Pro Tips

1. **Keep browser and editor side-by-side**: Makes it easier to see changes
2. **Use browser refresh frequently**: See your changes immediately
3. **Test on real devices**: View on your phone for the best mobile test
4. **Use browser dev tools**: Learn to inspect elements (right-click → Inspect)
5. **Save often**: Get in the habit of saving after every change

---

## 📚 Additional Resources

- **Browser Dev Tools Tutorial**: Search "Chrome DevTools tutorial" on YouTube
- **HTML Basics**: W3Schools HTML tutorial
- **CSS Basics**: W3Schools CSS tutorial
- **Responsive Design**: MDN Web Docs on responsive design

---

**Congratulations!** You now know how to review and test your website. Practice makes perfect - keep experimenting! 🚀

