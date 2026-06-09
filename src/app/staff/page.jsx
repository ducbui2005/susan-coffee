"use client"
import AddToCart from "@/components/AddToCart"
import StaffOrder from "@/components/StaffOrder"
import { useEffect, useState } from "react"

export default function Pos() {
  const [productList, setProductList] = useState([])
  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch('/api/products')
      const data = await res.json()
      setProductList(data)
    }
    fetchProduct()
  }, [])
  const [keyword, setKeyWord] = useState("")
  const q = keyword.trim().toLowerCase()
  const filteredProductList = productList.filter((p) => {
    if (!q) return true
    const name = (p.name || "").toLowerCase()
    const id = (p._id || "").toLowerCase()
    return name.includes(q) || id.includes(q)
  })
  return (
    <main className="container-fluid mt-5 pt-4">
      <div className="row">
        <div className="col-sm-6 col-md-8">
          <div className="d-flex mb-3 justify-content-between">
            <h3 className="mb-0">Chọn món</h3>
            <form className="w-50" onSubmit={(e) => e.preventDefault()}>
              <input
                type="search"
                className="form-control"
                placeholder="Tìm món theo tên hoặc ID"
                value={keyword}
                onChange={(e) => setKeyWord(e.target.value)}
              />
            </form>
          </div>
          <div className="row">
            {filteredProductList.map((p) =>
            (<div key={p._id} className="col-sm-4 col-md-3 mb-3">
              <div className="card h-100">
                <img src={`/img/${p.image}`} className="card-img-top" />
                <div className="card-body text-center">
                  <h6 className="card-title">{p.name}</h6>
                  <p>{p.price.toLocaleString('vi-VN')}</p>
                  <AddToCart product={p}>Thêm</AddToCart>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>

        <div className="col-sm-6 col-md-4 border-start">
          <div className="d-flex mb-3 justify-content-between">
            <h3 className="mb-0">Khách hàng</h3>
            <div className="btn-group w-50">
              <div className="btn btn-dark w-50">Khách lẻ</div>
              <div className="btn btn-outline-dark w-50">Thành viên</div>
            </div>
          </div>

          <div className="mb-3">
            <form>
              <input
                type="search"
                className="form-control"
                placeholder="Nhập tên hoặc số điện thoại"
              />
            </form>
          </div>

          <div className="position-sticky" style={{ top: 75 + "px" }}>
            <h3 className="mb-3">Hóa đơn</h3>
            <div className="card">
              <div className="card-body">
                <StaffOrder></StaffOrder>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}