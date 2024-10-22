function toggleMenu(){
    document.getElementById('navigationBarMobile').classList.toggle('hidden');
    document.getElementById('registerNavigationBarMobile').classList.toggle('hidden');
}

const service = () => {
    const homeSectionElement = document.getElementById('homeSection');
    const servicesSectionElement =  document.getElementById('servicesSection');
    const sustainableMarketingElement = document.getElementById('sustainableMarketing');
    const serviceNav = document.getElementById('service');
    const homeNav = document.getElementById('home');

    homeSectionElement.classList.add('hidden');
    sustainableMarketingElement.classList.add('hidden');
    servicesSectionElement.classList.remove('hidden');
    homeNav.style.color = '#929598';
    serviceNav.style.color = '#D9B742';
    


}

const home=()=>{
    const homeSectionElement = document.getElementById('homeSection');
    const servicesSectionElement =  document.getElementById('servicesSection');
    const sustainableMarketingElement = document.getElementById('sustainableMarketing');
    const serviceNav = document.getElementById('service');
    const homeNav = document.getElementById('home');

    servicesSectionElement.classList.add('hidden');
    sustainableMarketingElement.classList.remove('hidden');
    homeSectionElement.classList.remove('hidden');
    serviceNav.style.color = '#929598';
    homeNav.style.color = '#D9B742';
    
}


const marketing = ()=>{
    const homeSectionElement = document.getElementById('homeSection');
    const servicesSectionElement =  document.getElementById('servicesSection');
    const sustainableMarketingElement = document.getElementById('sustainableMarketing');
    const serviceNav = document.getElementById('service');
    const homeNav = document.getElementById('home');
    const marketingNav = document.getElementById('marketing');

    homeSectionElement.classList.add('hidden');
    servicesSectionElement.classList.add('hidden');
    sustainableMarketingElement.classList.remove('hidden');

    serviceNav.style.color = '#929598';
    homeNav.style.color = '#929598';
    marketingNav.style.color = '#D9B742';


}