"use client";

import { CartProvider } from "@/components/CartContext";
import Script from "next/script";

export default function Layout({ children }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="/">Susan Coffee / POS</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/staff">Tạo đơn mới</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/staff/orders">Quản lý đơn</a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/profile">Xin chào, Cường</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Đăng xuất</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <CartProvider>{children}</CartProvider>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />
    </>
  );
}