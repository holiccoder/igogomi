
(() => { if (window.BEAEPAGEJS === undefined) {
            window.BEAEPAGEJS = [];
          }

          if(window.beaePageSetting == undefined) {
            window.beaePageSetting = {};
          }
          
          window.beaePageSetting.pageId = "69b977da0ba5bf79000588a2";
              window.beaePageSetting.pageTitle = "igogomi"; 
              window.beaePageSetting.pageType = "product";

          let js_3OQGQBKJ = () => { let BeaeUseHooks = {};
      try {
        let argid = 'beae-8dr0o6m2section-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-8dr0o6m2',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-8dr0o6m2');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-8dr0o6m2: ', ex)
      };
    

      try {
        let argid = 'beae-s9joytnwsection-featured-product',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-s9joytnw',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-s9joytnw');
        args.el = args.els[0];
        ((a) => { var k,$;const n=a.el.querySelector('script[data-id="Product-json-'+a.id+'"]')||a.el.querySelector("#Product-json-"+a.id);let t=!1;const o=JSON.parse(n!=null&&n.innerHTML?n==null?void 0:n.innerHTML:"{}");let r=o!=null&&o.selected_or_first_available_variant?o==null?void 0:o.selected_or_first_available_variant:(k=o.variants)==null?void 0:k[0];window.BeaeMoneyFormat||(window.BeaeMoneyFormat=($=a.el.querySelector(".beae-money-format"))==null?void 0:$.innerHTML),r&&(r=o.variants.find(w=>w.id==r.id)),y(r);function s(w){const x=a.el.querySelector(".beae-attr-sku");if(w){if(x){x.style.removeProperty("display");const M=x.querySelector(".beae-attr-value");M&&(M.innerHTML=`${w.sku?w.sku:"N/A"}`)}}else x&&(x.style.display="none")}function p(w){var x,M,V,L,T;if(w!=null&&w.unitPriceMeasurement){const N=(x=a.el)==null?void 0:x.querySelectorAll(".product__unit-price");if(N){let E="",P=window.BeaeFormatMoney(w.unitPrice);P&&typeof P=="string"&&(P=P.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'")),((M=w.unitPriceMeasurement)==null?void 0:M.referenceValue)!=1&&((V=w.unitPriceMeasurement)==null?void 0:V.referenceValue)!=0&&(E+=w.unitPriceMeasurement.referenceValue),((L=w.unitPriceMeasurement)==null?void 0:L.referenceUnit)!==null&&((T=w.unitPriceMeasurement)==null?void 0:T.referenceUnit)!==""&&(E+=w.unitPriceMeasurement.referenceUnit),N.forEach(H=>{P!=null&&P!=""&&E!=null&&E!=""?H.innerHTML=`${P}/${E}`:H.innerHTML="Price per unit not available"})}}}function c(w){if(!window.BeaeMoneyFormat)return;const x=a.el.querySelectorAll(".beae-product-single__price:not(.beae-recommendation-item .beae-product-single__price)");x&&x.forEach(V=>{if(V){let L=window.BeaeFormatMoney(w.price);L&&typeof L=="string"&&(L=L.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'")),V.innerHTML=L}});const M=a.el.querySelectorAll(".beae-product-single__price--regular:not(.beae-recommendation-item .beae-product-single__price--regular)");M&&M.forEach(V=>{var L,T;if(V){const N=V.parentNode;if(w.compare_at_price){V.style.display="block";let E=window.BeaeFormatMoney(w.compare_at_price);E&&typeof E=="string"&&(E=E.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'")),V.innerHTML=E,(L=N==null?void 0:N.querySelector(".beae-product-single__price"))==null||L.setAttribute("data-sale",!0)}else V.style.display="none",(T=N==null?void 0:N.querySelector(".beae-product-single__price"))==null||T.removeAttribute("data-sale")}})}function d(w){var L,T,N,E;const x=a.el.querySelectorAll(".beae-product-single__price--badged"),M=parseFloat((T=(L=w.price)==null?void 0:L.toString())==null?void 0:T.replace(",","")),V=parseFloat((E=(N=w.compare_at_price)==null?void 0:N.toString())==null?void 0:E.replace(",",""));x&&x.forEach(P=>{if(!P)return;const H=P.getAttribute("type"),z=P.getAttribute("data-sale")||"",R=P.getAttribute("data-sold-out");let O="";if(H=="percent")O=Math.floor((V-M)*100/V);else if(H=="dollar"){const D=window.BeaeFormatDecimal(w.compare_at_price)-window.BeaeFormatDecimal(w.price);O=window.BeaeFormatMoney(window.BeaeReverseFormatDecimal(D))}else if(H=="none"){P.classList.remove("beae-product-single__price--sale","beae-sale-sold-out"),P.classList.add("beae-sale-hidden"),P.innerHTML="";return}const I=w.inventory_quantity,A=w.inventory_policy;if(I>0||I<1&&A=="continue"||!w.inventory_management)if(V&&V>M){P.classList.remove("beae-sale-sold-out","beae-sale-hidden"),P.classList.add("beae-product-single__price--sale");let D=z.replace(new RegExp("{\\s*?sale\\s*?}","g"),O);D&&(D=D.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'")),P.innerHTML=D}else P.classList.remove("beae-product-single__price--sale","beae-sale-sold-out"),P.classList.add("beae-sale-hidden"),P.innerHTML="";else P.classList.remove("beae-sale-hidden","beae-product-single__price--sale"),P.classList.add("beae-sale-sold-out"),P.innerHTML=R})}function l(w){var L,T,N,E;const x=parseFloat((T=(L=w.price)==null?void 0:L.toString())==null?void 0:T.replace(",","")),M=parseFloat((E=(N=w.compare_at_price)==null?void 0:N.toString())==null?void 0:E.replace(",",""));let V=a.el.querySelectorAll(".beae-badged-wrapper span");V&&V.forEach(P=>{if(!P)return;const H=P.getAttribute("type"),z=P.getAttribute("data-sale")||"",R=P.getAttribute("data-sold-out");let O="";if(H=="percent")O=Math.floor((M-x)*100/M);else if(H=="dollar"){const D=window.BeaeFormatDecimal(w.compare_at_price)-window.BeaeFormatDecimal(w.price);O=window.BeaeFormatMoney(window.BeaeReverseFormatDecimal(D))}else if(H=="none"){P.classList.remove("beae-product-single__price--sale","beae-sale-sold-out"),P.classList.add("beae-sale-hidden"),P.innerHTML="";return}const I=w.inventory_quantity,A=w.inventory_policy;if(I>0||I<1&&A=="continue"||!w.inventory_management){const D=parseFloat(w.price),j=parseFloat(w.compare_at_price);if(j&&j>D){P.classList.remove("beae-sale-sold-out","beae-sale-hidden"),P.classList.add("beae-product-single__price--sale");let q=z.replace(new RegExp("{\\s*?sale\\s*?}","g"),O);q&&(q=q.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'")),P.innerHTML=q}else P.classList.remove("beae-product-single__price--sale","beae-sale-sold-out"),P.classList.add("beae-sale-hidden"),P.innerHTML=""}else P.classList.remove("beae-sale-hidden","beae-product-single__price--sale"),P.classList.add("beae-sale-sold-out"),P.innerHTML=R})}function v(w){const x=a.el.querySelectorAll(".beae-x-product-gallery .beae-slider");x&&o&&w.featured_media&&x.forEach(M=>{const V=M.getAttribute("data-desktop-layout");if(window.innerWidth>=768&&V=="grid"){const L=M.querySelector('.beae-slide-item[data-media-id="'+w.featured_media.id+'"]');Array.from(M.querySelectorAll(".beae-slide-item.beae-grid-active")).filter(function(N){return N.nodeType===1&&N!==L}).forEach(N=>{N.classList.remove("beae-grid-active")}),_=="true"&&L.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),L&&!L.classList.contains("beae-grid-active")&&L.classList.add("beae-grid-active")}else _=="true"&&M.dispatchEvent(new CustomEvent("activeSlide",{detail:{id:w.featured_media.id},bubbles:!0,cancelable:!0,composed:!1}))})}function y(w){if(a.mode.value==="builder"&&w){const Z=a.el.querySelector(".beae-x-featuted_product");Z==null||Z.setAttribute("data-variant-id",w.id)}const x=a.el.querySelector(".beae-x-inventory");if(!x||!w)return;const M=x.children[0],V=x.getAttribute("data-in-stock-text"),L=x.getAttribute("data-out-stock-text");x.getAttribute("data-inventory-text");const T=x.getAttribute("data-pre-order-text"),N=x.getAttribute("data-very-low-stock-text"),E=x.getAttribute("data-low-stock-text"),P=x.getAttribute("data-incoming-date-text"),H=x.getAttribute("data-low-number")??20,z=x.getAttribute("data-very-low-number")??5,R=x.getAttribute("data-show-next-incoming-date"),O=x.getAttribute("data-max-number")??60,I=x.querySelector(".beae-inventory-label"),A=x.querySelector(".beae-inventory-process-body");let D=w.inventory_quantity;a.el.querySelector(".beae-x-variant")||a.el.querySelector(".beae-x-swatch-color")||a.el.querySelector(".beae-x-add-to-cart-with-option")||(D=o.variants.reduce((Z,F)=>Z+(F.inventory_quantity||0),0));function q(Z){return Z?Z.replace("{quantity}",D).replace("{next_incoming_date}",w.next_incoming_date):""}!M||!I||(w.available?w.inventory_policy==="continue"&&D<1?(I.innerHTML=q(T),M.classList="",M.classList.add("beae-inventory-pre-order")):D<=z?(I.innerHTML=q(N),M.classList="",M.classList.add("beae-inventory-very-low")):D<=H?(I.innerHTML=q(E),M.classList="",M.classList.add("beae-inventory-low")):(I.innerHTML=q(V),M.classList="",M.classList.add("beae-inventory-in-stock")):w.next_incoming_date&&R?(I.innerHTML=q(P),M.classList="",M.classList.add("beae-incoming-transfer")):(I.innerHTML=q(L),M.classList="",M.classList.add("beae-inventory-out-stock")),A&&(D<=O?A.style.width=D/O*100+"%":A.style.width="100%"))}function g(w){const x=a.el.querySelector(".beae-add-to-cart--submit");if(x){const V=x.querySelector(".beae-add-to-cart-text-content");w.available?x&&(x.removeAttribute("disabled"),V&&(V.innerHTML=x.getAttribute("data-add-to-cart-text"))):x&&(a.mode.value=="live"&&x.setAttribute("disabled","disabled"),V&&(V.innerHTML=x.getAttribute("data-sold-out-text")))}const M=a.el.querySelector(".shopify-payment-button__button");M&&(w.inventory_quantity>0?M.removeAttribute("disabled"):a.mode.value=="live"&&M.setAttribute("disabled","disabled"))}function h(w){const x=a.el.querySelector(".beae-quantity-input"),M=a.el.querySelectorAll(".beae-quantity-btn");if(M&&M.forEach(V=>{w&&w.available?V.removeAttribute("disabled"):a.mode.value=="live"&&V.setAttribute("disabled","disabled")}),x){if(w)w.available?x.removeAttribute("disabled"):a.mode.value=="live"&&x.setAttribute("disabled","disabled");else{x.value=1,a.mode.value=="live"&&x.setAttribute("disabled","disabled");return}const V=w.inventory_quantity,L=w.inventory_policy;let T=9999;w.inventory_management&&L==="deny"&&(T=V),V<1&&L=="continue"&&(T=999999);let N=parseInt(x.value);N>T&&(N=T),N=isNaN(N)||!N?1:N,x.value=N,x.setAttribute("max",T)}}function u(w){if(w){let x=a.el.querySelector(".beae-pa-container");if(x&&a.mode.value=="live"){const M=x.getAttribute("data-section-id-template");x.innerHTML="";const L=window.location.pathname.split("/").filter(N=>N);let T="";L.length>0&&(L[0].length===2||/^[a-z]{2}(-[A-Z]{2})?$/.test(L[0]))&&(T=L[0]+"/"),window.fetch(window.location.origin+"/"+T+"products/"+o.handle+"?variant="+w.id+"&section_id="+M,{method:"GET",headers:{"Content-Type":"text/html"}}).then(N=>N.text()).then(N=>{let E=N.match(/<Beae-custom-liquid-pickup>(|[\s\S]+?)<\/Beae-custom-liquid-pickup>/g);E&&E[0]&&(x.innerHTML=E[0]);let P=x.querySelector(".beae-pa--btn"),H=x.querySelector(".beae-pa--detail");if(P){const z=x.closest("section.beae-section");z&&z.getAttribute("data-sectionid"),P.addEventListener("click",()=>{window.BeaePopupLibrary.createPopup(H,{layout:x.getAttribute("data-layout"),layoutMobile:"bottom",width:x.getAttribute("data-width"),id:a.id})})}}).catch(N=>{console.warn(N.message)})}}}const f=a.el.querySelector(".beae-variant-size-guide");if(f){const w=f.querySelector(".beae-variant-size-guide-btn"),x=f.querySelector(".beae-variant-size-guide-content"),M=a.el.querySelector(".beae-content-size-chart-preview");let V=window.isPreviewTemplate&&M||x;if(w&&V){const L=a.el.getAttribute("data-sectionid");w.addEventListener("click",()=>{window!=null&&window.BeaePopupLibrary&&window.BeaePopupLibrary.createPopup(V,{layout:"center",layoutMobile:"bottom",width:"auto",sectionId:L})})}}const b=a.el.querySelectorAll(".beae-custom-select_wrp");b&&b.length&&a.mode.value=="live"&&b.forEach(w=>{const x=w.querySelector("button.beae-custom-select__btn"),M=w.closest("div.beae-block.beae-core");x.addEventListener("click",function(V){w.classList.toggle("active"),M.style.position="relative",M.style.zIndex="1"}),document.addEventListener("click",function(V){w.contains(V.target)||(w.classList.remove("active"),M.style={})})});function C(){const w=a.el.querySelector(".beae-custom-select_wrp.active");w&&w.classList.remove("active")}const m=a.el.querySelector(".beae-x-variant"),_=m==null?void 0:m.getAttribute("data-scroll");let S=!1;if(m){let w=function(O,I){if(!O)return[];let A=O.options.filter((D,j)=>j!=I);return o.variants.filter(D=>A.every(j=>D.options.includes(j)))??[]},x=function(O,I,A){if(!O)return null;let D=O.options.filter((j,q)=>q!=I);return o.variants.find(j=>j.options.every(q=>[A,...D].includes(q)))},M=function(O){if(!O)return;const I=a.el.querySelector("form.beae-product-form-next");if(I){I.getAttribute("data-variant-id",O.id);const A=I.querySelector('input[type="hidden"][name="id"]');A&&A.setAttribute("value",O.id)}m.querySelectorAll(".beae-variant-label").forEach(A=>{const D=parseInt(A.getAttribute("data-option-position"))-1;A.innerHTML=O.options[D]}),P||m.querySelectorAll(".beae-product-images-list").forEach(A=>{const D=parseInt(A.getAttribute("data-option-position"))-1;let j=[];w(O,D).forEach(q=>{j.push(`
                      <span
                        class="beae-product-swatch-item-image"
                        variant-id=${q.id}
                      >
                        <img
                          src="${q.featured_image?q.featured_image.src:"//cdn.shopify.com/shopifycloud/shopify/assets/no-image-160-1cfae84eca4ba66892099dcd26e604f5801fdadb3693bc9977f476aa160931ac_120x120_crop_center.gif"}"
                          alt="${q.title}"
                          height="120"
                          width="120"
                          loading="lazy"
                        />
                      </span>
                    `)}),A.querySelectorAll(".beae-product-variant-item-image").forEach((q,Z)=>{q.innerHTML=j[Z]})}),m.querySelectorAll(".beae-product-variant-item").forEach(A=>{const D=parseInt(A.getAttribute("data-option-position"))-1;let j="";const q=A.getAttribute("data-value");if(q)try{j=decodeURIComponent(q)}catch{j=q}const Z=x(O,D,j);Z&&(A.setAttribute("data-variant-id",Z.id),Z.inventory_management&&Z.inventory_quantity<1&&Z.inventory_policy!="continue"?A.classList.add("variant-item-disable"):A.classList.remove("variant-item-disable"))})},V=function(O){O.options.forEach((I,A)=>{let D=A+1;const j=m.querySelectorAll('.beae-variant-option-list[data-option-position="'+D+'"] > li');let q=null;const Z=m.querySelector("select#"+R+"-option-"+A);if(Z){for(let U=0;U<j.length;U++)j[U].classList.remove("beae-product-variant-item--selected"),decodeURIComponent(j[U].getAttribute("data-value"))==I&&(q=j[U]);q&&q.classList.add("beae-product-variant-item--selected"),Z.value=I}const F=q&&q.closest(".beae-custom-select_wrp");if(F){const U=q&&q.getAttribute("data-color"),G=F.querySelector(".beae-selected-color");G&&(G.style="--beae-color-variant: "+U);const W=F.querySelector(".beae-text-selected");W&&(W.innerHTML=I)}})},L=function(O,I){N(O),O&&(t=!0,r=O,y(O),h(O),g(O),d(O),l(O),M(O),c(O),s(O),p(O),E?(E=!1,new URLSearchParams(window.location.search).get("variant")&&!window.noUpdateImageFirstLoad&&setTimeout(()=>{v(O)})):v(O),u(O),a.el.dispatchEvent(new CustomEvent("changeVariant",{detail:{variant:O},bubbles:!0,cancelable:!0,composed:!1})))},T=function(){const O=a.el.querySelector('.beae-product-option-cont[data-swatch-type="variant_image"]');if(!O)return;const I=O.getAttribute("data-option-position"),A="//cdn.shopify.com/shopifycloud/shopify/assets/no-image-160-1cfae84eca4ba66892099dcd26e604f5801fdadb3693bc9977f476aa160931ac_120x120_crop_center.gif",D=a.el.querySelectorAll('.beae-product-option-cont:not([data-swatch-type="variant_image"])'),j={};D&&D.length&&D.forEach(F=>{const U=F.querySelector(".beae-product-variant-item--selected");if(!U)return;const G=U.getAttribute("data-option-position"),W=decodeURIComponent(U.getAttribute("data-value"));j["option"+G]=W});const q=o.variants.filter(F=>Object.keys(j).every(U=>j[U]==F[U])),Z=O.querySelectorAll(".beae-product-variant-item");Z&&Z.length&&Z.forEach(F=>{const U=decodeURIComponent(F.getAttribute("data-value")),G=q.find(W=>W["option"+I]==U);F.querySelector("img")||(F.innerHTML=`
                          <span class="beae-product-swatch-item-image">
                          <img
                          src="${G&&G.featured_image?G.featured_image.src:A}"
                          alt="${G&&G.title}"
                          height="100"
                          width="100"
                          loading="lazy"
                          />
                      </span>
                      `)})},N=function(O){let I=o.variants,A=O&&O.option1,D=O&&O.option2;if(!O){const Z=a.el.querySelector('.beae-variant-option-list[data-option-position="1"] .beae-product-variant-item--selected');Z&&(A=decodeURIComponent(Z.getAttribute("data-value")));const F=a.el.querySelector('.beae-variant-option-list[data-option-position="2"] .beae-product-variant-item--selected');F&&(D=decodeURIComponent(F.getAttribute("data-value")))}let j=[],q=[];if(A&&(I=o.variants.filter(Z=>Z.option1==A),I.forEach(Z=>{Z.option2&&!(j!=null&&j.includes(Z.option2))&&j.push(Z.option2)}),I.forEach(Z=>{Z.option2==D&&Z.option3&&!(q!=null&&q.includes(Z.option3))&&q.push(Z.option3)})),[2,3].forEach(Z=>{const F=a.el.querySelectorAll('.beae-variant-option-list[data-option-position="'+Z+'"] .beae-product-variant-item');if(F){let U=Z==2?j:q;F.forEach(G=>{const W=decodeURIComponent(G.getAttribute("data-value"));U.includes(W)?G.setAttribute("data-unavailable",!1):G.setAttribute("data-unavailable",!0)})}}),!O){if(j&&j.length){const Z=a.el.querySelector('.beae-variant-option-list[data-option-position="2"] .beae-product-variant-item--selected[data-unavailable="false"]'),F=a.el.querySelector('.beae-variant-option-list[data-option-position="2"] .beae-product-variant-item[data-unavailable="false"]');!Z&&F&&F.click()}if(q&&q.length){a.el.querySelector('.beae-variant-option-list[data-option-position="3"] .beae-product-variant-item--selected[data-unavailable="false"]');const Z=a.el.querySelector('.beae-variant-option-list[data-option-position="3"] .beae-product-variant-item[data-unavailable="false"]');Z&&Z.click()}}T()},E=!0,P=!1,H=m.querySelector('select[name="id"]'),z=!0;a.el.addEventListener("activeVariant",function(O){if(z){z=!1;return}if(t){t=!1;return}if(!o.variants||!O.detail.id||r&&r.featured_media&&O.detail.id==r.featured_media.id)return;const I=o.variants.find(A=>!A||!A.featured_media||!A.featured_media.id||!O.detail.id?!1:A.featured_media.id==O.detail.id);!I||r.id==I.id||(V(I),N(I),r=I,y(I),h(I),g(I),M(I),c(I),d(I),l(I),u(I),s(I),p(I))});const R=H&&H.getAttribute("id");if(H&&window.Shopify&&window.Shopify.OptionSelectors){let O=function(I){var F;E=!1;const A=parseInt(I.getAttribute("data-option-position"))-1,D=m.querySelector("select#"+R+"-option-"+A);let j=I.getAttribute("data-value")??I.value,q="";try{q=decodeURIComponent(j)}catch{q=j}if(D){const U=((F=I.parentElement)==null?void 0:F.children)??[];for(let G=0;G<U.length;G++)U[G].classList.remove("beae-product-variant-item--selected");I.classList.add("beae-product-variant-item--selected"),D.value=q,D.onchange()}const Z=I.closest(".beae-custom-select_wrp");if(Z){const U=I.getAttribute("data-color"),G=Z.querySelector(".beae-selected-color");G&&(G.style="--beae-color-variant: "+U);const W=Z.querySelector(".beae-text-selected");W&&(W.innerHTML=q)}};new window.Shopify.OptionSelectors(R,{product:o,onVariantSelected:L,enableHistoryState:a.mode.value=="live"}),m.querySelectorAll(".beae-product-variant-item").forEach(I=>{if(I.querySelector("a.beae-variant--link"))return;const A=I.getAttribute("data-link");I.addEventListener("click",D=>{if(D.target.closest(".beae-product-variant-item-image")){if(A&&A!=="#"){window.location.href=A;return}P=!0,O(I);return}(!A||A==="#")&&(P=!1,O(I),C())})})}}else S=!0;o.has_only_default_variant&&(S=!0),S&&B();function B(){r&&((r==null?void 0:r.title)=="Default Title"&&(r=o.variants[0]),y(r),h(r),g(r),d(r),l(r))} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-s9joytnw: ', ex)
      };
    

      try {
        let argid = 'beae-98vpik0dblock-gallery',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-98vpik0d',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-98vpik0d');
        args.el = args.els[0];
        ((a) => { setTimeout(()=>{a.el.querySelector("button.beae-media-zoom")&&a.el.querySelectorAll("button.beae-media-zoom").forEach(n=>n.addEventListener("click",t=>{a.mode.value,n.closest(".beae-slider-items")&&(a.el.querySelectorAll(".beae-slider-items>*.active").forEach(b=>b.classList.remove("active")),n.parentNode.classList.add("active"));let o=document.createElement("div"),r=a.el.querySelectorAll("div.beae-slider-items > *"),s=a.el.querySelector("div.beae-slider-content").getBoundingClientRect();o.setAttribute("class","beae-sections beae-content-wrapper"),o.innerHTML=`
        <div class="${a.id}">
          <div class="beae-gallery-zoom">
            <div class="beae-gallery-zoom-content" style="transform-origin: ${s.left}px ${s.top+s.height/2}px;">
              <div class="beae-gallery-zoom-items">
                ${Array.from(r).map((b,C)=>{const m=b.getAttribute("type");return!m||(m==null?void 0:m.toLowerCase())!="image"?"":`
                    <div class="beae-gallery-zoom-item${b.classList.contains("active")?" active":""}" style="${b.classList.contains("active")?"order: -1;":""}">
                      ${b.innerHTML}
                    </div>
                  `}).join("")}
              </div>
            </div>
            <div class="beae-gallery-zoom-controls">
              <div class="beae-gallery-zoom-pagination">
                <button class="pagination_item prev">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                </button>
                <span class="pagination_item per">0 / 0</span>
                <button class="pagination_item next">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <button class="beae-gallery-zoom-close">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
              </svg>
            </button>
          </div>
        </div>
      `,document.body.appendChild(o),document.body.style.overflow="hidden";let p=o.querySelector("button.beae-gallery-zoom-close"),c=o.querySelector(".beae-gallery-zoom"),d=o.querySelector(".beae-gallery-zoom-content"),l=o.querySelector(".beae-gallery-zoom-pagination .pagination_item.per"),v=o.querySelector(".pagination_item.prev"),y=o.querySelector(".pagination_item.next"),g=o.querySelectorAll(".beae-gallery-zoom-item"),h=o.querySelector(".beae-gallery-zoom-controls"),u=()=>{let b=o.querySelector(".beae-gallery-zoom-item.active"),C=0;Array.from(r).forEach(m=>{var _;((_=m.getAttribute("type"))==null?void 0:_.toLowerCase())=="image"&&C++}),C<2?h.style.display="none":h.style.display="flex",l.textContent=`${Array.from(o.querySelectorAll(".beae-gallery-zoom-item")).indexOf(b)+1} / ${C}`};u(),p.addEventListener("click",b=>{c.classList.remove("opened")}),o.querySelectorAll(".beae-gallery-zoom-item img").forEach(b=>{b.addEventListener("mousemove",C=>{b.parentNode.classList.contains("beae-gallery-zoom-more")?b.parentNode.classList.contains("beae-gallery-zoom-more")&&(b.style.objectFit==="cover"?b.style.objectPosition=100*(C.clientX/b.offsetWidth)+"% "+100*((C.clientY-b.offsetTop)/b.offsetHeight)+"%":b.style.objectPosition&&(b.style.objectPosition="")):(b.parentNode.classList.add("beae-gallery-zoom-more"),b.style.cursor="zoom-in",b.addEventListener("click",m=>{b.style.objectFit==="cover"?(b.style.objectFit="contain",m.target.style.transition="",b.style.cursor="zoom-in",b.style.objectPosition=""):(b.style.objectFit="cover",b.style.cursor="zoom-out",b.style.objectPosition=100*(m.clientX/b.offsetWidth)+"% "+100*((m.clientY-b.offsetTop)/b.offsetHeight)+"%")}))})}),c.addEventListener("transitionend",b=>{b.propertyName==="opacity"&&(c.classList.contains("opened")?(p.style.opacity=1,o.querySelectorAll(".beae-gallery-zoom-item img").forEach(C=>{C.removeAttribute("srcset"),C.removeAttribute("sizes")}),o.querySelector(".beae-gallery-zoom-item.active").style.order="",d.scrollTo({left:o.querySelector(".beae-gallery-zoom-item.active").offsetLeft})):(o.remove(),document.body.style.overflow=""))});let f=0;d.addEventListener("scroll",b=>{clearTimeout(f),f=setTimeout(()=>{g.forEach(C=>{Math.abs(b.target.scrollLeft-C.offsetLeft)<2?(C.classList.add("active"),u()):C.classList.remove("active")})},250)}),v.addEventListener("click",()=>{let b=o.querySelector(".beae-gallery-zoom-item.active");if(b.previousElementSibling)b.previousElementSibling.classList.add("active");else if(g[g.length-1]&&g.length>1)g[g.length-1].classList.add("active");else return;b.classList.remove("active"),d.scrollTo({behavior:"smooth",left:o.querySelector(".beae-gallery-zoom-item.active").offsetLeft}),u()}),y.addEventListener("click",()=>{let b=o.querySelector(".beae-gallery-zoom-item.active");if(b&&b.nextElementSibling)b.nextElementSibling.classList.add("active");else if(g[0]&&g.length>1)g[0].classList.add("active");else return;b.classList.remove("active"),d.scrollTo({behavior:"smooth",left:o.querySelector(".beae-gallery-zoom-item.active").offsetLeft}),u()}),setTimeout(()=>{c.classList.add("opened")},10)}))},1e3) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-98vpik0d: ', ex)
      };
    

      try {
        let argid = 'beae-98vpik0dsection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-98vpik0d',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-98vpik0d');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-98vpik0d: ', ex)
      };
    

      try {
        let argid = 'beae-6devoostblock-tabs',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-6devoost',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-6devoost');
        args.el = args.els[0];
        ((data) => { const prefixClass=`div[data-id=${data.id}] > .beae-tab-wrp`;let tabs=data.el.querySelectorAll(`${prefixClass} > .beae-tab-items > .beae-tab-item`),contents=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content`),rightside=data.el.querySelectorAll(`${prefixClass} .beae-rightside`),accordions=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content > .beae-accordion-title--mobile`),activeTab=window.outerWidth&&window.outerWidth<=768?data.activeTabMobile:data.activeTab,toggleImg=data.toggleImg,layout=data.layout,accordionMode=data.accordionMode;function resetActive(){tabs.forEach(f=>f.classList.remove("active")),contents.forEach(f=>f.classList.remove("active")),accordions.forEach(f=>f.classList.remove("active")),toggleImg&&rightside.forEach(f=>f.classList.remove("active")),contents.forEach(f=>{const b=f.querySelector(".beae-accordion-body").style;layout=="accordions"?b.maxHeight="0px":(b.transform="scaleY(0)",b.opacity="0")})}function setActive(f){tabs[f].classList.add("active"),contents[f].classList.add("active"),accordions[f].classList.add("active"),toggleImg&&rightside[f].classList.add("active");const b=contents[f].querySelector(".beae-accordion-body");if(b){const C=b.style;layout=="accordions"?C.maxHeight=data.mode.value=="builder"?"":b.scrollHeight+"px":(C.transform="scaleY(1)",C.transformOrigin="top center",C.opacity="1")}}function removeActive(f){tabs[f].classList.remove("active"),contents[f].classList.remove("active"),accordions[f].classList.remove("active"),toggleImg&&rightside[f].classList.remove("active");const b=contents[f].querySelector(".beae-accordion-body").style;layout=="accordions"?b.maxHeight="0px":(b.transform="scaleY(0)",b.opacity="0")}resetActive(),activeTab!=="none"&&accordionMode!="popup"&&setActive(activeTab),tabs.forEach((f,b)=>{f.addEventListener("click",()=>{resetActive(),setActive(b)})});const section=data.el.closest("section.beae-section");let sectionId="";section&&(sectionId=section.getAttribute("data-sectionid"));let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(f){extOptions={},console.error(f)}if(accordions.forEach((f,b)=>{f.addEventListener("click",()=>{if(accordionMode=="popup"&&data.mode.value!="builder"){const C=f.closest(".beae-tab-content");if(C){let m=document.createElement("div");m.innerHTML=`
                            <h3 class="beae-popup__content-title">${f.querySelector("span").innerHTML}</h3>
                            <div class="beae-popup__content-body ${data.id}">${C.querySelector(".beae-accordion-body").innerHTML}</div>
                            `,window.BeaePopupLibrary.createPopup(m,{layout:extOptions.layout?extOptions.layout:"right",width:extOptions.width?extOptions.width:"400px",layoutMobile:extOptions.layoutMobile?extOptions.layoutMobile:"bottom",sectionId})}}else accordionMode=="single"?(resetActive(),setActive(b)):f.classList.contains("active")?removeActive(b):setActive(b)})}),layout=="tabs"){const f=data.el.querySelector(".beae-tab-contents"),b=f.querySelectorAll(".beae-tab-content-wrp");let C=0,m=-1;b.forEach((S,B)=>{const k=S.offsetHeight;k>C&&(m=B,C=k)}),new ResizeObserver(()=>{f.style.setProperty("--beae-tabs-max-height",`${b[m].offsetHeight}px`)}).observe(b[m])} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-6devoost: ', ex)
      };
    

      try {
        let argid = 'beae-jbp2qb1rblock-description',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-jbp2qb1r',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-jbp2qb1r');
        args.el = args.els[0];
        ((data) => { if(data.hasDescription=="false"){data.mode.value=="live"&&(data.el.style.display="none");return}if(window.isPreviewTemplate){const v=data.el.closest(".beae-x-featuted_product");if(v){const y=v.parentElement.querySelector('script[data-id^="Product-json-"]')||v.parentElement.querySelector('script[id^="Product-json-"]'),g=JSON.parse(y!=null&&y.innerHTML?y==null?void 0:y.innerHTML:"{}");g&&!g.description&&(data.el.style.display="none")}}const content=data.el.querySelector(".beae-des-content");if(content){if(data.type=="collapsible_tab"){const v=data.el.querySelector(".beae-des-accordion");v&&content&&(v.addEventListener("click",()=>{content&&(v.classList.contains("active")?(v.classList.remove("active"),content.style.maxHeight="0"):(v.classList.add("active"),content.style.maxHeight=content.scrollHeight+"px"))}),data.active&&v.click())}else if(data.type=="show_with_popup"){const header=data.el.querySelector(".beae-des-popup > span"),buttonLightbox=data.el.querySelector(".beae-des-popup");if(buttonLightbox&&content){const section=data.el.closest("section.beae-section");let sectionId="";section&&(sectionId=section.getAttribute("data-sectionid"));let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(v){extOptions={},console.error(v)}buttonLightbox.addEventListener("click",()=>{window.BeaePopupLibrary.createPopup('<h3 class="beae-popup__content-title">'+header.innerHTML+'</h3><div class="beae-popup__content-body">'+content.innerHTML+"</div>",{layout:extOptions.layout?extOptions.layout:"right",width:extOptions.width?extOptions.width:"400px",layoutMobile:extOptions.layoutMobile?extOptions.layoutMobile:"bottom",sectionId})})}}else if(data.type=="less_more"){let v=function(y,g,h,u){function f(){u&&y&&h&&(u.offsetHeight>parseFloat(h.split("px")[0])?y.style.display="block":y.style.display="none")}f(),u&&new ResizeObserver(()=>{f()}).observe(u),g&&(g.style.height=h),y&&g&&!y.dataset.listenerAttached&&(y.addEventListener("click",()=>{y.getAttribute("data-type")=="more"?(g.classList.remove("beae-show-more"),g.style.height=h,y.setAttribute("data-type","less"),y.innerHTML=y.getAttribute("data-show-more-text")):(g.classList.add("beae-show-more"),g.style.height=g.scrollHeight+"px",setTimeout(()=>{g.style={}},100),y.setAttribute("data-type","more"),y.innerHTML=y.getAttribute("data-show-less-text"))}),y.dataset.listenerAttached="true",data.active&&y.click())};for(let y=0;y<data.els.length;y++){const g=data.els[y].querySelector(".btn-action-les-more"),h=data.els[y].querySelector(".beae-less-more"),u=h&&h.getAttribute("data-height"),f=h&&h.querySelector(".beae-des-content");(data.mode.value=="builder"&&y==data.loopIndex||data.mode.value=="live")&&v(g,h,u,f)}}}else data.els.forEach(v=>{if(!v)return;const y=v.querySelector(".beae-x-product-short-des");if(y.getAttribute("data-type")=="text"&&y.getAttribute("data-show")=="false"){const g=y.textContent;y.innerHTML=convertStringWithDifferentWordCount(g,data.numberOfWords)}});function convertStringWithDifferentWordCount(v,y){const h=v.split(" ").slice(0,y);return v.split(" ").length>y?h.concat("...").join(" "):h.join(" ")} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-jbp2qb1r: ', ex)
      };
    

      try {
        let argid = 'beae-3rq9qy0jblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-3rq9qy0j',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-3rq9qy0j');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-3rq9qy0j: ', ex)
      };
    

      try {
        let argid = 'beae-0fy2w68ysection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-0fy2w68y',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-0fy2w68y');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-0fy2w68y: ', ex)
      };
    

      try {
        let argid = 'beae-k0apu2lkblock-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-k0apu2lk',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-k0apu2lk');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-k0apu2lk: ', ex)
      };
    

      try {
        let argid = 'beae-cfhsq9ilblock-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-cfhsq9il',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-cfhsq9il');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-cfhsq9il: ', ex)
      };
    

      try {
        let argid = 'beae-k0apu2lkblock-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-k0apu2lk',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-k0apu2lk');
        args.el = args.els[1];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-k0apu2lk: ', ex)
      };
    

      try {
        let argid = 'beae-cfhsq9ilblock-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-cfhsq9il',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-cfhsq9il');
        args.el = args.els[1];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-cfhsq9il: ', ex)
      };
    

      try {
        let argid = 'beae-k0apu2lkblock-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-k0apu2lk',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-k0apu2lk');
        args.el = args.els[2];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-k0apu2lk: ', ex)
      };
    

      try {
        let argid = 'beae-cfhsq9ilblock-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-cfhsq9il',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-cfhsq9il');
        args.el = args.els[2];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-cfhsq9il: ', ex)
      };
    

      try {
        let argid = 'beae-k0apu2lkblock-textloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-k0apu2lk',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-k0apu2lk');
        args.el = args.els[3];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-k0apu2lk: ', ex)
      };
    

      try {
        let argid = 'beae-cfhsq9ilblock-textloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-cfhsq9il',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-cfhsq9il');
        args.el = args.els[3];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-cfhsq9il: ', ex)
      };
    

      try {
        let argid = 'beae-k0apu2lkblock-textloop-4',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-k0apu2lk',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-k0apu2lk');
        args.el = args.els[4];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-k0apu2lk: ', ex)
      };
    

      try {
        let argid = 'beae-cfhsq9ilblock-textloop-4',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-cfhsq9il',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-cfhsq9il');
        args.el = args.els[4];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-cfhsq9il: ', ex)
      };
    

      try {
        let argid = 'beae-88qg1kesblock-gallery',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-88qg1kes',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-88qg1kes');
        args.el = args.els[0];
        ((a) => { setTimeout(()=>{a.el.querySelector("button.beae-media-zoom")&&a.el.querySelectorAll("button.beae-media-zoom").forEach(n=>n.addEventListener("click",t=>{a.mode.value,n.closest(".beae-slider-items")&&(a.el.querySelectorAll(".beae-slider-items>*.active").forEach(b=>b.classList.remove("active")),n.parentNode.classList.add("active"));let o=document.createElement("div"),r=a.el.querySelectorAll("div.beae-slider-items > *"),s=a.el.querySelector("div.beae-slider-content").getBoundingClientRect();o.setAttribute("class","beae-sections beae-content-wrapper"),o.innerHTML=`
        <div class="${a.id}">
          <div class="beae-gallery-zoom">
            <div class="beae-gallery-zoom-content" style="transform-origin: ${s.left}px ${s.top+s.height/2}px;">
              <div class="beae-gallery-zoom-items">
                ${Array.from(r).map((b,C)=>{const m=b.getAttribute("type");return!m||(m==null?void 0:m.toLowerCase())!="image"?"":`
                    <div class="beae-gallery-zoom-item${b.classList.contains("active")?" active":""}" style="${b.classList.contains("active")?"order: -1;":""}">
                      ${b.innerHTML}
                    </div>
                  `}).join("")}
              </div>
            </div>
            <div class="beae-gallery-zoom-controls">
              <div class="beae-gallery-zoom-pagination">
                <button class="pagination_item prev">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                </button>
                <span class="pagination_item per">0 / 0</span>
                <button class="pagination_item next">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <button class="beae-gallery-zoom-close">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
              </svg>
            </button>
          </div>
        </div>
      `,document.body.appendChild(o),document.body.style.overflow="hidden";let p=o.querySelector("button.beae-gallery-zoom-close"),c=o.querySelector(".beae-gallery-zoom"),d=o.querySelector(".beae-gallery-zoom-content"),l=o.querySelector(".beae-gallery-zoom-pagination .pagination_item.per"),v=o.querySelector(".pagination_item.prev"),y=o.querySelector(".pagination_item.next"),g=o.querySelectorAll(".beae-gallery-zoom-item"),h=o.querySelector(".beae-gallery-zoom-controls"),u=()=>{let b=o.querySelector(".beae-gallery-zoom-item.active"),C=0;Array.from(r).forEach(m=>{var _;((_=m.getAttribute("type"))==null?void 0:_.toLowerCase())=="image"&&C++}),C<2?h.style.display="none":h.style.display="flex",l.textContent=`${Array.from(o.querySelectorAll(".beae-gallery-zoom-item")).indexOf(b)+1} / ${C}`};u(),p.addEventListener("click",b=>{c.classList.remove("opened")}),o.querySelectorAll(".beae-gallery-zoom-item img").forEach(b=>{b.addEventListener("mousemove",C=>{b.parentNode.classList.contains("beae-gallery-zoom-more")?b.parentNode.classList.contains("beae-gallery-zoom-more")&&(b.style.objectFit==="cover"?b.style.objectPosition=100*(C.clientX/b.offsetWidth)+"% "+100*((C.clientY-b.offsetTop)/b.offsetHeight)+"%":b.style.objectPosition&&(b.style.objectPosition="")):(b.parentNode.classList.add("beae-gallery-zoom-more"),b.style.cursor="zoom-in",b.addEventListener("click",m=>{b.style.objectFit==="cover"?(b.style.objectFit="contain",m.target.style.transition="",b.style.cursor="zoom-in",b.style.objectPosition=""):(b.style.objectFit="cover",b.style.cursor="zoom-out",b.style.objectPosition=100*(m.clientX/b.offsetWidth)+"% "+100*((m.clientY-b.offsetTop)/b.offsetHeight)+"%")}))})}),c.addEventListener("transitionend",b=>{b.propertyName==="opacity"&&(c.classList.contains("opened")?(p.style.opacity=1,o.querySelectorAll(".beae-gallery-zoom-item img").forEach(C=>{C.removeAttribute("srcset"),C.removeAttribute("sizes")}),o.querySelector(".beae-gallery-zoom-item.active").style.order="",d.scrollTo({left:o.querySelector(".beae-gallery-zoom-item.active").offsetLeft})):(o.remove(),document.body.style.overflow=""))});let f=0;d.addEventListener("scroll",b=>{clearTimeout(f),f=setTimeout(()=>{g.forEach(C=>{Math.abs(b.target.scrollLeft-C.offsetLeft)<2?(C.classList.add("active"),u()):C.classList.remove("active")})},250)}),v.addEventListener("click",()=>{let b=o.querySelector(".beae-gallery-zoom-item.active");if(b.previousElementSibling)b.previousElementSibling.classList.add("active");else if(g[g.length-1]&&g.length>1)g[g.length-1].classList.add("active");else return;b.classList.remove("active"),d.scrollTo({behavior:"smooth",left:o.querySelector(".beae-gallery-zoom-item.active").offsetLeft}),u()}),y.addEventListener("click",()=>{let b=o.querySelector(".beae-gallery-zoom-item.active");if(b&&b.nextElementSibling)b.nextElementSibling.classList.add("active");else if(g[0]&&g.length>1)g[0].classList.add("active");else return;b.classList.remove("active"),d.scrollTo({behavior:"smooth",left:o.querySelector(".beae-gallery-zoom-item.active").offsetLeft}),u()}),setTimeout(()=>{c.classList.add("opened")},10)}))},1e3) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-88qg1kes: ', ex)
      };
    

      try {
        let argid = 'beae-88qg1kessection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-88qg1kes',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-88qg1kes');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-88qg1kes: ', ex)
      };
    

      try {
        let argid = 'beae-80kk9j5fblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-80kk9j5f',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-80kk9j5f');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-80kk9j5f: ', ex)
      };
    

      try {
        let argid = 'beae-y2t5c400block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-y2t5c400',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-y2t5c400');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-y2t5c400: ', ex)
      };
    

      try {
        let argid = 'beae-5sbt1wukblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-5sbt1wuk',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-5sbt1wuk');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-5sbt1wuk: ', ex)
      };
    

      try {
        let argid = 'beae-s1dxtlr4block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-s1dxtlr4',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-s1dxtlr4');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-s1dxtlr4: ', ex)
      };
    

      try {
        let argid = 'beae-9o6oa8aublock-buy',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-9o6oa8au',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-9o6oa8au');
        args.el = args.els[0];
        ((d) => { d.els&&d.els.forEach(l=>{const v=l.querySelector('.beae-quantity-btn[name="plus"]'),y=l.querySelector('.beae-quantity-btn[name="minus"]'),g=l.querySelector(".beae-quantity-input");v&&y&&g&&(g.value===""&&(g.value="1"),v.addEventListener("click",function(){v.getAttribute("disabled")!="disabled"&&g.stepUp()}),y.addEventListener("click",function(){y.getAttribute("disabled")!="disabled"&&g.stepDown()}))}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-9o6oa8au: ', ex)
      };
    

      try {
        let argid = 'beae-qufc1ls5block-add-to-cart',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-qufc1ls5',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-qufc1ls5');
        args.el = args.els[0];
        ((_) => { if(_.mode.value=="builder"){if(!_.els)return;for(let S=0;S<_.els.length;S++)if(S==_.loopIndex){const B=_.els[S].closest("form.beae-product-form-next");if(!B)return;const k=B.querySelector(".beae-add-to-cart--submit"),$=B.getAttribute("data-product_id"),w=B.querySelector('script[data-id="Product-json-'+$+'"]')||B.querySelector("#Product-json-"+$),M=JSON.parse(w!=null&&w.innerHTML?w==null?void 0:w.innerHTML:"{}").variants||[];let V=B.getAttribute("data-variant-id"),L=M[0];V&&(L=M.find(N=>N.id==V));const T=k.querySelector(".beae-add-to-cart-text-content");L!=null&&L.available?T&&(M.length>1?T.innerHTML=k.getAttribute("data-choose-options-text"):T.innerHTML=k.getAttribute("data-add-to-cart-text")):T&&(T.innerHTML=k.getAttribute("data-sold-out-text"))}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-qufc1ls5: ', ex)
      };
    

      try {
        let argid = 'beae-fo1yyxz8',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-fo1yyxz8',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-fo1yyxz8');
        args.el = args.els[0];
        ((k) => { setTimeout(()=>{const $=k.el.querySelector(".shopify-payment-button__button","");$&&$.classList.add(k.buyItNowType)},1e3) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-fo1yyxz8: ', ex)
      };
    

      try {
        let argid = 'beae-thw9b9lmblock-local-pickup',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-thw9b9lm',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-thw9b9lm');
        args.el = args.els[0];
        ((data) => { let btnPopup=data.el.querySelector(".beae-pa--btn"),contentPopup=data.el.querySelector(".beae-pa--detail"),extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(t){extOptions={},console.error(t)}if(btnPopup){const t=data.el.closest("section.beae-section");let o="";t&&(o=t.getAttribute("data-sectionid")),btnPopup.addEventListener("click",()=>{window.BeaePopupLibrary.createPopup(contentPopup,{sectionId:o,...extOptions})})} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-thw9b9lm: ', ex)
      };
    

      try {
        let argid = 'beae-ri4740n4block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ri4740n4',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ri4740n4');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ri4740n4: ', ex)
      };
    

      try {
        let argid = 'beae-biqtvvknblock-tabs',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-biqtvvkn',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-biqtvvkn');
        args.el = args.els[0];
        ((data) => { const prefixClass=`div[data-id=${data.id}] > .beae-tab-wrp`;let tabs=data.el.querySelectorAll(`${prefixClass} > .beae-tab-items > .beae-tab-item`),contents=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content`),rightside=data.el.querySelectorAll(`${prefixClass} .beae-rightside`),accordions=data.el.querySelectorAll(`${prefixClass} > .beae-tab-contents > .beae-tab-content > .beae-accordion-title--mobile`),activeTab=window.outerWidth&&window.outerWidth<=768?data.activeTabMobile:data.activeTab,toggleImg=data.toggleImg,layout=data.layout,accordionMode=data.accordionMode;function resetActive(){tabs.forEach(f=>f.classList.remove("active")),contents.forEach(f=>f.classList.remove("active")),accordions.forEach(f=>f.classList.remove("active")),toggleImg&&rightside.forEach(f=>f.classList.remove("active")),contents.forEach(f=>{const b=f.querySelector(".beae-accordion-body").style;layout=="accordions"?b.maxHeight="0px":(b.transform="scaleY(0)",b.opacity="0")})}function setActive(f){tabs[f].classList.add("active"),contents[f].classList.add("active"),accordions[f].classList.add("active"),toggleImg&&rightside[f].classList.add("active");const b=contents[f].querySelector(".beae-accordion-body");if(b){const C=b.style;layout=="accordions"?C.maxHeight=data.mode.value=="builder"?"":b.scrollHeight+"px":(C.transform="scaleY(1)",C.transformOrigin="top center",C.opacity="1")}}function removeActive(f){tabs[f].classList.remove("active"),contents[f].classList.remove("active"),accordions[f].classList.remove("active"),toggleImg&&rightside[f].classList.remove("active");const b=contents[f].querySelector(".beae-accordion-body").style;layout=="accordions"?b.maxHeight="0px":(b.transform="scaleY(0)",b.opacity="0")}resetActive(),activeTab!=="none"&&accordionMode!="popup"&&setActive(activeTab),tabs.forEach((f,b)=>{f.addEventListener("click",()=>{resetActive(),setActive(b)})});const section=data.el.closest("section.beae-section");let sectionId="";section&&(sectionId=section.getAttribute("data-sectionid"));let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(f){extOptions={},console.error(f)}if(accordions.forEach((f,b)=>{f.addEventListener("click",()=>{if(accordionMode=="popup"&&data.mode.value!="builder"){const C=f.closest(".beae-tab-content");if(C){let m=document.createElement("div");m.innerHTML=`
                            <h3 class="beae-popup__content-title">${f.querySelector("span").innerHTML}</h3>
                            <div class="beae-popup__content-body ${data.id}">${C.querySelector(".beae-accordion-body").innerHTML}</div>
                            `,window.BeaePopupLibrary.createPopup(m,{layout:extOptions.layout?extOptions.layout:"right",width:extOptions.width?extOptions.width:"400px",layoutMobile:extOptions.layoutMobile?extOptions.layoutMobile:"bottom",sectionId})}}else accordionMode=="single"?(resetActive(),setActive(b)):f.classList.contains("active")?removeActive(b):setActive(b)})}),layout=="tabs"){const f=data.el.querySelector(".beae-tab-contents"),b=f.querySelectorAll(".beae-tab-content-wrp");let C=0,m=-1;b.forEach((S,B)=>{const k=S.offsetHeight;k>C&&(m=B,C=k)}),new ResizeObserver(()=>{f.style.setProperty("--beae-tabs-max-height",`${b[m].offsetHeight}px`)}).observe(b[m])} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-biqtvvkn: ', ex)
      };
    

      try {
        let argid = 'beae-f7nyysywblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-f7nyysyw',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-f7nyysyw');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-f7nyysyw: ', ex)
      };
    

      try {
        let argid = 'beae-9bnlxm3rblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-9bnlxm3r',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-9bnlxm3r');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-9bnlxm3r: ', ex)
      };
    

      try {
        let argid = 'beae-w7z43sozblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-w7z43soz',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-w7z43soz');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-w7z43soz: ', ex)
      };
    

      try {
        let argid = 'beae-3wsjnx6bblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-3wsjnx6b',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-3wsjnx6b');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-3wsjnx6b: ', ex)
      };
    

      try {
        let argid = 'beae-xkbh6z20section-featured-collection',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-xkbh6z20',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-xkbh6z20');
        args.el = args.els[0];
        ((a) => { var o;window.BeaeMoneyFormat&&(window.BeaeMoneyFormat=(o=a.el.querySelector(".beae-money-format"))==null?void 0:o.innerHTML);const n=a.el.closest(".beae-body--preview");if(a.mode.value=="live"){let r=a.el.querySelector(".beae-related-product-info");if(r){let s=r.getAttribute("section-id"),p=r.getAttribute("product-id");s&&p&&fetch(window.Shopify.routes.root+"recommendations/products?product_id="+p+"&section_id="+s+"&intent="+a.intent).then(c=>c.text()).then(c=>{const d=document.createElement("div");d.innerHTML=c;const l=d.querySelector("."+a.id);return new Promise(v=>{if(l){const y=l.querySelector(".beae-related-products-content"),g=a.el.querySelector(".beae-related-products-content");y&&g&&(g.innerHTML=y.innerHTML);const h=g==null?void 0:g.querySelectorAll(".beae-recommendation-item");if(h!=null&&h.length)for(let u=0;u<h.length;u++){const f=document.createElement("form");f.innerHTML=h[u].innerHTML,Array.from(h[u].attributes).forEach(b=>{f.setAttribute(b.name,b.value)}),f.setAttribute("method","post"),f.setAttribute("action","/cart/add"),h[u].replaceWith(f)}}v()})}).then(()=>{typeof window.handleSwatchForCardForm=="function"&&(window.handleEventFormProductCard(),window.handleSwatchForCardForm(a),window.BeaeSlider&&window.BeaeSlider(a))})}}else document.addEventListener("relatedReady",r=>{typeof window.handleSwatchForCardForm=="function"&&(window.handleEventFormProductCard(),window.handleSwatchForCardForm(a))});n&&setTimeout(()=>{typeof window.handleEventFormProductCard=="function"&&(window.handleEventFormProductCard(),window.handleSwatchForCardForm(a))},100),setTimeout(()=>{typeof(a==null?void 0:a.promotionPosition)=="number"&&t(a==null?void 0:a.promotionPosition)},100);function t(r){const s=a.el.querySelector(".beae-slider-items");if(!s||a.mode.value!="live")return;const p=a.el.querySelector(".beae-promotion > *"),c=s.children;r>=c.length?s.appendChild(p):s.insertBefore(p,c[r]);const d=a.el.querySelector(".beae-promotion");d&&d.remove()} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-xkbh6z20: ', ex)
      };
    

      try {
        let argid = 'beae-xkbh6z20section-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-xkbh6z20',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-xkbh6z20');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-xkbh6z20: ', ex)
      };
    

      try {
        let argid = 'beae-6730qjy1block-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-6730qjy1',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-6730qjy1');
        args.el = args.els[0];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),z,R=window.innerWidth>=768&&M.autoHover;var V=H.querySelector(".beae-img-ratio-control"),L=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(V&&T){let O=function(I){let A=0,D;j(),R?H.onmouseover=function(W){q(W)}:I.onmousedown=function(W){q(W)},H.onmouseup=function(){Z()},I.ontouchstart=function(W){q(W)},H.ontouchend=function(){Z()};function j(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{z=T.offsetWidth})}).observe(T),I.style.left&&parseInt(I.style.left)}function q(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(I.style.left),A=1,H.onmousemove=function(Y){F(Y)},H.ontouchmove=function(Y){F(Y)}}function Z(){A=0,check=!0}function F(W){if(A==0)return!1;D=U(W),D<0&&(D=0),D>100&&(D=100),G(D)}function U(W){const Y=H.getBoundingClientRect(),oe=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-Y.left;return Math.max(0,Math.min(100,Math.round(oe*100/z)))}function G(W){I.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,L.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};V&&T&&O(V),window.addEventListener("resize",function(){V&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{z=T.offsetWidth})}).observe(T),O(V))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let z=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(z)return z.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-6730qjy1: ', ex)
      };
    

      try {
        let argid = 'beae-ram9wgkhblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ram9wgkh',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ram9wgkh');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ram9wgkh: ', ex)
      };
    

      try {
        let argid = 'beae-ieuohdpkblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ieuohdpk',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ieuohdpk');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ieuohdpk: ', ex)
      };
    

      try {
        let argid = 'beae-q0e4dqzoblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-q0e4dqzo',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-q0e4dqzo');
        args.el = args.els[0];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),z,R=window.innerWidth>=768&&M.autoHover;var V=H.querySelector(".beae-img-ratio-control"),L=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(V&&T){let O=function(I){let A=0,D;j(),R?H.onmouseover=function(W){q(W)}:I.onmousedown=function(W){q(W)},H.onmouseup=function(){Z()},I.ontouchstart=function(W){q(W)},H.ontouchend=function(){Z()};function j(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{z=T.offsetWidth})}).observe(T),I.style.left&&parseInt(I.style.left)}function q(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(I.style.left),A=1,H.onmousemove=function(Y){F(Y)},H.ontouchmove=function(Y){F(Y)}}function Z(){A=0,check=!0}function F(W){if(A==0)return!1;D=U(W),D<0&&(D=0),D>100&&(D=100),G(D)}function U(W){const Y=H.getBoundingClientRect(),oe=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-Y.left;return Math.max(0,Math.min(100,Math.round(oe*100/z)))}function G(W){I.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,L.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};V&&T&&O(V),window.addEventListener("resize",function(){V&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{z=T.offsetWidth})}).observe(T),O(V))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let z=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(z)return z.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-q0e4dqzo: ', ex)
      };
    

      try {
        let argid = 'beae-1u39w8p7block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-1u39w8p7',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-1u39w8p7');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-1u39w8p7: ', ex)
      };
    

      try {
        let argid = 'beae-re1qlqyyblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-re1qlqyy',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-re1qlqyy');
        args.el = args.els[0];
        ((M) => { var P;if(M.el){if(M.shape){const O=M.el.closest(".beae-slider-items");O&&!O.hasAttribute("data-svg")&&(O==null||O.closest(".beae-section").insertAdjacentHTML("beforeend",`
                            <svg width="0" height="0" style="height: 0px !important; width: 0px !important; opacity: 0 !important;">
                            <defs>
                                <clipPath id="shape-${M.id}" clipPathUnits="objectBoundingBox">
                                ${M.shape.clipPath}
                                </clipPath>
                            </defs>
                            </svg>
                        `),O.setAttribute("data-svg","true"))}let H=M.el.querySelector(".beae-image-content-position"),z,R=window.innerWidth>=768&&M.autoHover;var V=H.querySelector(".beae-img-ratio-control"),L=H.querySelector(".beae-img-comp-container"),T=H.querySelector(".beae-img-comp-container--second");if(V&&T){let O=function(I){let A=0,D;j(),R?H.onmouseover=function(W){q(W)}:I.onmousedown=function(W){q(W)},H.onmouseup=function(){Z()},I.ontouchstart=function(W){q(W)},H.ontouchend=function(){Z()};function j(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{z=T.offsetWidth})}).observe(T),I.style.left&&parseInt(I.style.left)}function q(W){check=!1,W.preventDefault(),W.clientX?W.clientX:W.touches[0].clientX,parseInt(I.style.left),A=1,H.onmousemove=function(Y){F(Y)},H.ontouchmove=function(Y){F(Y)}}function Z(){A=0,check=!0}function F(W){if(A==0)return!1;D=U(W),D<0&&(D=0),D>100&&(D=100),G(D)}function U(W){const Y=H.getBoundingClientRect(),oe=(W.changedTouches?W.changedTouches[0].clientX:W.clientX)-Y.left;return Math.max(0,Math.min(100,Math.round(oe*100/z)))}function G(W){I.style.left=W+"%",T.style.clipPath=`polygon(${W}% 0%, ${W}% 100%, 100% 100%, 100% 0)`,L.style.clipPath=`polygon(0% 100%, 0% 0%, ${W}% 0%, ${W}% 100%)`}};V&&T&&O(V),window.addEventListener("resize",function(){V&&T&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{z=T.offsetWidth})}).observe(T),O(V))})}}let N=(P=M.el)==null?void 0:P.querySelector("a.beae-x-image"),E=N==null?void 0:N.getAttribute("href");N&&M.mode.value!=="builder"&&(E!=null&&E.includes("#"))&&N.addEventListener("click",H=>{let z=document.querySelector(E+","+(E==null?void 0:E.replace("#",".")));if(z)return z.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),H.preventDefault(),!1}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-re1qlqyy: ', ex)
      };
    

      try {
        let argid = 'beae-dikjtvgxblock-share',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-dikjtvgx',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-dikjtvgx');
        args.el = args.els[0];
        ((l) => { const v=window.location.href;if(l.type=="label_with_icon"){if(l.mode.value=="live"){let g=function(u){switch(u){case"facebook":return"https://www.facebook.com/sharer/sharer.php?u=";case"twitter":return"https://twitter.com/intent/tweet?url=";case"linkedIn":return"https://www.linkedin.com/shareArticle?mini=true&url=";case"pinterest":return"https://pinterest.com/pin/create/button/?url=";case"reddit":return"https://reddit.com/submit?url=";case"skype":return"https://web.skype.com/share?url=";case"telegram":return"https://t.me/share/url?url=";case"whatsApp":return"https://api.whatsapp.com/send/?phone&text=";case"email":return"mailto:?&subject=&cc=&bcc=&body=";default:return"#"}};const h=l.el.querySelectorAll(".beae-share-link");h.length>0&&h.forEach((u,f)=>{let b=u.getAttribute("type"),C="";C=g(b)+v,u.setAttribute("href",C)})}}else if(l.type=="copy_link"){const g=l.el.querySelector(".beae-share-wrp");g.onclick=()=>{window.navigator.clipboard.writeText(v),y()}}else{const g=l.el.querySelector(".beae-share-wrp"),h=l.el.querySelector(".beae-share-link-copy-link");if(h&&(h.innerHTML=v),navigator.share)g.addEventListener("click",()=>{navigator.share({url:v,title:document.title})});else{const u=l.el.querySelector(".beae-share--container");l.el.querySelector(".beae-share-link-copy-btn").addEventListener("click",()=>{window.navigator.clipboard.writeText(v),y(),u.classList.remove("active")}),g.addEventListener("click",()=>{u.classList.toggle("active")}),document.addEventListener("click",function(b){u.contains(b.target)||u.classList.remove("active")})}}function y(){const g=l.el.querySelector(".beae-share--toast");g&&(g.classList.add("active"),setTimeout(()=>{g.classList.remove("active")},1e3))} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-dikjtvgx: ', ex)
      };
    

      try {
        let argid = 'beae-qaq7mu91section-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-qaq7mu91',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-qaq7mu91');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-qaq7mu91: ', ex)
      };
    

      try {
        let argid = 'beae-sbeatwv0block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-sbeatwv0',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-sbeatwv0');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-sbeatwv0: ', ex)
      };
    

      try {
        let argid = 'beae-f8e0l6c8block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-f8e0l6c8',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-f8e0l6c8');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-f8e0l6c8: ', ex)
      };
    

      try {
        let argid = 'beae-rfgionlnsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-rfgionln',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-rfgionln');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-rfgionln: ', ex)
      };
    

      try {
        let argid = 'beae-kxnlcunfblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-kxnlcunf',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-kxnlcunf');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-kxnlcunf: ', ex)
      };
    

      try {
        let argid = 'beae-4r0z72r8block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-4r0z72r8',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-4r0z72r8');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-4r0z72r8: ', ex)
      };
    

      try {
        let argid = 'beae-vnjhl803block-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-vnjhl803',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-vnjhl803');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-vnjhl803: ', ex)
      };
    

      try {
        let argid = 'beae-616f3zphsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-616f3zph',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-616f3zph');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-616f3zph: ', ex)
      };
    

      try {
        let argid = 'beae-fhppyjyssection-slide-show',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-fhppyjys',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-fhppyjys');
        args.el = args.els[0];
        ((h) => { window.BeaeSlider&&!h.noRunJs&&window.BeaeSlider(h) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-fhppyjys: ', ex)
      };
    

      try {
        let argid = 'beae-gh051bmmblock-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-gh051bmm',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-gh051bmm');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-gh051bmm: ', ex)
      };
    

      try {
        let argid = 'beae-1kbl8gboblock-textloop-0',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-1kbl8gbo',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-1kbl8gbo');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-1kbl8gbo: ', ex)
      };
    

      try {
        let argid = 'beae-gh051bmmblock-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-gh051bmm',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-gh051bmm');
        args.el = args.els[1];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-gh051bmm: ', ex)
      };
    

      try {
        let argid = 'beae-1kbl8gboblock-textloop-1',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-1kbl8gbo',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-1kbl8gbo');
        args.el = args.els[1];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-1kbl8gbo: ', ex)
      };
    

      try {
        let argid = 'beae-gh051bmmblock-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-gh051bmm',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-gh051bmm');
        args.el = args.els[2];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-gh051bmm: ', ex)
      };
    

      try {
        let argid = 'beae-1kbl8gboblock-textloop-2',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-1kbl8gbo',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-1kbl8gbo');
        args.el = args.els[2];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-1kbl8gbo: ', ex)
      };
    

      try {
        let argid = 'beae-gh051bmmblock-textloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-gh051bmm',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-gh051bmm');
        args.el = args.els[3];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-gh051bmm: ', ex)
      };
    

      try {
        let argid = 'beae-1kbl8gboblock-textloop-3',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-1kbl8gbo',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-1kbl8gbo');
        args.el = args.els[3];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-1kbl8gbo: ', ex)
      };
    

      try {
        let argid = 'beae-5j1cydg2section-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-5j1cydg2',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-5j1cydg2');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var r,l;let n=a.target;if(!n.classList.contains("beae-grid-carousel"))return;let s=Math.round((n.scrollLeft+n.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(n.offsetWidth*.8))+1;(r=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||r.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+s+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),n=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),s=[];window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection&&(window.innerWidth>=768?a&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a)&&s.push("desktop"):n&&window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n)&&s.push("mobile")),(a||n)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!s.includes("desktop")&&window.innerWidth>=768&&a){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);r&&(a.innerHTML=r.html,s.push("desktop"))}if(!s.includes("mobile")&&window.innerWidth<768&&n){const r=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,n);r&&(n.innerHTML=r.html,s.push("mobile"))}}})}t.el.querySelectorAll(".beae-text-highlight").forEach(a=>{new IntersectionObserver((s,r)=>{s.forEach(l=>{l.isIntersecting&&(l.target.querySelectorAll("path, line").forEach(c=>{c.style.strokeDasharray=parseFloat(c.getAttribute("data-dash-ratio")*l.target.offsetWidth*2)+"px, 999999px"}),r.unobserve(l.target))})},{root:document,rootMargin:"0px 0px -40%"}).observe(a)}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-5j1cydg2: ', ex)
      };
    

      try {
        let argid = 'beae-n2m2iv2tblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-n2m2iv2t',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-n2m2iv2t');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-n2m2iv2t: ', ex)
      };
    

      try {
        let argid = 'beae-b24xjboublock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-b24xjbou',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-b24xjbou');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-b24xjbou: ', ex)
      };
    

      try {
        let argid = 'beae-ku6dsuoobutton-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ku6dsuoo',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ku6dsuoo');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let s=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(s,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(s=>{s.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(s),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ku6dsuoo: ', ex)
      };
    

      try {
        let argid = 'beae-pauqtt6wblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-pauqtt6w',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-pauqtt6w');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-pauqtt6w: ', ex)
      };
    

      try {
        let argid = 'beae-0z55wfn7button-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-0z55wfn7',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-0z55wfn7');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let s=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(s,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(s=>{s.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(s),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-0z55wfn7: ', ex)
      };
    

      try {
        let argid = 'beae-1swga2foblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-1swga2fo',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-1swga2fo');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-1swga2fo: ', ex)
      };
    

      try {
        let argid = 'beae-1ot50hwfbutton-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-1ot50hwf',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-1ot50hwf');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let s=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(s,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(s=>{s.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(s),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-1ot50hwf: ', ex)
      };
    

      try {
        let argid = 'beae-m4immdumblock-text',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-m4immdum',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-m4immdum');
        args.el = args.els[0];
        ((P) => { var z;let H=(z=P.el)==null?void 0:z.querySelectorAll(".beae-x-text a");H==null||H.forEach(R=>{let O=R==null?void 0:R.getAttribute("href");R&&P.mode.value!=="builder"&&(O!=null&&O.includes("#"))&&R.addEventListener("click",I=>{let A=document.querySelector(O+","+(O==null?void 0:O.replace("#",".")));if(A)return A.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),I.preventDefault(),!1})}) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-m4immdum: ', ex)
      };
    

      try {
        let argid = 'beae-37tlilhvbutton-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-37tlilhv',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-37tlilhv');
        args.el = args.els[0];
        ((data) => { let buttonElm=data.el.querySelector("a.beae-button-js");buttonElm==null||buttonElm.addEventListener("click",e=>{var n,t;let extOptions={};if(data.extendOptions)try{eval("extOptions = "+data.extendOptions)}catch(o){extOptions={},console.error(o)}if(data.mode.value==="builder")return e.preventDefault(),!1;let selector=e.currentTarget.getAttribute("href");if(selector.indexOf("#")===0&&selector!=="#"){let o=document.querySelector(selector+","+selector.replace("#","."));if(o)return o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),e.preventDefault(),!1}if(data.type==="popup"){if(window.isPreviewTemplate){let s=data.el.querySelector(".beae-content-size-chart-preview");window.BeaePopupLibrary.createPopup(s,{id:data.id,...extOptions}),e.preventDefault();return}const o=window.createLoading(e.currentTarget);let r=(t=(n=window.BEAE_HELPER)==null?void 0:n.routes)==null?void 0:t.root_url;return window.BeaePopupLibrary.lightbox({id:data.id,url:(r!=="/"?r:"")+((data==null?void 0:data.url)??"").replace("/popup/","/?view=beae-"),...extOptions}).then(s=>{s.querySelector(".beae-product-form-next")&&window.handleEventFormProductCard(s),o.remove()}),e.preventDefault(),!1}else if(data.type==="pages"&&data.lightbox){let o=data.pageContent.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");return window.isPreviewTemplate&&(o=data.el.querySelector(".beae-content-size-chart-preview")),window.BeaePopupLibrary.createPopup(o,{id:data.id,...extOptions}),e.preventDefault(),!1}}),data.type==="popup"&&data.lightbox&&new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(o.unobserve(r.target),r.target.click())})}).observe(buttonElm) })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-37tlilhv: ', ex)
      };
    }; if (window.BEAEBASE) {js_3OQGQBKJ()} else {window.BEAEPAGEJS.push(js_3OQGQBKJ)} })(); 