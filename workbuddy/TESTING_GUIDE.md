# WorkBuddy Testing Guide

## Overview
This guide explains how to test the multi-language feature in WorkBuddy, which supports English, Hindi, and Marathi.

## Prerequisites
- A web browser (Chrome, Firefox, Safari, or Edge)
- Python 3.x installed (for running a local server)

## Running the Application

### Method 1: Using Python's Built-in Server
1. Open a terminal/command prompt
2. Navigate to the workbuddy directory:
   ```
   cd d:\Assignments\SIH3\workbuddy
   ```
3. Start the server:
   ```
   python -m http.server 8000
   ```
4. Open your browser and go to:
   ```
   http://localhost:8000/frontend/html/home.html
   ```

### Method 2: Using Live Server (VS Code Extension)
1. Open the project in VS Code
2. Right-click on `home.html` and select "Open with Live Server"
3. The page will open automatically in your browser

## Testing Multi-Language Features

### 1. Language Selector
- Locate the language selector dropdown in the top-right corner of the header
- It should show three options:
  - English
  - हिंदी (Hindi)
  - मराठी (Marathi)

### 2. Changing Languages
To test language changes:

1. **Using the Header Dropdown:**
   - Click the language selector dropdown
   - Select any language (Hindi or Marathi)
   - Observe that all translatable content updates immediately

2. **Using the Demo Page:**
   - Navigate to `http://localhost:8000/frontend/html/multilanguage-demo.html`
   - Use the buttons to switch between languages
   - Or use the header dropdown

### 3. Content Verification
Check that the following elements translate correctly:

#### Home Page
- Page title: "WorkBuddy - Connect with Skilled Workers"
- Header navigation: Home, How It Works, About
- Hero section content
- Join as Worker/Customer cards
- How It Works section
- About section
- Footer text

#### Registration Pages
- Form labels and placeholders
- Button text
- Tab labels (Register/Login)

#### Dashboard Pages
- All UI elements
- Status indicators
- Navigation elements

### 4. Language Persistence
To test that language selection persists:

1. Select a language (e.g., Hindi)
2. Navigate to another page (e.g., customer registration)
3. Verify that the page loads in the same language
4. Refresh the page and confirm the language remains the same

### 5. Special Elements
Some elements require special attention:

#### Placeholders
- Form input placeholders should translate
- Textarea placeholders should translate

#### Buttons
- All buttons should display translated text
- Submit buttons should maintain functionality

#### Links
- Navigation links should translate
- Footer links should translate

## Test Pages

### Home Page
- Primary landing page
- Contains all major UI elements
- Good starting point for testing

### Multi-Language Demo
- Located at: `frontend/html/multilanguage-demo.html`
- Simplified testing interface
- Quick language switching buttons

### Test Language Page
- Located at: `frontend/html/test-language.html`
- Shows current language code
- Displays sample translated content

## Expected Behavior

### Language Changes
- Content should update immediately when language is changed
- No page refresh should be required
- All elements with `data-translate` attributes should update

### Persistence
- Language selection should be remembered across page visits
- Language should persist in the same browser session
- Different browser tabs should use the same language

### Edge Cases
- Empty translation keys should fall back to English
- Missing translations should not break the page
- Language selector should always show the correct current language

## Troubleshooting

### Language Not Changing
1. Check that JavaScript is enabled in your browser
2. Verify that `translations.js` is loaded correctly
3. Check the browser console for JavaScript errors

### Language Not Persisting
1. Ensure localStorage is enabled in your browser
2. Check that no browser extensions are blocking localStorage
3. Try in an incognito/private browsing window

### Missing Translations
1. Verify that all `data-translate` attributes have corresponding entries in `translations.js`
2. Check that translation keys match exactly
3. Ensure all three languages have entries for each key

## Test Scenarios

### Scenario 1: New User Experience
1. Open browser in incognito mode
2. Navigate to home page
3. Default language should be English
4. Change to Hindi
5. Navigate to registration page
6. Language should remain Hindi

### Scenario 2: Returning User
1. Set language to Marathi
2. Close browser
3. Reopen browser
4. Navigate to any WorkBuddy page
5. Language should be Marathi

### Scenario 3: Cross-Page Navigation
1. Set language to Hindi on home page
2. Navigate to customer registration
3. Navigate to worker registration
4. Navigate to categories page
5. All pages should display in Hindi

## Validation Checklist

### Home Page
- [ ] Header text translates
- [ ] Navigation links translate
- [ ] Hero section content translates
- [ ] Join cards content translates
- [ ] How It Works section translates
- [ ] About section content translates
- [ ] Footer text translates

### Registration Pages
- [ ] Form labels translate
- [ ] Placeholder text translates
- [ ] Button text translates
- [ ] Tab labels translate
- [ ] Footer links translate

### Dashboard Pages
- [ ] All UI elements translate
- [ ] Status indicators translate
- [ ] Navigation elements translate
- [ ] Form elements translate

### Technical Validation
- [ ] Language changes without page refresh
- [ ] Language persists across pages
- [ ] Language persists after browser restart
- [ ] No JavaScript errors in console
- [ ] All translation keys have values
- [ ] No broken UI elements after translation

## Support
If you encounter any issues during testing:
1. Check the browser console for errors
2. Verify all files are in their correct locations
3. Ensure the server is running properly
4. Contact the development team for assistance