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
                            <li><a href="Medbycat.ph?cat=Rhume">Rhume / nez bouché</a></li>
                            <li><a href="Medbycat.ph?cat=maux de bouche">maux de bouche</a></li>
                            <li><a href="Medbycat.ph?cat=Premiers soins">Premiers soins</a></li>
                            <li><a href="Medbycat.ph?cat=infections">Dermatologie / infections</a></li>
                            <li><a href="Medbycat.ph?cat=Digestion">Digestion / troubles intestinaux</a></li>
                            <li><a href="Medbycat.ph?cat=Inflammation des muscles">Inflammation des muscles</a></li>
                            <li><a href="Medbycat.ph?cat=vomissements">Nausées / vomissements</a></li>
                            <li><a href="Medbycat.ph?cat=auriculaires">Ophtalmologie / auriculaires</a></li>
                            <li><a href="Medbycat.ph?cat=Anti-tabac">Anti-tabac / arrêter de fumer</a></li>
                            <li><a href="Medbycat.ph?cat=Mal de gorge">Mal de gorge</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-9">
                    <div class="hero__search">
                        <div class="hero__search__form">
                            <form action="searchmedication.ph" method="post">
                                <div class="hero__search__categories">
                                    All Categories
                                    <span class="arrow_carrot-down"></span>
                                </div>
                                <input name="motcle" id="motcle" type="text" placeholder="Search an medication?">
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
                        <h2></h2>
                        <div class="breadcrumb__option">
                            <a href="./index.html"></a>
                            <a href="./index.html"></a>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Breadcrumb Section End -->

    <!-- Product Details Section Begin -->
    <section class="product-details spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6">
                    <div class="product__details__pic">
                        <div class="product__details__pic__item">
                            <img class="product__details__pic__item--large"
                                src="Website/img/Pharmacy.jpg" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="product__details__text">
                        <h3>${Ph.name}</h3>
                        <div class="product__details__rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-half-o"></i>
                        </div>
                        <ul>
                            <li><b>Address</b> <span>${Ph.address }</span></li>
                            <li><b>Email</b> <span>${Ph.email }</span></li>
                            <li><b>Phone</b> <span>${Ph.phone }</span></li>
                            <li><b>Responsible</b> <span>${Ph.responsible }</span></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="product__details__tab">
                        <ul class="nav nav-tabs" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" data-toggle="tab" href="#tabs-1" role="tab"
                                    aria-selected="true">Localisation</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#tabs-2" role="tab"
                                    aria-selected="false">Medication</a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane active" id="tabs-1" role="tabpanel">
                                <div class="product__details__tab__desc">
                                    <p>
                                    <div class="mapouter">
                                    <div class="gmap_canvas">
                                    <iframe width="1180" height="350" id="gmap_canvas" src="https://maps.google.com/maps?q=agadir ${Ph.name}&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                                    </iframe>
                                    <a href="https://fmovies-online.net">fmovies</a>
                                    <br>
                                    <style>
                                    .mapouter{position:relative;text-align:right;height:350px;width:1180px;}
                                    </style>
                                    <a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
                                    <style>
                                    .gmap_canvas {overflow:hidden;background:none!important;height:350px;width:1180px;}
                                    </style>
                                    </div>
                                    </div>
                                    </p>
                                </div>
                            </div>
                            <div class="tab-pane" id="tabs-2" role="tabpanel">
                                <div class="product__details__tab__desc">
                                       <div class="row">
                                          <c:forEach items="${Med}" var="Med">
                                          <div class="col-lg-3 col-md-4 col-sm-6">
                                          <div class="product__item">
                                          <div class="product__item__pic set-bg" data-setbg="Website/img/product/${Med.image }">
                                          <ul class="product__item__pic__hover">
                                             <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                             <li><a href="AjouterPanier.ph?IdMed=${Med.id_medication}"><i class="fa fa-shopping-cart"></i></a></li>
                                             <li><a href="DetailMedication.ph?IdMed=${Med.id_medication}"><i class="fa fa-arrow-right"></i></a></li>
                                          </ul>
                                          </div>
                                          <div class="product__item__text">
                                          <h6><a href="#">${Med.name}</a></h6>
                                          <h5>${Med.price} MAD</h5>
                                         </div>
                                         </div>
                                         </div>
                                         </c:forEach>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Product Details Section End -->
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