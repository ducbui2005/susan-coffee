import AddToCart from "@/components/AddToCart"
import ProductList from "../admin/product/page"
import StaffOrder from "@/components/StaffOrder"

export default async function Pos(){
  const res = await fetch('http://localhost:3000/api/products')
    const productList = await res.json()
    return(
        <main className="container-fluid mt-5 pt-4">
      <div className="row">
        <div className="col-sm-6 col-md-8">
          <div className="d-flex mb-3 justify-content-between">
            <h3 className="mb-0">Chọn món</h3>
            <form className="w-50">
              <input
                type="search"
                className="form-control"
                placeholder="Tìm món theo tên hoặc ID"
              />
            </form>
          </div>
          <div className="row">
            {productList.map((p)=>
           ( <div key={p._id} className="col-sm-4 col-md-3 mb-3">
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

          <div className="position-sticky" style={{top: 75 + "px"}}>
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