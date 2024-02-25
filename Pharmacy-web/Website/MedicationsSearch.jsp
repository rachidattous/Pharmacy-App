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
                            <form action="searchmedication.ph" method="post">
                                <div class="hero__search__categories">
                                    All Categories
                                    <span class="arrow_carrot-down"></span>
                                </div>
                                <input name="motcle" id="motcle"  type="text" placeholder="What do yo u need?">
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
                        <h2>search results</h2>
                        <div class="breadcrumb__option">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="product spad">
        <div class="container"> 
                    <c:if test="${not empty Message}">
                      <h5 align="center">${Message}</h5>
                   </c:if>
                    <div class="row">
                    <c:forEach items="${medications}" var="Med">
                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <div class="product__item">
                                <div class="product__item__pic set-bg" data-setbg="Website/img/product/${Med.image}">
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
    </section>
    <!-- Product Section End -->

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