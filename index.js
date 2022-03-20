import { privateKeys, headers, footerContent } from "./images/externalData.js";

window.addEventListener('load', async () => {
    if (window.location.href.includes('index.html')) {
        var ipData = await getIpData();
        await addIpRecordToDb(ipData);
    }
    document.querySelector('.page-end').innerHTML = footerContent;
    document.querySelector('head').innerHTML +=
        `<script type='text/javascript'>
    window.smartlook||(function(d) {
      var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
      var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
      c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c);
      })(document);
      smartlook('init', '1a891ddab35e9b4fba2e445f77ac5954ff43682c', { region: 'eu' });
  </script>`

});

// activities drowdown
if (document.querySelector('.activities-dropdown-toggle')) {
    document.querySelector('.activities-dropdown-toggle').addEventListener('click', () => {
        var dropdown = document.querySelector('.activities-dropdown-menu');
        var toggleButton = document.querySelector('.activities-dropdown-toggle i');

        if (dropdown.style.display == 'block') {
            dropdown.style.display = 'none';
            toggleButton.classList.remove('fa-caret-up');
            toggleButton.classList.add('fa-caret-down');
        } else {
            dropdown.style.display = 'block';
            document.querySelector('.partners-dropdown-menu').style.display = 'none';
            toggleButton.classList.remove('fa-caret-down');
            toggleButton.classList.add('fa-caret-up');
        }
    })
}

//partners dropdown
if (document.querySelector('.partners-dropdown-toggle')) {
    document.querySelector('.partners-dropdown-toggle').addEventListener('click', () => {
        var dropdown = document.querySelector('.partners-dropdown-menu');
        var toggleButton = document.querySelector('.partners-dropdown-toggle i');

        if (dropdown.style.display == 'block') {
            dropdown.style.display = 'none';
            toggleButton.classList.remove('fa-caret-up');
            toggleButton.classList.add('fa-caret-down');
        } else {
            dropdown.style.display = 'block';
            document.querySelector('.activities-dropdown-menu').style.display = 'none';
            toggleButton.classList.remove('fa-caret-down');
            toggleButton.classList.add('fa-caret-up');
        }
    })
}

function closeDrowDowns() {
    var activities = document.querySelector('.activities-dropdown-menu');
    var partners = document.querySelector('.partners-dropdown-menu');
    activities ? activities.style.display = 'none' : null;
    partners ? partners.style.display = 'none' : null;
}

//mobile navigation toggle
document.querySelector('.fa-bars').addEventListener('click', () => {
    var headerUl = document.querySelector('.header-ul');

    closeDrowDowns();
    headerUl.style.display == 'flex' ? headerUl.style.display = 'none' : headerUl.style.display = 'flex';
});

//#region server requests

//GET ALL
async function getDataFromServer() {
    const response = await fetch(dbHost, {
        method: 'get',
        headers,
    })

    const data = await response.json();
    return data;
}

//GET/ID
async function getDataById(id) {
    const response = await fetch(`${dbHost}/${id}`, {
        method: 'get',
        headers,
    })

    const data = await response.json();
    return data;
}

//POST
async function postDataToServer(body) {
    await fetch(dbHost, {
        method: 'post',
        headers,
        body: JSON.stringify(body)
    });
}

//#endregion

async function getIpData() {
    const response = await fetch(`https://api.ipdata.co/?api-key=${privateKeys.IpDataKey}`);

    const data = await response.json();
    return data;
}

async function addIpRecordToDb(ipData) {
    let body = {
        ip: ipData.ip,
        city: ipData.city,
        country_code: ipData.country_code,
        continent_code: ipData.continent_code
    };
    await fetch(privateKeys.dbHost, {
        method: 'post',
        headers,
        body: JSON.stringify(body),
    });
}
