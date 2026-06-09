"use client"

import { useContext, useEffect, useState } from "react"
import { CartContext } from "./CartContext"
import { useRouter } from "next/navigation"

export default function StaffOrder() {
    const { cart, setCart } = useContext(CartContext)
    const router = useRouter()
    const total = cart.reduce((sum, p) => sum + p.price * p.quantity, 0)
    const handleRemoveAll = () => {
        setCart([])
    }
    const handleOrder = async () => {

        const order = {
            name: 'Tên Khách', // Lấy thông tin đăng nhập
            order_items: cart, // danh sách sản phẩm trong giỏ
            total,
        }

        try {
            const res = await fetch('http://localhost:3000/api/orders', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(order)
            })
            const result = await res.json()
            if (res.ok && result.message) {
                handleRemoveAll();
                router.push("/success")
            }
            else {
                alert(result.error || "Có lỗi xảy ra khi thêm đơn hàng")
            }
        } catch (err) {
            console.error(err)
            alert('Không thể kết nối tới server!')
        }
    }
    return (

        <div>
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th>Món</th>
                        <th>SL</th>
                        <th>Giá</th>
                        <th>Tổng</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((p) => (
                        <tr key={p._id}>
                            <td>{p.name}</td>
                            <td>{p.quantity}</td>
                            <td>{p.price.toLocaleString('vi-VN')}đ</td>
                            <td>{(p.quantity * p.price).toLocaleString('vi-VN')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <hr />
            <h5 className="text-end">Tổng cộng: 105.000đ</h5>
            <div className="d-flex mt-3 justify-content-between">
                <button className="btn btn-outline-danger" onClick={handleRemoveAll}>Hủy hóa đơn</button>
                <button className="btn btn-success w-50" onClick={handleOrder}>Thanh toán</button>
            </div>

        </div>
    )
}