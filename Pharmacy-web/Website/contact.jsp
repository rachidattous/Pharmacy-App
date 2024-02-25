<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="zxx">

<head>
    <meta charset="UTF-8">
    <meta name="description" content="Ogani Template">
    <meta name="keywords" content="Ogani, unica, creative, html">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Pharma Near Me</title>

    <!-- Google Font -->
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;900&display=swap" rel="stylesheet">

    <!-- Css Styles -->
    <link rel="stylesheet" href="Website/css/bootstrap.min.css" type="text/css">
    <link rel="stylesheet" href="Website/css/font-awesome.min.css" type="text/css">
    <link rel="stylesheet" href="Website/css/elegant-icons.css" type="text/css">
    <link rel="stylesheet" href="Website/css/nice-select.css" type="text/css">
    <link rel="stylesheet" href="Website/css/jquery-ui.min.css" type="text/css">
    <link rel="stylesheet" href="Website/css/owl.carousel.min.css" type="text/css">
    <link rel="stylesheet" href="Website/css/slicknav.min.css" type="text/css">
    <link rel="stylesheet" href="Website/css/style.css" type="text/css">
</head>

<body>
                                        <%@include file="Header.jsp" %>
    <!-- Hero Section Begin -->
    <section class="hero hero-normal">
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="hero__categories">
                        <div class="hero__categories__all">
                            <i class="fa fa-bars"></i>
                            <span>All Categories</span>
                        </div>
                        <ul>
                            <li><a href="#">Rhume / nez bouché</a></li>
                            <li><a href="#">maux de bouche</a></li>
                            <li><a href="#">Premiers soins</a></li>
                            <li><a href="#">Dermatologie / infections</a></li>
                            <li><a href="#">Digestion / troubles intestinaux</a></li>
                            <li><a href="#">Inflammation des muscles </a></li>
                            <li><a href="#">Nausées / vomissements</a></li>
                            <li><a href="#">Ophtalmologie / auriculaires</a></li>
                            <li><a href="#">Anti-tabac / arrêter de fumer</a></li>
                            <li><a href="#">Mal de gorge</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-9">
                    <div class="hero__search">
                        <div class="hero__search__form">
                           <form action="searchpharmacy.ph" method="post">
                                <div class="hero__search__categories">
                                    All Pharmacy
                                    <span class="arrow_carrot-down"></span>
                                </div>
                                <input name="motcle" id="motcle" type="text" placeholder="Search an pharmacy">
                                <button type="submit" class="site-btn">SEARCH</button>
                            </form>
                        </div>
                        <div class="hero__search__phone">
                            <div class="hero__search__phone__icon">
                                <i class="fa fa-phone"></i>
                            </div>
                            <div class="hero__search__phone__text">
                                <h5>+21277485186</h5>
                                <span>support 24/7 time</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Hero Section End -->

    <!-- Breadcrumb Section Begin -->
    <section class="breadcrumb-section set-bg" data-setbg="Website/img/Couverture5.png">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="breadcrumb__text">
                        <h2>Contact Us</h2>
                        <div class="breadcrumb__option">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Breadcrumb Section End -->
    <!-- Contact Section Begin -->
    <section class="contact spad">
        <div class="container">
               <c:if test="${not empty msg}">
                      <div class="alert alert-success center" role="alert">${msg}</div>
               </c:if>
            <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-6 text-center">
                    <div class="contact__widget">
                        <span class="icon_phone"></span>
                        <h4>Phone</h4>
                        <p>+21277485186</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6 text-center">
                    <div class="contact__widget">
                        <span class="icon_pin_alt"></span>
                        <h4>Address</h4>
                        <p>National School Of Applied Sciences Agadir</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6 text-center">
                    <div class="contact__widget">
                        <span class="icon_clock_alt"></span>
                        <h4>Open time</h4>
                        <p>24/7 time</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6 text-center">
                    <div class="contact__widget">
                        <span class="icon_mail_alt"></span>
                        <h4>Email</h4>
                        <p>Pharmanearme@pharma.ph</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Contact Section End -->

    <!-- Map Begin -->
    <div class="map">
<div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=1500&amp;height=450&amp;hl=en&amp;q=ecole nationale des science appliquee agadir &amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://www.fridaynightfunkin.net/friday-night-funkin-mods-fnf-play-online/">FNF Mods</a></div><style>.mapouter{position:relative;text-align:right;width:100%;height:450px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:450px;}.gmap_iframe {height:450px!important;}</style></div>
    </div>
    <!-- Map End -->

    <!-- Contact Form Begin -->
    <div class="contact-form spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="contact__form__title">
                        <h2>Leave Message</h2>
                    </div>
                </div>
            </div>
            <form action="SendMessage.ph" method="post">
                <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <input id="name" name="name" type="text" placeholder="Your name">
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <input id="email" name="email" type="enail" placeholder="Your Email">
                    </div>
                    <div class="col-lg-12 text-center">
                        <textarea id="message" name="message" placeholder="Your message"></textarea>
                        <button type="submit" class="site-btn">SEND MESSAGE</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <!-- Contact Form End -->
                                     <%@include file="Footer.jsp" %>
    <!-- Js Plugins -->
    <script src="Website/js/jquery-3.3.1.min.js"></script>
    <script src="Website/js/bootstrap.min.js"></script>
    <script src="Website/js/jquery.nice-select.min.js"></script>
    <script src="Website/js/jquery-ui.min.js"></script>
    <script src="Website/js/jquery.slicknav.js"></script>
    <script src="Website/js/mixitup.min.js"></script>
    <script src="Website/js/owl.carousel.min.js"></script>
    <script src="Website/js/main.js"></script>



</body>

</html>