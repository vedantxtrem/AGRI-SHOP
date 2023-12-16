import React from "react";
import { BrowserRouter as Router, Link, Route, Routes, Navigate } from 'react-router-dom';


import ShopHeader from './shop/ShopHeader';
import ShopNav from './shop/ShopNav';
import Shopbox from './shop/Shopbox';
import ProductCarousel from './shop/ProductCarousel';
import Category from './shop/Category';
import PromoSection from './shop/PromoSection';
import ProductCard from './shop/ProductCard';
import ShopFooter from './shop/ShopFooter';
import ShopAbout from './shop/ShopAbout';
function Shop() {
    return (
        <>
            <ShopHeader />
            <ShopNav />
            <Routes>
                <Route path='/' element={<ProductCarousel />} />
            </Routes>
            <Routes>
                <Route path='/' element={<Shopbox />} />
            </Routes>
            <Routes>
                <Route path='/' element={<Category />} />
            </Routes>
            <Routes>
                <Route path='/' element={<PromoSection />} />
            </Routes>
            <Routes>
                <Route path='/' element={<ProductCard />} />
            </Routes>

            <ShopAbout />
            <ShopFooter />
        </>
    );
}
export default Shop;