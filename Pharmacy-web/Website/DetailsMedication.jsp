<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="zxx">

<head>
    <meta charset="UTF-8">
    <meta name="description" content="Ogani Template">
    <meta name="keywords" content="Ogani, unica, creative, html">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>PharmaNearMe</title>

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

    <!-- Header Section End -->

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
    <section class="breadcrumb-section set-bg" data-setbg="Website/img/Couverture4.png">
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
           <form action="AjouterPanier.ph" method="post">
            <div class="row">
                <div class="col-lg-6 col-md-6">
                    <div class="product__details__pic">
                        <div class="product__details__pic__item">
                            <img class="product__details__pic__item--large"
                                src="Website/img/product/${Med.image}" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="product__details__text">
                        <h3>${Med.name}</h3>
                        <div class="product__details__rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-half-o"></i>
                        </div>
                        <div class="product__details__price">${Med.price} MAD</div>
                        <p>${Med.description}</p>
                        <div class="product__details__quantity">
                            <div class="quantity">
                                <div class="pro-qty">
                                    <input type="text" id="Qte" name="Qte" value="1">
                                </div>
                            </div>
                        </div>
                        <input type="hidden" value="${Med.getId_medication()}" id="IdMed" name="IdMed">
                        <button type="submit" class="primary-btn">ADD TO CARD</button>
                        <a href="#" class="heart-icon"><span class="icon_heart_alt"></span></a>
                        <ul>
                            <li><b>Availability</b> <span>In Stock</span></li>
                            <li><b>Share on</b>
                                <div class="share">
                                    <a href="#"><i class="fa fa-facebook"></i></a>
                                    <a href="#"><i class="fa fa-twitter"></i></a>
                                    <a href="#"><i class="fa fa-instagram"></i></a>
                                    <a href="#"><i class="fa fa-pinterest"></i></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
              </form>
        </div>
    </section>
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