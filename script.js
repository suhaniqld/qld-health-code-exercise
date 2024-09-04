document.addEventListener('DOMContentLoaded', function () {


    const tabsContainer = document.getElementById('tabs');
    const contentContainer = document.getElementById('content-container');
    // tabs array
    const tabsData = [
        { id: 'supporting-victims', name: 'Supporting Victims' },
        { id: 'delivering-frontline', name: 'Delivering for our frontline' },
        { id: 'detaining offenders', name: 'Detaining Offenders' },
        { id: 'intervening-people-offend', name: 'Intervening when people offend' },
        { id: 'preventing-crime', name: 'Preventing crime before it occurs' }];


    // content array
    const contentData = [
        {
            id: 'supporting-victims',
            content: ['Loren ipsun dolor sit anet, consectetur adipisci elit', 'Lorean ipsun dolor sit aneat, conseacteatur adipisci ealit', 'sunt in culpa qui officia deserunt mollit anim id est labor.'],
            imageUrl: './images/1.jpg'
        },
        {
            id: 'delivering-frontline',
            content: ['Loren ipsun dolor sit anet, consectetur adipisci elit', 'Lorean ipsun dolor sit aneat, conseacteatur adipisci ealit', 'sunt in culpa qui officia deserunt mollit anim id est labor.'],
            imageUrl: './images/2.jpg'
        },
        {
            id: 'detaining offenders',
            content: ['Loren ipsun dolor sit anet, consectetur adipisci elit', 'Lorean ipsun dolor sit aneat, conseacteatur adipisci ealit', 'sunt in culpa qui officia deserunt mollit anim id est labor.'],
            imageUrl: './images/3.jpg'
        },
        {
            id: 'intervening-people-offend',
            content: ['Loren ipsun dolor sit anet, consectetur adipisci elit', 'Lorean ipsun dolor sit aneat, conseacteatur adipisci ealit', 'sunt in culpa qui officia deserunt mollit anim id est labor.'],
            imageUrl: './images/4.jpg'
        },
        {
            id: 'preventing-crime',
            content: ['Loren ipsun dolor sit anet, consectetur adipisci elit', 'Lorean ipsun dolor sit aneat, conseacteatur adipisci ealit', 'sunt in culpa qui officia deserunt mollit anim id est labor.'],
            imageUrl: './images/5.jpg'
        }
    ]

    tabsData.forEach((tab, index) => {
        const tabButton = document.createElement('div');
        tabButton.className = 'tab'
        tabButton.textContent = tab.name;
        tabButton.setAttribute('data-content', tab.id);
        tabButton.setAttribute('aria-selected', false);
        tabsContainer.appendChild(tabButton);

        const contentDiv = document.createElement('div');
        contentDiv.className = 'content'
        contentDiv.id = tab.id;
        contentContainer.appendChild(contentDiv);

        // This is left content column
        const leftCol = document.createElement('div');
        leftCol.className = 'left-col';
        const headingNode = document.createElement("h2");
        const listNode = document.createElement("ul");
        headingNode.textContent = tab.name;
        leftCol.appendChild(headingNode);
        leftCol.appendChild(listNode);

        // This is right content column
        const rightCol = document.createElement('div');
        rightCol.className = 'right-col';
        const imageNode = document.createElement('img');
        imageNode.src = contentData[index].imageUrl;
        rightCol.appendChild(imageNode);

        contentDiv.appendChild(leftCol);
        contentDiv.appendChild(rightCol);

        contentData[index].content?.forEach((item, index) => {
            const listItemNode = document.createElement("li");
            listItemNode.textContent = item;
            listNode.appendChild(listItemNode);
        })
    })


    // Get all tab elements and content elements 
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('#content-container .content');
    // Show the default content for "supporting victims" 
    contents.forEach(content => content.classList.remove('active'));
    document.getElementById('supporting-victims').classList.add('active');
    document.getElementById('supporting-victims').setAttribute('aria-selected', true);

    tabs[0].classList.add('active');
    tabs[0].setAttribute('aria-selected', true);

    // Add event listeners to tabs 
    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            // Remove active class from all tabs and contents 
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            // Add active class to the clicked tab and corresponding content 
            this.classList.add('active');
            this.setAttribute('aria-selected', true);
            const contentId = this.getAttribute('data-content');
            document.getElementById(contentId).classList.add('active');
        });
    });
})