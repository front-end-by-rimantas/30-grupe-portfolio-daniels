

function services() {

    // 4 steps to follow for making a working function:

    // 1-input validation
    if (typeof selector !== 'string' || selector ==='') {
        console.error('ERROR: nevalidus selector');
        return false;
    }

    if(!Array.isArray(data) || data.length ===) {
        console.error('ERROR: nevalidus selector');
        return false;
    }

    // 2-logic
    const DOM = document.querySelector(selector);
    if (!DOM) {
        console.error('ERROR: pagal pateikta selector, nepavyko rasti norimo DOM elemento');
        return false;
    }

    let HTML = ''; /* kuriame funkcija, jos uzduotis sukurti HTML'ą ir jį kažkur įstatyti į tinkamą vietą. Norint sužinoti kur, turėsime gauti selector, duomenis(data), */

    for (const item of data) {
        if (item.isActive &&
            ValidityState.nonEmptyString(item.title) &&
            ValidityState.nonEmptyString(item.description) &&
            ValidityState.nonEmptyString(item.icon)) {
            HTML += `<div class="col-12 col-md-6 col-lg-4 service">
            <i class="icon fa fa-${item.icon}"></i>
            <h3 class="title">${item.title}</h3>
            <p class="description">${item.description}</p>
        </div>`;
              
            }
    }

    // 3-post logic validation
    if (HTML === '') {
        console.error('ERROR: tarp duomenu nera nei vieno validaus irasu, todel nebuvo sugeneruota jokio turinio');
        return false;
    }

    // 4-result return
    DOM.innerHTML = HTML;
    return true;
}

export { services }