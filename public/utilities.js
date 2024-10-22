function toggleMenu(){
    document.getElementById('navigationBarMobile').classList.toggle('hidden');
    document.getElementById('registerNavigationBarMobile').classList.toggle('hidden');
}

const service = () => {
    const homeSectionElement = document.getElementById('homeSection');
    const servicesSectionElement =  document.getElementById('servicesSection');
    const sustainableMarketingElement = document.getElementById('sustainableMarketing');
    const ourStoryElement = document.getElementById('ourStory');

    const serviceNav = document.getElementById('service');
    const homeNav = document.getElementById('home');
    const marketingNav = document.getElementById('marketing');
    const storyNav = document.getElementById('story');
    const contactNav = document.getElementById('contact');

    homeSectionElement.classList.add('hidden');
    sustainableMarketingElement.classList.add('hidden');
    ourStoryElement.classList.add('hidden');
    servicesSectionElement.classList.remove('hidden');
    homeNav.style.color = '#929598';
    marketingNav.style.color = '#929598';
    storyNav.style.color = '#929598';
    contactNav.style.color = '#929598';
    serviceNav.style.color = '#D9B742';
    


}

const home=()=>{
    const homeSectionElement = document.getElementById('homeSection');
    const servicesSectionElement =  document.getElementById('servicesSection');
    const sustainableMarketingElement = document.getElementById('sustainableMarketing');
    const ourStoryElement = document.getElementById('ourStory');

    const serviceNav = document.getElementById('service');
    const homeNav = document.getElementById('home');
    const marketingNav = document.getElementById('marketing');
    const storyNav = document.getElementById('story');
    const contactNav = document.getElementById('contact');

    servicesSectionElement.classList.add('hidden');
    sustainableMarketingElement.classList.add('hidden');
    ourStoryElement.classList.add('hidden');
    homeSectionElement.classList.remove('hidden');
    serviceNav.style.color = '#929598';
    marketingNav.style.color = '#929598';
    storyNav.style.color = '#929598';
    contactNav.style.color = '#929598';
    homeNav.style.color = '#D9B742';
    
}


const marketing = ()=>{
    const homeSectionElement = document.getElementById('homeSection');
    const servicesSectionElement =  document.getElementById('servicesSection');
    const sustainableMarketingElement = document.getElementById('sustainableMarketing');
    const ourStoryElement = document.getElementById('ourStory');

    const serviceNav = document.getElementById('service');
    const homeNav = document.getElementById('home');
    const marketingNav = document.getElementById('marketing');
    const storyNav = document.getElementById('story');
    const contactNav = document.getElementById('contact');

    homeSectionElement.classList.add('hidden');
    servicesSectionElement.classList.add('hidden');
    ourStoryElement.classList.add('hidden');
    sustainableMarketingElement.classList.remove('hidden');

    serviceNav.style.color = '#929598';
    homeNav.style.color = '#929598';
    storyNav.style.color = '#929598';
    contactNav.style.color = '#929598';
    marketingNav.style.color = '#D9B742';


}

const ourStory = () =>{
    const homeSectionElement = document.getElementById('homeSection');
    const servicesSectionElement =  document.getElementById('servicesSection');
    const sustainableMarketingElement = document.getElementById('sustainableMarketing');
    const ourStoryElement = document.getElementById('ourStory');

    const serviceNav = document.getElementById('service');
    const homeNav = document.getElementById('home');
    const marketingNav = document.getElementById('marketing');
    const storyNav = document.getElementById('story');
    const contactNav = document.getElementById('contact');

    homeSectionElement.classList.add('hidden');
    servicesSectionElement.classList.add('hidden');
    sustainableMarketingElement.classList.add('hidden');
    ourStoryElement.classList.remove('hidden');

    serviceNav.style.color = '#929598';
    homeNav.style.color = '#929598';
    marketingNav.style.color = '#929598';
    contactNav.style.color = '#929598';
    storyNav.style.color = '#D9B742';
}

const contact = () =>{
    const homeSectionElement = document.getElementById('homeSection');
    const servicesSectionElement =  document.getElementById('servicesSection');
    const sustainableMarketingElement = document.getElementById('sustainableMarketing');
    const ourStoryElement = document.getElementById('ourStory');
    const contactUsElement = document.getElementById('contactUs');

    const serviceNav = document.getElementById('service');
    const homeNav = document.getElementById('home');
    const marketingNav = document.getElementById('marketing');
    const storyNav = document.getElementById('story');
    const contactNav = document.getElementById('contact');

    homeSectionElement.classList.add('hidden');
    servicesSectionElement.classList.add('hidden');
    sustainableMarketingElement.classList.add('hidden');
    ourStoryElement.classList.add('hidden');
    contactUsElement.classList.remove('hidden');


    serviceNav.style.color = '#929598';
    homeNav.style.color = '#929598';
    marketingNav.style.color = '#929598';
    storyNav.style.color = '#929598';
    contactNav.style.color = '#D9B742';
}