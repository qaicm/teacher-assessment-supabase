const $=s=>document.querySelector(s),S={ch:{}},av=a=>a.length?a.reduce((x,y)=>x+y,0)/a.length:0,f=v=>v==null?'-':(+v).toFixed(1);
const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const V=h=>$('#view').innerHTML=h,EDT=()=>['Admin','Direktur','Kepsek'].includes(S.user.Role);
const LBL={Guru:'Pegawai',Users:'Pengguna (Login)',Kategori_Jabatan:'Jenis Pegawai'},RLBL={Pegawai:'Pegawai (hanya data sendiri)',Kepsek:'Kepsek / Atasan (Principal, Dorm Head, dll)',Observer:'Observer (mengisi observasi kelas)',HRD:'HRD (kelola indikator 35 poin)',Direktur:'Direktur (lihat dan ubah semua)',Admin:'Admin (semua akses)'},KIZ=kl=>['Admin','Direktur','Kepsek'].includes(S.user.Role),obsYa=k=>((S.C.G.find(x=>x.Nama==k)||{}).Observasi)!='Tidak';
const MN=[['dash','Dashboard Analisis'],['obs','Observasi Kelas',['Admin','Direktur','Kepsek','Observer','Pegawai']],['kpi','Penilaian KPI',['Admin','Direktur','Kepsek','Observer','Pegawai']],['idp','Rencana IDP',['Admin','Direktur','Kepsek','Observer','Pegawai']],['lap','Laporan & Rekap',['Admin','Direktur','Kepsek','HRD','Observer']],['master','Data Master',['Admin','Direktur','Kepsek','HRD']],['set','Pengaturan',['Admin']]];
try{document.documentElement.dataset.theme=localStorage.getItem('th')||'light'}catch(e){}
function th(){const h=document.documentElement,d=h.dataset.theme=='dark'?'light':'dark';h.dataset.theme=d;try{localStorage.setItem('th',d)}catch(e){}}
function ld(on){$('#load').style.display=on?'flex':'none'}
function tt(m,e){const t=$('#toast');t.textContent=m;t.className=e?'e show':'show';setTimeout(()=>t.className='',4000)}
const imgUrl=u=>{u=String(u||'').trim();const m=u.match(/drive\.google\.com\/file\/d\/([\w-]+)/)||u.match(/drive\.google\.com\/(?:open|uc)\?[^#]*id=([\w-]+)/);return m?'https://drive.google.com/thumbnail?id='+m[1]+'&sz=w400':u};
const TG=[
['Observasi: halaman dan formulir',[
['obs.title','Classroom Observation','Judul halaman observasi'],
['obs.opt1','Observation 1 (mid first semester)','Pilihan observasi ke-1'],
['obs.opt2','Observation 2 (mid second semester)','Pilihan observasi ke-2'],
['c.open','Open','Tombol buka'],
['obs.notReleased','The observation results have not been released yet.','Pesan jika hasil belum dirilis'],
['obs.noAreas','No observation areas have been set for this employee type. Configure them in Master Data → Obs_Area (Target column).','Pesan jika area observasi belum ada'],
['obs.total','Total score','Skor total'],
['c.status','Status','Kata Status'],
['c.weight','weight','Kata bobot (di samping area/aspek)'],
['c.level','Level','Kata Level'],
['obs.formTitle','Classroom Observation Form','Judul formulir'],
['f.observer','Observer','Isian: pengamat'],
['f.observed','Observed teacher','Isian: guru yang diamati'],
['f.date','Day / Date','Isian: hari/tanggal'],
['f.course','Course / Subject','Isian: mata pelajaran'],
['f.seating','Seating Arrangement','Isian: pengaturan tempat duduk'],
['f.grade','Grade','Isian: kelas'],
['f.sequence','Teaching Sequence','Isian: urutan pengajaran'],
['f.students','# of students present','Isian: jumlah siswa hadir'],
['f.period','Observation Period','Isian: periode observasi'],
['f.diff','Differentiation','Isian: diferensiasi'],
['f.language','Language of Instruction','Isian: bahasa pengantar'],
['f.objectives','Learning Objectives','Isian: tujuan pembelajaran'],
['obs.celebration','Celebrations (Good Practices)','Kolom praktik baik'],
['obs.improve','Areas for Improvement','Kolom perlu ditingkatkan'],
['obs.reflection','Employee Reflection','Kolom refleksi pegawai'],
['obs.saveDraft','Save Draft','Tombol simpan draft'],
['btn.discuss','Send for Discussion','Tombol kirim ke diskusi'],
['btn.release','Release to Employee (email)','Tombol rilis'],
['obs.saveReflection','Save Reflection','Tombol simpan refleksi'],
['btn.save','Save','Tombol simpan (KPI)']]],
['KPI: halaman, formulir, dan kop',[
['kpi.title','KPI Assessment','Judul halaman KPI'],
['kpi.notReleased','The KPI results have not been released yet.','Pesan jika hasil belum dirilis'],
['kpi.assessorNow','Assessor currently scoring:','Label pemilih penilai'],
['kpi.a1','Assessor 1','Penilai 1'],
['kpi.a2','Assessor 2 (optional)','Penilai 2'],
['kpi.badgeQow','Academic / QoW (65)','Label kelompok akademik'],
['kpi.badgeHr','HR Indicators (35)','Label kelompok indikator HRD'],
['kpi.colComp','Component','Kolom: komponen'],
['kpi.colWeight','Weight','Kolom: bobot'],
['kpi.colPoints','Points','Kolom: poin'],
['kpi.autoObs','automatic from the average of observations','Keterangan komponen otomatis'],
['kpi.achievement','Achievement','Kata pencapaian'],
['kpi.docTitle','EMPLOYEE PERFORMANCE APPRAISAL (LEVEL 4 / 3 / 2 / 1)','Judul dokumen KPI'],
['kpi.docSub','KEY PERFORMANCE INDICATOR (LEVEL 4 / 3 / 2 / 1)','Subjudul dokumen KPI'],
['kpi.f.period','ASSESSMENT PERIOD','Kop: periode penilaian'],
['kpi.f.name','EMPLOYEE NAME','Kop: nama pegawai'],
['kpi.f.nip','EMPLOYEE ID (NIP)','Kop: NIP'],
['kpi.f.unit','UNIT / DEPARTMENT','Kop: unit/bagian'],
['kpi.f.pos','POSITION','Kop: jabatan'],
['kpi.f.join','DATE OF JOINING','Kop: tanggal masuk'],
['kpi.f.end','END DATE','Kop: tanggal berakhir'],
['kpi.empType','Employee Type','Kop: jenis pegawai'],
['kpi.notes','Notes / Remarks','Judul catatan'],
['kpi.celebrations','Celebrations','Catatan: celebrations'],
['kpi.improvements','Improvements','Catatan: improvements']]],
['Tanda tangan dan laporan PDF',[
['sig.title','Digital Signature & PDF','Judul panel tanda tangan'],
['sig.employee','Employee','Tanda tangan: pegawai'],
['sig.supervisor','Supervisor / Assessor','Tanda tangan: atasan/penilai'],
['sig.not','Not yet signed','Belum ditandatangani'],
['sig.signEmp','Sign as Employee','Tombol tanda tangan pegawai'],
['sig.signSup','Sign as Supervisor','Tombol tanda tangan atasan'],
['sig.print','Print / Save as PDF','Tombol cetak PDF'],
['sig.hint','The supervisor can sign once the status is Discussion or Released; the employee after Released. Changing any score removes the signatures.','Keterangan di bawah tombol'],
['sig.digital','Digitally signed','Teks pada PDF jika sudah tanda tangan'],
['rpt.obsTitle','CLASSROOM OBSERVATION REPORT','Judul PDF observasi'],
['rpt.result','Assessment Result','Hasil penilaian'],
['rpt.indicator','Indicator','Kolom: indikator'],
['rpt.score','Score','Kolom: skor'],
['rpt.descSel','Description of the selected score','Kolom: deskripsi skor'],
['rpt.achievement','achievement','Kata pencapaian (per area)'],
['rpt.scope','Scope','PDF KPI kolom: ruang lingkup'],
['rpt.aspect','Assessment Aspect','PDF KPI kolom: aspek penilaian'],
['rpt.assessor2','Assessor 2','PDF KPI kolom: penilai 2'],
['rpt.avg','Average','PDF KPI kolom: rata-rata'],
['rpt.obsRow','Classroom observation (automatic, average of observations)','PDF KPI baris observasi'],
['rpt.subQow','Academic Subtotal (QoW)','PDF KPI subtotal akademik'],
['rpt.subHr','HR Indicators Subtotal','PDF KPI subtotal HRD'],
['rpt.total','TOTAL KPI','PDF KPI total'],
['rpt.max','max','Kata maksimum'],
['rpt.formula','Achievement = average score ÷ 5 (for observation: the observation result percentage). Points = achievement × weight.','Catatan rumus di bawah tabel']]],
['Format',[
['locale','en-GB','Format tanggal dan waktu (en-GB = Inggris, id-ID = Indonesia)']]]];
const TD={};TG.forEach(g=>g[1].forEach(x=>TD[x[0]]=x[1]));
const tx=k=>(S.lb&&S.lb[k])||TD[k]||k;
// Awalan kunci penyimpanan browser (config.js → STORAGE_PREFIX) agar dua aplikasi di domain yang sama tidak saling menimpa sesi/cache
const LSP=(window.CFG&&window.CFG.STORAGE_PREFIX)||'';
function lsGet(k){try{return localStorage.getItem(LSP+k)||''}catch(e){return ''}}
function lsSet(k,v){try{v?localStorage.setItem(LSP+k,v):localStorage.removeItem(LSP+k)}catch(e){}}
const BASE=(window.CFG&&window.CFG.BACKEND_URL)||'';
function post(body){return fetch(BASE,{method:'POST',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(body)}).then(r=>r.text()).then(t=>{try{return JSON.parse(t)}catch(e){throw new Error('Respon backend tidak valid. Pastikan URL backend benar dan akses Web App-nya Anyone.')}})}
const siap=()=>{if(!BASE||BASE.indexOf('GANTI')>=0){tt('URL backend belum diisi di js/config.js.',1);return false}return true};
function apiP(fn,args){return post({n:fn,a:args||[],k:S.tk||''}).then(r=>{if(!r.success){const e=new Error(r.message||'Gagal.');e.code=r.code;throw e}if(typeof r.ms==='number')Perf.add(fn,r.ms);return r.data})}
function tolak(e){if(e.code=='AUTH'){S.tk='';lsSet('tk','');showLogin(e.message);return true}return false}
// Aksi tulis: tetap menunggu jawaban server (uang/akses/nilai tidak boleh ditebak).
const WR=['save','del','saveObs','saveRefleksi','saveKpi','release','setCfg','importData','ttd','idpGen','revokeSesi'];
function api(fn,args,cb){if(!siap())return;ld(1);apiP(fn,args).then(d=>{ld(0);if(WR.indexOf(fn)>=0)kosongkanCache();cb&&cb(d)},e=>{ld(0);if(!tolak(e))tt(e.message,1)})}

// ── Cache perangkat: namespace per pengguna + versi skema, aman bila penyimpanan diblokir ──
const SV=LSP+'ta:v1:',uk=k=>SV+((S.user&&S.user.Email)||'anon')+':'+k;
function sget(k){try{const v=localStorage.getItem(uk(k));return v?JSON.parse(v):null}catch(e){return null}}
function sset(k,v){try{localStorage.setItem(uk(k),JSON.stringify(v))}catch(e){try{Object.keys(localStorage).filter(x=>x.indexOf(SV)===0&&x.indexOf(uk(''))!==0).forEach(x=>localStorage.removeItem(x));localStorage.setItem(uk(k),JSON.stringify(v))}catch(e2){}}}
function hsh(t){let h=0;for(let i=0;i<t.length;i++)h=(h*31+t.charCodeAt(i))|0;return h+':'+t.length}
const Perf={rows:[],add(a,ms){this.rows.push({aksi:a,server_ms:ms,jam:new Date().toLocaleTimeString('id-ID')});if(this.rows.length>100)this.rows.shift()},tabel(){console.table(this.rows.slice(-30))}};
function bar(on){const b=$('#pbar');if(b)b.style.opacity=on?'1':'0'}
// Baca: tampilkan cache seketika, segarkan di latar, render ulang HANYA bila datanya berubah.
function swr(key,fn,args,render,opt){opt=opt||{};const c=sget(key);
 if(c){try{render(c.d,true)}catch(e){}}
 if(!siap())return;
 const fr=opt.fresh==null?45000:opt.fresh;
 if(c&&!opt.force&&Date.now()-c.t<fr)return;
 c?bar(1):ld(1);
 apiP(fn,args).then(d=>{c?bar(0):ld(0);const h=hsh(JSON.stringify(d));sset(key,{t:Date.now(),h:h,d:d});if(!c||c.h!==h)render(d,false)},
  e=>{c?bar(0):ld(0);if(tolak(e))return;if(!c)tt(e.message,1)})}
function kosongkanCache(){try{Object.keys(localStorage).filter(x=>x.indexOf(SV)===0).forEach(x=>localStorage.removeItem(x))}catch(e){}}
// ── Login kode email (OTP) ──
function showLogin(m){S._booted=0;document.body.classList.add('lg');V(`<div class="card lgc"><h2>Masuk</h2><p style="color:var(--mu)">${esc(m||'Masukkan email yang terdaftar. Kode 6 digit akan dikirim ke email Anda.')}</p><label>Email<input id="le" type="email" autocomplete="email" onkeydown="if(event.key=='Enter')lr()"></label><button class="btn" onclick="lr()">Kirim Kode</button><div id="lc" hidden style="margin-top:14px"><label>Kode 6 digit<input id="lk" inputmode="numeric" maxlength="6" autocomplete="one-time-code" onkeydown="if(event.key=='Enter')lv()"></label><button class="btn" onclick="lv()">Masuk</button></div></div>`)}
function lr(){const e=$('#le').value.trim();if(!e)return tt('Isi email terlebih dahulu.',1);api('authRequest',[e],r=>{S.le=e;$('#lc').hidden=false;$('#lk').focus();tt(r.pesan)})}
function lv(){api('authVerify',[S.le||$('#le').value.trim(),$('#lk').value,S.dp],r=>{S.tk=r.token;lsSet('tk',r.token);document.body.classList.remove('lg');
 if(r.boot){kosongkanCache();terapkanBoot(r.boot);sset('boot',{t:Date.now(),h:hsh(JSON.stringify(r.boot)),d:r.boot});S._booted=1;go('dash')}else boot(()=>go('dash'))})}
function keluar(){const f=()=>{S.tk='';lsSet('tk','');kosongkanCache();showLogin('Anda sudah keluar.')};if(!BASE)return f();ld(1);post({n:'logout',a:[],k:S.tk||''}).then(()=>{ld(0);f()},()=>{ld(0);f()})}
function M(h){X();const m=document.createElement('div');m.className='mo';m.id='mo';m.innerHTML='<div>'+h+'<button class="btn g" style="margin-top:8px" onclick="X()">Tutup</button></div>';document.body.appendChild(m)}
function X(){$('#mo')&&$('#mo').remove()}
function terapkanBoot(d){Object.assign(S,d);
 if(d.dash&&d.per!=null){S.dp=d.per||S.dp;try{sset('dash:'+d.per,{t:Date.now(),h:hsh(JSON.stringify(d.dash)),d:d.dash})}catch(e){}}const c=S.cfg;S.lb=(()=>{try{return JSON.parse(c.labels||'{}')}catch(e){return{}}})();$('#appn').textContent=c.appName||'Teacher Assessment';if(c.logoUrl){const lg=$('#logo');lg.onerror=()=>{lg.hidden=true};lg.src=imgUrl(c.logoUrl);lg.hidden=false}if(c.color)document.documentElement.style.setProperty('--ac',c.color);
 $('#who').textContent=S.user.Nama+' · '+S.user.Role;$('#warn').textContent=S.warn.length&&['Admin','Direktur'].includes(S.user.Role)?'⚠ '+S.warn.join(' | '):'';
 $('#menu').innerHTML=MN.filter(m=>!m[2]||m[2].includes(S.user.Role)).map(m=>`<a data-id="${m[0]}" onclick="go('${m[0]}')">${m[1]}</a>`).join('');
 if(S.page)document.querySelectorAll('#menu a').forEach(a=>a.classList.toggle('on',a.dataset.id==S.page));}
function boot(cb){
 swr('boot','bootstrap',[S.dp],d=>{terapkanBoot(d);if(d.dash&&d.per==S.dp)S.d=d.dash;
  if(!S._booted){S._booted=1;cb&&cb()}else if(S.page=='dash')dash();},{fresh:30000});}
function go(id){if(id=='dash')S.fl='';S.page=id;document.querySelectorAll('#menu a').forEach(a=>a.classList.toggle('on',a.dataset.id==id));({dash,obs,kpi,idp,lap,master:mst,set:stg})[id]()}
const isMe=id=>{const x=S.guru.find(y=>y.ID==id);return !!x&&S.user.Role!='Admin'&&String(x.Email||'').toLowerCase()==String(S.user.Email||'').toLowerCase()};
const gsel=(id,f)=>`<select id="${id}">${S.guru.filter(g=>!f||f(g)).map(g=>`<option value="${g.ID}">${esc(g.Nama)} (${esc(g.Unit)} · ${esc(g.Kategori)})</option>`).join('')}</select>`,gn=id=>(S.guru.find(g=>g.ID==id)||{}).Nama||'-';
const lvc=p=>{const l=S.C.L.find(l=>p>=+l.Min&&p<=+l.Max);return l?'L'+l.Level+' '+l.Nama:'-'};
function mk(id,cfg){if(!window.Chart)return;S.ch[id]&&S.ch[id].destroy();S.ch[id]=new Chart($('#'+id),cfg)}

// ── Dashboard ──
// ── Dashboard analisis interaktif ──
(()=>{const st=document.createElement('style');st.textContent='.pr{display:grid;grid-template-columns:minmax(110px,1.3fr) 3fr 56px;gap:8px;align-items:center;margin:7px 0;font-size:13px}.pr small{color:var(--mu)}.pb{height:9px;border-radius:99px;background:var(--bd);overflow:hidden}.pb i{display:block;height:100%;border-radius:99px;transition:width .5s}.pr b{text-align:right}.mo.wide>div{width:min(940px,96vw)}.lk{color:var(--ac);font-weight:700;cursor:pointer;text-decoration:none}[data-theme=dark] .lk{color:#9ca9f7}.chip{display:inline-block;padding:2px 8px;border-radius:99px;font-size:12px;font-weight:600;margin:2px 4px 2px 0;background:rgba(15,118,110,.12);color:var(--ok)}.chip.w{background:rgba(225,29,72,.1);color:var(--er)}.kc{border:1px solid var(--bd);border-radius:12px;padding:12px;margin-bottom:10px}';document.head.appendChild(st)})();
const pcol=p=>p>=80?'#0f766e':p>=60?'#4c59a1':p>=40?'#f59e0b':'#e11d48',pw=p=>Math.max(0,Math.min(100,p||0)),
 pbar=(p,l,sub)=>`<div class="pr"><span>${l}${sub?` <small>${sub}</small>`:''}</span><div class="pb"><i style="width:${pw(p)}%;background:${pcol(p||0)}"></i></div><b>${f(p)}%</b></div>`,
 pb2=p=>`<div style="display:flex;align-items:center;gap:6px"><div class="pb" style="flex:1"><i style="width:${pw(p)}%;background:${pcol(p||0)}"></i></div><b style="font-size:12px">${f(p)}%</b></div>`;
function aggKom(R){const m={};R.forEach(r=>(r.kom||[]).forEach(x=>{const k=x.k+'|'+x.n,o=m[k]=m[k]||{n:x.n,k:x.k,p:0,m:0};o.p+=x.p;o.m+=x.m}));return Object.values(m).map(o=>({n:o.n,k:o.k,pct:o.m?o.p/o.m*100:0})).sort((a,b)=>a.k==b.k?0:a.k=='QoW'?-1:1)}
function aggArea(R){const m={};R.forEach(r=>Object.keys(r.ar||{}).forEach(a=>(m[a]=m[a]||[]).push(r.ar[a])));return Object.keys(m).map(a=>({a:a,p:av(m[a])}))}
function dash(){const y=new Date().getFullYear();S.dp=S.dp||y+'/'+(y+1);swr('dash:'+S.dp,'dash',[S.dp],d=>{S.d=d;const us=[...new Set(d.rows.map(r=>r.unit))].filter(Boolean),js=[...new Set(d.rows.map(r=>r.jenis))].filter(Boolean);
 const _sh=`<h2>Dashboard Analisis</h2><div class="bar"><select id="fu" onchange="dr()"><option value="">Semua Unit</option>${us.map(u=>`<option>${esc(u)}</option>`).join('')}</select><select id="fj" onchange="dr()"><option value="">Semua Jenis Pegawai</option>${js.map(u=>`<option>${esc(u)}</option>`).join('')}</select><input id="dp" value="${esc(S.dp)}" size="10" title="Periode KPI" onchange="S.dp=this.value.trim();dash()"><input id="q" placeholder="Cari pegawai / NIP" oninput="dr()"><button class="btn g" onclick="csv()">Ekspor CSV</button><span id="flc"></span></div><div id="cards" class="grid" style="margin-bottom:16px"></div><div class="grid g2"><div class="card"><h3>Progres Komponen KPI</h3><div id="pk"></div></div><div class="card"><h3>Progres Area Observasi</h3><div id="pa"></div></div></div><div class="grid g2"><div class="card"><h3>Rata-rata KPI per Unit <small style="color:var(--mu)">(klik batang untuk menyaring)</small></h3><canvas id="c2"></canvas></div><div class="card"><h3>Sebaran Level <small style="color:var(--mu)">(klik untuk menyaring)</small></h3><canvas id="c3"></canvas></div></div><div class="card"><h3>Tren Observasi 1 vs 2 per Unit</h3><canvas id="c4"></canvas></div><div class="card" style="overflow:auto"><table id="tb"></table></div>`;if(!document.getElementById('tb'))V(_sh);dr()})}
function dr(){const u=$('#fu').value,j=$('#fj').value,q=$('#q').value.toLowerCase(),L=S.fl||'',R0=S.d.rows.filter(r=>(!u||r.unit==u)&&(!j||r.jenis==j)&&(r.nama+r.nip).toLowerCase().includes(q)),R=R0.filter(r=>!L||r.lv.Nama==L),W=R.filter(r=>r.wo+r.wk>0).length;
 $('#flc').innerHTML=L?`<button class="btn g" onclick="S.fl='';dr()">Level: ${esc(L)} ✕</button>`:'';
 $('#cards').innerHTML=[['Total Pegawai',R.length],['Rata-rata Observasi',f(av(R.filter(r=>r.obs).map(r=>r.obs)))+'%'],['Rata-rata KPI',f(av(R.filter(r=>r.kpi).map(r=>r.kpi)))+'%'],['KPI Dirilis',R.filter(r=>r.st=='Dirilis').length+'/'+R.length],['Perlu Pendampingan',W]].map(c=>`<div class="card" style="margin:0"><small>${c[0]}</small><div class="kv">${c[1]}</div></div>`).join('');
 const K=aggKom(R),A=aggArea(R);$('#pk').innerHTML=K.length?K.map(x=>pbar(x.pct,esc(x.n),x.k=='QoW'?'QoW':'HRD')).join(''):'<small style="color:var(--mu)">Belum ada data KPI.</small>';$('#pa').innerHTML=A.length?A.map(x=>pbar(x.p,esc(x.a))).join(''):'<small style="color:var(--mu)">Belum ada data observasi.</small>';
 const Us=[...new Set(R.map(r=>r.unit))],lvN=[...new Set(S.C.L.slice().sort((a,b)=>a.Level-b.Level).map(l=>l.Nama))];
 mk('c2',{type:'bar',data:{labels:Us,datasets:[{label:'KPI (%)',data:Us.map(x=>+f(av(R.filter(r=>r.unit==x&&r.kpi).map(r=>r.kpi)))),backgroundColor:'#2e3b82'}]},options:{scales:{y:{min:0,max:100}},onClick:(e,els)=>{if(els.length){$('#fu').value=Us[els[0].index];dr()}}}});
 mk('c3',{type:'doughnut',data:{labels:lvN,datasets:[{data:lvN.map(n=>R0.filter(r=>r.lv.Nama==n&&r.kpi).length),backgroundColor:['#e11d48','#f59e0b','#4c59a1','#0f766e','#2e3b82','#64748b']}]},options:{onClick:(e,els)=>{if(els.length){const n=lvN[els[0].index];S.fl=S.fl==n?'':n;dr()}}}});
 mk('c4',{type:'bar',data:{labels:Us,datasets:[1,2].map(n=>({label:'Obs '+n,data:Us.map(x=>+f(av(R.filter(r=>r.unit==x&&r['o'+n]!=null).map(r=>r['o'+n])))),backgroundColor:n==1?'#9ca9f7':'#2e3b82'}))},options:{scales:{y:{min:0,max:100}}}});
 $('#tb').innerHTML='<tr><th>Pegawai</th><th>Jenis</th><th>Unit</th><th style="min-width:120px">Observasi</th><th style="min-width:140px">KPI</th><th>Level</th><th>Perlu perhatian</th><th>Status</th></tr>'+R.map(r=>`<tr><td><a class="lk" href="#" onclick="det('${r.id}');return false">${esc(r.nama)}</a><br><small>${esc(r.nip)}</small></td><td>${esc(r.jenis)}</td><td>${esc(r.unit)}</td><td>${r.obs?pb2(r.obs):'-'}</td><td>${r.kpi?pb2(r.kpi)+'<small>'+r.poin+' poin</small>':'-'}</td><td><span class="bd l${r.lv.Level}">L${r.lv.Level} ${esc(r.lv.Nama)}</span></td><td>${r.wo+r.wk?`<span class="chip w">${r.wo} indikator observasi &lt;3</span><span class="chip w">${r.wk} aspek KPI &lt;3</span>`:'<span class="chip">Aman</span>'}</td><td>${esc(r.st)}</td></tr>`).join('')}
function Mw(h){M(h);const m=$('#mo');if(m)m.classList.add('wide')}
function det(id){api('detail',[id,S.dp],d=>{const g=d.g,W=d.W,nW=W.o.length+W.k.length;
 let h=`<h3 style="margin:0">${esc(g.nama)}</h3><p style="color:var(--mu);margin:2px 0 12px">NIP ${esc(g.nip)} · ${esc(g.unit)} · ${esc(g.jenis)}</p><div class="grid" style="margin-bottom:12px"><div class="card" style="margin:0"><small>Total KPI</small><div class="kv">${d.tot}</div><small>${f(d.pct)}% · L${d.lv.Level} ${esc(d.lv.Nama)} · periode ${esc(d.per||'-')}</small></div><div class="card" style="margin:0"><small>Akademik / QoW</small><div class="kv">${d.qow}</div></div><div class="card" style="margin:0"><small>Indikator HRD</small><div class="kv">${d.lain}</div></div></div>`;
 h+='<h4>Observasi Kelas</h4>'+(d.O.length?d.O.map(o=>`<div class="kc"><b>Observasi ${o.siklus}</b> <small style="color:var(--mu)">${esc(o.tgl)} · ${esc(o.observer)} · ${esc(o.status)}</small>${pbar(o.total,'Skor total')}${o.areas.map(a=>pbar(a.p,esc(a.a),'bobot '+a.bobot+'%')+'<div style="margin:-2px 0 6px">'+a.ind.filter(i=>i.s).map(i=>`<span class="chip ${i.s<3?'w':''}">${esc(i.n)}: ${i.s}</span>`).join('')+'</div>').join('')}</div>`).join(''):'<p style="color:var(--mu)">Belum ada observasi.</p>');
 h+='<h4>Penilaian KPI</h4>'+d.K.map(k=>`<div class="kc"><b>${esc(k.n)}</b> <small style="color:var(--mu)">${k.kel=='Lain'?'Indikator HRD':'Akademik / QoW'}${k.auto?' · otomatis dari observasi':''}</small>${pbar(k.pc,'Pencapaian','poin '+(+k.p).toFixed(1)+' / '+k.b)}${k.as.map(a=>pbar(a.pc,esc(a.n),'skor '+(a.s||'-')+' · bobot '+a.b)).join('')}</div>`).join('');
 h+='<h4>Perlu Perhatian (skor di bawah 3)</h4>'+(nW?'<ul>'+W.o.map(x=>`<li>Observasi ${x.siklus} — ${esc(x.area)}: <b>${esc(x.ind)}</b> (skor ${x.skor})</li>`).join('')+W.k.map(x=>`<li>KPI — ${esc(x.komp)}: <b>${esc(x.asp)}</b> (skor ${x.skor})</li>`).join('')+'</ul>':'<p style="color:var(--mu)">Tidak ada indikator atau aspek di bawah 3.</p>');
 if(EDT()&&!isMe(g.id)&&nW)h+=`<button class="btn" onclick="X();idpg('${g.id}')">Buat usulan IDP otomatis</button>`;Mw(h)})}
function idpg(id){api('idpGen',[id||''],r=>{tt(r.dibuat?r.dibuat+' usulan IDP dibuat. Buka menu Rencana IDP.':'Tidak ada usulan baru (sudah ada atau tidak ada skor di bawah 3).');if($('#ig2'))idp()})}
function csv(){const t=[['Nama','NIP','Unit','Obs1','Obs2','KPI','Level','Status']].concat(S.d.rows.map(r=>[r.nama,r.nip,r.unit,f(r.o1),f(r.o2),f(r.kpi),r.lv.Nama,r.st])).map(a=>a.map(x=>'"'+String(x).replace(/"/g,'""')+'"').join(',')).join('\n'),a=document.createElement('a');a.href=URL.createObjectURL(new Blob(['\ufeff'+t],{type:'text/csv'}));a.download='kinerja_guru.csv';a.click()}

// ── Observasi Kelas ──
function ap(s,a){const v=S.C.I.filter(i=>i.AreaID==a.ID&&s[i.ID]>0).map(i=>+s[i.ID]);return v.length?av(v)/5*100:null}
const AF=id=>{const k=(S.guru.find(g=>g.ID==id)||{}).Kategori;return S.C.A.filter(a=>!a.Target||a.Target=='Semua'||a.Target==k)};
function pc(s){let t=0,w=0;(S.oa||S.C.A).forEach(a=>{const p=ap(s,a);if(p!==null){t+=p*a.Bobot;w+=+a.Bobot}});return w?t/w:0}
function obs(){V(`<h2>${tx('obs.title')}</h2><div class="bar">${gsel('og',g=>obsYa(g.Kategori))}<select id="os"><option value="1">${esc(tx('obs.opt1'))}</option><option value="2">${esc(tx('obs.opt2'))}</option></select><button class="btn" onclick="lo()">${tx('c.open')}</button></div><div id="of"></div>`)}
function lo(){const g=$('#og').value,s=+$('#os').value;S.me=isMe(g);S.oa=AF(g);api('getObs',[g,s],o=>{S.o=o||{GuruID:g,Siklus:s,Skor:{},Status:'Draft'};rf()})}
function rf0(){const o=S.o,ro=S.user.Role=='Pegawai'||S.me,d=ro?'disabled':'';if(ro&&!o.ID)return $('#of').innerHTML='<div class="card">'+esc(tx('obs.notReleased'))+'</div>';
 $('#of').innerHTML=`<div class="card"><b>${tx('obs.total')}: <span id="tp">${f(pc(o.Skor))}</span>% · ${lvc(pc(o.Skor))} · ${tx('c.status')}: ${esc(o.Status)}</b></div>`+hdr(o,d)+(S.oa&&!S.oa.length?'<div class="card">'+esc(tx('obs.noAreas'))+'</div>':'')+(S.oa||S.C.A).map(a=>`<div class="card"><h3>${esc(a.Area)} <small>(${tx('c.weight')} ${a.Bobot}%)</small></h3>${S.C.I.filter(i=>i.AreaID==a.ID).map(i=>`<p><b>${esc(i.Indikator)}</b></p><div class="rub">${[1,2,3,4,5].map(n=>`<button class="${o.Skor[i.ID]==n?'on':''}" ${d} onclick="sc(this,'${i.ID}',${n})"><b>${n}</b><span>${esc(i['D'+n])}</span></button>`).join('')}</div>`).join('')}</div>`).join('')
 +`<div class="card"><label>${tx('obs.celebration')}<textarea id="oc" ${d}>${esc(o.Celebration)}</textarea></label><label>${tx('obs.improve')}<textarea id="oi" ${d}>${esc(o.Improve)}</textarea></label><label>${tx('obs.reflection')}<textarea id="or" ${ro?'':'disabled'}>${esc(o.Refleksi)}</textarea></label><div class="bar">${ro?'<button class="btn" onclick="sr()">'+esc(tx('obs.saveReflection'))+'</button>':`<button class="btn" onclick="sv('Draft')">${tx('obs.saveDraft')}</button><button class="btn g" onclick="sv('Diskusi')">${tx('btn.discuss')}</button>${EDT()?'<button class="btn" onclick="rl(\'obs\',S.o.ID)">'+esc(tx('btn.release'))+'</button>':''}`}</div></div>`}
const SEQ=['Exposure','Mini-lesson','Guided Practice','Independent Practice','Assessment'],SET=['Classical','Group'];
const hari=t=>t?new Date(t+'T00:00:00').toLocaleDateString(tx('locale'),{weekday:'long'}):'',hariT=()=>{$('#hari_t').textContent=hari($('#od').value)};
const fv=(id,l,v,d)=>`<label>${l}<input id="oh_${id}" value="${esc(v)}" ${d}></label>`;
function cbx(name,opts,sel,d,type){return `<div class="opt" id="oh_${name}">${opts.map(x=>`<label class="ck"><input type="${type}" name="o_${name}" value="${x}" ${sel.includes(x)?'checked':''} ${d}> ${x}</label>`).join('')}</div>`}
function hdr(o,d){const sq=String(o.Urutan||'').split(' / ').filter(Boolean);
 return `<div class="card"><h3>${tx('obs.formTitle')}</h3><div class="fm">
<div class="ro"><small>${tx('f.observer')}</small>${esc(o.Observer||S.user.Nama)}</div><div class="ro"><small>${tx('f.observed')}</small>${esc(gn(o.GuruID))}</div>
<label>${tx('f.date')}<input type="date" id="od" value="${esc(o.Tanggal)}" ${d} oninput="hariT()"><small id="hari_t">${hari(o.Tanggal)}</small></label>${fv('Mapel',tx('f.course'),o.Mapel,d)}
<div><small class="lb">${tx('f.seating')}</small>${cbx('Seating',SET,[o.Seating],d,'radio')}</div>${fv('Kelas',tx('f.grade'),o.Kelas,d)}
<div><small class="lb">${tx('f.sequence')}</small>${cbx('Urutan',SEQ,sq,d,'checkbox')}</div><label>${tx('f.students')}<input type="number" min="0" id="oh_JmlSiswa" value="${esc(o.JmlSiswa)}" ${d}></label>
<div><small class="lb">${tx('f.period')}</small>${cbx('Periode',['1','2'],[(String(o.Periode||o.Siklus).match(/[12]/)||[])[0]],d,'radio')}</div><div><small class="lb">${tx('f.diff')}</small>${cbx('Diferensiasi',['Yes','No'],[o.Diferensiasi],d,'radio')}</div>
<label style="grid-column:1/-1">${tx('f.objectives')}<textarea id="oh_Tujuan" ${d}>${esc(o.Tujuan)}</textarea></label>
<div style="grid-column:1/-1"><small class="lb">${tx('f.language')}</small>${cbx('Bahasa',['Full Bahasa','Full English','Mix'],[o.Bahasa],d,'radio')}</div></div></div>`}
function hv(){const x={};['Mapel','Kelas','JmlSiswa','Tujuan'].forEach(k=>x[k]=$('#oh_'+k).value);['Seating','Periode','Diferensiasi','Bahasa'].forEach(k=>{const r=document.querySelector('#oh_'+k+' input:checked');x[k]=r?r.value:''});x.Urutan=[...document.querySelectorAll('#oh_Urutan input:checked')].map(i=>i.value).join(' / ');return x}
function sc(b,id,n){S.o.Skor[id]=n;[...b.parentNode.children].forEach(x=>x.classList.toggle('on',x==b));$('#tp').textContent=f(pc(S.o.Skor))}
function sv(st){const o=S.o;api('saveObs',[Object.assign(hv(),{ID:o.ID,GuruID:o.GuruID,Siklus:o.Siklus,Tanggal:$('#od').value,Skor:o.Skor,Celebration:$('#oc').value,Improve:$('#oi').value,Status:st})],r=>{S.o=r;tt('Observasi tersimpan');rf()})}
function sr(){api('saveRefleksi',[S.o.ID,$('#or').value],()=>tt('Refleksi tersimpan'))}
function rl(t,id){if(!id)return tt('Simpan data terlebih dahulu',1);if(confirm('Rilis hasil ke pegawai dan kirim email?'))api('release',[t,id],()=>{tt('Dirilis & email dikirim');t=='obs'?lo():lk()})}

// ── Penilaian KPI ──
function kpi(){const y=new Date().getFullYear();V(`<h2>${tx('kpi.title')}</h2><div class="bar">${gsel('kg')}<input id="kp" value="${y}/${y+1}" size="10"><button class="btn" onclick="lk()">${tx('c.open')}</button></div><div id="kf"></div>`)}
function lk(){const g=$('#kg').value,p=$('#kp').value;api('getKpi',[g,p],d=>{S.k=d;S.pn=1;d.ps=d.ps||[];d.me=isMe(g);if((S.user.Role=='Pegawai'||d.me)&&!d.n)return $('#kf').innerHTML='<div class="card">'+esc(tx('kpi.notReleased'))+'</div>';d.n=d.n||{GuruID:g,Periode:p,P1:{},P2:{},Status:'Draft'};rk()})}
function rk0(){const k=S.k,n=k.n,ro=S.user.Role=='Pegawai'||k.me,d=ro?'disabled':'',dk=c=>d||!KIZ(c.Kelompok)?'disabled':'',pn=S.pn||1,as=c=>c.Sumber!='Observasi'?k.ps.filter(p=>p.KomponenID==c.ID):[],sec=k.ks.filter(c=>as(c).length),rest=k.ks.filter(c=>!as(c).length);let h=kpiHead();
 if(sec.length&&!ro)h+=`<div class="card"><div class="bar" style="margin:0"><b>${tx('kpi.assessorNow')}</b><div class="seg" style="width:300px;margin:0"><button class="${pn==1?'on':''}" onclick="sp(1)">${tx('kpi.a1')}</button><button class="${pn==2?'on':''}" onclick="sp(2)">${tx('kpi.a2')}</button></div></div></div>`;
 sec.forEach(c=>{const ps=as(c);h+=`<div class="card"><h3>${esc(c.Nama)} <span class="bd">${c.Kelompok=='Lain'?tx('kpi.badgeHr'):tx('kpi.badgeQow')}</span> <small>(${tx('c.weight')} ${ps.reduce((a,p)=>a+ +p.Bobot,0)}) <span id="st_${c.ID}"></span></small></h3>${ps.map(p=>`<p><b>${esc(p.Aspek)}</b> <small>(${tx('c.weight')} ${p.Bobot})</small><br><small id="ot_${p.ID}" style="color:var(--mu)"></small></p><div class="rub">${[1,2,3,4,5].map(m=>`<button class="${n['P'+pn][p.ID]==m?'on':''}" ${dk(c)} onclick="ka(this,'${p.ID}',${m})"><b>${m}</b><span>${esc(p['D'+m])}</span></button>`).join('')}</div>`).join('')}</div>`});
 if(rest.length)h+=`<div class="card" style="overflow:auto"><table><tr><th>${tx('kpi.colComp')}</th><th>${tx('kpi.colWeight')}</th><th>${tx('kpi.a1')}</th><th>${tx('kpi.a2')}</th><th>${tx('kpi.colPoints')}</th></tr>${rest.map(c=>c.Sumber=='Observasi'?`<tr><td>${esc(c.Nama)} <small>(${tx('kpi.autoObs')})</small></td><td>${c.Bobot}</td><td colspan="2">${tx('kpi.achievement')} ${f(k.obsPct)}% (${tx('c.level')} ${k.obsLv}) × ${tx('c.weight')} ${c.Bobot}</td><td id="pt_${c.ID}"></td></tr>`:`<tr><td>${esc(c.Nama)}</td><td>${c.Bobot}</td>${[1,2].map(p=>`<td><select ${dk(c)} onchange="kc('${c.ID}',${p},this.value)"><option value="">-</option>${[1,2,3,4,5].map(v=>`<option ${n['P'+p][c.ID]==v?'selected':''}>${v}</option>`).join('')}</select></td>`).join('')}<td id="pt_${c.ID}"></td></tr>`).join('')}</table></div>`;
 h+=notesCard(ro);h+=`<div class="card"><b id="kt"></b> · ${tx('c.status')}: ${esc(n.Status)}<div class="bar" style="margin:10px 0 0">${d?'':`<button class="btn" onclick="sk('Draft')">${tx('btn.save')}</button><button class="btn g" onclick="sk('Diskusi')">${tx('btn.discuss')}</button>${EDT()?'<button class="btn" onclick="rl(\'kpi\',S.k.n.ID)">'+esc(tx('btn.release'))+'</button>':''}`}</div></div>`;$('#kf').innerHTML=h;kt()}
function sp(p){S.pn=p;rk()}
function ka(b,id,m){const o=S.k.n['P'+S.pn];o[id]=o[id]==m?undefined:m;[...b.parentNode.children].forEach((x,i)=>x.classList.toggle('on',o[id]==i+1));kt()}
function kc(id,p,v){S.k.n['P'+p][id]=v?+v:undefined;kt()}
function kt(){const k=S.k,n=k.n;let t=0,m=0;
 k.ks.forEach(c=>{const as=c.Sumber!='Observasi'?k.ps.filter(p=>p.KomponenID==c.ID):[];
  if(as.length){let st=0,sm=0;as.forEach(p=>{const a=[n.P1[p.ID],n.P2[p.ID]].map(Number).filter(x=>x>0),pt=p.Bobot*(a.length?av(a):0)/5;st+=pt;sm+=+p.Bobot;const e=$('#ot_'+p.ID);if(e)e.textContent='Penilai 1: '+(n.P1[p.ID]||'-')+' · Penilai 2: '+(n.P2[p.ID]||'-')+' · Poin: '+pt.toFixed(1)});t+=st;m+=sm;const e=$('#st_'+c.ID);if(e)e.textContent='· '+st.toFixed(1)+'/'+sm}
  else{let p;if(c.Sumber=='Observasi')p=c.Bobot*(k.obsPct||0)/100;else{const v=[1,2].map(q2=>+n['P'+q2][c.ID]).filter(x=>x>0);p=v.length?c.Bobot*av(v)/5:0}t+=p;m+=+c.Bobot;const e=$('#pt_'+c.ID);if(e)e.textContent=p.toFixed(1)}});
 $('#kt').textContent=`Total ${t.toFixed(1)} / ${m} · ${lvc(m?t/m*100:0)}`}
function sk(st){const n=S.k.n;api('saveKpi',[{GuruID:n.GuruID,Periode:n.Periode,P1:n.P1,P2:n.P2,Status:st,Celebration:$('#kn_c')?$('#kn_c').value:n.Celebration,Improvement:$('#kn_i')?$('#kn_i').value:n.Improvement}],()=>{tt('KPI tersimpan');lk()})}

// ── IDP ──
const IST=['Usulan','Direncanakan','Berjalan','Disepakati','Selesai'];
function idp(){swr('idp','list',['IDP'],r=>{S.ir=r;const ed=EDT();V(`<h2>Rencana IDP</h2>${ed?`<div class="card"><h3>Usulan Otomatis</h3><p style="color:var(--mu);margin:0 0 8px">Dibuat dari indikator observasi dan aspek KPI yang skornya di bawah 3 (hasil berstatus Diskusi atau Dirilis). Usulan juga terbuat otomatis saat hasil dirilis, dan yang sudah ada tidak dibuat ulang.</p><div class="bar">${gsel('ig')}<button class="btn" onclick="idpg($('#ig').value)">Buat untuk pegawai terpilih</button><button class="btn g" onclick="idpAll()">Buat untuk semua pegawai di cakupan saya</button></div></div><div class="card"><h3>Tambah Manual</h3><div class="bar">${gsel('ig2')}<input id="if" placeholder="Area fokus"><input id="it" placeholder="Rencana tindakan &amp; mentor"><input id="iw" placeholder="Target waktu"><select id="is">${IST.map(x=>`<option>${x}</option>`).join('')}</select><button class="btn" onclick="si()">Tambah</button></div></div>`:''}<div class="card" style="overflow:auto"><table><tr><th>Pegawai</th><th>Fokus</th><th>Tindakan</th><th>Target</th><th>Status</th><th>Sumber</th>${ed?'<th></th>':''}</tr>${r.map((x,i)=>`<tr><td>${esc(gn(x.GuruID))}</td><td>${esc(x.Fokus)}</td><td>${esc(x.Tindakan)}</td><td>${esc(x.Target)}</td><td><span class="bd">${esc(x.Status)}</span></td><td>${esc(x.Sumber)}</td>${ed?`<td style="white-space:nowrap"><button class="btn g" onclick="ie(${i})">✎</button> <button class="btn g" onclick="idl(${i})">🗑</button></td>`:''}</tr>`).join('')}</table></div>`)})}
function idpAll(){if(confirm('Buat usulan IDP untuk semua pegawai di cakupan Anda?'))idpg('')}
function si(){api('save',['IDP',{GuruID:$('#ig2').value,Fokus:$('#if').value,Tindakan:$('#it').value,Target:$('#iw').value,Status:$('#is').value}],()=>{tt('IDP tersimpan');idp()})}
function ie(i){const x=S.ir[i];S.ii=i;M(`<h3>Ubah IDP — ${esc(gn(x.GuruID))}</h3><label>Fokus<textarea id="e_f">${esc(x.Fokus)}</textarea></label><label>Tindakan<textarea id="e_t">${esc(x.Tindakan)}</textarea></label><label>Target waktu<input id="e_w" value="${esc(x.Target)}"></label><label>Status<select id="e_s">${IST.map(q=>`<option ${q==x.Status?'selected':''}>${q}</option>`).join('')}</select></label><button class="btn" onclick="ies()">Simpan</button>`)}
function ies(){const x=Object.assign({},S.ir[S.ii],{Fokus:$('#e_f').value,Tindakan:$('#e_t').value,Target:$('#e_w').value,Status:$('#e_s').value});api('save',['IDP',x],()=>{X();tt('IDP tersimpan');idp()})}
function idl(i){if(confirm('Hapus IDP ini?'))api('del',['IDP',S.ir[i].ID],()=>{tt('IDP dihapus');idp()})}

// ── Data Master (komponen KPI, area/indikator observasi, level, guru, pengguna) ──
function mst(){const t=S.user.Role=='Admin'?['Guru','Users','KPI_Komponen','KPI_Aspek','Obs_Area','Obs_Indikator','Level_Config','Kategori_Jabatan']:S.user.Role=='HRD'?['KPI_Komponen','KPI_Aspek']:['Guru'];V(`<h2>Data Master</h2><div class="bar tabs">${t.map(x=>`<button class="btn g" data-t="${x}" onclick="mt('${x}')">${LBL[x]||x}</button>`).join('')}</div><div id="mt" class="card" style="overflow:auto"></div>`);mt(t[0])}
const cell=(k,v)=>k=='KomponenID'?((S.C.K.find(c=>c.ID==v)||{}).Nama?(S.C.K.find(c=>c.ID==v).Kelompok+': '+S.C.K.find(c=>c.ID==v).Nama):v):k=='AreaID'?(()=>{const a=S.C.A.find(x=>x.ID==v);return a?a.Area+' ('+(a.Target||'Semua')+')':v})():v;
const bef=x=>{const a=S.C.P.filter(p=>p.KomponenID==x.ID);return a.length&&x.Sumber!='Observasi'?a.reduce((t,p)=>t+ +p.Bobot,0)+' ('+a.length+' aspek)':x.Bobot};
function mt(n){S.mn=n;document.querySelectorAll('.tabs .btn').forEach(b=>b.classList.toggle('on',b.dataset.t==n));swr('m:'+n,'list',[n],r=>{S.mr=r;const h=['Obs_Indikator','KPI_Aspek'].includes(n)?S.H[n].filter(k=>!/^D[1-5]$/.test(k)):S.H[n];$('#mt').innerHTML=`<div class="bar"><button class="btn" onclick="me_()">+ Tambah</button>${['Guru','Users','KPI_Komponen','KPI_Aspek','Obs_Area','Obs_Indikator'].includes(n)?'<button class="btn g" onclick="imp()">⬆ Unggah Excel</button>':''}</div><table><tr>${h.map(x=>`<th>${x=='Kategori'&&n=='Guru'?'Jenis Pegawai':(n=='Guru'&&FLB[x])||x}</th>`).join('')}${['Obs_Indikator','KPI_Aspek'].includes(n)?'<th>Rubrik</th>':n=='KPI_Komponen'?'<th>Bobot efektif</th>':''}<th></th></tr>${r.map((x,i)=>`<tr>${h.map(k=>`<td>${esc(cell(k,x[k]))}</td>`).join('')}${['Obs_Indikator','KPI_Aspek'].includes(n)?`<td>${[1,2,3,4,5].filter(j=>x['D'+j]).length}/5</td>`:n=='KPI_Komponen'?`<td>${bef(x)}</td>`:''}<td style="white-space:nowrap"><button class="btn g" onclick="me_(${i})">✎</button> <button class="btn g" onclick="md(${i})">🗑</button></td></tr>`).join('')}</table>`})}
const OPT={'Kategori_Jabatan.Observasi':['Ya','Tidak'],'Users.Role':['Pegawai','Kepsek','Observer','HRD','Direktur','Admin'],'Users.Aktif':['TRUE','FALSE'],'Guru.Kategori':['Guru','Pimpinan'],'KPI_Komponen.Kelompok':['QoW','Lain'],'KPI_Komponen.Target':['Semua','Guru','Pimpinan'],'KPI_Komponen.Sumber':['','Observasi']};
const FLB={TglMasuk:'Tanggal Masuk',TglBerakhir:'Tanggal Berakhir'};
const lbl=k=>/^D[1-5]$/.test(k)?'Deskriptor skor '+k[1]:S.mn=='Guru'&&k=='Kategori'?'Jenis Pegawai':S.mn=='Users'&&k=='Unit'?'Unit (isi "Semua" untuk atasan lintas unit)':(S.mn=='Guru'&&FLB[k])||k;
function fld(k,v){const key=S.mn+'.'+k;if(key=='Guru.TglMasuk'||key=='Guru.TglBerakhir')return `<input type="date" id="f_${k}" value="${esc(v)}">`;if(key=='Users.Menilai')return `<div class="opt" id="f_Menilai">${S.C.G.map(x=>`<label class="ck"><input type="checkbox" value="${esc(x.Nama)}" ${String(v||'').split(',').map(q=>q.trim().toLowerCase()).includes(x.Nama.toLowerCase())?'checked':''}> ${esc(x.Nama)}</label>`).join('')}</div>`;if(/^D[1-5]$/.test(k))return `<textarea id="f_${k}">${esc(v)}</textarea>`;let o=OPT[key]&&OPT[key].map(x=>[x,(key=='Users.Role'&&RLBL[x])||x||'(kosong)']);if(key=='Obs_Indikator.AreaID')o=S.C.A.map(a=>[a.ID,a.Area+' ('+(a.Target||'Semua')+')']);if(key=='KPI_Aspek.KomponenID')o=S.C.K.map(c=>[c.ID,c.Kelompok+': '+c.Nama+' ('+c.Target+')']);if(key=='Guru.Kategori')o=S.C.G.map(x=>[x.Nama,x.Nama]);if(key=='KPI_Komponen.Target'||key=='Obs_Area.Target')o=[['Semua','Semua']].concat(S.C.G.map(x=>[x.Nama,x.Nama]));
 if(o){const s=String(v==null?'':v).toLowerCase();if(s&&!o.some(x=>String(x[0]).toLowerCase()==s))o.unshift([v,v]);return `<select id="f_${k}">${o.map(x=>`<option value="${esc(x[0])}" ${s&&String(x[0]).toLowerCase()==s?'selected':''}>${esc(x[1])}</option>`).join('')}</select>`}
 return `<input id="f_${k}" value="${esc(v)}"${['Guru.Unit','Users.Unit'].includes(key)?' list="ul"':''}>`}
function me_(i){const r=i===undefined?{}:S.mr[i];S.me=r;const U=[...new Set((S.mn=='Users'?['Semua']:[]).concat(['TK','SD','SMP','SMA']).concat(S.guru.map(g=>g.Unit).filter(Boolean)))];
 M(`<h3>${LBL[S.mn]||S.mn}</h3>${S.H[S.mn].filter(k=>k!='ID').map(k=>k=='Menilai'?`<div style="margin-bottom:10px"><small class="lb">Menilai jenis pegawai (kosong = semua jenis di unitnya)</small>${fld(k,r[k])}</div>`:`<label>${lbl(k)}${fld(k,r[k])}</label>`).join('')}<datalist id="ul">${U.map(u=>`<option value="${esc(u)}">`).join('')}</datalist><button class="btn" onclick="ms()">Simpan</button>`)}
function ms(){const r={ID:S.me.ID};S.H[S.mn].forEach(k=>{if(k!='ID')r[k]=k=='Menilai'?[...document.querySelectorAll('#f_Menilai input:checked')].map(i=>i.value).join(', '):$('#f_'+k).value});api('save',[S.mn,r],x=>{X();tt(x.warn.length?'Peringatan: '+x.warn.join('; '):'Tersimpan',x.warn.length);boot(()=>mt(S.mn))})}
function md(i){if(confirm('Hapus data ini?'))api('del',[S.mn,S.mr[i].ID],()=>boot(()=>mt(S.mn)))}

// ── Unggah Excel (Guru & Users) ──
const IC={KPI_Aspek:['Kelompok','Target','Ruang Lingkup','Aspek','Bobot','Skor 5','Skor 4','Skor 3','Skor 2','Skor 1'],Obs_Indikator:['Target','Area','Indikator','Skor 5','Skor 4','Skor 3','Skor 2','Skor 1'],Obs_Area:['Area','Bobot']},cols=()=>IC[S.mn]||S.H[S.mn].filter(k=>k!='ID');
const EX={Guru:['Nama 1','0001','nama1@sekolah.sch.id','SMP','Guru Matematika','Guru','2020-07-15',''],Users:['nama1@sekolah.sch.id','Nama 1','Pegawai','SMP','TRUE',''],Obs_Area:['Classroom Management',20,'Guru'],Obs_Indikator:['Guru','Classroom Management','Set up classroom rules, routines, and procedures.','Rules applied consistently and independently by all students','Consistently applied rules by all students','Clear rules followed by most students','Basic rules displayed but inconsistently enforced','Rules exist but not followed'],KPI_Komponen:['QoW','Perencanaan Pembelajaran',15,'Semua',''],KPI_Aspek:['QoW','Guru','Perencanaan dan Pelaksanaan','a. Differentiated Instruction (DI)',5,'Three pillars (product, process, content) and student background are implemented','Three pillars of DI are applied (content, process or product)','1 topic consists of 1 DI minimum','Not all of the topic apply DI','No differentiation instruction at all']};
const HT={Guru:'Data dicocokkan lewat Email atau NIP: yang sudah ada diperbarui, yang baru ditambahkan. Jenis Pegawai (kolom Kategori atau Jenis Pegawai): salah satu nama di tab Jenis Pegawai (misalnya Guru, Musyrif, Principal Team). Format kolom NIP sebagai Teks agar angka 0 di depan tidak hilang. TglMasuk dan TglBerakhir (opsional) sebaiknya berformat YYYY-MM-DD.',Users:'Data dicocokkan lewat Email. Role: Admin, Direktur, HRD, Kepsek, Observer, atau Pegawai. Kolom Menilai (opsional): kategori yang dinilai pengguna itu, dipisah koma (misalnya Guru atau Musyrif); kosong berarti semua kategori di unitnya. Aktif: TRUE atau FALSE.',Obs_Area:'Area dicocokkan lewat Nama + Target: bobot diperbarui jika sudah ada, area baru ditambahkan. Target diisi Semua atau nama jenis pegawai (misalnya Guru atau Musyrif), karena tiap jenis punya set area sendiri dengan total bobot 100.',Obs_Indikator:'Kolom Target (Semua atau nama jenis pegawai; kosong mengikuti baris di atasnya) dan Area menunjuk area di Obs_Area (nama atau kode); sel Area yang kosong mengikuti baris di atasnya. Kolom Skor 5 sampai Skor 1 (boleh juga berjudul 5, 4, 3, 2, 1) berisi deskriptor tiap skor dan boleh dikosongkan. Indikator baru ditambahkan; indikator yang sudah ada diperbarui deskriptornya jika diisi.',KPI_Aspek:'Satu baris = satu aspek penilaian. Ruang Lingkup menjadi nama komponen (dibuat otomatis jika belum ada). Kelompok (QoW atau Lain) dan Target (Semua atau nama kategori jabatan, misalnya Guru atau Musyrif) boleh dikosongkan: mengikuti baris di atasnya, awalnya QoW dan Semua. Bobot per aspek; total bobot komponen = jumlah bobot aspeknya. Skor 5 sampai Skor 1 (atau judul 5, 4, 3, 2, 1) berisi deskripsi rubrik. Aspek yang sudah ada diperbarui, yang baru ditambahkan. Indikator HRD (35 poin, sama untuk semua pegawai) memakai Kelompok Lain dan Target Semua.',KPI_Komponen:'Kelompok: QoW atau Lain. Target: Semua atau nama kategori jabatan. Sumber: kosongkan, atau isi Observasi agar skor otomatis dari observasi. Komponen dicocokkan lewat Kelompok + Nama + Target (bobot diperbarui jika sudah ada). Total QoW harus 65 dan Lain 35 untuk setiap kategori jabatan.'};
function imp(){M(`<h3>Unggah Excel: ${LBL[S.mn]||S.mn}</h3><p>Kolom (baris pertama sebagai judul): <b>${cols().join(', ')}</b>.<br><small>${HT[S.mn]}</small></p><input type="file" id="xf" accept=".xlsx,.xls,.csv"><div class="bar" style="margin-top:10px"><button class="btn g" onclick="tpl()">Unduh Template</button><button class="btn" onclick="xu()">Unggah</button></div><div id="xr"></div>`)}
function tpl(){if(!window.XLSX)return tt('Pustaka Excel belum termuat, muat ulang halaman.',1);const wb=XLSX.utils.book_new();XLSX.utils.book_append_sheet(wb,XLSX.utils.aoa_to_sheet([cols(),EX[S.mn]]),S.mn);XLSX.writeFile(wb,'template_'+S.mn+'.xlsx')}
function xu(){if(!window.XLSX)return tt('Pustaka Excel belum termuat, muat ulang halaman.',1);const f=$('#xf').files[0];if(!f)return tt('Pilih file terlebih dahulu.',1);const r=new FileReader();
 r.onload=e=>{let rows;try{const wb=XLSX.read(e.target.result,{type:'array',cellDates:true});rows=XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]],{defval:'',raw:false,dateNF:'yyyy-mm-dd'})}catch(er){return tt('File tidak terbaca: '+er.message,1)}
  api('importData',[S.mn,rows],x=>{$('#xr').innerHTML=`<p><b>${x.tambah} ditambahkan, ${x.ubah} diperbarui${x.lewati?', '+x.lewati+' sudah ada (dilewati)':''}, ${x.gagal.length} gagal.</b></p>${x.warn&&x.warn.length?'<p style="color:var(--er)">⚠ '+esc(x.warn.join(' | '))+'</p>':''}`+(x.gagal.length?'<ul>'+x.gagal.slice(0,30).map(g=>'<li>'+esc(g)+'</li>').join('')+(x.gagal.length>30?'<li>...</li>':'')+'</ul>':'');boot(()=>mt(S.mn))})};
 r.readAsArrayBuffer(f)}

// ── Pengaturan tampilan ──
function stg(){const c=S.cfg;V(`<h2>Pengaturan</h2><div class="card"><label>Nama aplikasi<input id="sa" value="${esc(c.appName)}"></label><label>URL logo sekolah<input id="sl" value="${esc(c.logoUrl)}"></label><label>Warna utama<input id="sc" type="color" value="${esc(c.color||'#2e3b82')}"></label><label>Masa berlaku sesi login (hari)<input id="sh" type="number" min="1" value="${esc(c.sesiHari||14)}"></label><label>Batas email per hari (kode login dan rilis hasil)<input id="sb" type="number" min="1" value="${esc(c.batasEmail||90)}"></label><button class="btn" onclick="ss_()">Simpan</button></div><div class="card"><h3>Keluarkan pengguna dari semua perangkat</h3><div class="bar"><input id="rv" placeholder="email pengguna"><button class="btn g" onclick="rv_(0)">Keluarkan</button><button class="btn g" onclick="rv_(1)">Keluarkan semua pengguna</button></div></div><div class="card"><h3>Teks Template Observasi &amp; KPI</h3><div id="lbx">Memuat...</div></div><div class="card"><h3>Kuota email hari ini</h3><div id="kq">Memuat...</div></div><div class="card"><h3>Riwayat Login &amp; Sesi Aktif</h3><div id="rl" style="overflow:auto">Memuat...</div></div>`);lbx();api('riwayatLogin',[],rl_);api('kuotaEmail',[],k=>{$('#kq').innerHTML=`Terkirim oleh aplikasi hari ini: <b>${k.terkirim}</b> dari batas <b>${k.batas}</b><br>Sisa kuota Google saat ini: <b>${k.sisaGoogle}</b> email<br><small style="color:var(--mu)">Kuota Google dihitung ulang otomatis setiap 24 jam. Jika sisanya menipis, naikkan batas di atas hanya jika akun pemilik berada di Workspace.</small>`})}
const wk2=w=>new Date(+w).toLocaleString('id-ID');
function rl_(r){$('#rl').innerHTML=`<p><b>${r.hari.berhasil}</b> login berhasil · <b>${r.hari.kode}</b> kode dikirim · <b>${r.hari.gagal}</b> kode salah/ditolak · <b>${r.hari.takterdaftar}</b> email tidak terdaftar (hari ini) · <b>${r.sesi.length}</b> sesi aktif</p><h4>Sesi aktif (sudah login)</h4><table><tr><th>Pengguna</th><th>Masuk</th><th>Berlaku sampai</th><th></th></tr>${r.sesi.map(x=>`<tr><td>${esc(x.Nama||'')} <small>${esc(x.Email)}</small></td><td>${wk2(x.Dibuat)}</td><td>${wk2(x.Exp)}</td><td><button class="btn g" onclick="rv2('${esc(x.Email)}')">Keluarkan</button></td></tr>`).join('')||'<tr><td colspan="4">Tidak ada sesi aktif.</td></tr>'}</table><h4>Aktivitas terbaru (300 terakhir)</h4><table><tr><th>Waktu</th><th>Email</th><th>Aksi</th><th>Keterangan</th></tr>${r.log.map(x=>`<tr><td>${wk2(x.Waktu)}</td><td>${esc(x.Email)}${x.Nama?' <small>('+esc(x.Nama)+')</small>':''}</td><td>${esc(x.Aksi)}</td><td>${esc(x.Ket)}</td></tr>`).join('')}</table>`}
function rv2(em){if(confirm('Keluarkan '+em+' dari semua perangkat?'))api('revokeSesi',[em],n=>{tt(n+' sesi dihapus.');api('riwayatLogin',[],rl_)})}
function lbx(){const el=$('#lbx');if(!el)return;el.innerHTML='<p style="color:var(--mu);margin:0 0 10px">Teks bawaan dalam bahasa Inggris. Untuk mengubah kalimat, ketik teks baru di kolom kanan lalu klik <b>Simpan Teks</b>. Kolom yang dikosongkan memakai teks bawaan (ditampilkan samar). Perubahan berlaku di formulir, layar, dan PDF.</p>'+TG.map(g=>`<h4>${esc(g[0])}</h4>`+g[1].map(x=>`<label style="display:grid;grid-template-columns:minmax(150px,1fr) 2fr;gap:8px;align-items:center;margin-bottom:6px"><small style="color:var(--mu)">${esc(x[2])}<br><code>${x[0]}</code></small><input data-k="${x[0]}" value="${esc((S.lb&&S.lb[x[0]])||'')}" placeholder="${esc(x[1])}"></label>`).join('')).join('')+'<div class="bar"><button class="btn" onclick="lbs()">Simpan Teks</button><button class="btn g" onclick="lbr()">Kembalikan Semua ke Bawaan</button></div>'}
function lbs(){const o={};document.querySelectorAll('#lbx input[data-k]').forEach(i=>{const v=i.value.trim();if(v)o[i.dataset.k]=v});api('setCfg',[{labels:JSON.stringify(o)}],()=>{tt('Teks template tersimpan');boot(()=>stg())})}
function lbr(){if(confirm('Kembalikan semua teks template ke bawaan (bahasa Inggris)?'))api('setCfg',[{labels:'{}'}],()=>{tt('Teks dikembalikan ke bawaan');boot(()=>stg())})}
function rv_(all){if(!all&&!$('#rv').value.trim())return tt('Isi email pengguna.',1);if(confirm(all?'Keluarkan SEMUA pengguna dari semua perangkat?':'Keluarkan pengguna ini dari semua perangkat?'))api('revokeSesi',[all?'':$('#rv').value.trim()],n=>tt(n+' sesi dihapus.'))}
function ss_(){api('setCfg',[{appName:$('#sa').value,logoUrl:$('#sl').value,color:$('#sc').value,sesiHari:$('#sh').value,batasEmail:$('#sb').value}],()=>{tt('Pengaturan tersimpan');boot()})}

// ── Laporan: tanda tangan digital, PDF (cetak), rekap Excel ──
(()=>{const st=document.createElement('style');st.textContent='.rpt{position:fixed;inset:0;background:#fff;color:#000;overflow:auto;z-index:20;padding:16px;font-size:12px}.rpt .bx{max-width:820px;margin:0 auto}.rpt .tb{display:flex;gap:8px;margin-bottom:12px}.rpt table{border-collapse:collapse;width:100%;margin:8px 0;color:#000}.rpt th,.rpt td{border:1px solid #444;padding:5px 6px;text-align:left;vertical-align:top;font-size:12px;color:#000;background:#fff}.rpt th{background:#eee}.rpt .rh{display:flex;gap:12px;align-items:center;border-bottom:2px solid #000;padding-bottom:8px;margin-bottom:8px}.rpt h4{margin:12px 0 4px;font-size:13px}.rpt .ar td{background:#f3f3f3;font-weight:700}.rpt .sg{height:70px;display:flex;flex-direction:column;justify-content:flex-end;font-size:11px}.rpt tr{page-break-inside:avoid}.rpt .kh{text-align:center;margin-bottom:8px}.rpt .kh h1{font-size:18px;margin:6px 0 0}.rpt .kh i{display:block;font-weight:700;margin:2px 0 8px}.rpt table.kf{width:auto}.rpt table.kf td{border:none;padding:2px 6px;background:#fff}.rpt .nb{border:1px solid #444;padding:8px;margin:6px 0;white-space:pre-wrap;color:#000}@media print{body>*:not(#rpt){display:none!important}.rpt{position:static;padding:0;overflow:visible}.rpt .nop{display:none}}';document.head.appendChild(st)})();
const rhead=t=>`<div class="rh">${S.cfg.logoUrl?`<img src="${esc(imgUrl(S.cfg.logoUrl))}" style="height:52px" alt="">`:''}<div><b style="font-size:16px">${esc(S.cfg.appName||'')}</b><br><b>${t}</b></div></div>`,wkt=w=>new Date(+w).toLocaleString(tx('locale'));
function sigBlock(T,np,na){const pg=T.find(x=>x.Peran=='Pegawai'),at=T.find(x=>x.Peran=='Atasan'),cell=(lb,x,nm)=>`<td style="width:50%;text-align:center"><b>${lb}</b><div class="sg">${x?'✔ '+tx('sig.digital')+'<br>'+esc(x.Nama)+'<br>'+wkt(x.Waktu):''}</div>( ${esc(x?x.Nama:(nm||'..............................'))} )</td>`;return `<table style="margin-top:16px"><tr>${cell(tx('sig.employee'),pg,np)}${cell(tx('sig.supervisor'),at,na)}</tr></table>`}
function rptObs(){const o=S.o,g=S.guru.find(x=>x.ID==o.GuruID)||{},s=o.Skor||{},tp=pc(s),E=v=>esc(v==null?'':v);
 const inf=[[tx('f.observer'),o.Observer||S.user.Nama],[tx('f.observed'),g.Nama],[tx('f.date'),o.Tanggal?hari(o.Tanggal)+', '+o.Tanggal:''],[tx('f.course'),o.Mapel],[tx('f.seating'),o.Seating],[tx('f.grade'),o.Kelas],[tx('f.sequence'),o.Urutan],[tx('f.students'),o.JmlSiswa],[tx('f.period'),o.Periode],[tx('f.diff'),o.Diferensiasi],[tx('f.language'),o.Bahasa]];let t='';
 for(let i=0;i<inf.length;i+=2){const a=inf[i],b=inf[i+1]||['',''];t+=`<tr><th>${a[0]}</th><td>${E(a[1])}</td><th>${b[0]}</th><td>${E(b[1])}</td></tr>`}
 const ar=(S.oa||S.C.A).map(a=>`<tr class="ar"><td colspan="3">${E(a.Area)} (${tx('c.weight')} ${a.Bobot}%) · ${tx('rpt.achievement')} ${f(ap(s,a))}%</td></tr>`+S.C.I.filter(i=>i.AreaID==a.ID).map(i=>`<tr><td>${E(i.Indikator)}</td><td style="text-align:center;width:50px">${s[i.ID]||'-'}</td><td>${E(i['D'+s[i.ID]])}</td></tr>`).join('')).join('');
 return rhead(esc(tx('rpt.obsTitle')))+`<table>${t}<tr><th>${tx('f.objectives')}</th><td colspan="3">${E(o.Tujuan)}</td></tr></table><h4>${tx('rpt.result')}: ${f(tp)}% · ${esc(lvc(tp))}</h4><table><tr><th>${tx('rpt.indicator')}</th><th>${tx('rpt.score')}</th><th>${tx('rpt.descSel')}</th></tr>${ar}</table><h4>${tx('obs.celebration')}</h4><table><tr><td>${E(o.Celebration)||'-'}</td></tr></table><h4>${tx('obs.improve')}</h4><table><tr><td>${E(o.Improve)||'-'}</td></tr></table><h4>${tx('obs.reflection')}</h4><table><tr><td>${E(o.Refleksi)||'-'}</td></tr></table>`+sigBlock(o.TTD||[],g.Nama,o.Observer)}
const tgl=v=>{if(!v)return '';const d=new Date(v+'T00:00:00');return isNaN(d)?v:d.toLocaleDateString(tx('locale'),{day:'numeric',month:'long',year:'numeric'})};
const KJ=()=>[tx('kpi.docTitle'),tx('kpi.docSub')];
const KR=(g,n)=>[[tx('kpi.f.period'),n.Periode],[tx('kpi.f.name'),g.Nama],[tx('kpi.f.nip'),g.NIP],[tx('kpi.f.unit'),g.Unit],[tx('kpi.f.pos'),g.Jabatan],[tx('kpi.f.join'),tgl(g.TglMasuk)],[tx('kpi.f.end'),tgl(g.TglBerakhir)]];
function kpiHead(){const n=S.k.n,g=S.guru.find(x=>x.ID==n.GuruID)||{},c=S.cfg,E=v=>esc(v==null?'':v),t=KJ();
 return `<div class="card"><div style="text-align:center">${c.logoUrl?`<img src="${esc(imgUrl(c.logoUrl))}" style="height:60px" alt="" onerror="this.remove()">`:''}<h2 style="margin:6px 0 0;font-size:20px">${E(t[0])}</h2><i style="font-weight:700">${E(t[1])}</i></div><div class="grid" style="margin-top:12px;grid-template-columns:repeat(auto-fit,minmax(230px,1fr))">${KR(g,n).map(r=>`<div><small style="color:var(--mu);font-weight:700">${r[0]}</small><div style="font-weight:600">${E(r[1])||'-'}</div></div>`).join('')}</div></div>`}
function notesCard(ro){const n=S.k.n,d=ro?'disabled':'';return `<div class="card"><h3>${tx('kpi.notes')}</h3><label>${tx('kpi.celebrations')}<textarea id="kn_c" ${d}>${esc(n.Celebration)}</textarea></label><label>${tx('kpi.improvements')}<textarea id="kn_i" ${d}>${esc(n.Improvement)}</textarea></label></div>`}
function kopKpi(g,n){const c=S.cfg,E=v=>esc(v==null?'':v),t=KJ();return `<div class="kh">${c.logoUrl?`<img src="${esc(imgUrl(c.logoUrl))}" style="height:64px" alt="">`:`<b style="font-size:16px">${E(c.appName)}</b>`}<h1>${E(t[0])}</h1><i>${E(t[1])}</i></div><table class="kf">${KR(g,n).map(r=>`<tr><td style="width:170px"><b>${r[0]}</b></td><td>:</td><td>${E(r[1])}</td></tr>`).join('')}</table><p style="margin:4px 0"><small>${tx('kpi.empType')}: ${E(g.Kategori)} · ${tx('c.status')}: ${E(n.Status)}</small></p>`}
function catKpi(n){const E=v=>esc(v==null?'':v);return `<div class="nb"><b>${tx('kpi.notes')}:</b></div><div class="nb"><b>${tx('kpi.celebrations')}:</b> ${E(n.Celebration)}</div><div class="nb"><b>${tx('kpi.improvements')}:</b> ${E(n.Improvement)}</div>`}
function rptKpi(){const k=S.k,n=k.n,g=S.guru.find(x=>x.ID==n.GuruID)||{},E=v=>esc(v==null?'':v);let t=0,m=0,q=0,h='';
 const hit=(a1,a2,b)=>{const v=[a1,a2].map(Number).filter(x=>x>0),r=v.length?av(v):0;return {r:r,v:v.length,pc:r/5*100,pt:b*r/5}};
 k.ks.forEach(c=>{const as=c.Sumber!='Observasi'?k.ps.filter(p=>p.KomponenID==c.ID):[];
  if(c.Sumber=='Observasi'){const pt=c.Bobot*(k.obsPct||0)/100;t+=pt;m+=+c.Bobot;if(c.Kelompok=='QoW')q+=pt;h+=`<tr><td>${E(c.Nama)}</td><td>${tx('rpt.obsRow')}</td><td>${c.Bobot}</td><td colspan="3" style="text-align:center">${tx('c.level')} ${k.obsLv}</td><td>${f(k.obsPct)}%</td><td>${pt.toFixed(1)}</td></tr>`}
  else{const rows=as.length?as.map(p=>({a:p.Aspek,b:p.Bobot,x:n.P1[p.ID],y:n.P2[p.ID]})):[{a:'-',b:c.Bobot,x:n.P1[c.ID],y:n.P2[c.ID]}];
   rows.forEach((r,i)=>{const z=hit(r.x,r.y,r.b);t+=z.pt;m+=+r.b;if(c.Kelompok=='QoW')q+=z.pt;h+=`<tr>${i?'':`<td rowspan="${rows.length}">${E(c.Nama)}<br><small>${c.Kelompok=='Lain'?tx('kpi.badgeHr'):tx('kpi.badgeQow')}</small></td>`}<td>${E(r.a)}</td><td>${r.b}</td><td>${r.x||'-'}</td><td>${r.y||'-'}</td><td>${z.v?f(z.r):'-'}</td><td>${f(z.pc)}%</td><td>${z.pt.toFixed(1)}</td></tr>`})}});
 return kopKpi(g,n)+`<table><tr><th>${tx('rpt.scope')}</th><th>${tx('rpt.aspect')}</th><th>${tx('kpi.colWeight')}</th><th>${tx('kpi.a1')}</th><th>${tx('rpt.assessor2')}</th><th>${tx('rpt.avg')}</th><th>${tx('kpi.achievement')}</th><th>${tx('kpi.colPoints')}</th></tr>${h}<tr class="ar"><td colspan="7">${tx('rpt.subQow')}</td><td>${q.toFixed(1)}</td></tr><tr class="ar"><td colspan="7">${tx('rpt.subHr')}</td><td>${(t-q).toFixed(1)}</td></tr><tr class="ar"><td colspan="7">${tx('rpt.total')} (${tx('rpt.max')} ${m})</td><td>${t.toFixed(1)}</td></tr></table><p><b>${tx('c.level')}: ${esc(lvc(m?t/m*100:0))}</b><br><small>${esc(tx('rpt.formula'))}</small></p>`+catKpi(n)+sigBlock(k.ttd||[],g.Nama,'')}
function rpt(j){const h=j=='Observasi'?rptObs():rptKpi();let d=document.getElementById('rpt');if(d)d.remove();d=document.createElement('div');d.id='rpt';d.className='rpt';d.innerHTML='<div class="nop bx tb"><button class="btn" onclick="print()">🖨 Cetak / Simpan PDF</button><button class="btn g" onclick="document.getElementById(\'rpt\').remove()">Tutup</button></div><div class="bx">'+h+'</div>';document.body.appendChild(d)}
function sigUI(j){const rec=j=='Observasi'?S.o:S.k.n,T=(j=='Observasi'?S.o.TTD:S.k.ttd)||[],st=rec.Status,role=S.user.Role,self=j=='Observasi'?S.me:S.k.me,pg=T.find(x=>x.Peran=='Pegawai'),at=T.find(x=>x.Peran=='Atasan'),fx=x=>x?'✔ '+esc(x.Nama)+' · '+wkt(x.Waktu):tx('sig.not'),
 canP=self&&st=='Dirilis',canA=!self&&(j=='Observasi'?['Admin','Direktur','Kepsek','Observer']:['Admin','Direktur','Kepsek']).includes(role)&&st!='Draft';
 return `<div class="card"><h3>${esc(tx('sig.title'))}</h3><p>${tx('sig.employee')}: <b>${fx(pg)}</b><br>${tx('sig.supervisor')}: <b>${fx(at)}</b></p><div class="bar">${canP?`<button class="btn" onclick="tg('${j}','Pegawai')">${tx('sig.signEmp')}</button>`:''}${canA?`<button class="btn" onclick="tg('${j}','Atasan')">${tx('sig.signSup')}</button>`:''}<button class="btn g" onclick="rpt('${j}')">⬇ ${tx('sig.print')}</button></div><small style="color:var(--mu)">${tx('sig.hint')}</small></div>`}
function tg(j,p){api('ttd',[j,j=='Observasi'?S.o.ID:S.k.n.ID,p],l=>{if(j=='Observasi'){S.o.TTD=l;rf()}else{S.k.ttd=l;rk()}tt('Tanda tangan tersimpan')})}
function rf(){rf0();if(S.o&&S.o.ID)$('#of').insertAdjacentHTML('beforeend',sigUI('Observasi'))}
function rk(){rk0();if(S.k&&S.k.n&&S.k.n.ID)$('#kf').insertAdjacentHTML('beforeend',sigUI('KPI'))}
function lap(){const us=[...new Set(S.guru.map(g=>g.Unit).filter(Boolean))],y=new Date().getFullYear();V(`<h2>Laporan &amp; Rekap</h2><div class="card"><div class="bar"><select id="lu"><option value="">Semua Unit</option>${us.map(u=>`<option>${esc(u)}</option>`).join('')}</select><select id="lj"><option value="">Semua Jenis Pegawai</option>${S.C.G.map(x=>`<option>${esc(x.Nama)}</option>`).join('')}</select><input id="lp" value="${y}/${y+1}" size="10"><button class="btn" onclick="rekapXls()">⬇ Unduh Rekap Excel</button></div><p style="color:var(--mu)">Berkas Excel berisi 4 lembar: <b>Ringkasan</b> (per pegawai), <b>Observasi</b>, <b>Observasi_Detail</b> (skor tiap indikator), dan <b>KPI_Detail</b> (skor tiap aspek). Data mengikuti hak akses Anda.</p></div><div class="card"><h3>PDF per laporan</h3><p style="color:var(--mu)">Buka <b>Observasi Kelas</b> atau <b>Penilaian KPI</b>, pilih pegawai, lalu klik <b>Cetak / Simpan PDF</b> di bagian Tanda Tangan Digital. Pada dialog cetak, pilih <b>Simpan sebagai PDF</b>.</p></div>`)}
function rekapXls(){if(!window.XLSX)return tt('Pustaka Excel belum termuat, muat ulang halaman.',1);const per=$('#lp').value.trim();api('rekap',[per,$('#lu').value,$('#lj').value],r=>{const wb=XLSX.utils.book_new();[['Ringkasan',r.R],['Observasi',r.O],['Observasi_Detail',r.D],['KPI_Detail',r.K]].forEach(x=>XLSX.utils.book_append_sheet(wb,XLSX.utils.aoa_to_sheet(x[1]),x[0]));XLSX.writeFile(wb,'rekap_penilaian_'+per.replace(/\W+/g,'-')+'.xlsx');tt('Rekap diunduh')})}

S.dp=(()=>{const y=new Date().getFullYear();return y+'/'+(y+1)})();
// Pemanasan: hangatkan server sejak halaman dibuka, sebelum pengguna sempat login.
if(BASE&&BASE.indexOf('GANTI')<0)try{fetch(BASE+'?warmup=1').catch(()=>{})}catch(e){}
function prefetch(){const run=()=>{if(!siap()||!S.tk)return;const c=[{k:'idp',n:'list',a:['IDP']}];
  if(['Admin','Direktur','Kepsek'].includes(S.user.Role))c.push({k:'m:Guru',n:'list',a:['Guru']});
  apiP('batch',[c]).then(r=>{Object.keys(r||{}).forEach(k=>{const x=r[k];if(x&&x.success)sset(k,{t:Date.now(),h:hsh(JSON.stringify(x.data)),d:x.data})})},()=>{})};
 (window.requestIdleCallback||(f=>setTimeout(f,1200)))(run)}
S.tk=lsGet('tk');S.tk?boot(()=>{go('dash');prefetch()}):showLogin();