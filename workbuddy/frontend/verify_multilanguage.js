// Verification script for WorkBuddy multi-language features

// Check if translations.js is loaded
if (typeof translations === 'undefined') {
    console.error('❌ translations.js not loaded');
} else {
    console.log('✅ translations.js loaded successfully');
    
    // Check if all languages are defined
    const languages = ['en', 'hi', 'mr'];
    const requiredKeys = [
        'workbuddy', 'home', 'howItWorks', 'about', 'language',
        'heroTitle', 'heroDescription', 'joinWorker', 'workerDescription',
        'joinCustomer', 'customerDescription', 'howItWorksTitle',
        'register', 'registerDescription', 'connect', 'connectDescription',
        'work', 'workDescription', 'earnReview', 'earnReviewDescription',
        'aboutTitle', 'aboutHeading', 'aboutDescription1', 'aboutDescription2',
        'aboutFeature1', 'aboutFeature2', 'aboutFeature3', 'aboutFeature4',
        'aboutFeature5', 'aboutFeature6', 'aboutDescription3', 'aboutDescription4',
        'footer'
    ];
    
    let allLanguagesValid = true;
    
    languages.forEach(lang => {
        if (!translations[lang]) {
            console.error(`❌ Language '${lang}' not defined`);
            allLanguagesValid = false;
        } else {
            // Check if all required keys exist
            let missingKeys = [];
            requiredKeys.forEach(key => {
                if (!translations[lang][key]) {
                    missingKeys.push(key);
                }
            });
            
            if (missingKeys.length > 0) {
                console.error(`❌ Language '${lang}' missing keys:`, missingKeys);
                allLanguagesValid = false;
            }
        }
    });
    
    if (allLanguagesValid) {
        console.log('✅ All languages have complete translations');
    }
    
    // Check translation functions
    if (typeof getCurrentLanguage === 'function') {
        console.log('✅ getCurrentLanguage function exists');
    } else {
        console.error('❌ getCurrentLanguage function missing');
    }
    
    if (typeof setCurrentLanguage === 'function') {
        console.log('✅ setCurrentLanguage function exists');
    } else {
        console.error('❌ setCurrentLanguage function missing');
    }
    
    if (typeof translateElement === 'function') {
        console.log('✅ translateElement function exists');
    } else {
        console.error('❌ translateElement function missing');
    }
    
    if (typeof translatePage === 'function') {
        console.log('✅ translatePage function exists');
    } else {
        console.error('❌ translatePage function missing');
    }
}

// Check if language selector exists in DOM
document.addEventListener('DOMContentLoaded', function() {
    const langSelector = document.getElementById('language-selector');
    if (langSelector) {
        console.log('✅ Language selector found in DOM');
        
        // Test language change functionality
        const initialLang = langSelector.value;
        console.log(`✅ Current language: ${initialLang}`);
        
        // Test that all options exist
        const expectedOptions = ['en', 'hi', 'mr'];
        const actualOptions = Array.from(langSelector.options).map(opt => opt.value);
        
        let optionsValid = true;
        expectedOptions.forEach(opt => {
            if (!actualOptions.includes(opt)) {
                console.error(`❌ Missing language option: ${opt}`);
                optionsValid = false;
            }
        });
        
        if (optionsValid) {
            console.log('✅ All language options present');
        }
    } else {
        console.error('❌ Language selector not found in DOM');
    }
    
    // Check for elements with data-translate attributes
    const translatableElements = document.querySelectorAll('[data-translate]');
    if (translatableElements.length > 0) {
        console.log(`✅ Found ${translatableElements.length} translatable elements`);
    } else {
        console.warn('⚠️ No translatable elements found');
    }
});

console.log('✅ Multi-language verification script loaded');