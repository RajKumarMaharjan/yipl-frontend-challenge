
document.addEventListener('DOMContentLoaded', function(){
    const scrollToContactButton = document.getElementById('scrollToContact');
    const contactUsSection = document.getElementById('contact-us');

    scrollToContactButton.addEventListener('click', function(){
        contactUsSection.scrollIntoView({behavior: 'smooth'});
    });
});

document.addEventListener('DOMContentLoaded', function(){
    const scrollToCResourceButton = document.getElementById('scrollToResources');
    const resourceSection = document.getElementById('resources');

    scrollToCResourceButton.addEventListener('click', function(){
        resourceSection.scrollIntoView({behavior: 'smooth'});
    });
});

document.addEventListener('DOMContentLoaded', function(){
    const scrollToCResourceButton = document.getElementById('scrollToFooter');
    const resourceSection = document.getElementById('footer');

    scrollToCResourceButton.addEventListener('click', function(){
        resourceSection.scrollIntoView({behavior: 'smooth'});
    });
});