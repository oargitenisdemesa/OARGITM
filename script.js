const translations = {
  es: {
    'nav.home':'Inicio','nav.club':'El Club','nav.teams':'Equipos','nav.training':'Entrenamientos','nav.news':'Noticias','nav.gallery':'Galería','nav.contact':'Contacto',
    'menu.open':'Abrir menú','hero.siteTitle':'Oargi T.M.','eyebrow':'TOLOSA · GIPUZKOA · EUSKADI','hero.title1':'Pasión, competición','hero.title2':'y tenis de mesa desde los años 80','hero.text':'Pasión, competición y tenis de mesa desde los años 80',
    'hero.cta':'Conoce nuestros equipos','join':'Únete al club',
    'club.kicker':'OARGI MENDI ELKARTEA','club.title':'Un club con historia y futuro','club.p1':'Oargi Mendi Elkartea es una asociación privada sin ánimo de lucro. Dentro de sus distintas modalidades cuenta con un equipo de tenis de mesa que compite en las ligas regionales.',
    'teams.kicker':'COMPETICIÓN','teams.title':'Nuestros equipos','teams.sub':'Un equipo, una misma pasión.','team.open1':'Open 1','team.open2':'Open 2','team.consult':'Consulta de resultados, calendario y clasificación en la web oficial',
    'training.kicker':'POLIDEPORTIVO USABAL','training.title':'Entrenamientos','training.sub':'Entrenamos tres días a la semana en Tolosa.','day.tue':'Martes','day.wed':'Miércoles','day.thu':'Jueves','training.hours':'17:00 - 20:00',
    'news.kicker':'ACTUALIDAD','news.title':'Noticias','news.sub':'Federaciones y actualidad del tenis de mesa.','news.rfetm':'Real Federación Española de Tenis de Mesa','news.fvtm':'Federación Vasca de Tenis de Mesa',
    'calendar.kicker':'AGENDA','calendar.title':'Calendario','calendar.sub':'Calendario de competición del Open de Clubes CTD Sonia Etxazarreta.','calendar.docTitle':'Calendario temporada 26/27',
    'palmares.kicker':'HISTORIA','palmares.title':'Palmarés','palmares.sub':'Una historia que sigue creciendo.','palmares.highlightLabel':'TRAYECTORIA','palmares.highlight':'Más de cuatro décadas de actividad deportiva',
    'gallery.kicker':'OARGI','gallery.title':'Galería','gallery.speed':'Velocidad','gallery.competition':'Competición','gallery.training':'Entrenamiento','gallery.empty':'Añade nuevas fotos desde contenido.json',
    'contact.kicker':'ENCUÉNTRANOS','contact.title':'Ven a conocernos','contact.address':'Polideportivo Usabal<br>Usabal Auzoa, 25<br>20400 Usabal, Gipuzkoa','directions':'Cómo llegar','email':'oargitenisdemesa@gmail.com',
    'footer':'© Oargi T.M. · Tolosa, Gipuzkoa'
  },
  eu: {
    'nav.home':'Hasiera','nav.club':'Kluba','nav.teams':'Taldeak','nav.training':'Entrenamenduak','nav.news':'Albisteak','nav.gallery':'Galeria','nav.contact':'Kontaktua',
    'menu.open':'Menua ireki','hero.siteTitle':'Oargi T.M.','eyebrow':'TOLOSA · GIPUZKOA · EUSKADI','hero.title1':'Pasioa, lehia','hero.title2':'eta mahai-tenisa 80ko hamarkadatik','hero.text':'Pasioa, lehia eta mahai-tenisa 80ko hamarkadatik',
    'hero.cta':'Ezagutu gure taldeak','join':'Ireki kluba',
    'club.kicker':'OARGI MENDI ELKARTEA','club.title':'Historia eta etorkizuna duen kluba','club.p1':'Oargi Mendi Elkartea irabazi-asmorik gabeko elkarte pribatua da. Kirol modalitate ezberdinen artean mahai-tenis taldea du.',
    'teams.kicker':'LEHIAKETA','teams.title':'Gure taldeak','teams.sub':'Talde bat, pasio bera.','team.open1':'Open 1','team.open2':'Open 2','team.consult':'Emaitzak, egutegia eta sailkapena web ofizialean kontsultatu daitezke',
    'training.kicker':'USABAL KIROLDEGIA','training.title':'Entrenamenduak','training.sub':'Astean hiru egunetan entrenatzen dugu Tolosan.','day.tue':'Asteartea','day.wed':'Asteazkena','day.thu':'Osteguna','training.hours':'17:00 - 20:00',
    'news.kicker':'GAURKOTASUNA','news.title':'Albisteak','news.sub':'Mahai-teniseko federazioak eta gaurkotasuna.','news.rfetm':'Espainiako Mahai Teniseko Errege Federazioa','news.fvtm':'Euskal Mahai Tenis Federazioa',
    'calendar.kicker':'AGENDA','calendar.title':'Egutegia','calendar.sub':'CTD Sonia Etxazarreta Klubetako Openaren lehiaketa-egutegia.','calendar.docTitle':'2026/27 denboraldiko egutegia',
    'palmares.kicker':'HISTORIA','palmares.title':'Palmaresa','palmares.sub':'Hazten jarraitzen duen historia.','palmares.highlightLabel':'IBILBIDEA','palmares.highlight':'Kirol jarduera lau hamarkada baino gehiagotan',
    'gallery.kicker':'OARGI','gallery.title':'Galeria','gallery.speed':'Abiadura','gallery.competition':'Lehiaketa','gallery.training':'Entrenamendua','gallery.empty':'Gehitu argazki berriak galerian',
    'contact.kicker':'AURKITU GAITZAZU','contact.title':'Ezagutu gaitzazu','contact.address':'Usabal Kiroldegia<br>Usabal Auzoa, 25<br>20400 Usabal, Gipuzkoa','directions':'Nola iritsi','email':'oargitenisdemesa@gmail.com',
    'footer':'© Oargi T.M. · Tolosa, Gipuzkoa'
  }
};
function applyLang(lang){
  const dict=translations[lang]||translations.es;
  document.documentElement.lang=lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.dataset.i18n;if(dict[k]!==undefined)el.innerHTML=dict[k]});
  document.querySelectorAll('[data-i18n-attr]').forEach(el=>{const parts=el.dataset.i18nAttr.split(':');const attr=parts.shift();const k=parts.join(':');if(dict[k]!==undefined)el.setAttribute(attr,dict[k])});
  document.querySelectorAll('[data-lang]').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
  localStorage.setItem('oargi-lang',lang);
  if(document.getElementById('news-list')) loadClubContent();
}
async function loadClubContent(){
  try{
    const res=await fetch('contenido.json', {cache:'no-store'});
    if(!res.ok) throw new Error('contenido.json no disponible');
    const data=await res.json();
    const lang=document.documentElement.lang==='eu'?'eu':'es';
    const news=document.getElementById('news-list');
    if(news && Array.isArray(data.news)){
      news.innerHTML=data.news.map(item=>`<a class="news-link" href="${item.url}" target="_blank" rel="noopener"><span class="news-mark">${item.mark||'N'}</span><div><strong>${item.title?.[lang]||item.title?.es||''}</strong><small>${item.text?.[lang]||item.text?.es||''}</small></div></a>`).join('');
    }
    const gallery=document.getElementById('gallery-list');
    if(gallery && Array.isArray(data.gallery)){
      gallery.innerHTML=data.gallery.map((item,i)=>{
        if(item.type==='video'){
          const caption = item.text?.[lang] || item.text?.es || '';
          const url = item.url || '#';
          return `<figure class="visual video-link"><a href="${url}" target="_blank" rel="noopener noreferrer">${caption}</a></figure>`;
        } else {
          const img = item.image || '';
          const alt = item.alt?.[lang] || item.alt?.es || '';
          const caption = item.caption?.[lang] || item.caption?.es || '';
          return `<figure class="visual photo-card"><img src="${img}" alt="${alt}" loading="lazy"><figcaption>${caption}</figcaption></figure>`;
        }
      }).join('');
    }
  }catch(err){ console.warn(err); }
}

document.addEventListener('DOMContentLoaded',()=>{
  applyLang(localStorage.getItem('oargi-lang')||'es');
  loadClubContent();
  document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>applyLang(b.dataset.lang)));

  const header=document.querySelector('.site-header');
  const toggle=document.querySelector('.menu-toggle');
  const nav=document.querySelector('.site-header nav');
  if(toggle && header && nav){
    toggle.addEventListener('click',()=>{
      const open=header.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', String(open));
      const lang=document.documentElement.lang==='eu'?'eu':'es';
      toggle.setAttribute('aria-label', open ? (lang==='eu'?'Itxi menua':'Cerrar menú') : (lang==='eu'?'Menua ireki':'Abrir menú'));
    });
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
      header.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded','false');
    }));
    document.addEventListener('click',(e)=>{
      if(header.classList.contains('nav-open') && !header.contains(e.target)){
        header.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded','false');
      }
    });
  }
});
