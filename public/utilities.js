function toggleMenu(){
    document.getElementById('navigationBarMobile').classList.toggle('hidden');
    document.getElementById('registerNavigationBarMobile').classList.toggle('hidden');
}

function service(){
    document.getElementById('homeSection').classList.add('hidden');
    document.getElementById('servicesSection').classList.remove('hidden');
}


// function home  (){
//     const homeElement = document.createElement('div');
//     homeElement.classList.add('homeContainer');

//     homeElement.innerHTML = `
//     <h1 class='font-semibold text-6xl text-white'>The Tulum Marketing & <span class='text-[#D9B742]'>Creative Agency</span></h1>
//     `;

//     document.getElementById('homeSection').appendChild(homeElement);

// }


// export default home;