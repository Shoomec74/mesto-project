(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/plus-cohort-9",headers:{authorization:"90146057-36cb-4eda-a113-616a7fa7d2dd","Content-Type":"application/json"}},t=function(){return fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))},n=document.querySelector(".button_target_edit-profile"),o=document.querySelector(".button_target_add-card"),r=(document.querySelector(".button_target_save"),document.querySelector(".button_target_edit-avatar")),c=(document.querySelector(".popup"),document.querySelectorAll(".popup")),a=document.querySelector(".popup_for_edit-avatar"),u=document.querySelector(".popup_for_edit-profile"),s=document.querySelector(".popup_for_add-place"),i=document.querySelector(".popup_for_big-picture"),l=document.querySelector(".popup__image"),d=document.querySelector(".popup__image-name"),f=(document.querySelector(".popup_for_error"),document.querySelector(".profile__info-username")),_=document.querySelector(".profile__info-about-user"),p=document.querySelector(".profile__avatar"),m=(document.querySelector(".form"),document.querySelector("#form-edit-profile")),v=document.querySelector("#form-add-place"),g=document.querySelector("#form-edit-avatar"),h=(document.querySelector("#form-error"),document.querySelector(".form__input-name")),y=document.querySelector(".form__input-about"),S=document.querySelector(".form__input-place"),b=document.querySelector(".form__input-link"),q=document.querySelector(".form__input-avatar"),k=document.querySelector(".places__list"),C={formSelector:".popup__form",inputSelector:".form__input",submitButtonSelector:".button_target_save",inactiveButtonClass:"button_disabled",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active"};function L(e){"Escape"===e.key&&x(document.querySelector(".popup_status_opened"))}var E=function(e){document.addEventListener("keydown",L),e.classList.add("popup_status_opened")},x=function(e){document.removeEventListener("keydown",L),e.classList.remove("popup_status_opened")},j=function(e){e.querySelector(".button_target_save").classList.add(C.inactiveButtonClass)};function A(e,t){e?(t.querySelector(".button_target_save").classList.add("button_loading"),t.querySelector(".button_target_save").textContent="Сохранение..."):(t.querySelector(".button_target_save").classList.remove("button_loading"),"form-edit-profile"===t.name?t.querySelector(".button_target_save").textContent="Сохранить":"form-edit-avatar"===t.name?t.querySelector(".button_target_save").textContent="Обновить":"form-add-place"===t.name&&(t.querySelector(".button_target_save").textContent="Добавить"))}var P,N=function(n,o,r,c,a){var u=document.querySelector("#place").content.querySelector(".place").cloneNode(!0),s=u.querySelector(".place__image"),f=u.querySelector(".place__count-like");return u.querySelector(".place__name").textContent=n,s.setAttribute("src",o),s.setAttribute("alt",n),function(e,t){var n=57;if(void 0!==t){if(0!==t.length)switch(t.length.toString().length){case 2:e.textContent=t.length,n-=4,e.style.left="".concat(n,"px");break;case 3:e.textContent=t.length,n-=8,e.style.left="".concat(n,"px");break;case 4:e.textContent=t.length,n-=12,e.style.left="".concat(n,"px");break;default:e.textContent=t.length}else 0===t.length&&e.classList.add("place__count-like_unvisible");e.textContent=t.length}}(f,r),t().then((function(t){t._id===c?u.querySelector(".button_target_delete").addEventListener("click",(function(t){var n;(n=a,fetch("".concat(e.baseUrl,"/cards/").concat(n),{method:"DELETE",headers:e.headers})).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)})),t.target.closest(".place").remove()})):u.querySelector(".button_target_delete").style.display="none"})).catch((function(e){console.log(e)})),r.length>0&&t().then((function(e){r.forEach((function(t){e._id===t._id&&u.querySelector(".button_target_like").classList.toggle("button_target_like-active")}))})),u.querySelector(".place__image").addEventListener("click",(function(e){l.src=e.target.src,l.alt=e.target.alt,d.textContent=l.alt,E(i)})),u.querySelector(".button_target_like").addEventListener("click",(function(t){var n;t.target.className.includes("button_target_like-active")?function(t){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(t),{method:"DELETE",headers:e.headers})}(a).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){0===e.likes.length&&(f.classList.add("place__count-like_unvisible"),t.target.classList.remove("button_target_like-active")),f.textContent=e.likes.length,t.target.classList.remove("button_target_like-active")})).catch((function(e){console.log(e)})):(n=a,fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:e.headers})).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){t.target.classList.add("button_target_like-active"),f.classList.remove("place__count-like_unvisible"),f.textContent=e.likes.length})).catch((function(e){console.log(e)}))})),u},U=function(e,t){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?t.classList.remove(C.inactiveButtonClass):t.classList.add(C.inactiveButtonClass)},T=function(e){e.className.includes("popup_for_big-picture")||(e.querySelector(".form").reset(),e.querySelectorAll(".form__input-error").forEach((function(e){e.textContent="",e.classList.remove(C.errorClass)})),e.querySelectorAll(C.inputSelector).forEach((function(e){e.classList.remove(C.inputErrorClass)})))};t().then((function(e){f.textContent=e.name,_.textContent=e.about,p.setAttribute("src","".concat(e.avatar))})).catch((function(e){console.log(e)})),fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){var t;t=k,e.forEach((function(e){t.append(N(e.name,e.link,e.likes,e.owner._id,e._id))}))})).catch((function(e){console.log(e)})),c.forEach((function(e){return e.addEventListener("click",(function(t){t.target.className.includes("button_target_closed")?x(e):"popup__heading"===t.target.className||"popup__image"===t.target.className?t.stopPropagation():t.target.className.includes("popup")&&x(e)}))})),g.addEventListener("submit",(function(t){var n;t.preventDefault(),A(!0,t.target),(n=q.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:n})})).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){p.setAttribute("src","".concat(e.avatar))})).catch((function(e){console.log(e)})),A(!1,t.target),x(a),t.currentTarget.reset(),j(t.target)})),m.addEventListener("submit",(function(t){A(!0,t.target),t.preventDefault(),function(t,n){return fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:t,about:n})})}(h.value,y.value).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){f.textContent=e.name,_.textContent=e.about})).catch((function(e){console.log(e)})),A(!1,t.target),x(u),j(t.target)})),v.addEventListener("submit",(function(t){var n,o;t.preventDefault(),A(!0,t.target),(n=S.value,o=b.value,fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:n,link:o})})).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){k.prepend(N(e.name,e.link,e.likes,e.owner._id,e._id))})).catch((function(e){console.log(e)})),A(!1,t.target),x(s),t.currentTarget.reset(),j(t.target)})),n.addEventListener("click",(function(){T(u),h.value=f.textContent,y.value=_.textContent,E(u)})),o.addEventListener("click",(function(){T(s),E(s)})),r.addEventListener("click",(function(){T(a),E(a)})),P=C,Array.from(document.querySelectorAll(P.formSelector)).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e){var t=Array.from(e.querySelectorAll(C.inputSelector)),n=e.querySelector(C.submitButtonSelector);U(t,n),t.forEach((function(o){o.addEventListener("input",(function(){(function(e,t){t.validity.valid?function(e,t){t.classList.remove(C.inputErrorClass);var n=e.querySelector(".".concat(t.id,"-error"));n.textContent="",n.classList.remove(C.errorClass)}(e,t):function(e,t,n){t.classList.add(C.inputErrorClass);var o=e.querySelector(".".concat(t.id,"-error"));o.textContent=n,o.classList.add(C.errorClass)}(e,t,t.validationMessage)})(e,o),U(t,n)}))}))}(e)}))})();