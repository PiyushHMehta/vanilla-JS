// take input
const search = document.querySelector('#search');
// show output
const matchList = document.querySelector('#match-list');

// add event listener
search.addEventListener('input', () => searchState(search.value));

// search states in json file and filter(using arrow fn)
const searchState = async searchText => {
    const res = await fetch('states.json');
    const states = await res.json();

    // get matches to current text input
    let matches = states.filter(state => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return state.name.match(regex) || state.abbr.match(regex);
    });

    if (searchText.length === 0) {
        matches = [];
    }

    // ^ implies starts with, for ex. if i type p, then i should only get states starting with letter P and not just containing p anywhere in the middle  
    // g (global) flag: This flag indicates that the search should find all matches in the string, not just the first one. However, when used with String.prototype.match or String.prototype.replace, it will return all matches. In the context of String.prototype.test, the g flag has less relevance since you're checking if a match exists rather than retrieving matches.
    // i (ignore case) flag: This flag makes the search case-insensitive. This means that the regular expression will match both uppercase and lowercase versions of the search text.

    outputHtml(matches);
}


// output html
const outputHtml = matches => {
    if (matches.length > 0) {
        const html = matches.map(match => `
            <div class="card card-body mb-1">
                <h4>${match.name} (${match.abbr}) <span class="text-primary">${match.capital}</span>
                </h4>
                <small>Lat: ${match.lat} / Long: ${match.long}</small>
            </div>
            `).join('');

            matchList.innerHTML = html;
    } else {
        matchList.innerHTML = '';
    }
}