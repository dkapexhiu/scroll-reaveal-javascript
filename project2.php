<?php include 'header.php'; ?>

<style>
.content-wrap {margin-top: 10rem;}
header.main-header {background-color: #eeecec;height: 10rem;}
.colFirst {
        width: 40%!important;
        float: left;
        margin-left: 10%!important;
        margin-right: 0%!important;
        
}
.colLatest {
    width: 30%!important;
    margin-left: 50%!important;
    margin-right: 20%!important;
    float: left;
    position: fixed;
}
#content {min-height: 1000px!important;}
@media all and (max-width:414px){
    .container-col {
        width: 100%!important;
        float: left;
        margin-left: 0%!important;
        margin-right: 0%!important;
    }
    
    .container-col img {
        height: 300px;
    }

    .content-wrap {margin-top: 6rem;}

    header.main-header {background-color: #eeecec;height: 6rem;}

    #content {min-height: 1350px!important;}
}
</style>

<div class="content-wrap" id="content-wrap">
<div class="content" id="content" data-pagename="">

<section class="hero home-hero" id="home-hero">

<div class="container-project">
<div class="container-col colFirst">
    <img src="img/img1.jpg">
    <img src="img/img2.jpg">
    <img src="img/img4.jpg">
</div>
<div class="container-col colLatest" id="sticky-wrap">
    <h1>Lorem Ipsum Apartment</h1>
    <br>
    <h3>Description:</h3>
    <br>
    <h4 class="slides-text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum gravida sem vel tincidunt. 
    Praesent eu porttitor nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
    </h4>
    <br>
    <div class="projectDetailsContainer">
        <div class="projectDetailsSingle">
        <h3>Timeline:</h3>
        <br>
        <h4 class="slides-text">2017 - 2019</h4>
        </div>
        <br>
        <div class="projectDetailsSingle">
        <h3>Location:</h3>
        <br>
        <h4 class="slides-text">Lorem, Ipsum</h4>
        </div>
        <br>
        <div class="projectDetailsSingle">
        <h3>Clients:</h3>
        <br>
        <h4 class="slides-text">Lorem Ipsum</h4>
        </div>
    </div>
    <br>
    <h3>Render:</h3>
    <br>
    <img src="img/render1.jpg">
</div>
</div>

</section>

</div><!-- #content -->
</div><!-- #content-wrap -->

<?php include 'footer.php'; ?>