var _f = (el) => {
  if (document.querySelectorAll(el)) 
    return document.querySelectorAll(el);
}
var _c = (el, fn) => {
  if (document.querySelectorAll(el).length > 0) 
    document.querySelectorAll(el).forEach(e => e.addEventListener('click', fn));
};
var _r = (u, m, c) => {
  var h = new XMLHttpRequest();
  h.open(m, u);
  h.onreadystatechange = () => {
    if (h.readyState == 4 && h.status == 200) c(JSON.parse(h.responseText))
  };
  h.send();
}
_c('[data-track-call]', (e) => {
  e.preventDefault();
  let tolink = e.target;
  let mid = e.target.getAttribute('data-merchant') ? e.target.getAttribute('data-merchant') : _f('[data-merchant]')[0].getAttribute('data-merchant');
  _r('https://ohmygrill.pk/admin/ajax/?action=menuRestaurantTel&currentController=store&tbl=menuRestaurantTel&merchant_id=' + mid, 'GET', (r) => {
    if (r.code == 1)
      if (tolink.href) location.href = tolink.href
  })
})