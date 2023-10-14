document.addEventListener('DOMContentLoaded', function(){
    const scrollToContactButton = document.getElementById('scrollToContact');
    const contactUsSection = document.getElementById('contact-us');

    scrollToContactButton.addEventListener('click', function(){
        contactUsSection.scrollIntoView({behavior: 'smooth'});
    });

    const scrollToCResourceButton = document.getElementById('scrollToResources');
    const resourceSection = document.getElementById('resources');

    scrollToCResourceButton.addEventListener('click', function(){
        resourceSection.scrollIntoView({behavior: 'smooth'});
    });

    const scrollToFooterButton = document.getElementById('scrollToFooter');
    const footerSection = document.getElementById('footer');

    scrollToFooterButton.addEventListener('click', function(){
        footerSection.scrollIntoView({behavior: 'smooth'});
    });

});