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
                        <h2>Checkout</h2>
                        <div class="breadcrumb__option">
                         
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Breadcrumb Section End -->

    <!-- Checkout Section Begin -->
    <section class="checkout spad">
        <div class="container">
            <div class="checkout__form">
                <h4>Billing Details</h4>
                <form action="Order.ph" method="post">
                    <div class="row">
                        <div class="col-lg-8 col-md-6">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="checkout__input">
                                        <p>Fist Name<span>*</span></p>
                                        <input id="nom" name="nom" type="text" required>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="checkout__input">
                                        <p>Last Name<span>*</span></p>
                                        <input id="penom" name="prenom" type="text" required >
                                    </div>
                                </div>
                            </div>
                            <div class="checkout__input">
                                <p>Address<span>*</span></p>
                                <input id="address" name="address" type="text" placeholder="Address" class="checkout__input__add" required >
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="checkout__input">
                                        <p>Phone<span>*</span></p>
                                        <input id="tel" name="tel" type="text" required >
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="checkout__input">
                                        <p>Email<span>*</span></p>
                                        <input id="email" name="email" type="email" required >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="checkout__order">
                                <h4>Your Order</h4>
                                <div class="checkout__order__products">Products <span>Total</span></div>
                                <ul>
                                   <c:forEach items="${sessionScope.paniers}" var="p">
                                    <li>${p.getMedication().getName()}<span>${p.getMedication().getPrice()*p.getQte()} MAD</span></li>
                                    </c:forEach>
                                </ul>
                                <div class="checkout__order__subtotal">Subtotal <span>${sessionScope.total} MAD</span></div>
                                <div class="checkout__order__total">Total <span>${sessionScope.total} MAD</span></div>     
                                <button type="submit" class="site-btn">PLACE ORDER</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
    <!-- Checkout Section End -->
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