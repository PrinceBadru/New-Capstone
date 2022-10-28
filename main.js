let popup= document.getElementById("popup");

function openpopup(){
    popup.classList.add("openpopup");
}

function closepopup(){
    popup.classList.remove("openpopup");
}
//dynamic speakers

const mySpeakerArray = [
    {
      projectId: 1,
      name: 'Badru Ndawula',
      description:
        "Controls and monitors all operations that take place at New crypto coin.",
      featuredImage: 'image/X7uaeskx_400x400.jpg"',
      title:'Executive Officer of New Crypto Coin.',
      linkToLiveVersion: 'liveversion.com',
      linkToSource: 'github.com/PrinceBadru',
    },
    {
        projectId: 2,
        name: 'Kevin Aboamama',
        description:
          "Executes technological changes  at New crypto coin.",
        featuredImage: 'images/download (5).jpeg',
        title:'Cheif Technological Officer of New Crypto Coin.',
        linkToLiveVersion: 'liveversion.com',
        linkToSource: 'github.com/PrinceBadru',  
    },
    {
        projectId: 3,
        name: 'Tyres Adams',
        description:
          "Helps Cheif Executive Officer carry out additional activities at Newcryptocoin.",
        featuredImage: 'images/download (5).jpeg',
        title:'Deputy Cheif Executive Officer.',
        linkToLiveVersion: 'liveversion.com',
        linkToSource: 'github.com/PrinceBadru',  
    },
    {
        projectId: 4,
        name: 'Ndeezi Murife.',
        description:
          "Manages and instructs developers on changes needed at New crypto coin.",
        featuredImage: 'images/download (5).jpeg',
        title:'Head of developers  at New Crypto Coin.',
        linkToLiveVersion: 'liveversion.com',
        linkToSource: 'github.com/PrinceBadru',  
    },
    {
        projectId: 5,
        name: 'Mark Spurs.',
        description:
          "Carries out all marketing activities at New crypto coin.",
        featuredImage: 'images/download (5).jpeg',
        title:'Cheif Marketing Officer',
        linkToLiveVersion: 'liveversion.com',
        linkToSource: 'github.com/PrinceBadru',  
    },
    {
        projectId: 6,
        name: 'Kevin Leo.',
        description:
          "Manages and instructs developers on changes needed at New crypto coin.",
        featuredImage: 'images/download (5).jpeg',
        title:' Head of developers  at New Crypto Coin.',
        linkToLiveVersion: 'liveversion.com',
        linkToSource: 'github.com/PrinceBadru',  
    }
]

const speakerSection = document.querySelector('.list-container');
const speaker = mySpeakerarray.forEach(list => {
    const li = document.createElement('li');
    li.className ='speaker-li'
    li.innerHTML =`
       <div><img src="./images/X7uaeskx_400x400.jpg" alt="Speaker image" class="speaker-img"></div>
       <div><h2>Badru Ndawula.</h2> 
        <hr class="speaker-line1">
        <span class="ceo-text"> Executive Officer of New Crypto Coin.</span><br><hr class="button-width">
        <div class="speaker-text">Controls and monitors all operations that take place at New crypto coin.</div>
    `;
    return (li);
};