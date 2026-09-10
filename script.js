const translations = {
  es: {
    'nav.home':'Inicio','nav.club':'El Club','nav.teams':'Equipos','nav.training':'Entrenamientos','nav.news':'Noticias','nav.gallery':'Galería','nav.contact':'Contacto',
    'menu.open':'Abrir menú','hero.siteTitle':'Oargi T.M.','eyebrow':'TOLOSA · GIPUZKOA · EUSKADI','hero.title1':'Pasión, competición','hero.title2':'y tenis de mesa desde los años 80','hero.text':'Pasión, competición y tenis de mesa desde los años 80','hero.cta':'Conoce nuestros equipos','join':'Únete al club','hero.badge':'TENIS DE MESA · DESDE LOS AÑOS 80',
    'club.kicker':'OARGI MENDI ELKARTEA','club.title':'Un club con historia y futuro','club.p1':'Oargi Mendi Elkartea es una asociación privada sin ánimo de lucro. Dentro de sus distintas modalidades deportivas, esta web se centra en la actividad de tenis de mesa.','club.p2':'La práctica federada comenzó en los años 80 y desde entonces el club ha participado en competiciones provinciales, autonómicas y estatales. Oargi apuesta por un deporte abierto, inclusivo y con especial impulso al deporte femenino.',
    'teams.kicker':'COMPETICIÓN','teams.title':'Nuestros equipos','teams.sub':'Dos equipos, una misma pasión.','team.opens':'Open 1 y 2','team.consult':'Consulta de resultados, calendario y clasificación →',
    'training.kicker':'POLIDEPORTIVO USABAL','training.title':'Entrenamientos','training.sub':'Entrenamos tres días a la semana en Tolosa.','day.tue':'Martes','day.wed':'Miércoles','day.thu':'Jueves','training.time':'17:00 — 19:00',
    'news.kicker':'ACTUALIDAD','news.title':'Noticias','news.sub':'Información y novedades del club.','news.item1Title':'Ya ha comenzado la escuela deportiva del Oargi tenis de mesa','news.item1Text':'Se realizará los martes y jueves a las 17:00 h.','news.share':'Compartir','news.whatsapp':'WhatsApp','news.email':'Email','news.linksTitle':'Enlaces de interés','news.rfetm':'Real Federación Española de Tenis de Mesa','news.fvtm':'Federación Vasca de Tenis de Mesa','news.fgtm':'Federación Guipuzcoana de Tenis de Mesa',
    'calendar.kicker':'AGENDA','calendar.title':'Calendario','calendar.sub':'Calendario de la temporada donde toma parte el club.','calendar.docTitle':'Calendario de competición','calendar.placeholder':'Consulta el calendario de la temporada: puedes verlo online o descargarlo en PDF.','calendar.view':'Ver PDF','calendar.download':'Descargar',
    'palmares.kicker':'HISTORIA','palmares.title':'Palmarés','palmares.sub':'Una historia que sigue creciendo.','palmares.highlightLabel':'TRAYECTORIA','palmares.highlight':'Más de cuatro décadas de tenis de mesa federado','palmares.highlightText':'Un espacio para reunir títulos, ascensos, campeonatos y otros logros destacados de Oargi.','palmares.startTag':'INICIO','palmares.startTitle':'Años 80','palmares.start':'Inicio de la actividad federada de tenis de mesa.','palmares.thenTag':'TRAYECTORIA','palmares.thenTitle':'Desde entonces','palmares.then':'Participación en competiciones provinciales, autonómicas y estatales.','palmares.nextTag':'FUTURO','palmares.nextTitle':'Próximos capítulos','palmares.next':'Espacio preparado para incorporar títulos, ascensos y logros.','palmares.addTitle':'Añadiremos aquí los nuevos logros','palmares.addText':'Año · competición · categoría · título o ascenso',
    'gallery.kicker':'OARGI','gallery.title':'Galería','gallery.photosTitle':'Fotos','gallery.photosEmpty':'Todavía no hay fotos publicadas.','gallery.videosTitle':'Vídeos','gallery.video1':'Historia del tenis de mesa','gallery.video2':'Reglas básicas del tenis de mesa',
    'contact.kicker':'ENCUÉNTRANOS','contact.title':'Ven a conocernos','contact.address':'Polideportivo Usabal<br>Usabal Auzoa, 25<br>20400 Usabal, Gipuzkoa','directions':'Cómo llegar','email':'EMAIL','contact.mail':'Escríbenos','contact.cta':'Contactar con Oargi',
    'footer.admin':'Administración','footer':'© Oargi T.M. · Tolosa, Gipuzkoa'
  },
  eu: {
    'nav.home':'Hasiera','nav.club':'Kluba','nav.teams':'Taldeak','nav.training':'Entrenamenduak','nav.news':'Albisteak','nav.gallery':'Galeria','nav.contact':'Kontaktua',
    'menu.open':'Menua ireki','hero.siteTitle':'Oargi T.M.','eyebrow':'TOLOSA · GIPUZKOA · EUSKADI','hero.title1':'Pasioa, lehia','hero.title2':'eta mahai-tenisa 80ko hamarkadatik','hero.text':'Pasioa, lehia eta mahai-tenisa 80ko hamarkadatik','hero.cta':'Ezagutu gure taldeak','join':'Egin bat klubarekin','hero.badge':'MAHAI-TENISA · 80KO HAMARKADATIK',
    'club.kicker':'OARGI MENDI ELKARTEA','club.title':'Historia eta etorkizuna duen kluba','club.p1':'Oargi Mendi Elkartea irabazi-asmorik gabeko elkarte pribatua da. Kirol modalitate ezberdinen artean, webgune honek mahai-teniseko jardueran jartzen du arreta.','club.p2':'Federatutako jarduera 80ko hamarkadan hasi zen eta ordutik klubak lurraldeko, autonomia erkidegoko eta estatuko txapelketetan parte hartu du. Oargik kirol irekia eta inklusiboa sustatzen du, eta emakumeen kirola bereziki bultzatzen du.',
    'teams.kicker':'LEHIAKETA','teams.title':'Gure taldeak','teams.sub':'Bi talde, pasio bera.','team.opens':'Open 1 eta 2','team.consult':'Emaitzak, egutegia eta sailkapena kontsultatu →',
    'training.kicker':'USABAL KIROLDEGIA','training.title':'Entrenamenduak','training.sub':'Astean hiru egunetan entrenatzen dugu Tolosan.','day.tue':'Asteartea','day.wed':'Asteazkena','day.thu':'Osteguna','training.time':'17:00 — 19:00',
    'news.kicker':'GAURKOTASUNA','news.title':'Albisteak','news.sub':'Klubaren informazioa eta berriak.','news.item1Title':'Oargi mahai-tenisaren kirol-eskola hasi da dagoeneko','news.item1Text':'Asteartetan eta ostegunetan izango da, 17:00etan.','news.share':'Partekatu','news.whatsapp':'WhatsApp','news.email':'Posta elektronikoa','news.linksTitle':'Lotura interesgarriak','news.rfetm':'Espainiako Mahai-tenis Federazioa','news.fvtm':'Euskadiko Mahai-tenis Federazioa','news.fgtm':'Gipuzkoako Mahai-tenis Federazioa',
    'calendar.kicker':'AGENDA','calendar.title':'Egutegia','calendar.sub':'Klubak parte hartzen duen denboraldiko egutegia.','calendar.docTitle':'Lehiaketako egutegia','calendar.placeholder':'Ikusi denboraldiko egutegia online edo deskargatu PDF formatuan.','calendar.view':'Ikusi PDFa','calendar.download':'Deskargatu',
    'palmares.kicker':'HISTORIA','palmares.title':'Palmaresa','palmares.sub':'Hazten jarraitzen duen historia.','palmares.highlightLabel':'IBILBIDEA','palmares.highlight':'Federatutako mahai-teniseko lau hamarkada baino gehiago','palmares.highlightText':'Oargiren tituluak, igoerak, txapelketak eta beste lorpen aipagarri batzuk biltzeko gunea.','palmares.startTag':'HASIERA','palmares.startTitle':'80ko hamarkada','palmares.start':'Mahai-teniseko federatutako jardueraren hasiera.','palmares.thenTag':'IBILBIDEA','palmares.thenTitle':'Ordutik','palmares.then':'Lurraldeko, autonomia erkidegoko eta estatuko txapelketetan parte hartzea.','palmares.nextTag':'ETORKIZUNA','palmares.nextTitle':'Hurrengo kapituluak','palmares.next':'Atal hau prest dago tituluak, igoerak eta lorpenak gehitzeko.','palmares.addTitle':'Hemen gehituko ditugu lorpen berriak','palmares.addText':'Urtea · txapelketa · kategoria · titulua edo igoera',
    'gallery.kicker':'OARGI','gallery.title':'Galeria','gallery.photosTitle':'Argazkiak','gallery.photosEmpty':'Oraindik ez dago argazkirik argitaratuta.','gallery.videosTitle':'Bideoak','gallery.video1':'Mahai-tenisaren historia','gallery.video2':'Mahai-tenisaren oinarrizko arauak',
    'contact.kicker':'AURKITU GAITZAZU','contact.title':'Ezagutu gaitzazu','contact.address':'Usabal Kiroldegia<br>Usabal Auzoa, 25<br>20400 Usabal, Gipuzkoa','directions':'Nola iritsi','email':'POSTA ELEKTRONIKOA','contact.mail':'Idatzi','contact.cta':'Jarri harremanetan Oargirekin',
    'footer.admin':'Administrazioa','footer':'© Oargi T.M. · Tolosa, Gipuzkoa'
  }
};
function applyLang(lang){
  const dict=translations[lang]||translations.es;
  document.documentElement.lang=lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.dataset.i18n;if(dict[k]!==undefined)el.innerHTML=dict[k]});
  document.querySelectorAll('[data-i18n-attr]').forEach(el=>{const parts=el.dataset.i18nAttr.split(':');const attr=parts.shift();const k=parts.join(':');if(dict[k]!==undefined)el.setAttribute(attr,dict[k])});
  document.querySelectorAll('[data-lang]').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
  localStorage.setItem('oargi-lang',lang);
}
document.addEventListener('DOMContentLoaded',()=>{
  applyLang(localStorage.getItem('oargi-lang')||'es');
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
