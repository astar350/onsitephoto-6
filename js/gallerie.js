document.addEventListener('DOMContentLoaded', function(event)
{
   var headerMenu_dropdownToggle = document.querySelectorAll('#headerMenu .dropdown-toggle');
   headerMenu_dropdownToggle.forEach(item => 
   {
      var dropdown = new bootstrap.Dropdown(item, {popperConfig:{placement:item.getAttribute('data-bs-placement')}});
   });
   var headerMenu_dropdown = document.querySelectorAll('#headerMenu .dropdown');
   headerMenu_dropdown.forEach(item => 
   {
      item.addEventListener('shown.bs.dropdown', function(e)
      {
         e.currentTarget.classList.add('show');
      });
      item.addEventListener('hidden.bs.dropdown', function(e)
      {
         e.currentTarget.classList.remove('show');
      });
   });
   document.addEventListener('click', function (e)
   {
      var isChildOfDropdownMenu = false;
      var target = e.target;
      while (target !== null)
      {
         if (target.classList && target.classList.contains('headerMenu-navbar-collapse') && target.classList.contains('show'))
         {
            isChildOfDropdownMenu = true;
            break;
         }
         target = target.parentNode;
      }
      if (isChildOfDropdownMenu)
      {
         if (e.target.tagName.toLowerCase() === 'a' && !e.target.classList.contains('dropdown-toggle'))
         {
            const dropdownMenu = document.querySelector('.headerMenu-navbar-collapse');
            if (dropdownMenu)
            {
               const collapseInstance = bootstrap.Collapse.getInstance(dropdownMenu);
               if (collapseInstance)
               {
                  collapseInstance.hide();
               }
            }
         }
      }
   });
const gallerygallery24PhotoGallery = document.querySelector('#gallery24PhotoGallery .thumbnails');
function layoutgallery24PhotoGallery()
{
   const items = gallerygallery24PhotoGallery.querySelectorAll('#gallery24PhotoGallery .thumbnails .thumbnail');
   const cw = gallerygallery24PhotoGallery.clientWidth;
   const targetRowHeight = Math.max(150, Math.min(250, cw / 10));
   items.forEach(item => 
   {
      const img = item.querySelector('img');
      const apply = () => 
      {
         if (!img.naturalWidth || !img.naturalHeight) return;
         const ratio = img.naturalWidth / img.naturalHeight;
         const cs = getComputedStyle(img);
         const vBorder = (parseFloat(cs.borderTopWidth) || 0) + (parseFloat(cs.borderBottomWidth) || 0);
         const hBorder = (parseFloat(cs.borderLeftWidth) || 0) + (parseFloat(cs.borderRightWidth) || 0);
         const figureWidth = Math.max(0, Math.round(ratio * (targetRowHeight - vBorder) + hBorder));
         item.style.width = figureWidth + 'px';
         item.style.flexGrow = ratio;
      };
      if (img.complete && img.naturalWidth) apply();
      else img.addEventListener('load', apply, { once: true });
   });
}
requestAnimationFrame(layoutgallery24PhotoGallery);
const rogallery24PhotoGallery = new ResizeObserver(layoutgallery24PhotoGallery);
rogallery24PhotoGallery.observe(gallerygallery24PhotoGallery);
window.addEventListener('resize', layoutgallery24PhotoGallery);
});
$(document).ready(function()
{
   $("a[href*='#headerLayoutGrid1']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_headerLayoutGrid1').offset().top }, 600, 'easeInSine');
   });
   function skrollrInit()
   {
      skrollr.init({forceHeight: false, mobileCheck: function() { return false; }, smoothScrolling: false});
   }
   skrollrInit();
   $("a[data-rel='gallery24PhotoGallery']").attr('rel', 'gallery24PhotoGallery');
   $("#gallery24PhotoGallery").magnificPopup({delegate:'a', type:'image', zoom: { enabled: true, duration: 300, easing: 'ease-in-out' }, gallery: {enabled: true, navigateByImgClick: true}});
   $('#gallery24PhotoGallery-filter a').click(function()
   {
      var value = $(this).data('filter-tag');
      if (value == 'all')
      {
         $('#gallery24PhotoGallery .thumbnail').show('scale', 500);
      }
      else
      {
         var filter = "[data-filter-tag='" + value + "']";
         $('#gallery24PhotoGallery .thumbnail:visible').not(filter).hide('scale', 500);
         $('#gallery24PhotoGallery .thumbnail').filter(filter).show('scale', 500);
      }
      $('#gallery24PhotoGallery-filter a').removeClass('active');
      $(this).addClass('active');
   });
});
