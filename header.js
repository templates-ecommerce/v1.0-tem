var header = '<div id="ec-overlay"><span class="loader_img"></span></div><header class="ec-header"> <div class="header-top d-lg-none"> <div class="container"> <div class="row"> <div class="col d-lg-none "> <div class="ec-header-bottons"> <div class="ec-header-user dropdown"> <button class="dropdown-toggle" data-toggle="tooltip" title="My account" href="#" onclick="account()"><img src="https://v1.eralive.net/assets/images/icons/user.svg" class="svg_img header_svg" alt=""></button> </div><a href="#ec-side-cart" class="ec-header-btn ec-side-toggle"> <div class="header-icon"><img src="https://v1.eralive.net/assets/images/icons/cart.svg" class="svg_img header_svg" alt=""></div><span class="ec-header-count cart-count-lable p_count">0</span> </a> <a href="#ec-mobile-menu" class="ec-header-btn ec-side-toggle d-lg-none"> <img src="https://v1.eralive.net/assets/images/icons/menu.svg" class="svg_img header_svg" alt="icon"> </a> </div></div></div></div></div><div class="ec-header-bottom d-none d-lg-block"> <div class="container position-relative"> <div class="row"> <div class="ec-flex"> <div class="align-self-center"> <div class="header-logo"> <a href="{{site.BaseURL}}"><img src="{{site.Params.logo | absURL}}" style="height:34px;" height="34" alt="{{site.Title}}"/></a> </div></div><div class="align-self-center"> <div class="header-search"> <form class="ec-btn-group-form" action="#"> <input class="form-control myInput-hide myInput" id="myInput" placeholder="Enter Your Product Name..." type="text" style="display: none;"> <button class="submit myInput-hide" type="button" style="display: none;"><img src="https://v1.eralive.net/assets/images/icons/search.svg" class="svg_img header_svg" alt=""/></button> </form> </div></div><div class="align-self-center"> <div class="ec-header-bottons"> <div class="ec-header-user dropdown"> <button class="dropdown-toggle" data-toggle="tooltip" title="My account" href="#" onclick="account()"><img src="https://v1.eralive.net/assets/images/icons/user.svg" class="svg_img header_svg" alt=""/></button> </div><a href="#ec-side-cart" class="ec-header-btn ec-side-toggle"> <div class="header-icon"><img src="https://v1.eralive.net/assets/images/icons/cart.svg" class="svg_img header_svg" alt=""/></div><span class="ec-header-count cart-count-lable p_count">0</span> </a> </div></div></div></div></div></div><div class="ec-header-bottom d-lg-none"> <div class="container position-relative"> <div class="row "> <div class="col"> <div class="header-logo"> <a href="{{site.BaseURL}}"><img src="{{site.Params.logo | absURL}}" alt="Site Logo"/><img class="dark-logo" src="{{site.Params.logo | absURL}}" alt="Site Logo" style="display: none;"/></a> </div></div><div class="col"> <div class="header-search"> <form class="ec-btn-group-form" action="#"> <input class="form-control myInput-hide myInput" placeholder="Enter Your Product Name..." type="text" style="display: none;"> <button class="submit myInput-hide" type="submit" style="display: none;"><img src="https://v1.eralive.net/assets/images/icons/search.svg" class="svg_img header_svg" alt="icon"/></button> </form> </div></div></div></div></div><div id="ec-main-menu-desk" class="d-none d-lg-block sticky-nav"> <div class="container position-relative"> <div class="row"> <div class="col-md-12 align-self-center"> <div class="ec-main-menu"> <ul> <li><a href="{{site.BaseURL}}">{{with site.Params.Home}}{{.}}{{end}}</a></li>{{range site.Menus.main}}<li id="none{{.Name}}"><a href="{{.URL | absURL}}">{{.Name}}</a></li>{{end}}</ul> </div></div></div></div></div><div id="ec-mobile-menu" class="ec-side-cart ec-mobile-menu"> <div class="ec-menu-title"> <span class="menu_title">My Menu</span> <button class="ec-close">×</button> </div><div class="ec-menu-inner"> <div class="ec-menu-content"> <ul> <li><a href="{{site.BaseURL}}">{{with site.Params.Home}}{{.}}{{end}}</a></li>{{range site.Menus.main}}<li id="none{{.Name}}"><a href="{{.URL | absURL}}">{{.Name}}</a></li>{{end}}</ul> </div></div></div></header><style>.titlealign{vertical-align: middle; text-overflow: ellipsis; white-space: nowrap; overflow: hidden;}</style><body class="d-flex flex-column vh-100">'
$( document ).ready(function() {
    $('#headertag').append(header);
});
