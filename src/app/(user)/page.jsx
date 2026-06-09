import AddToCart from "@/components/AddToCart"
import ProductList from "../admin/product/page"

export default async function Menu() {
    const res = await fetch('http://localhost:3000/api/products')
    const productList = await res.json()
    return (
        <>
            <h1 className="text-center mb-4">Menu Sản Phẩm</h1>
            <div className="row">
                {productList.map((p)=>(
                    <div key={p._id} className="col-md-3 mb-4">
                    <div className="card h-100">
                        <img src={`/img/${p.image}`} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">{p.name}</h5>
                            <p className="card-text">
                                <strong>{p.price.toLocaleString('vi-VN')}đ</strong><br />
                                {p.description}
                                </p>
                                <AddToCart product={p}>Thêm vào giỏ hàng</AddToCart>
                        </div>
                    </div>
                </div>
                ))}
                
  
            </div>
        </>
    )
}