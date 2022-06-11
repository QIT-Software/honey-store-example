<template>
    <div ref="header">
        <!-- Mobile Nav (max width 767px)-->
        <div class="mobile-nav">
            <!-- Navbar Brand -->
            <div class="amado-navbar-brand">
                <router-link :to = "{name: 'home'}">
                    <img src="@/assets/images/core-img/logo-black.svg" width="100" alt="">
                </router-link>
            </div>
            <!-- Navbar Toggler -->
            <div class="amado-navbar-toggler" @click="navToggle">
                <i class="las la-2x la-bars"></i>
            </div>
        </div>

        <!-- Header Area Start -->
        <header class="header-area clearfix" :class="{ 'bp-xs-on': showNav }">
            <!-- Close Icon -->
            <div class="nav-close" @click="navToggle">
                <i class="las la-lg la-times"></i>
            </div>
            <!-- Logo -->
            <div class="logo">
                <a href="../../../public/index.html"><img src="@/assets/images/core-img/logo-black.svg" width="152" height="88" alt=""></a>
            </div>
            <!-- Amado Nav -->
            <nav class="amado-nav">
                <ul>
                    <li :class="{ 'active': this.$route.name === 'home'}">
                        <router-link :to = "{name: 'home'}">
                            Главная
                        </router-link>
                    </li>
                    <li :class="{ 'active': this.$route.name === 'catalogs' || this.$route.name === 'catalog-item' }">
                        <router-link :to = "{name: 'catalogs'}">
                            Каталог
                        </router-link>
                    </li>
                    <li :class="{ 'active': this.$route.name === 'delivering' }">
                        <router-link :to = "{name: 'delivering'}">
                            Доставка
                        </router-link>
                    </li>
                    <li :class="{ 'active': this.$route.name === 'about' }">
                        <router-link :to = "{name: 'about'}">
                            О нас
                        </router-link>
                    </li>
                </ul>
            </nav>
            <!-- Cart Menu -->
            <div class="cart-fav-search mt-50 mb-100">
                <router-link
                        :to = "{ name: 'cart' }"
                        class="cart-nav"
                        :class="{ 'active': this.$route.name === 'cart' }">
                    <i class="las la-lg la-shopping-cart"></i> Корзина <span>({{ cartTotal }})</span>
                </router-link>
                <a href="javascript:;" class="search-nav" @click="searchBarToggle">
                    <i class="las la-lg la-search"></i> Поиск
                </a>
            </div>
            <!-- Social Button -->
            <div class="social-info d-flex justify-content-left">
                <a href="https://www.instagram.com/tajhoney.tj/"><i class=" lab la-instagram"></i></a>
                <a href="https://web.facebook.com/TajHoney.tj" class="ml-3"><i class=" lab la-facebook"></i></a>
            </div>
        </header>
        <!-- Header Area End -->
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: "MainHeader",
    computed: {
        ...mapGetters({
            cartTotal: 'cart/cartTotal'
        })
    },

    data() {
        return {
            showNav: false,
        }
    },

    methods: {
        navToggle() {
            if (this.showNav === true) this.showNav = false
            else this.showNav = true
        },
        searchBarToggle() {
            if (this.$parent.$data.isSearchBarActive === true) this.$parent.$data.isSearchBarActive = false
            else this.$parent.$data.isSearchBarActive = true
        }
    }
}
</script>
