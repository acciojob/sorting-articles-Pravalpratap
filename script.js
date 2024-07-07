//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// Function to sort articles ignoring specified words
function sortArticles(bands) {
    // Words to ignore while sorting
    const ignoreWords = ['The', 'A', 'An'];

    // Custom sort function
    const sortedBands = bands.sort((a, b) => {
        // Function to remove ignored words and get the clean title
        const cleanTitle = (bandName) => {
            // Split bandName into words
            const words = bandName.split(' ');
            // Filter out words in ignoreWords
            const filteredWords = words.filter(word => !ignoreWords.includes(word));
            // Join filtered words back into a string
            return filteredWords.join(' ');
        };

        // Compare cleaned titles for sorting
        return cleanTitle(a) > cleanTitle(b) ? 1 : -1;
    });

    return sortedBands;
}

// Get the sorted list of bands
const sortedBands = sortArticles(bands);

// Display sorted bands in the HTML
const bandList = document.getElementById('band');
sortedBands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    bandList.appendChild(li);
});
