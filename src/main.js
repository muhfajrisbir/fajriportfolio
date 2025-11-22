import { link } from 'mz/fs';
import './style.css'

const projects = [
  {
      title: "Voluntrip Ticket Purchase Integration in the Kitabisa App",
      desc: "",
      image: "https://placehold.co/600x400/f1f5f9/7c3aed?text=Voluntrip+Case Study", // Ganti gambar
      type: "UX Case Study",
      link: "https://medium.com/@muhfajrisbir/studi-kasus-ui-ux-integrasi-pembelian-tiket-voluntrip-di-aplikasi-kitabisa-926b05b4bed8"
  },
  {
      title: "Finance Mobile App",
      desc: "",
      image: "https://placehold.co/600x400/f1f5f9/7c3aed?text=Finance+Mobile+App",
      type: "UI Exploration",
      link: "https://dribbble.com/shots/24387554-Finance-Mobile-App"
  },
  {
      title: "Hotel Booking App",
      desc: "",
      image: "https://placehold.co/600x400/f1f5f9/7c3aed?text=Hotel+Booking+App",
      type: "UI Exploration",
      link: "https://dribbble.com/shots/23859287-Hotel-Booking-Mobile-App"
  },
  /* {
      title: "AI Generator Tool",
      desc: "Prompt engineering UI.",
      image: "https://placehold.co/600x400/f1f5f9/7c3aed?text=AI+Tool",
      type: "Web App"
  },
  {
      title: "Crypto Exchange",
      desc: "Trading chart interface.",
      image: "https://placehold.co/600x400/f1f5f9/059669?text=Crypto",
      type: "Web3"
  },
  {
      title: "Smart Home App",
      desc: "IoT device controller.",
      image: "https://placehold.co/600x400/f1f5f9/e11d48?text=IoT+App",
      type: "Mobile"
  } */
];

const certificates = [
  { title: "User Experience Design Fundamentals", issuer: "IBM", year: "Nov 2024" },
  { title: "Foundations of User Experience (UX) Design", issuer: "Google", year: "Mar 2024" },
  { title: "Database Structures and Management with MySQL", issuer: "Meta", year: "Des 2023" },
];

// RENDER PROJECTS (COMPACT & CLEAN)
document.querySelector('#project-list').innerHTML = projects.map(project => `
  <div class="group bg-white border border-slate-200 rounded-lg overflow-hidden hover:border-blue-400 transition-colors duration-300 cursor-pointer">
      
      <div class="relative aspect-video bg-slate-100 overflow-hidden border-b border-slate-100">
          <img src="${project.image}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="${project.title}">
      </div>
      
      <div class="p-4">
          <div class="flex justify-between items-start mb-2">
               <h3 class="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">${project.title}</h3>
               <span class="font-pixel text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                  ${project.type}
               </span>
          </div>
          <p class="text-sm text-slate-500 line-clamp-1">${project.desc}</p>
      </div>
  </div>
`).join('');
// RENDER PROJECTS
document.querySelector('#project-list').innerHTML = projects.map(project => `
  <a href="${project.link}" target="_blank" class="group block bg-white border border-slate-200 rounded-lg overflow-hidden transition-all duration-300 shadow-sm
      hover:border-blue-400 hover:shadow-md 
      active:translate-y-0.5 active:translate-x-0.5 active:shadow-none active:border-slate-300
      cursor-pointer">
      
      <div class="relative aspect-video bg-slate-100 overflow-hidden border-b border-slate-100">
          <img src="${project.image}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="${project.title}">
      </div>
      
      <div class="p-4">
          <div class="flex justify-between items-start mb-2">
               <h3 class="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">${project.title}</h3>
               <span class="font-new-pixel text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                  ${project.type}
               </span>
          </div>
          <p class="text-sm text-slate-500 line-clamp-1">${project.desc}</p>
      </div>
  </a> 
`).join('');


// RENDER CREDENTIALS
document.querySelector('#cert-list').innerHTML = certificates.map(cert => `
  <div class="flex items-center justify-between p-4 border border-slate-200 rounded-lg bg-slate-50 hover:bg-white hover:border-blue-300 transition-colors">
      <div class="flex items-center gap-3">
          <div class="w-8 h-8 bg-white border border-slate-200 rounded flex items-center justify-center text-sm shadow-sm">📜</div>
          <div>
              <h4 class="font-bold text-slate-900 text-sm">${cert.title}</h4>
              <p class="text-xs text-slate-500">${cert.issuer}</p>
          </div>
      </div>
      <span class="font-new-pixel text-[10px] text-slate-400 bg-white px-2 py-1 border border-slate-200 rounded">${cert.year}</span>
  </div>
`).join('');