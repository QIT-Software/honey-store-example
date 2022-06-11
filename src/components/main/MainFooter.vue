<template>
    <!-- ##### Footer Area Start ##### -->
    <footer class="footer_area clearfix">
        <div class="container">
            <div class="row align-items-center">
                <!-- Single Widget Area -->
                <div class="col-12 col-lg-4">
                    <div class="single_widget_area">
                        <!-- Logo -->
                        <div class="footer-logo text-center">
                            <a href="../../../public/index.html"><img src="@/assets/images/logo.svg" width="152"
                                                                      height="88" alt=""></a>
                        </div>
                        <!-- Copywrite Text -->
                        <p class="copywrite">
                            Copyright &copy; 2020 All rights reserved. Made with <i
                                class="las la-lg la-heart text-danger" aria-hidden="true"></i> by <a
                                href="https://t.me/elsegroup" target="_blank"><strong>Else group</strong></a>
                        </p>
                    </div>
                </div>
                <!-- Single Widget Area -->
                <div class="col-12 col-lg-8">
                    <div class="single_widget_area">
                        <!-- Footer Menu -->
                        <div class="footer_menu">
                            <nav class="navbar navbar-expand-lg justify-content-end">
                                <button class="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#footerNavContent" aria-controls="footerNavContent"
                                        aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars"></i>
                                </button>
                                <div class="collapse navbar-collapse" id="footerNavContent">
                                    <ul class="navbar-nav ml-auto">
                                        <li class="nav-item" :class="{ 'active': this.$route.name === 'home' }">
                                            <router-link :to="{name: 'home'}" class="nav-link">
                                                Главная
                                            </router-link>
                                        </li>
                                        <li class="nav-item"
                                            :class="{ 'active': this.$route.name === 'catalogs' || this.$route.name === 'catalog-item' }">
                                            <router-link :to="{name: 'catalogs'}" class="nav-link">
                                                Каталог
                                            </router-link>
                                        </li>
                                        <li class="nav-item" :class="{ 'active': this.$route.name === 'delivering' }">
                                            <router-link :to="{name: 'delivering'}" class="nav-link">
                                                Доставка
                                            </router-link>
                                        </li>
                                        <li class="nav-item" :class="{ 'active': this.$route.name === 'about' }">
                                            <router-link :to="{name: 'about'}" class="nav-link">
                                                О нас
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!-- ##### Footer Area End ##### -->
</template>

<script>
    export default {
        name: "MainFooter"
    }
</script>