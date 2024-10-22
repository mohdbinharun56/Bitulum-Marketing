function toggleMenu(){
    document.getElementById('navigationBarMobile').classList.toggle('hidden');
    document.getElementById('registerNavigationBarMobile').classList.toggle('hidden');
}

const service = () => {
    const homeSectionElement = document.getElementById('homeSection');
    const servicesSectionElement =  document.getElementById('servicesSection');
    const serviceNav = document.getElementById('service');
    const homeNav = document.getElementById('home');

    homeSectionElement.classList.add('hidden');
    servicesSectionElement.classList.remove('hidden');
    homeNav.style.color = '#929598';
    serviceNav.style.color = '#D9B742';
    


}

const home=()=>{
    const homeSectionElement = document.getElementById('homeSection');
    const servicesSectionElement =  document.getElementById('servicesSection');
    const serviceNav = document.getElementById('service');
    const homeNav = document.getElementById('home');

    servicesSectionElement.classList.add('hidden');
    homeSectionElement.classList.remove('hidden');
    serviceNav.style.color = '#929598';
    homeNav.style.color = '#D9B742';
    
}