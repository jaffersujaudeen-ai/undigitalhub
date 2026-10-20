(function(){
  var SERVICES = {
    "basic-business-website": {name:"Basic Business Website", category:"Website Development", price:"\u20B9499 \u2013 \u20B91,999", group:"website"},
    "landing-page": {name:"Landing Page", category:"Website Development", price:"\u20B9199 \u2013 \u20B9299", group:"website"},
    "personal-portfolio-website": {name:"Personal Portfolio Website", category:"Website Development", price:"\u20B9199 \u2013 \u20B9299", group:"website"},
    "product-catalogue-website": {name:"Product Catalogue Website", category:"Website Development", price:"\u20B9399 \u2013 \u20B9499", group:"website"},
    "website-redesign": {name:"Website Redesign", category:"Website Development", price:"\u20B9499 \u2013 \u20B91,999", group:"website"},
    "company-portfolio": {name:"Company Portfolio", category:"Business Portfolio", price:"\u20B9499 \u2013 \u20B91,999", group:"portfolio"},
    "product-catalogue-pdf": {name:"Product Catalogue PDF", category:"Business Portfolio", price:"\u20B9399 \u2013 \u20B9499", group:"portfolio"},
    "pitch-deck": {name:"Business Presentation / Pitch Deck", category:"Business Portfolio", price:"\u20B9499 \u2013 \u20B9699", group:"portfolio"},
    "student-portfolio": {name:"Student / Fresher Portfolio", category:"Personal Portfolio", price:"\u20B9199 \u2013 \u20B9499", group:"personal"},
    "professional-portfolio": {name:"Professional Portfolio", category:"Personal Portfolio", price:"\u20B9299 \u2013 \u20B9799", group:"personal"},
    "resume-cv": {name:"Resume / CV Design", category:"Personal Portfolio", price:"\u20B999 \u2013 \u20B9199", group:"personal"},
    "digital-visiting-card": {name:"QR Code / Digital Visiting Card", category:"Digital Services", price:"\u20B999 \u2013 \u20B9199", group:"digital"},
    "poster-flyer": {name:"Poster / Brochure / Flyer", category:"Digital Services", price:"\u20B999 \u2013 \u20B9199", group:"digital"},
    "presentation-design": {name:"Presentation Design", category:"Digital Services", price:"\u20B999 \u2013 \u20B9199", group:"digital"},
    "invoice-template": {name:"Quotation / Invoice Template", category:"Digital Services", price:"\u20B9199 \u2013 \u20B9299", group:"digital"},
    "discussion-15": {name:"15-Minute Discussion", category:"Startup Idea Discussion", price:"\u20B949 \u2013 \u20B999", group:"consult"},
    "discussion-30": {name:"30-Minute Discussion", category:"Startup Idea Discussion", price:"\u20B999 \u2013 \u20B9199", group:"consult"},
    "excel-cleaning": {name:"Excel Data Cleaning / Report", category:"Data Analytics", price:"\u20B9199 \u2013 \u20B9299", group:"analytics"},
    "excel-dashboard": {name:"Excel Dashboard", category:"Data Analytics", price:"\u20B999 \u2013 \u20B9199", group:"analytics"},
    "powerbi-dashboard": {name:"Power BI Dashboard", category:"Data Analytics", price:"\u20B9299 \u2013 \u20B9499", group:"analytics"},
    "campus-formatting": {name:"Project Presentation / Report Formatting", category:"Campus Solutions", price:"\u20B9199 \u2013 \u20B9299", group:"campus"},
    "campus-showcase": {name:"Student Portfolio / Project Showcase", category:"Campus Solutions", price:"\u20B9199 \u2013 \u20B9299", group:"campus"},
    "event-registration": {name:"Event Registration Page / Form", category:"Campus Solutions", price:"\u20B999 \u2013 \u20B9199", group:"campus"}
  };

  var GROUP_CONTENT = {
    website: {
      delivery:"1\u20133 days, once confirmed",
      whoNeeds:["Business owners without a website yet","Founders launching a new product or service","Anyone replacing an outdated or broken site"],
      whyUseful:["Gives your business a credible home online","Looks right on both mobile and desktop","Makes it easy for customers to find and contact you"],
      included:["Responsive pages per your agreed page list","Formatting of the content you provide","A contact section or enquiry form","One round of pre-launch review"],
      excluded:["Domain registration and hosting costs","Ongoing updates after launch","Custom backend features beyond the agreed scope"],
      whatWeNeed:"Your page list, any existing content or text, logo and images if you have them, and your domain name if already purchased.",
      revisionPolicy:"Two rounds of revisions are included once the first draft is shared. Further rounds are quoted separately.",
      faqs:[["Do you handle hosting and domain too?","We can guide you through it, but domain and hosting are billed separately from the design fee."],["Can I update the site myself later?","Yes \u2014 we can hand over simple editing instructions depending on your plan."]]
    },
    portfolio: {
      delivery:"1\u20133 days, once confirmed",
      whoNeeds:["Manufacturers and traders","Small and medium businesses","Startups and service providers","Business owners approaching new customers"],
      whyUseful:["Presents your business clearly and consistently","Supports meetings and proposals","Organises your products or services in one place","Shares digitally as a single file"],
      included:["Structure and cover matched to your business","Formatting of the content you provide","Up to the agreed number of pages or slides","One polished draft for your review"],
      excluded:["Editable source files, unless stated in your quotation","Printing or physical delivery","Photography or new product shoots"],
      whatWeNeed:"Your logo, any existing images, a short business description, and the products or services you want featured.",
      revisionPolicy:"Two rounds of revisions are included once a draft is shared. Changes to scope or extra rounds are quoted separately.",
      faqs:[["Can I request a specific number of pages or slides?","Yes, mention it in your requirements and we will confirm it in your quotation."],["Do you write the content for me?","We shape and format what you provide; a content-writing add-on is available on request."]]
    },
    personal: {
      delivery:"1\u20132 days, once confirmed",
      whoNeeds:["Students and freshers building their first portfolio","Working professionals updating their materials","Anyone applying for a new role or client project"],
      whyUseful:["Presents your skills and experience clearly","Gives a consistent, professional first impression","Easy to share as a link or a file"],
      included:["Layout built around your information","Formatting of the content you provide","One polished draft for your review"],
      excluded:["Writing your experience from scratch","Professional photography","Printing or physical copies"],
      whatWeNeed:"Your education, experience, skills, and the kind of role or work you are targeting.",
      revisionPolicy:"One round of revisions is included once the first draft is shared. Further rounds are quoted separately.",
      faqs:[["Can you help me describe my experience?","We can help tighten and format what you give us; it helps to share rough notes to start."],["What file do I receive?","A print-ready PDF by default; other formats are available on request."]]
    },
    digital: {
      delivery:"Same day to 2 days, once confirmed",
      whoNeeds:["Small business owners and freelancers","Anyone promoting an event, offer or product","Teams needing a consistent template for recurring documents"],
      whyUseful:["Quick to produce and easy to share","Keeps your materials looking consistent","Affordable for everyday business needs"],
      included:["Design built around the details you provide","Up to two size or format variations","One polished draft for your review"],
      excluded:["Printing costs","Stock photography licensing, where used","Brand strategy or logo design"],
      whatWeNeed:"The text, details and any existing brand colours, fonts or logo you would like used.",
      revisionPolicy:"One round of revisions is included once the first draft is shared. Further rounds are quoted separately.",
      faqs:[["Can you design to my brand colours?","Yes, share them in your requirements and we will match them."],["Do I get an editable file?","Editable source files are included only where stated in your quotation."]]
    },
    consult: {
      delivery:"Scheduled at a time that suits you",
      whoNeeds:["First-time founders thinking through an idea","Students exploring a project or startup concept","Anyone who wants an outside perspective before building something"],
      whyUseful:["A focused conversation instead of a long form","A chance to stress-test your idea early","No commitment beyond the session itself"],
      included:["A one-on-one discussion for the booked duration","Notes or a short summary after the call, on request"],
      excluded:["Business plans or financial projections","Legal, tax or investment advice","Guaranteed outcomes of any kind"],
      whatWeNeed:"A short description of your idea and what you'd like to get out of the conversation.",
      revisionPolicy:"Not applicable \u2014 this is a single scheduled conversation rather than a delivered document.",
      faqs:[["Is this guidance guaranteed to help me succeed?","No \u2014 it's brainstorming and general discussion, not a guarantee of funding or business success."],["Can I reschedule?","Yes, contact us and we will find another suitable time."]]
    },
    analytics: {
      delivery:"1\u20133 days, once confirmed",
      whoNeeds:["Small business owners tracking sales or expenses","Teams with messy or scattered spreadsheets","Anyone who wants their data to be easier to read"],
      whyUseful:["Turns raw data into something you can actually use","Saves hours of manual cleanup or formatting","Makes trends and numbers easier to explain to others"],
      included:["Cleaning or structuring of the dataset you provide","Charts or visuals matched to your key metrics","One polished draft for your review"],
      excluded:["Data collection or entry from scratch","Ongoing refreshes after delivery, unless agreed separately","Advanced statistical modelling"],
      whatWeNeed:"Your dataset as a file, the metrics you care about, and any specific charts you have in mind.",
      revisionPolicy:"One round of revisions is included once the first draft is shared. Further rounds are quoted separately.",
      faqs:[["What file formats do you accept?","Excel and CSV files work best; let us know if yours is in another format."],["Can you keep this updated every month?","Ongoing refreshes can be arranged separately \u2014 mention it in your requirements."]]
    },
    campus: {
      delivery:"1\u20133 days, once confirmed",
      whoNeeds:["Students preparing a report or presentation","College clubs and committees","Anyone organising a campus event or showcase"],
      whyUseful:["A polished, consistent look without the extra effort","Saves time before a deadline","Makes your work or event easier to present"],
      included:["Formatting or layout built around the content you provide","One polished draft for your review"],
      excluded:["Writing your report or project content from scratch","Printing or physical copies","Hosting costs for registration pages, where applicable"],
      whatWeNeed:"Your content or event details, any required sections or fields, and your deadline.",
      revisionPolicy:"One round of revisions is included once the first draft is shared. Further rounds are quoted separately.",
      faqs:[["Can you help with the content, not just formatting?","We focus on structure and presentation; light content support can be discussed on request."],["How fast can this be ready before my deadline?","Tell us your deadline in your requirements and we will confirm if it's achievable."]]
    }
  };

  var SERVICE_DETAILS = {
    "basic-business-website": {intro:"A clean, professional website that gives your business a real home online.", format:"Live website", sample:"Home, about, services, contact", related:["Website Redesign","Landing Page","Product Catalogue Website"]},
    "landing-page": {intro:"A single focused page built around one offer, campaign or product launch.", format:"Live page", sample:"Headline, offer, call to action", related:["Basic Business Website","Product Catalogue Website"]},
    "personal-portfolio-website": {intro:"A personal website that showcases your work and makes you easy to find online.", format:"Live website", sample:"About, work, contact", related:["Professional Portfolio","Resume / CV Design"]},
    "product-catalogue-website": {intro:"A simple website that presents your products clearly, with prices and details.", format:"Live website", sample:"Product grid, details, contact", related:["Basic Business Website","Product Catalogue PDF"]},
    "website-redesign": {intro:"A refreshed version of your existing website, rebuilt for a cleaner, more modern look.", format:"Live website", sample:"Before-and-after preview", related:["Basic Business Website","Landing Page"]},
    "company-portfolio": {intro:"Present your business professionally with a structured company portfolio that explains who you are, what you offer, and why customers should work with you.", format:"PDF, source files on request", sample:"Cover, about, products, why choose us, contact", related:["Product Catalogue PDF","Business Presentation / Pitch Deck","Basic Business Website"]},
    "product-catalogue-pdf": {intro:"A shareable PDF catalogue that presents your products with prices and details.", format:"PDF", sample:"Product grid with prices and descriptions", related:["Company Portfolio","Product Catalogue Website"]},
    "pitch-deck": {intro:"A clear, investor-ready presentation that explains your business or idea.", format:"PPT / PDF", sample:"Problem, solution, market, team, ask", related:["Company Portfolio","Startup Idea Discussion"]},
    "student-portfolio": {intro:"A simple portfolio that presents your academic work and early projects.", format:"PDF / web link", sample:"About, projects, skills, contact", related:["Resume / CV Design","Professional Portfolio"]},
    "professional-portfolio": {intro:"A polished personal portfolio for job applications and client work.", format:"PDF / web link", sample:"About, work, testimonials, contact", related:["Resume / CV Design","Personal Portfolio Website"]},
    "resume-cv": {intro:"A clear, well-formatted resume built around the role you are targeting.", format:"PDF", sample:"Summary, experience, skills, education", related:["Professional Portfolio","Student / Fresher Portfolio"]},
    "digital-visiting-card": {intro:"A QR-based card that shares your details the moment someone scans it.", format:"Digital file + QR code", sample:"Name, role, contact links", related:["Poster / Brochure / Flyer","Quotation / Invoice Template"]},
    "poster-flyer": {intro:"A poster, brochure or flyer designed around your event, offer or announcement.", format:"PDF / print-ready file", sample:"Headline, details, call to action", related:["Presentation Design","Digital Visiting Card"]},
    "presentation-design": {intro:"A clean, consistent slide design for your talk, class or business presentation.", format:"PPT / PDF", sample:"Title, content, closing slides", related:["Poster / Brochure / Flyer","Business Presentation / Pitch Deck"]},
    "invoice-template": {intro:"A reusable quotation or invoice template with your branding in place.", format:"Editable template", sample:"Header, line items, totals", related:["Digital Visiting Card","Company Portfolio"]},
    "discussion-15": {intro:"A focused 15-minute conversation to think through your idea.", format:"Video or voice call", sample:null, related:["30-Minute Discussion"]},
    "discussion-30": {intro:"A 30-minute conversation for a deeper discussion of your idea.", format:"Video or voice call", sample:null, related:["15-Minute Discussion"]},
    "excel-cleaning": {intro:"Messy spreadsheets cleaned up and structured into a usable report.", format:"Excel file", sample:"Before-and-after data view", related:["Excel Dashboard","Power BI Dashboard"]},
    "excel-dashboard": {intro:"Your data turned into a clear, interactive Excel dashboard.", format:"Excel file", sample:"Charts and summary view", related:["Excel Data Cleaning / Report","Power BI Dashboard"]},
    "powerbi-dashboard": {intro:"Your data turned into a dashboard that is easy to read and act on.", format:"Power BI file", sample:"Charts, filters, key metrics", related:["Excel Dashboard","Excel Data Cleaning / Report"]},
    "campus-formatting": {intro:"Your report or presentation formatted into a clean, consistent, submission-ready file.", format:"PDF / PPT", sample:"Cover, structured sections", related:["Student Portfolio / Project Showcase","Presentation Design"]},
    "campus-showcase": {intro:"A simple showcase that presents your student project or portfolio clearly.", format:"PDF / web link", sample:"Project overview, outcomes, visuals", related:["Project Presentation / Report Formatting","Student / Fresher Portfolio"]},
    "event-registration": {intro:"A simple registration page or form for your campus event.", format:"Web form / page", sample:"Event details, registration fields", related:["Student Portfolio / Project Showcase"]}
  };

  function renderServiceDetail(slug){
    var c = document.getElementById('service-content');
    if(!c) return;
    var svc = SERVICES[slug], d = SERVICE_DETAILS[slug];
    if(!svc || !d){
      c.innerHTML = '<div class="container" style="padding:80px 0;"><p>We could not find that service.</p><a href="#/" class="back-link">Back to home</a></div>';
      return;
    }
    var g = GROUP_CONTENT[svc.group];
    var html = '';
    html += '<div class="container page-head"><a href="#/" class="back-link">Back to all services</a></div>';
    html += '<div class="container service-hero"><div>';
    html += '<p class="hero-kicker">'+esc(svc.category)+'</p><h1>'+esc(svc.name)+'</h1><p class="hero-sub">'+esc(d.intro)+'</p>';
    html += '<div class="service-meta"><div>Price range<strong>'+esc(svc.price)+'</strong></div><div>Delivery<strong>'+esc(g.delivery)+'</strong></div><div>Format<strong>'+esc(d.format)+'</strong></div></div>';
    html += '</div><aside class="service-side"><p style="font-weight:600;">Ready to start?</p><p style="color:var(--text-secondary); font-size:0.9rem; margin-top:6px;">Tell us what you need and we will confirm the exact scope and price.</p>';
    html += '<a href="#/order?service='+slug+'" class="btn btn-primary">Order this service</a><a href="#contact" class="btn btn-secondary">Ask a question</a>';
    html += '<p class="form-note" style="margin-top:14px;">Or reach us on WhatsApp or email from the contact section.</p></aside></div>';
    html += '<div class="container service-body">';
    html += '<div class="two-col"><div><h2>Who needs it</h2><ul>'+g.whoNeeds.map(function(x){return '<li>'+esc(x)+'</li>';}).join('')+'</ul></div>';
    html += '<div><h2>Why it is useful</h2><ul>'+g.whyUseful.map(function(x){return '<li>'+esc(x)+'</li>';}).join('')+'</ul></div></div>';
    if(d.sample){
      html += '<div><h2>Sample</h2><div class="sample-card" style="max-width:360px;"><div class="sample-preview"><div style="width:100%"><div class="mock-line"></div><div class="mock-line w60"></div><div class="mock-line w40"></div></div></div><div class="sample-body"><p class="sample-tag">Sample demo \u2014 illustrative content</p><h3>'+esc(d.sample)+'</h3></div></div></div>';
    }
    html += '<div class="two-col"><div><h2>What\'s included</h2><ul>'+g.included.map(function(x){return '<li>'+esc(x)+'</li>';}).join('')+'</ul></div>';
    html += '<div><h2>Not included</h2><ul>'+g.excluded.map(function(x){return '<li>'+esc(x)+'</li>';}).join('')+'</ul></div></div>';
    html += '<div><h2>What we need from you</h2><p>'+esc(g.whatWeNeed)+'</p></div>';
    html += '<div><h2>Revision policy</h2><p>'+esc(g.revisionPolicy)+'</p></div>';
    html += '<div><h2>Frequently asked questions</h2><ul>'+g.faqs.map(function(fq){return '<li>'+esc(fq[0])+' \u2014 '+esc(fq[1])+'</li>';}).join('')+'</ul></div>';
    html += '<div><h2>Related services</h2><p>'+esc(d.related.join(', '))+'</p></div>';
    html += '</div>';
    c.innerHTML = html;
  }

  var GROUP_FIELDS = {
    website: [["pages","Pages needed","e.g. Home, About, Services, Contact"],["features","Key features","Forms, galleries, bookings, anything specific"],["content","Is your content ready?","select:Yes, it is ready|Partly ready|Not yet"]],
    portfolio: [["subject","Business name to feature",""],["highlights","Products, services or highlights to include",""],["assets","Logo and images available?","select:Yes|No|Some"]],
    personal: [["fullname","Full name to feature",""],["target","Target role or purpose",""],["background","Education / experience summary",""]],
    digital: [["content","What should it include","Text, details, event info, etc."],["size","Size or dimensions, if known",""],["brand","Existing brand colours or logo to use?",""]],
    consult: [["topic","Your idea, in one line",""],["focus","What would you like feedback on?",""],["slot","Preferred time for the call",""]],
    analytics: [["dataset","Describe your dataset",""],["kpis","Key metrics or KPIs you want to see",""],["charts","Preferred chart types, if any",""]],
    campus: [["event","Event or project details",""],["fields","Required fields or report sections",""]]
  };

  var state = {};

  function esc(s){ return (s||"").replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }

  function renderField(f){
    var key=f[0], label=f[1], hint=f[2]||"";
    if(hint.indexOf("select:")===0){
      var opts=hint.slice(7).split("|");
      var optHtml=opts.map(function(o){ return '<option>'+esc(o)+'</option>'; }).join("");
      return '<div class="field"><label>'+esc(label)+'</label><select data-req="'+key+'">'+optHtml+'</select></div>';
    }
    return '<div class="field"><label>'+esc(label)+'</label><textarea data-req="'+key+'" placeholder="'+esc(hint)+'"></textarea></div>';
  }

  function updateDots(){
    for(var i=1;i<=4;i++){ var d=document.getElementById('ws-'+i); if(d) d.className = i<=state.step ? 'done':''; }
  }

  function renderStep(){
    var c = document.getElementById('wizard-content');
    if(!c) return;
    updateDots();
    var html = "";
    if(state.step===1){
      var svc = state.service ? SERVICES[state.service] : null;
      html += '<h2>Your service</h2>';
      html += '<div class="field"><label>Choose a service</label><select id="svc-select"><option value="">Select a service\u2026</option>';
      Object.keys(SERVICES).forEach(function(k){
        var s=SERVICES[k];
        html += '<option value="'+k+'"'+(state.service===k?' selected':'')+'>'+esc(s.category+' \u2014 '+s.name)+'</option>';
      });
      html += '</select></div>';
      if(svc){
        html += '<dl>';
        html += '<div class="summary-row"><dt>Category</dt><dd>'+esc(svc.category)+'</dd></div>';
        html += '<div class="summary-row"><dt>Indicative price</dt><dd>'+esc(svc.price)+'</dd></div>';
        html += '<div class="summary-row"><dt>Typical delivery</dt><dd>1\u20133 days, once confirmed</dd></div>';
        html += '</dl>';
      }
      html += '<div class="wizard-nav"><span></span><button class="btn btn-primary" id="next1">Continue</button></div>';
      c.innerHTML = html;
      document.getElementById('svc-select').onchange = function(e){ state.service = e.target.value || null; renderStep(); };
      document.getElementById('next1').onclick = function(){
        if(!state.service){ alert('Please choose a service to continue.'); return; }
        state.step=2; renderStep();
      };
    } else if(state.step===2){
      var svc2 = SERVICES[state.service];
      html += '<h2>Requirements</h2>';
      html += '<div class="field"><label>Project title</label><input id="f-title" value="'+esc(state.title)+'" placeholder="A short name for your project"></div>';
      html += '<div class="field"><label>Description and intended outcome</label><textarea id="f-desc" placeholder="What are you trying to create, and what should it achieve?">'+esc(state.description)+'</textarea></div>';
      (GROUP_FIELDS[svc2.group]||[]).forEach(function(f){ html += renderField(f); });
      html += '<div class="field"><label>Deadline preference</label><input id="f-deadline" value="'+esc(state.deadline)+'" placeholder="e.g. within a week, flexible"></div>';
      html += '<div class="field"><label>Additional instructions (optional)</label><textarea id="f-notes" placeholder="Anything else we should know">'+esc(state.notes)+'</textarea></div>';
      html += '<div class="wizard-nav"><button class="btn btn-secondary" id="back2">Back</button><button class="btn btn-primary" id="next2">Continue</button></div>';
      c.innerHTML = html;
      document.getElementById('back2').onclick=function(){ state.step=1; renderStep(); };
      document.getElementById('next2').onclick=function(){
        state.title=document.getElementById('f-title').value;
        state.description=document.getElementById('f-desc').value;
        state.deadline=document.getElementById('f-deadline').value;
        state.notes=document.getElementById('f-notes').value;
        document.querySelectorAll('#wizard-content [data-req]').forEach(function(elm){ state.req[elm.getAttribute('data-req')] = elm.value; });
        if(!state.title || !state.description){ alert('Please add a project title and description.'); return; }
        state.step=3; renderStep();
      };
    } else if(state.step===3){
      html += '<h2>Your contact details</h2>';
      html += '<div class="field-row"><div class="field"><label>Full name</label><input id="c-name" value="'+esc(state.contact.name)+'"></div><div class="field"><label>Email</label><input id="c-email" type="email" value="'+esc(state.contact.email)+'"></div></div>';
      html += '<div class="field-row"><div class="field"><label>Phone / WhatsApp number</label><input id="c-phone" value="'+esc(state.contact.phone)+'"></div><div class="field"><label>Preferred contact method</label><select id="c-method"><option'+(state.contact.method==='WhatsApp'?' selected':'')+'>WhatsApp</option><option'+(state.contact.method==='Email'?' selected':'')+'>Email</option><option'+(state.contact.method==='Website messages'?' selected':'')+'>Website messages</option></select></div></div>';
      html += '<div class="wizard-nav"><button class="btn btn-secondary" id="back3">Back</button><button class="btn btn-primary" id="next3">Continue</button></div>';
      c.innerHTML = html;
      document.getElementById('back3').onclick=function(){ state.step=2; renderStep(); };
      document.getElementById('next3').onclick=function(){
        state.contact.name=document.getElementById('c-name').value;
        state.contact.email=document.getElementById('c-email').value;
        state.contact.phone=document.getElementById('c-phone').value;
        state.contact.method=document.getElementById('c-method').value;
        if(!state.contact.name || !state.contact.email){ alert('Please add your name and email.'); return; }
        state.step=4; renderStep();
      };
    } else if(state.step===4){
      var svc4 = SERVICES[state.service];
      html += '<h2>Review and confirm</h2>';
      html += '<dl>';
      html += '<div class="summary-row"><dt>Service</dt><dd>'+esc(svc4.name)+'</dd></div>';
      html += '<div class="summary-row"><dt>Indicative price</dt><dd>'+esc(svc4.price)+'</dd></div>';
      html += '<div class="summary-row"><dt>Project title</dt><dd>'+esc(state.title)+'</dd></div>';
      html += '<div class="summary-row"><dt>Description</dt><dd>'+esc(state.description)+'</dd></div>';
      html += '<div class="summary-row"><dt>Deadline preference</dt><dd>'+esc(state.deadline||'Flexible')+'</dd></div>';
      html += '<div class="summary-row"><dt>Contact</dt><dd>'+esc(state.contact.name)+' \u00b7 '+esc(state.contact.email)+'</dd></div>';
      html += '<div class="summary-row"><dt>Preferred contact method</dt><dd>'+esc(state.contact.method)+'</dd></div>';
      html += '</dl>';
      html += '<p class="form-note" style="text-align:left;">The final price and a confirmed delivery date will be set out in your quotation, before any work begins.</p>';
      html += '<label class="checkbox-row"><input type="checkbox" id="c-terms"> I agree to the Terms and Conditions and Privacy Policy.</label>';
      html += '<div class="wizard-nav"><button class="btn btn-secondary" id="back4">Back</button><button class="btn btn-primary" id="submitOrder">Submit request</button></div>';
      c.innerHTML = html;
      document.getElementById('back4').onclick=function(){ state.step=3; renderStep(); };
      document.getElementById('submitOrder').onclick=submitOrder;
    } else if(state.step===5){
      html += '<div class="confirm-box">';
      if(state.saved){
        var svcFinal = SERVICES[state.service];
        var waText = encodeURIComponent('Hello UN Digital Hub, thank you for the '+svcFinal.name+' service.\n\nOrder ID: '+state.orderId+'\nIndicative amount: '+svcFinal.price+'\nExpected delivery: 1\u20133 days, once confirmed\nPayment status: Request received\n\nPlease guide me through the next steps.\n\nFor assistance: 9487838963 or undigitalhub13@gmail.com');
        html += '<h2>Request received</h2><p style="color:var(--text-secondary); margin-top:10px;">Your order reference is</p><p class="confirm-id">'+esc(state.orderId)+'</p><p style="color:var(--text-secondary); margin-top:14px;">We will review your requirements and send a quotation to '+esc(state.contact.email)+'.</p>';
        html += '<a href="https://wa.me/919487838963?text='+waText+'" target="_blank" rel="noopener" class="btn btn-primary" style="margin-top:20px; margin-right:10px;">Message us on WhatsApp</a>';
        html += '<a href="#/orders" class="btn btn-secondary" style="margin-top:20px; margin-right:10px;">View my orders</a>';
        html += '<div style="margin-top:34px; display:flex; justify-content:center;"><div id="confirm-payment-card"></div></div>';
      } else {
        html += '<h2>Submitted, not saved</h2><p style="color:var(--text-secondary); margin-top:10px;">This preview could not write to the database \u2014 you may be signed out, or viewing outside Claude. Your reference for this session only is</p><p class="confirm-id">'+esc(state.orderId)+'</p>';
      }
      html += '<a href="#/" class="btn btn-secondary" style="margin-top:20px;">Back to home</a>';
      html += '</div>';
      c.innerHTML = html;
      if(state.saved){
        var pcHost = document.getElementById('confirm-payment-card');
        if(pcHost){
          var svcPay = SERVICES[state.service];
          pcHost.innerHTML = paymentCardHTML({orderId: state.orderId, amountNote: 'Indicative amount for your order: '+svcPay.price});
          wirePaymentCard(pcHost, state.orderId);
        }
      }
    }
  }

  async function submitOrder(){
    var termsBox=document.getElementById('c-terms');
    if(!termsBox.checked){ alert('Please accept the Terms and Privacy Policy to continue.'); return; }
    var btn=document.getElementById('submitOrder');
    btn.disabled=true; btn.textContent='Submitting\u2026';
    var svc=SERVICES[state.service];
    var orderId='UNDH-'+Date.now().toString(36).toUpperCase()+'-'+Math.random().toString(36).slice(2,6).toUpperCase();
    state.orderId=orderId;
    try{
      var db = await claude.use('db');
      var user = await claude.use('user');
      if(!db) throw new Error('no-db');
      var uid = user ? await user.id() : null;
      await db.collection('orders').doc(orderId).set({
        orderId: orderId, service: state.service, serviceName: svc.name, category: svc.category, priceRange: svc.price,
        title: state.title, description: state.description, requirements: state.req, deadline: state.deadline, notes: state.notes,
        contact: state.contact, status: 'Request Received', customerId: uid, createdAt: new Date().toISOString()
      });
      state.saved=true;
    }catch(e){
      state.saved=false;
    }
    state.step=5; renderStep();
  }

  async function renderOrdersList(){
    var c = document.getElementById('orders-content');
    if(!c) return;
    c.innerHTML = '<div class="container page-head"><a href="#/" class="back-link">Back to home</a></div><div class="container orders-wrap"><p style="color:var(--text-secondary); padding:30px 0;">Loading your orders\u2026</p></div>';
    var orders = null;
    try{
      var db = await claude.use('db');
      var user = await claude.use('user');
      if(!db || !user) throw new Error('no-capabilities');
      var uid = await user.id();
      if(!uid) throw new Error('signed-out');
      var snap = await db.collection('orders').where('customerId','==',uid).orderBy('createdAt','desc').limit(25).get();
      orders = snap.docs.map(function(ds){ return ds.data(); });
    } catch(e){
      c.innerHTML = '<div class="container page-head"><a href="#/" class="back-link">Back to home</a></div><div class="container orders-wrap"><div class="empty-state"><h2>Sign in to view your orders</h2><p style="color:var(--text-secondary);">Make sure you are signed in and have access to this page, then try again.</p><a href="#/" class="btn btn-secondary" style="margin-top:18px;">Back to home</a></div></div>';
      return;
    }
    if(!orders.length){
      c.innerHTML = '<div class="container page-head"><a href="#/" class="back-link">Back to home</a></div><div class="container orders-wrap"><div class="empty-state"><h2>No orders yet</h2><p style="color:var(--text-secondary);">Orders you submit through the order wizard will appear here.</p><a href="#services" class="btn btn-primary" style="margin-top:18px;">Explore services</a></div></div>';
      return;
    }
    var html = '<div class="container page-head"><a href="#/" class="back-link">Back to home</a></div>';
    html += '<div class="container orders-wrap"><h2 style="margin-bottom:26px;">Your orders</h2><div style="display:flex; flex-direction:column; gap:14px;">';
    orders.forEach(function(o){
      var d = o.createdAt ? new Date(o.createdAt) : null;
      var dateStr = d ? d.toLocaleDateString(undefined,{day:'numeric', month:'short', year:'numeric'}) : '';
      html += '<div class="order-card">';
      html += '<div class="order-card-top"><span class="order-id">'+esc(o.orderId||'')+'</span><span class="order-status">'+esc(o.status||'Request Received')+'</span></div>';
      html += '<div class="order-card-body"><strong>'+esc(o.serviceName||'')+'</strong><span style="color:var(--text-secondary); font-size:0.88rem;">'+esc(o.title||'')+'</span></div>';
      html += '<div class="order-card-foot"><span>'+esc(o.priceRange||'')+'</span><span>'+esc(dateStr)+'</span></div>';
      html += '</div>';
    });
    html += '</div></div>';
    c.innerHTML = html;
  }

  var PAYMENT_INFO = { upi:"jaffersujaudeen-2@oksbi", account:"43331641814", ifsc:"SBIN0005379", phone:"9487838963" };

  function paymentCardHTML(opts){
    opts = opts || {};
    var orderId = opts.orderId || "";
    var upiLink = "upi://pay?pa="+encodeURIComponent(PAYMENT_INFO.upi)+"&pn="+encodeURIComponent("UN Digital Hub")+"&cu=INR"+(orderId?"&tn="+encodeURIComponent("Order "+orderId):"");
    var html = '<div class="payment-card">';
    html += '<div class="pc-brand"><div class="pc-name">UN Digital Hub</div><div class="pc-tagline">Your Digital Growth Partner</div></div>';
    if(opts.amountNote){ html += '<p style="color:#a79f8e; font-size:0.86rem; margin-bottom:6px;">'+esc(opts.amountNote)+'</p>'; }
    html += '<div class="pc-row"><div><div class="pc-label">UPI ID</div><div class="pc-value">'+esc(PAYMENT_INFO.upi)+'</div></div><button type="button" class="pc-copy" data-copy="'+esc(PAYMENT_INFO.upi)+'">Copy</button></div>';
    html += '<div class="pc-row"><div><div class="pc-label">Bank account number</div><div class="pc-value">'+esc(PAYMENT_INFO.account)+'</div></div><button type="button" class="pc-copy" data-copy="'+esc(PAYMENT_INFO.account)+'">Copy</button></div>';
    html += '<div class="pc-row"><div><div class="pc-label">IFSC code</div><div class="pc-value">'+esc(PAYMENT_INFO.ifsc)+'</div></div><button type="button" class="pc-copy" data-copy="'+esc(PAYMENT_INFO.ifsc)+'">Copy</button></div>';
    html += '<div class="pc-row"><div><div class="pc-label">Account holder</div><div class="pc-value">Jaffer Sujaudeen M</div></div></div>';
    html += '<div class="pc-row"><div><div class="pc-label">Contact</div><div class="pc-value">'+esc(PAYMENT_INFO.phone)+'</div></div><button type="button" class="pc-copy" data-copy="'+esc(PAYMENT_INFO.phone)+'">Copy</button></div>';
    html += '<div class="pc-qr-box">QR code pending \u2014 the business\u2019s UPI QR image will be placed here once it is provided.</div>';
    html += '<a href="'+upiLink+'" class="pc-pay-btn">Pay using UPI (on mobile)</a>';
    html += '<div class="pc-ref-field">';
    if(!orderId){
      html += '<label>Order ID, if this is for an existing order</label><input type="text" id="pc-order-id" placeholder="e.g. UNDH-ABC123-XY12">';
    }
    html += '<label>Payment reference / UTR, after you pay</label><input type="text" id="pc-ref-input" placeholder="Your UPI or bank reference number">';
    html += '<button type="button" class="pc-submit-ref" id="pc-submit-ref">Submit payment reference</button>';
    html += '<div id="pc-ref-status"></div>';
    html += '</div>';
    html += '<p class="pc-note">Payments are marked \u201cPending verification\u201d until we confirm receipt against our records \u2014 a reference number alone does not mark an order paid. Never share your UPI PIN, OTP or banking password with anyone, including us.</p>';
    html += '</div>';
    return html;
  }

  function fallbackCopy(text){
    var ta=document.createElement('textarea');
    ta.value=text; ta.style.position='fixed'; ta.style.opacity='0';
    document.body.appendChild(ta); ta.select();
    try{ document.execCommand('copy'); }catch(e){}
    document.body.removeChild(ta);
  }

  function wirePaymentCard(container, knownOrderId){
    container.querySelectorAll('.pc-copy').forEach(function(btn){
      btn.addEventListener('click', function(){
        var text = btn.getAttribute('data-copy');
        var orig = btn.textContent;
        var mark = function(){ btn.textContent='Copied'; setTimeout(function(){ btn.textContent=orig; }, 1500); };
        if(navigator.clipboard && navigator.clipboard.writeText){
          navigator.clipboard.writeText(text).then(mark).catch(function(){ fallbackCopy(text); mark(); });
        } else { fallbackCopy(text); mark(); }
      });
    });
    var submitBtn = container.querySelector('#pc-submit-ref');
    if(submitBtn){
      submitBtn.addEventListener('click', async function(){
        var refField = container.querySelector('#pc-ref-input');
        var oidField = container.querySelector('#pc-order-id');
        var ref = refField ? refField.value.trim() : '';
        var oid = knownOrderId || (oidField ? oidField.value.trim() : '');
        var statusEl = container.querySelector('#pc-ref-status');
        if(!oid){ statusEl.innerHTML = '<p class="pc-note" style="color:#e3a0a0;">Please add your order ID.</p>'; return; }
        if(!ref){ statusEl.innerHTML = '<p class="pc-note" style="color:#e3a0a0;">Please add your payment reference.</p>'; return; }
        submitBtn.disabled=true; submitBtn.textContent='Submitting\u2026';
        try{
          var db = await claude.use('db');
          if(!db) throw new Error('no-db');
          await db.collection('orders').doc(oid).update({ paymentReference: ref, status: 'Payment Pending Verification' });
          statusEl.innerHTML = '<span class="pc-status">Payment Pending Verification</span><p class="pc-note">Thanks \u2014 we will confirm receipt and update your order.</p>';
          submitBtn.textContent='Submitted';
        } catch(e){
          submitBtn.disabled=false; submitBtn.textContent='Submit payment reference';
          statusEl.innerHTML = '<p class="pc-note" style="color:#e3a0a0;">We could not record this \u2014 check the order ID and try again, or message us on WhatsApp instead.</p>';
        }
      });
    }
  }

  function renderPayPage(){
    var c = document.getElementById('pay-content');
    if(!c) return;
    c.innerHTML = paymentCardHTML({});
    wirePaymentCard(c, null);
  }

  function startWizard(serviceSlug){
    state = { service: (serviceSlug && SERVICES[serviceSlug]) ? serviceSlug : null, req:{}, contact:{name:"",email:"",phone:"",method:"WhatsApp"}, title:"", description:"", deadline:"", notes:"", step:1, orderId:null, saved:false };
    renderStep();
  }

  function showView(id, resetScroll){
    document.querySelectorAll('.view').forEach(function(v){ v.hidden = (v.id!==id); });
    if(resetScroll!==false) window.scrollTo(0,0);
  }

  function route(){
    var hash = location.hash || '#/';
    if(hash.indexOf('#/order')===0){
      var q = hash.split('?')[1] || '';
      var params = {};
      q.split('&').forEach(function(p){ var kv=p.split('='); if(kv[0]) params[decodeURIComponent(kv[0])]=decodeURIComponent(kv[1]||''); });
      showView('view-order');
      startWizard(params.service);
      return;
    }
    if(hash.indexOf('#/pay')===0){
      showView('view-pay');
      renderPayPage();
      return;
    }
    if(hash.indexOf('#/orders')===0){
      showView('view-orders');
      renderOrdersList();
      return;
    }
    var svcMatch = hash.match(/^#\/service\/([a-z0-9-]+)/);
    if(svcMatch){
      showView('view-service');
      renderServiceDetail(svcMatch[1]);
      return;
    }
    showView('view-home', false);
    var anchorId = hash.replace(/^#\/?/, '');
    if(anchorId){
      var target = document.getElementById(anchorId);
      if(target){ requestAnimationFrame(function(){ target.scrollIntoView({behavior:'smooth', block:'start'}); }); }
    } else {
      window.scrollTo(0,0);
    }
  }

  window.addEventListener('hashchange', route);
  route();
})();